import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Cpu, BarChart, Code2 } from 'lucide-react';
import PdfModal from './PdfModal';

const certs = [
  { title: 'Certificados DuocUC', provider: 'DuocUC', icon: <Award />, file: 'assets/certificados/certificados (1).pdf' },
  { title: 'Ciberseguridad', provider: 'FT Movistar & SENCE', icon: <Shield />, file: 'assets/certificados/FT Movistar y SENCE - Certificado Ciberseguridad.pdf' },
  { title: 'IoT', provider: 'FT Movistar & SENCE', icon: <Cpu />, file: 'assets/certificados/FT Movistar y SENCE - Certificado IoT.pdf' },
  { title: 'Analista Web', provider: 'FT Movistar & SENCE', icon: <BarChart />, file: 'assets/certificados/FT Movistar y SENCE - Certificado analista web.pdf' },
  { title: 'Python & IA', provider: 'Open Academy Santander', icon: <Code2 />, file: 'assets/certificados/Cursor_Python_IA.pdf' },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  return (
    <section id="certificados" className="py-24">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">Certificados</h2>
          <p className="text-white/50">Validaciones académicas y profesionales.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className="glass p-6 rounded-2xl cursor-pointer hover:border-secondary/30 transition-all flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                {cert.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                <p className="text-sm text-white/40">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PdfModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        file={selectedCert?.file || ''} 
        title={selectedCert?.title || ''} 
        showDownload={false}
      />
    </section>
  );
}
