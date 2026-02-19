import ProductCard from "./ProductCard";
import productDress from "@/assets/product-dress.jpg";
import productBlouse from "@/assets/product-blouse.jpg";
import productTee from "@/assets/product-tee.jpg";
import productAccessory from "@/assets/product-accessory.jpg";

const products = [
  {
    image: productDress,
    name: "Vestido Floral Vintage",
    price: "$450 MXN",
    category: "Vestidos",
    size: "M",
  },
  {
    image: productBlouse,
    name: "Blusa Satinada Terracota",
    price: "$320 MXN",
    category: "Blusas",
    size: "S-M",
  },
  {
    image: productTee,
    name: "Playera Gráfica Montaña",
    price: "$180 MXN",
    category: "Playeras",
    size: "L",
  },
  {
    image: productAccessory,
    name: "Set Pañuelo & Accesorios",
    price: "$280 MXN",
    category: "Accesorios",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="nuevos" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-sans">Recién llegados</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Nuevas Piezas</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
