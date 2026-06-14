import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const phoneNumber = "526183187248";
  // The user will define the specific format later, providing a generic elegant one for now
  const message = "¡Hola! Confirmo mi asistencia a los XV años de Yael. Mi nombre es: ";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="glass p-12 rounded-3xl"
        >
          <CheckCircle size={48} className="text-[#25D366] mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Confirmación de Asistencia</h2>
          <p className="font-sans font-light text-gray-300 mb-10">
            Por favor, confirma tu asistencia para poder reservar tu lugar especial.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full font-sans font-medium text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Confirmar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
