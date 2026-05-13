import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Hospital Dr. Gustavo Fricke',
    subtitle: 'Django · PostgreSQL · AJAX',
    desc: 'Sistema de gestión de capacitaciones para personal hospitalario. Digitalización completa de procesos de formación, con lógicas de filtrado automático por estamento y validaciones avanzadas.',
    video: '',
    repo: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'NEXA',
    subtitle: 'Ionic · React · Supabase · FastAPI · IA',
    desc: 'Sistema de gestión logística integral. Incluye una aplicación móvil para conductores, backend escalable en FastAPI y un módulo de IA para la clasificación automática de imágenes de carga.',
    video: 'https://www.youtube.com/embed/vjfIWxkFLs4',
    repo: 'https://github.com/Tihare-Campusano/NEXA',
    demo: '',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Crazy Family Dropshipping',
    subtitle: 'Mobile App · Firestore · Auth',
    desc: 'Aplicación móvil para la gestión de ventas y pedidos bajo modelo dropshipping. Incluye dashboards de métricas en tiempo real y gestión de roles de acceso.',
    video: '',
    repo: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'App Academic',
    subtitle: 'Mobile · QR · UX/UI',
    desc: 'Aplicación de asistencia académica mediante lectura de códigos QR. Diseñada con un fuerte enfoque en usabilidad para una experiencia óptima del usuario.',
    video: '',
    repo: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'MangaLords',
    subtitle: 'E-commerce · CRUD · Fullstack',
    desc: 'Plataforma web integral de comercio electrónico y directorio de contenido. Incluye panel de administración robusto para gestión de usuarios y productos.',
    video: '',
    repo: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1578632738908-4511ca5ce462?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-dark/30">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-primary mb-2">Proyectos Destacados</h2>
          <p className="text-white/50">Soluciones de ingeniería aplicadas a necesidades reales.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass group rounded-[2rem] overflow-hidden cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                {project.video && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40">
                      <Play className="text-white fill-white" size={24} />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                <p className="text-secondary font-medium text-xs mb-4 uppercase tracking-wider">{project.subtitle}</p>
                <p className="text-white/50 text-sm line-clamp-3 mb-6">
                  {project.desc}
                </p>
                <div className="mt-auto">
                  <span className="text-xs font-bold text-primary flex items-center gap-2">
                    Ver detalles del proyecto <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/95 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full lg:h-auto max-h-[90vh] glass rounded-[2.5rem] overflow-hidden flex flex-col"
            >
              <div className="grid lg:grid-cols-2 h-full overflow-y-auto lg:overflow-visible">
                <div className="bg-black aspect-video lg:aspect-auto flex items-center justify-center relative min-h-[300px]">
                  {selectedProject.video ? (
                    <iframe
                      src={`${selectedProject.video}?autoplay=1&mute=1`}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 left-4 p-3 bg-dark/50 backdrop-blur-md rounded-full lg:hidden"
                  >
                    <X />
                  </button>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="hidden lg:flex justify-end absolute top-8 right-8">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-white/5 rounded-full text-white/60 transition-colors"
                    >
                      <X size={32} />
                    </button>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-2">{selectedProject.title}</h3>
                  <p className="text-primary font-bold text-lg mb-6">{selectedProject.subtitle}</p>
                  <p className="text-white/70 text-lg leading-relaxed mb-10">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {selectedProject.repo && (
                      <a 
                        href={selectedProject.repo} 
                        target="_blank" 
                        rel="noopener"
                        className="flex items-center gap-2 px-8 py-4 bg-white text-dark font-bold rounded-xl hover:bg-white/90 transition-all"
                      >
                        <FaGithub size={20} /> Repositorio
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener"
                        className="flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all"
                      >
                        <ExternalLink size={20} /> Demo Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
