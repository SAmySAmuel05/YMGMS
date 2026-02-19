import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { whatsappUrl, messagePedidoCarrito } from "@/lib/whatsapp";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { items, removeItem, updateQuantity, totalItems } = useCart();

  const handleWhatsApp = () => {
    const message = messagePedidoCarrito(
      items.map((i) => ({ name: i.name, price: i.price, quantity: i.quantity, size: i.size }))
    );
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl">Carrito</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-hidden">
          {totalItems === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">Tu carrito está vacío</p>
          ) : (
            <>
              <ul className="flex-1 space-y-4 overflow-y-auto py-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3 border-b border-border pb-4 last:border-0">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground truncate">{item.name}</p>
                      {item.size && (
                        <p className="text-xs text-muted-foreground">Talla: {item.size}</p>
                      )}
                      <p className="text-sm font-medium text-primary">{item.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center rounded border border-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-muted"
                            aria-label="Menos"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-muted"
                            aria-label="Más"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-muted-foreground hover:text-destructive"
                          aria-label="Quitar"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="shrink-0 border-t border-border pt-4">
                <Button
                  className="w-full gap-2"
                  onClick={handleWhatsApp}
                  disabled={items.length === 0}
                >
                  <span>Enviar pedido por WhatsApp</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
