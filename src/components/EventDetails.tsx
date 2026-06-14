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
