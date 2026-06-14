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
