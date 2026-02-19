import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartSheet from "@/components/CartSheet";

const StoreHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground flex items-center gap-1.5">
          <img src={`${import.meta.env.BASE_URL}girasol.svg`} alt="" className="h-6 w-6 md:h-7 md:w-7 object-contain" aria-hidden />
          YMGMS
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-muted-foreground">
          <Link to="/categoria/vestidos" className="hover:text-primary transition-colors">Vestidos</Link>
          <Link to="/categoria/blusas" className="hover:text-primary transition-colors">Blusas</Link>
          <Link to="/categoria/playeras" className="hover:text-primary transition-colors">Playeras</Link>
          <Link to="/categoria/accesorios" className="hover:text-primary transition-colors">Accesorios</Link>
        </nav>

        <button
          type="button"
          className="relative text-foreground hover:text-primary transition-colors"
          aria-label="Carrito"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 min-w-[1rem] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            <Link to="/categoria/vestidos" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Vestidos</Link>
            <Link to="/categoria/blusas" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Blusas</Link>
            <Link to="/categoria/playeras" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Playeras</Link>
            <Link to="/categoria/accesorios" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Accesorios</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default StoreHeader;
