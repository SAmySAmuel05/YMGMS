import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  size?: string;
  description?: string;
  condition?: string;
  measurements?: { hombros?: string; largo?: string; ancho?: string };
}

const ProductCard = ({
  image,
  name,
  price,
  category,
  size,
  description = "Pieza vintage seleccionada a mano de paca premium. Estado impecable con detalles únicos que la hacen irrepetible.",
  condition = "Premium — Excelente estado",
  measurements = { hombros: "42 cm", largo: "68 cm", ancho: "50 cm" },
}: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-surface-dark text-surface-dark-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-sans">
            Pieza Única
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">{category}</p>
          <h3 className="font-serif text-base md:text-lg font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-sans font-medium text-foreground">{price}</p>
            {size && <p className="text-xs text-muted-foreground font-sans">Talla: {size}</p>}
          </div>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl bg-card border-border p-0 overflow-hidden h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[90vh] flex flex-col">
          {/* Barra fija "Cerrar" en móvil para poder salir siempre */}
          <div className="flex sm:hidden shrink-0 items-center justify-between border-b border-border bg-card px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <DialogClose className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted active:bg-muted">
              <X className="h-5 w-5" aria-hidden />
              <span>Cerrar</span>
            </DialogClose>
          </div>
          <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
            <div className="md:w-1/2 aspect-[3/4] md:aspect-auto shrink-0">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4 overflow-y-auto min-h-0">
              <DialogHeader className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-primary font-sans">{category}</p>
                <DialogTitle className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">Precio</span>
                  <span className="font-serif text-xl font-semibold text-primary">{price}</span>
                </div>

                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">Estado</span>
                  <span className="text-sm text-foreground font-sans">{condition}</span>
                </div>

                {size && (
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">Talla</span>
                    <span className="text-sm text-foreground font-sans">{size}</span>
                  </div>
                )}

                {measurements && (
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-2">Medidas</p>
                    <div className="grid grid-cols-3 gap-2">
                      {measurements.hombros && (
                        <div className="text-center bg-muted rounded p-2">
                          <p className="text-xs text-muted-foreground font-sans">Hombros</p>
                          <p className="text-sm font-medium text-foreground">{measurements.hombros}</p>
                        </div>
                      )}
                      {measurements.largo && (
                        <div className="text-center bg-muted rounded p-2">
                          <p className="text-xs text-muted-foreground font-sans">Largo</p>
                          <p className="text-sm font-medium text-foreground">{measurements.largo}</p>
                        </div>
                      )}
                      {measurements.ancho && (
                        <div className="text-center bg-muted rounded p-2">
                          <p className="text-xs text-muted-foreground font-sans">Ancho</p>
                          <p className="text-sm font-medium text-foreground">{measurements.ancho}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity mt-4">
                Consultar disponibilidad
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
