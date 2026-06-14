# Código Frontend Completo — Invitación XV Años Yael Alejandro

---

## 📄 index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>invitacion</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 📄 src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 📄 src/App.tsx

```tsx
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Countdown from './components/Countdown';
import Parents from './components/Parents';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Hero />
      <Welcome />
      <Countdown />
      <Parents />
      <EventDetails />
      <DressCode />
      <Gifts />
      <Gallery />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
```

---

## 📄 src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600&display=swap');

@import "tailwindcss";

@theme {
  --color-navy: #081A3A;
  --color-gold: #D4AF37;
  --color-gold-light: #F3E5AB;
  --color-black: #0A0A0A;
  --color-white: #FFFFFF;
  --color-dark: #040c1c;

  --font-serif: 'Cinzel', serif;
  --font-sans: 'Montserrat', sans-serif;
}

/* ── Base ── */
html {
  scroll-behavior: smooth;
}

body {
  background-color: #0A0A0A;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* ── Custom Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0A0A0A; }
::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 9999px; }

/* ── Reusable Classes ── */
.glass-card {
  background: rgba(8, 26, 58, 0.35);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 1.5rem;
}

.glass-card-hover {
  transition: border-color 0.4s ease, transform 0.4s ease;
}
.glass-card-hover:hover {
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-4px);
}

.text-gradient-gold {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%);
}

.gold-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  margin: 0 auto;
}

.btn-gold {
  display: inline-block;
  padding: 0.875rem 2.5rem;
  border: 1px solid #D4AF37;
  color: #D4AF37;
  border-radius: 9999px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.4s ease, color 0.4s ease;
}
.btn-gold:hover {
  background-color: #D4AF37;
  color: #081A3A;
}
```

---

## 📄 src/components/Hero.tsx

```tsx
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/hero_bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
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
```

---

## 📄 src/components/Welcome.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Welcome() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="py-28 md:py-36 px-6 bg-black" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="gold-line mb-12" />

        <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-relaxed text-gray-200 font-normal">
          "Hay momentos que solo ocurren una vez en la vida y sería un honor compartirlos contigo."
        </p>

        <div className="gold-line mt-12" />
      </motion.div>
    </section>
  );
}
```

---

## 📄 src/components/Countdown.tsx

```tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Countdown() {
  const targetDate = new Date('2026-07-10T21:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

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

  const blocks = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-4xl text-gold mb-14"
        >
          Falta muy poco
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <span className="block font-serif text-4xl md:text-5xl text-white mb-2">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="font-sans text-[10px] md:text-xs text-gold tracking-[0.2em] uppercase font-medium">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/Parents.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Parents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-black" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans font-light text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-16"
        >
          Con la bendición de Dios y el amor de nuestros padres
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gold font-serif text-lg mb-5 tracking-wide">Mis Padres</p>
            <p className="text-white font-sans text-lg font-light mb-1">Arizett Inés López C.</p>
            <p className="text-white font-sans text-lg font-light">Jesús Iván Medina C.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gold font-serif text-lg mb-5 tracking-wide">Mis Padrinos</p>
            <p className="text-white font-sans text-lg font-light mb-1">Alejandra Maythe López C.</p>
            <p className="text-white font-sans text-lg font-light">Misael González Díaz</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/EventDetails.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, MapPin } from 'lucide-react';

export default function EventDetails() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-dark" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-4xl text-gold mb-14"
        >
          Dónde y Cuándo
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Date & Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card glass-card-hover flex-1 p-10 flex flex-col items-center"
          >
            <CalendarDays size={40} className="text-gold mb-5" strokeWidth={1} />
            <h3 className="font-serif text-xl text-white mb-3">Fecha y Hora</h3>
            <p className="font-sans font-light text-gray-300 text-sm">Viernes, 10 de Julio 2026</p>
            <p className="font-sans font-light text-gray-300 text-sm">9:00 PM</p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card glass-card-hover flex-1 p-10 flex flex-col items-center"
          >
            <MapPin size={40} className="text-gold mb-5" strokeWidth={1} />
            <h3 className="font-serif text-xl text-white mb-3">Recepción</h3>
            <p className="font-sans font-light text-gray-300 text-sm mb-6 text-center">
              Salón Gran Quinta
              <br />
              Dirección Pendiente
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Ver Ubicación
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/DressCode.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="py-24 md:py-32 bg-black" ref={ref}>
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center border-t border-t-gold/30"
        >
          <Shirt size={36} className="text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Código de Vestimenta</h2>
          <p className="font-sans text-lg text-gold font-light tracking-[0.2em] uppercase">Formal</p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/Gifts.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

export default function Gifts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="py-24 md:py-32 bg-dark" ref={ref}>
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center"
        >
          <Mail size={36} className="text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-5">Mesa de Regalos</h2>
          <p className="font-sans font-light text-gray-300 text-base md:text-lg leading-relaxed">
            "Su presencia será nuestro mejor regalo. Si desea obsequiarnos algo, agradeceremos que sea en un sobre."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/Gallery.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from '../assets/gallery_1.png';
import img2 from '../assets/gallery_2.png';

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Duplicating placeholders to create a grid
  const photos = [
    { src: img1, className: "md:col-span-2 md:row-span-2 h-[400px]" },
    { src: img2, className: "h-[190px]" },
    { src: img1, className: "h-[190px]" },
    { src: img2, className: "md:col-span-2 h-[250px]" },
    { src: img1, className: "h-[250px]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-[#040c1c]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl text-gold mb-16 text-center"
        >
          Galería
        </motion.h2>

        <PhotoProvider
          speed={() => 300}
          maskOpacity={0.9}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
          >
            {photos.map((photo, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${photo.className}`}
              >
                <PhotoView src={photo.src}>
                  <img 
                    src={photo.src} 
                    alt={`Gallery ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </PhotoView>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/RSVP.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const phoneNumber = "526183187248";
  // The user will define the specific format later, providing a generic elegant one for now
  const message = "¡Hola! Confirmo mi asistencia a los XV años de Yael. Mi nombre es: ";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="glass p-12 rounded-3xl"
        >
          <CheckCircle size={48} className="text-[#25D366] mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Confirmación de Asistencia</h2>
          <p className="font-sans font-light text-gray-300 mb-10">
            Por favor, confirma tu asistencia para poder reservar tu lugar especial.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full font-sans font-medium text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Confirmar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 📄 src/components/Footer.tsx

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="h-[70vh] bg-[#040c1c] flex flex-col items-center justify-center relative overflow-hidden" ref={ref}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy/30 via-[#040c1c] to-[#040c1c]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h2 className="font-serif text-5xl md:text-7xl text-gradient-gold mb-8">
          ¡Te esperamos!
        </h2>
        <p className="font-sans font-light text-xl text-gray-300 tracking-widest uppercase">
          Yael Alejandro
        </p>
      </motion.div>

      {/* Confetti particles */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gold"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 15 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: -20,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                y: ['0vh', '100vh'],
                rotate: [0, 360],
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
```

---

## 📄 src/components/MusicPlayer.tsx

```tsx
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
```

---

## 📄 tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#081A3A',
        gold: '#D4AF37',
        black: '#0A0A0A',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
```

---

## 📄 postcss.config.js

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

---

## 📄 vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

---

## 📄 package.json

```json
{
  "name": "invitacion",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.3.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.40.0",
    "lucide-react": "^1.18.0",
    "react": "^19.2.6",
    "react-countup": "^6.5.3",
    "react-dom": "^19.2.6",
    "react-intersection-observer": "^10.0.3",
    "react-photo-view": "^1.2.7",
    "react-scroll": "^1.9.3",
    "tailwind-merge": "^3.6.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}
```

---

## 📄 tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## 📄 tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## 📄 tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

---

## 📄 eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
```

---

## 📁 Estructura de Assets

Los siguientes assets de imagen son referenciados desde `src/` pero no se incluye su contenido binario:

| Archivo | Ruta |
|---|---|
| `hero_bg.png` | `src/assets/hero_bg.png` |
| `gallery_1.png` | `src/assets/gallery_1.png` |
| `gallery_2.png` | `src/assets/gallery_2.png` |
| `favicon.svg` | `public/favicon.svg` (referenciado en `index.html`) |

---

> 📝 **Nota**: Este archivo es solo para documentación. No modifica ningún archivo del proyecto real.
