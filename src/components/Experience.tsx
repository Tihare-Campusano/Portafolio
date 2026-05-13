import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Desarrollo Full Stack: Aplicación de Capacitaciones',
    company: 'Hospital Dr. Gustavo Fricke',
    period: 'Marzo 2026 – Abril 2026',
    location: 'Viña del Mar, Chile',
    desc: 'Desarrollo del núcleo de una aplicación compleja utilizando Django 3.4 y PostgreSQL. Implementé un sistema jerárquico para 4 perfiles de usuario, automatización de flujos de trabajo, importación masiva de datos y soporte nativo para modo oscuro/claro.',
    tech: ['Django', 'PostgreSQL', 'AJAX', 'Gitea']
  },
  {
    title: 'Desarrollo y Arquitectura: Aplicación NEXA',
    company: 'DuocUC',
    period: 'Agosto 2025 – Diciembre 2025',
    location: 'Viña del Mar, Chile',
    desc: 'Lideré el diseño arquitectónico Full Stack de una aplicación de inventario. Implementé seguridad avanzada con Row Level Security (RLS) en PostgreSQL, integración con Machine Learning y una interfaz modular en React/TypeScript.',
    tech: ['React', 'TypeScript', 'Supabase', 'Python', 'ML']
  },
  {
    title: 'Desarrollo aplicación Dropshipping',
    company: 'Centro de Práctica Crazy Family',
    period: 'Julio 2025 – Septiembre 2025',
    location: 'Viña del Mar, Chile',
    desc: 'Creación de una App móvil para gestión de ventas. Integré autenticación por roles, dashboards interactivos con gráficos de ventas y gestión de pedidos con Firestore.',
    tech: ['Firestore', 'Dashboards', 'Auth por Roles']
  },
  {
    title: 'Proyecto de Colaboración Internacional',
    company: 'Tecnológico de Monterrey (México)',
    period: 'Agosto 2024 – Diciembre 2024',
    location: 'Remoto / Viña del Mar',
    desc: 'Desarrollo de funcionalidades clave para una aplicación móvil en un entorno de colaboración internacional, siendo responsable de toda la documentación técnica y funcional.',
    tech: ['Mobile Development', 'Documentation', 'Collaboration']
  },
  {
    title: 'Desarrollo Aplicación Móvil (App Academic)',
    company: 'DuocUC',
    period: 'Agosto 2023 – Diciembre 2023',
    location: 'Viña del Mar, Chile',
    desc: 'Lideré el desarrollo de una app de asistencia académica mediante códigos QR, con un fuerte enfoque en UX/UI para optimizar la experiencia de profesores y alumnos.',
    tech: ['UX/UI', 'QR Integration', 'Mobile App']
  },
  {
    title: 'Desarrollo de Página web (MangaLords)',
    company: 'DuocUC',
    period: 'Marzo 2023 – Julio 2023',
    location: 'Viña del Mar, Chile',
    desc: 'Desarrollo integral de una plataforma e-commerce y directorio de contenido. Implementé carrito de compras, formularios y un panel de administración robusto.',
    tech: ['Full Stack', 'E-commerce', 'CRUD Admin']
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary mb-2">Trayectoria Profesional</h2>
          <p className="text-white/50">Mi evolución como Ingeniera en Informática.</p>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-0'
              }`}
            >
              {/* Dot */}
              <div className="absolute top-0 w-4 h-4 bg-primary rounded-full -left-[9px] md:left-auto md:right-[-9px] translate-y-2" 
                   style={i % 2 !== 0 ? { left: '-41px' } : {}}
              />
              
              <div className="glass p-8 rounded-3xl hover:border-primary/40 transition-colors">
                <div className={`flex items-center gap-2 mb-2 text-secondary font-bold ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-1">{exp.title}</h3>
                <div className={`flex items-center gap-2 text-white/50 text-sm mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Briefcase size={14} />
                  <span className="font-semibold text-white/80">{exp.company}</span>
                  <span>•</span>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">
                  {exp.desc}
                </p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
