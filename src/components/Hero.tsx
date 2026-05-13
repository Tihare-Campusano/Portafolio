import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import PdfModal from './PdfModal';

const socialLinks = [
  { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/tihare-campusano-8a78a2299' },
  { icon: <FaGithub size={24} />, href: 'https://github.com/Tihare-Campusano' },
  { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/_tih4ree' },
  { icon: <MessageCircle size={24} />, href: 'https://wa.me/56932052899' },
  { icon: <FaYoutube size={24} />, href: 'https://www.youtube.com/@not_kido0_dev' },
  { icon: <Mail size={24} />, href: 'mailto:tb.campusano2@gmail.com' },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="inicio" className="min-height-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-10 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-bold mb-4"
          >
            Hello World, Soy Tihare Campusano
          </motion.h4>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Ingeniera en <span className="text-gradient">Informática</span>
          </h1>
          <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
            Especializada en desarrollo Full Stack (Web y Móvil), Cloud e Inteligencia Artificial.
            Construyo soluciones escalables, seguras y centradas en el usuario, integrando frontend,
            backend y modelos de IA en entornos reales.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Ver Título Profesional
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="px-8 py-4 border-2 border-secondary/50 text-secondary font-bold rounded-xl hover:bg-secondary/10 transition-all"
            >
              Contáctame
            </motion.a>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#f87060' }}
                className="text-white/60 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl max-w-[280px]">
            <img
              src="assets/fotos/foto_cv.png"
              alt="Tihare Campusano"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      <PdfModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        file="assets/certificados/Título.pdf"
        title="Título Profesional"
      />
    </section>
  );
}
