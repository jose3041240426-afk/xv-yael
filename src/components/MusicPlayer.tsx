import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const VIDEO_ID = 'OMOGaugKpzs';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const hasInteractedRef = useRef(false);
  const playerRef = useRef<any>(null);
  const playerReadyRef = useRef(false);

  useEffect(() => {
    const createPlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: () => {
            playerReadyRef.current = true;
          },
        },
      });
    };

    if (window.YT && window.YT.loaded) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
      playerReadyRef.current = false;
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && playerReadyRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (playerRef.current && playerReadyRef.current) {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [isMuted]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 glass-gold p-3 rounded-full flex items-center gap-3 shadow-2xl"
    >
      <div id="youtube-player" />
      
      <button 
        onClick={() => {
          hasInteractedRef.current = true;
          if (isPlaying && isMuted) {
            setIsMuted(false);
          } else {
            setIsPlaying(!isPlaying);
          }
        }}
        className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy hover:scale-110 transition-transform"
      >
        {isPlaying && isMuted ? <VolumeX size={20} /> : isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
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
