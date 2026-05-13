import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: string;
  title: string;
  showDownload?: boolean;
}

export default function PdfModal({ isOpen, onClose, file, title, showDownload = true }: PdfModalProps) {
  // Añadimos #toolbar=0 para intentar ocultar la barra nativa del navegador
  const fileWithNoToolbar = `${file}#toolbar=0&navpanes=0`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-full glass rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <div>
                <h3 className="text-xl font-bold text-secondary">{title}</h3>
                <p className="text-sm text-white/40">
                  {showDownload ? 'Visualización y descarga' : 'Solo visualización'}
                </p>
              </div>
              <div className="flex gap-2">
                {showDownload && (
                  <a 
                    href={file} 
                    download 
                    className="p-2 hover:bg-white/5 rounded-lg text-white/60 transition-colors"
                    title="Descargar"
                  >
                    <Download size={24} />
                  </a>
                )}
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 rounded-lg text-white/60 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black/20">
              <iframe 
                src={fileWithNoToolbar} 
                className="w-full h-full border-0"
                title={title}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
