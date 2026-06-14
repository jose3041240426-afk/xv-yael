import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/hero_bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 font-sans font-light"
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-gradient-gold leading-tight mb-10"
        >
          YAEL
          <br />
          ALEJANDRO
          <br />
          MEDINA LOPEZ
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex flex-col items-center gap-1"
        >
          <p className="font-serif text-xl md:text-2xl text-gold">10 de Julio, 2026</p>
          <p className="font-sans font-light text-sm text-gray-400 tracking-widest">9:00 PM</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 z-10 text-gold/60 flex flex-col items-center"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] mb-3 font-light">Descubre más</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
