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
