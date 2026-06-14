import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-black/40 to-black"></div>
      </div>

      {/* Floating Particles (Simulated with CSS/Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gold rounded-full opacity-30"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold tracking-[0.2em] uppercase text-sm md:text-base mb-6 font-sans font-light"
        >
          Mis XV Años
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-gradient-gold drop-shadow-2xl leading-tight"
        >
          YAEL <br/> ALEJANDRO <br/> MEDINA LOPEZ
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center glass-gold px-10 py-6 rounded-3xl"
        >
          <p className="font-serif text-2xl text-gold mb-2">10 Julio 2026</p>
          <p className="font-sans font-light text-lg text-gray-300">9:00 PM</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 text-gold flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-xs uppercase tracking-widest mb-2 font-light">Descubre más</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
