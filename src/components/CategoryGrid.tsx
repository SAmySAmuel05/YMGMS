import { Link } from "react-router-dom";
import catVestidos from "@/assets/cat-vestidos.jpg";
import catBlusas from "@/assets/cat-blusas.jpg";
import catPlayeras from "@/assets/cat-playeras.jpg";
import catAccesorios from "@/assets/cat-accesorios.jpg";

const categories = [
  { name: "Vestidos", image: catVestidos, slug: "vestidos" },
  { name: "Blusas", image: catBlusas, slug: "blusas" },
  { name: "Playeras", image: catPlayeras, slug: "playeras" },
  { name: "Accesorios", image: catAccesorios, slug: "accesorios" },
];

const CategoryGrid = () => {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-sans">Explora</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Categorías</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/categoria/${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-serif text-lg md:text-xl text-surface-dark-foreground font-medium">
                  {cat.name}
                </h3>
                <span className="text-primary text-xs uppercase tracking-widest font-sans mt-1 inline-block opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Ver todo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
