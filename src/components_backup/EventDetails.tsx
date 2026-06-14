import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, MapPin } from 'lucide-react';

export default function EventDetails() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl text-gold mb-16"
        >
          Dónde y Cuándo
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass flex-1 p-10 rounded-3xl flex flex-col items-center group hover:border-gold/50 transition-colors"
          >
            <CalendarDays size={48} className="text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
            <h3 className="font-serif text-2xl text-white mb-2">Fecha y Hora</h3>
            <p className="font-sans font-light text-gray-300">Sábado, 10 de Julio 2026</p>
            <p className="font-sans font-light text-gray-300">9:00 PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass flex-1 p-10 rounded-3xl flex flex-col items-center group hover:border-gold/50 transition-colors"
          >
            <MapPin size={48} className="text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
            <h3 className="font-serif text-2xl text-white mb-2">Recepción</h3>
            <p className="font-sans font-light text-gray-300 mb-6 text-center">
              Salón Gran Quinta<br />
              Dirección Pendiente
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-gold text-gold font-sans font-medium text-sm tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 uppercase"
            >
              Ver Ubicación
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
