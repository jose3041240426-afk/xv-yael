import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

export default function Gifts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="glass-gold p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Subtle gold glow behind icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold/10 blur-3xl rounded-full"></div>
          
          <Mail size={48} className="text-gold mx-auto mb-8 relative z-10" strokeWidth={1} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 relative z-10">Mesa de Regalos</h2>
          <p className="font-sans font-light text-gray-200 text-lg md:text-xl leading-relaxed relative z-10">
            "Su presencia será nuestro mejor regalo. Si desea obsequiarnos algo, agradeceremos que sea en un sobre."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
