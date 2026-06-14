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
