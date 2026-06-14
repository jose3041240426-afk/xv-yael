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
