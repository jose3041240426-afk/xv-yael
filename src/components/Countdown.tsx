import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Countdown() {
  const targetDate = new Date('2026-07-10T21:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    const tick = () => {
      const distance = targetDate - Date.now();
      if (distance < 0) return;
      setTimeLeft({
        days: Math.floor(distance / 86400000),
        hours: Math.floor((distance % 86400000) / 3600000),
        minutes: Math.floor((distance % 3600000) / 60000),
        seconds: Math.floor((distance % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Calendar parameters for July 2026 (Wednesday July 1st -> Offset 2 empty cells)
  const calendarDays = [
    null, null, // Monday, Tuesday empty
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31
  ];

  return (
    <section ref={ref} className="py-24 w-full flex flex-col items-center justify-center bg-black relative select-none">
      
      {/* ── PART 1: EL GRAN DÍA (CALENDAR) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="w-[85%] max-w-sm flex flex-col items-center text-center mb-16"
      >
        <h2 className="font-script text-4xl md:text-5xl text-gradient-gold mb-1 font-medium">
          El gran día
        </h2>
        <p className="font-cinzel text-[11px] md:text-xs tracking-[0.35em] text-white/80 uppercase mb-8">
          Julio 2026
        </p>

        {/* Calendar Grid */}
        <div className="w-full max-w-[280px] flex flex-col items-center">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-y-2 w-full text-center border-b border-white/10 pb-2 mb-3 font-cinzel text-[10px] md:text-xs text-gold/75 tracking-wider font-light">
            <span>L</span>
            <span>M</span>
            <span>M</span>
            <span>J</span>
            <span>V</span>
            <span>S</span>
            <span>D</span>
          </div>

          {/* Month Days */}
          <div className="grid grid-cols-7 gap-y-3 gap-x-1 w-full text-center font-sans text-xs md:text-sm text-white/70 font-light items-center">
            {calendarDays.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} className="h-6 w-full" />;
              }

              // Special styling for 10th of July
              if (day === 10) {
                return (
                  <div key="day-10" className="relative h-7 w-full flex items-center justify-center">
                    {/* Golden circle badge behind the day number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] animate-pulse" />
                    </div>
                    {/* Day number on top */}
                    <span className="relative z-10 font-bold text-black text-[10px] md:text-xs select-none">
                      10
                    </span>
                  </div>
                );
              }

              return (
                <div key={`day-${day}`} className="h-7 w-full flex items-center justify-center text-white/80">
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ── PART 2: COUNTDOWN ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="w-[85%] max-w-sm flex flex-col items-center text-center"
      >
        <h2 className="font-script text-3xl md:text-4xl text-gradient-gold mb-8 font-medium">
          Faltan
        </h2>

        {/* Counter digits */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="font-cormorant font-light text-4xl md:text-6xl text-white tracking-wide">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[7px] md:text-[9px] text-white/40 tracking-[0.2em] uppercase mt-2">
              Days
            </span>
          </div>

          <span className="text-gold/60 text-2xl md:text-4xl font-light -mt-5 px-1">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="font-cormorant font-light text-4xl md:text-6xl text-white tracking-wide">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[7px] md:text-[9px] text-white/40 tracking-[0.2em] uppercase mt-2">
              Hours
            </span>
          </div>

          <span className="text-gold/60 text-2xl md:text-4xl font-light -mt-5 px-1">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="font-cormorant font-light text-4xl md:text-6xl text-white tracking-wide">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[7px] md:text-[9px] text-white/40 tracking-[0.2em] uppercase mt-2">
              Minutes
            </span>
          </div>

          <span className="text-gold/60 text-2xl md:text-4xl font-light -mt-5 px-1">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="font-cormorant font-light text-4xl md:text-6xl text-gradient-gold tracking-wide">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[7px] md:text-[9px] text-white/40 tracking-[0.2em] uppercase mt-2">
              Seconds
            </span>
          </div>

        </div>
      </motion.div>

    </section>
  );
}


