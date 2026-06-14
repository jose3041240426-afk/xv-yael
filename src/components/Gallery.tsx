import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from '../assets/gallery_1.png';
import img2 from '../assets/gallery_2.png';

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Duplicating placeholders to create a magazine collage layout
  const photos = [
    { src: img1, className: "md:col-span-2 md:row-span-2 h-[380px]" },
    { src: img2, className: "h-[180px]" },
    { src: img1, className: "h-[180px]" },
    { src: img2, className: "md:col-span-2 h-[240px]" },
    { src: img1, className: "h-[240px]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } }
  };

  return (
    <section className="py-32 bg-black select-none" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-cinzel text-[10px] md:text-xs tracking-[0.3em] text-gold text-center uppercase mb-4"
        >
          Recuerdos
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-cinzel text-2xl md:text-4xl text-gradient-gold mb-16 text-center uppercase tracking-widest"
        >
          Galería de Fotos
        </motion.h2>

        <PhotoProvider
          speed={() => 400}
          maskOpacity={0.95}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto"
          >
            {photos.map((photo, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`relative overflow-hidden rounded-none border border-white/5 hover:border-gold/30 transition-colors duration-500 group cursor-pointer ${photo.className}`}
              >
                <PhotoView src={photo.src}>
                  <img 
                    src={photo.src} 
                    alt={`Galería ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </PhotoView>
                {/* Clean dark overlay that fades on hover */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>
      </div>
    </section>
  );
}

