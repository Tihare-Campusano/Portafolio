import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-10 md:p-16 text-center border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-extrabold mb-6">¿Hablamos?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Estoy abierta a proyectos desafiantes, colaboraciones innovadoras y oportunidades que impulsen el futuro tecnológico.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Mail />, label: 'EMAIL', value: 'tb.campusano2@gmail.com', href: 'mailto:tb.campusano2@gmail.com' },
              { icon: <Phone />, label: 'WHATSAPP', value: '+56 9 3205 2899', href: 'https://wa.me/56932052899' },
              { icon: <MapPin />, label: 'UBICACIÓN', value: 'Viña del Mar, Chile', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(248, 112, 96, 0.3)' }}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 transition-all text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-[10px] font-bold text-secondary tracking-widest mb-1 uppercase">{item.label}</p>
                <p className="text-sm font-semibold text-white/90 break-all">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:tb.campusano2@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all"
          >
            Enviar Mensaje <Send size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
