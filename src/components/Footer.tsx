export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Tihare Campusano. Todos los derechos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#inicio" className="text-sm text-white/40 hover:text-primary transition-colors">Inicio</a>
          <a href="#sobre" className="text-sm text-white/40 hover:text-primary transition-colors">Sobre Mí</a>
          <a href="#proyectos" className="text-sm text-white/40 hover:text-primary transition-colors">Proyectos</a>
        </div>
      </div>
    </footer>
  );
}
