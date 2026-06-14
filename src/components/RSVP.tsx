import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ConfirmationIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold stroke-[2] fill-none mb-3">
    {/* First person */}
    <circle cx="38" cy="38" r="11" />
    <path d="M15 72 C 15 56, 28 54, 38 54 C 43 54, 49 55, 53 58" />
    {/* Second person */}
    <circle cx="64" cy="38" r="9" />
    <path d="M48 72 C 48 60, 58 58, 64 58 C 70 58, 80 60, 80 72" />
    {/* Checkmark badge */}
    <circle cx="48" cy="72" r="9" className="fill-black stroke-gold stroke-[2]" />
    <path d="M44 72 L47 75 L52 69" stroke="#D4AF37" strokeWidth="2.5" />
  </svg>
);

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });
  
  const phoneNumber = "526183187248";
  const message = "¡Hola! Confirmo mi asistencia a los XV años de Yael. Mi nombre es: ";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section ref={ref} className="py-24 bg-black text-white w-full flex flex-col items-center justify-center select-none px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-md mx-auto text-center flex flex-col items-center"
      >
        {/* Title */}
        <h2 className="font-script text-4xl text-gradient-gold mb-4 font-medium">
          Confirma tu Asistencia
        </h2>

        {/* Uppercase descriptive request */}
        <p className="font-cinzel text-[10px] md:text-xs tracking-[0.2em] text-white/80 leading-relaxed uppercase mb-8 max-w-[290px]">
          Quiero compartir este momento contigo, por favor ayúdanos confirmando tu asistencia
        </p>

        {/* Custom SVG Check Confirmation Icon */}
        <ConfirmationIcon />

        {/* Main button - oval luxury border */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-3 border border-gold/30 hover:border-gold text-gold hover:text-white font-cinzel text-xs tracking-[0.25em] uppercase rounded-full bg-[#030a16]/30 hover:bg-[#030a16]/60 cursor-pointer mt-4 shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all duration-300"
        >
          Confirmar
        </a>

        {/* Concluding thank you */}
        <p className="font-cinzel text-[10px] md:text-xs tracking-[0.3em] text-white/45 uppercase mt-12">
          ¡Gracias por acompañarme!
        </p>

      </motion.div>
    </section>
  );
}


