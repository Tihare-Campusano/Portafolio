import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Brain, Terminal, Code2, Database, Cloud } from 'lucide-react';
import PdfModal from './PdfModal';

const skills = [
  { icon: <Smartphone className="text-primary" />, title: 'Móvil & Web', desc: 'Desarrollo experto en React e Ionic, creando apps robustas y escalables con foco en UX/UI.' },
  { icon: <ShieldCheck className="text-primary" />, title: 'Arquitectura Segura', desc: 'Implementación de seguridad a nivel de base de datos (RLS) y control de acceso granular.' },
  { icon: <Brain className="text-primary" />, title: 'Integración de IA', desc: 'Capacidad para integrar modelos de Machine Learning en aplicaciones productivas.' },
  { icon: <Terminal className="text-primary" />, title: 'Ciberseguridad', desc: 'Conocimientos en pentesting y protección de entornos digitales críticos.' },
];

const techStack = [
  { 
    category: 'Lenguajes Core', 
    icon: <Terminal size={20} />,
    techs: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'] 
  },
  { 
    category: 'Frontend & Mobile', 
    icon: <Code2 size={20} />,
    techs: ['React', 'Ionic', 'Tailwind CSS', 'Bootstrap', 'UX/UI'] 
  },
  { 
    category: 'Backend & IA', 
    icon: <Database size={20} />,
    techs: ['Django', 'FastAPI', 'PostgreSQL', 'Machine Learning'] 
  },
  { 
    category: 'Cloud & Seguridad', 
    icon: <Cloud size={20} />,
    techs: ['Supabase', 'Firebase', 'Google Cloud', 'Docker', 'RLS', 'Git'] 
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sobre" className="py-24 bg-dark/50">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-primary mb-8"
            >
              Sobre mí
            </motion.h2>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Soy <span className="text-secondary font-semibold">Tihare Campusano</span>, Ingeniera en Informática con una visión integral del desarrollo de software.
              </p>
              <p>
                Mi especialidad radica en la creación de soluciones que requieren no solo un frontend impecable, sino una arquitectura de backend robusta y segura. He liderado proyectos críticos, desde sistemas logísticos con <span className="text-white font-medium">IA</span> hasta plataformas de gestión hospitalaria en <span className="text-white font-medium">Django</span>.
              </p>
              <p>
                Me destaco por mi capacidad para integrar tecnologías emergentes como <span className="text-secondary font-semibold">Machine Learning</span> y metodologías de <span className="text-secondary font-semibold">Ciberseguridad</span> en el ciclo de vida del desarrollo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl hover:border-primary/30 transition-colors group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                  <p className="text-white/60 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 rounded-3xl sticky top-32"
            >
              <h3 className="text-2xl font-bold mb-8">Arsenal Tecnológico</h3>
              
              <div className="space-y-8">
                {techStack.map((group, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-primary">{group.icon}</span>
                      <p className="text-sm font-bold text-secondary uppercase tracking-wider">{group.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.techs.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Ver CV Completo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <PdfModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        file="assets/certificados/CV-2025.pdf" 
        title="Curriculum Vitae" 
      />
    </section>
  );
}
