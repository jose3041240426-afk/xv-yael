import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Note: Placeholder audio, to be replaced by user
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/10/25/audio_73bc1ba61b.mp3?filename=elegant-piano-123495.mp3";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 glass-gold p-3 rounded-full flex items-center gap-3 shadow-2xl"
    >
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy hover:scale-110 transition-transform"
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
      </button>

      {isPlaying && (
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          className="flex items-center gap-2 pr-2 overflow-hidden"
        >
          {/* Animated equalizer bars */}
          <div className="flex items-end gap-1 h-4 mr-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gold rounded-t-sm"
                animate={{ height: ['4px', '16px', '4px'] }}
                transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
              />
            ))}
          </div>

          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-gold hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
