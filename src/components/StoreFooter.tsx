import { Instagram } from "lucide-react";

const StoreFooter = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg font-semibold text-foreground">YMGMS</p>
            <p className="text-xs text-muted-foreground mt-1">Moda con historia · Piezas únicas</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Envíos</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <p className="text-center text-[11px] text-muted-foreground mt-8">
          © 2026 YMGMS. Todas las piezas son únicas y sujetas a disponibilidad.
        </p>
      </div>
    </footer>
  );
};

export default StoreFooter;
