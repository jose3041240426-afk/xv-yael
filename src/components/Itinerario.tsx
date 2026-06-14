import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Church, Crown, CalendarCheck, Utensils, Music, Hourglass } from 'lucide-react';

const GoldWaxSeal = ({ initials }: { initials: string }) => (
  <div className="relative w-16 h-16 flex items-center justify-center -mt-8 select-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_10px_rgba(166,124,30,0.45)]">
      <defs>
        <radialGradient id="gold-wax-itinerario" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3E5AB" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A640F" />
        </radialGradient>
      </defs>
      <path
        d="M50 4 C 65 3, 80 12, 88 28 C 96 44, 98 62, 88 78 C 78 94, 60 98, 44 96 C 28 94, 12 84, 6 68 C 0 52, 4 34, 14 18 C 24 2, 35 5, 50 4"
        fill="url(#gold-wax-itinerario)"
      />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#6F4E07" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#F3E5AB" strokeWidth="1.2" opacity="0.4" />
      <circle cx="50" cy="50" r="30" fill="#B08D2C" opacity="0.25" />
    </svg>
    <span className="absolute font-script text-white text-xl font-bold tracking-tighter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] leading-none select-none">
      {initials}
    </span>
  </div>
);

const ToastGlassesIcon = (props: any) => (
  <svg viewBox="0 0 100 100" className={`w-6 h-6 stroke-gold stroke-[2.5] fill-none ${props.className || ''}`}>
    <path d="M38 25 L48 45 L48 75 M40 75 L56 75 M35 25 L53 25 L48 45" />
    <path d="M62 25 L52 45 L52 75 M60 75 L44 75 M65 25 L47 25 L52 45" />
    <path d="M50 12 L50 18 M47 15 L53 15" strokeWidth="2" />
  </svg>
);

interface TimelineItem {
  time: string;
  title: string;
  icon: React.ComponentType<any>;
  isLeftIcon: boolean; // Alternating layout flag
}

const timelineEvents: TimelineItem[] = [
  {
    time: '7:00 P.M.',
    title: 'CEREMONIA RELIGIOSA',
    icon: Church,
    isLeftIcon: true,
  },
  {
    time: '8:30 P.M.',
    title: 'RECEPCIÓN',
    icon: ToastGlassesIcon,
    isLeftIcon: false,
  },
  {
    time: '9:00 P.M.',
    title: 'ENTRADA DE YAEL',
    icon: Crown,
    isLeftIcon: true,
  },
  {
    time: '9:30 P.M.',
    title: 'INICIO DE PROTOCOLO',
    icon: CalendarCheck,
    isLeftIcon: false,
  },
  {
    time: '10:00 P.M.',
    title: 'CENA DE GALA',
    icon: Utensils,
    isLeftIcon: true,
  },
  {
    time: '11:00 P.M.',
    title: 'BAILE',
    icon: Music,
    isLeftIcon: false,
  },
  {
    time: '2:00 A.M.',
    title: 'FIN DE LA FIESTA',
    icon: Hourglass,
    isLeftIcon: true,
  },
];

export default function Itinerario() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-black text-white w-full flex flex-col items-center justify-center select-none px-6">
      
      {/* Outer Card box matching Canva design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-full max-w-sm border border-gold/15 bg-[#030a16]/40 backdrop-blur-md flex flex-col items-center pt-12 pb-16 px-4 shadow-[0_0_25px_rgba(212,175,55,0.05)]"
      >
        {/* Wax Seal centered on the top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <GoldWaxSeal initials="YA" />
        </div>

        {/* Title */}
        <h2 className="font-script text-4xl text-gradient-gold mb-10 mt-4 font-medium">
          Itinerario
        </h2>

        {/* Timeline body */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Vertical central line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold/40 via-gold/10 to-transparent -translate-x-1/2 z-0" />

          {/* Events list */}
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <div key={idx} className="relative z-10 w-full grid grid-cols-9 items-center my-5 min-h-[50px]">
                
                {/* Left side */}
                <div className="col-span-4 flex justify-end px-2 text-right">
                  {item.isLeftIcon ? (
                    <div className="text-gold flex items-center justify-center w-8 h-8 rounded-full border border-gold/20 bg-black/80">
                      <Icon size={16} className="stroke-[1.3]" />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center">
                      <span className="font-cinzel text-[9px] text-gold tracking-wider font-light">{item.time}</span>
                      <span className="font-sans font-light text-[9px] text-white/80 tracking-wide">{item.title}</span>
                    </div>
                  )}
                </div>

                {/* Central connecting circle */}
                <div className="col-span-1 flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold border-2 border-black z-20 shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
                </div>

                {/* Right side */}
                <div className="col-span-4 flex justify-start px-2 text-left">
                  {!item.isLeftIcon ? (
                    <div className="text-gold flex items-center justify-center w-8 h-8 rounded-full border border-gold/20 bg-black/80">
                      <Icon size={16} className="stroke-[1.3]" />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center">
                      <span className="font-cinzel text-[9px] text-gold tracking-wider font-light">{item.time}</span>
                      <span className="font-sans font-light text-[9px] text-white/80 tracking-wide">{item.title}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

        {/* Decorative corner borders */}
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/20" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/20" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/20" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/20" />

      </motion.div>
    </section>
  );
}

