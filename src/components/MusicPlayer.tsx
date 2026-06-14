import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, RotateCcw, SkipBack, SkipForward, Play, Pause } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const VIDEO_ID = 'OMOGaugKpzs';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const playerRef = useRef<any>(null);
  const timeIntervalRef = useRef<number | null>(null);

  // ── Load YouTube IFrame API (no autoplay) ──
  useEffect(() => {
    const createPlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,      // ← NO autoplay
          mute: 0,          // ← NOT muted by default
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: (event: any) => {
            setPlayerReady(true);
            setDuration(event.target.getDuration() || 0);
          },
          onStateChange: (event: any) => {
            if (event.data === 1) {
              setIsPlaying(true);
              setDuration(event.target.getDuration() || 0);
            } else if (event.data === 2) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.loaded) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const first = document.getElementsByTagName('script')[0];
        first.parentNode?.insertBefore(tag, first);
      }
    }

    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // ── Time tracker ──
  useEffect(() => {
    if (isPlaying) {
      timeIntervalRef.current = window.setInterval(() => {
        if (playerRef.current && playerReady) {
          setCurrentTime(playerRef.current.getCurrentTime() || 0);
        }
      }, 500);
    } else {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
        timeIntervalRef.current = null;
      }
    }
    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
    };
  }, [isPlaying, playerReady]);

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !playerReady || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * duration;
    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.1 }}
      className="relative z-10 flex flex-col items-center gap-3 w-full"
    >
      {/* Hidden YT iframe */}
      <div id="youtube-player" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" />

      {/* Hint text */}
      <p className="font-cinzel text-[10px] tracking-[0.25em] text-white/50 uppercase">
        Presiona ▶ para escuchar la música
      </p>

      {/* Progress bar */}
      <div
        onClick={handleProgressBarClick}
        className="w-[75%] max-w-[260px] h-[2px] bg-white/15 relative rounded-full cursor-pointer group"
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-dark to-gold rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-gold shadow-[0_0_6px_rgba(212,175,55,0.5)] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `calc(${progress}% - 5px)` }}
        />
      </div>

      {/* Time */}
      <div className="flex w-[75%] max-w-[260px] justify-between text-[9px] text-white/30 font-poppins tabular-nums -mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-1">
        {/* Shuffle */}
        <button
          onClick={() => setIsShuffle(!isShuffle)}
          className={`p-1.5 cursor-pointer transition-colors ${isShuffle ? 'text-gold' : 'text-white/30 hover:text-white/70'}`}
        >
          <Shuffle size={14} className="stroke-[1.5]" />
        </button>

        {/* Skip back */}
        <button
          onClick={() => {
            playerRef.current?.seekTo(0, true);
            setCurrentTime(0);
          }}
          className="p-1.5 cursor-pointer text-white/40 hover:text-white/80 transition-colors"
        >
          <SkipBack size={16} className="stroke-[1.5]" />
        </button>

        {/* ── Circle Play/Pause button (masculine, clean) ── */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-gold/50 hover:border-gold flex items-center justify-center bg-white/5 hover:bg-white/10 text-gold cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_0_16px_rgba(212,175,55,0.15)]"
        >
          {isPlaying
            ? <Pause size={20} className="stroke-[1.5]" />
            : <Play size={20} className="stroke-[1.5] ml-0.5" />
          }
        </button>

        {/* Skip forward */}
        <button
          onClick={() => {
            playerRef.current?.seekTo(0, true);
            setCurrentTime(0);
          }}
          className="p-1.5 cursor-pointer text-white/40 hover:text-white/80 transition-colors"
        >
          <SkipForward size={16} className="stroke-[1.5]" />
        </button>

        {/* Repeat */}
        <button
          onClick={() => setIsRepeat(!isRepeat)}
          className={`p-1.5 cursor-pointer transition-colors ${isRepeat ? 'text-gold' : 'text-white/30 hover:text-white/70'}`}
        >
          <RotateCcw size={14} className="stroke-[1.5]" />
        </button>
      </div>
    </motion.div>
  );
}
