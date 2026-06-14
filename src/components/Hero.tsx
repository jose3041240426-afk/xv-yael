import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/hero_bg.png';
import MusicPlayer from './MusicPlayer';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-between py-14 px-6 overflow-hidden select-none">

      {/* ── Full-screen background photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Yael Alejandro"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient: dark top & bottom, almost transparent center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />
      </div>

      {/* ── Name at the TOP ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-script text-6xl md:text-8xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] px-2 leading-tight font-medium">
          Yael Alejandro
        </h1>
      </motion.div>

      {/* ── Spacer ── */}
      <div className="flex-grow" />

      {/* ── Bottom block: MIS XV + Player + Scroll ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full gap-5">

        {/* MIS XV label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center gap-2 w-full"
        >
          <div className="flex items-center gap-4 justify-center w-full max-w-[260px] font-cinzel text-xs md:text-sm tracking-[0.35em] text-white uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            <span className="h-px flex-grow bg-white/50" />
            <span>Mis XV</span>
            <span className="h-px flex-grow bg-white/50" />
          </div>
          <p className="font-cormorant italic text-xl md:text-2xl text-gold tracking-widest drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            10 de Julio 2026
          </p>
        </motion.div>

        {/* ── Inline Music Player ── */}
        <MusicPlayer />

        {/* ── Scroll hint ── */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </div>

    </section>
  );
}
