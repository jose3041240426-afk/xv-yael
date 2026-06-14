import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-[#040c1c]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="glass border-t-2 border-t-gold/50 p-12 rounded-3xl text-center"
        >
          <div className="w-20 h-20 mx-auto bg-navy rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Shirt size={36} className="text-gold" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Código de Vestimenta</h2>
          <p className="font-sans text-xl text-gold font-light tracking-widest uppercase">Formal</p>
        </motion.div>
      </div>
    </section>
  );
}
