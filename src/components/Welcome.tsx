import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Welcome() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section ref={ref} className="py-44 md:py-56 px-6 bg-black flex flex-col items-center justify-center relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center"
      >
        {/* Subtle top divider */}
        <div className="gold-divider-fine mb-12" />

        <p className="font-cormorant italic text-2xl md:text-4xl leading-relaxed text-white/90 font-light px-4">
          "Hay momentos que solo ocurren una vez en la vida, y compartirlos con las personas que más queremos los hace inolvidables."
        </p>

        {/* Subtle bottom divider */}
        <div className="gold-divider-fine mt-12" />
      </motion.div>
    </section>
  );
}

