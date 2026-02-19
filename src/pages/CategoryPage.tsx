import { useParams, Link } from "react-router-dom";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";
import ProductCard from "@/components/ProductCard";

import productDress from "@/assets/product-dress.jpg";
import productBlouse from "@/assets/product-blouse.jpg";
import productTee from "@/assets/product-tee.jpg";
import productAccessory from "@/assets/product-accessory.jpg";

const allProducts: Record<string, Array<{
  image: string;
  name: string;
  price: string;
  category: string;
  size?: string;
  description?: string;
  condition?: string;
  measurements?: { hombros?: string; largo?: string; ancho?: string };
}>> = {
  vestidos: [
    { image: productDress, name: "Vestido Floral Vintage", price: "$450 MXN", category: "Vestidos", size: "M", description: "Vestido floral con corte A, tela fluida y estampado botánico. Perfecto para ocasiones especiales.", condition: "Premium — Excelente estado", measurements: { hombros: "38 cm", largo: "110 cm", ancho: "46 cm" } },
    { image: productDress, name: "Vestido Satinado Noche", price: "$520 MXN", category: "Vestidos", size: "S", description: "Vestido de satín con caída elegante. Ideal para cenas y eventos nocturnos.", condition: "Premium — Como nuevo", measurements: { hombros: "36 cm", largo: "115 cm", ancho: "44 cm" } },
  ],
  blusas: [
    { image: productBlouse, name: "Blusa Satinada Terracota", price: "$320 MXN", category: "Blusas", size: "S-M", description: "Blusa de satín en tono terracota con mangas abullonadas y cuello discreto.", condition: "Premium — Excelente estado", measurements: { hombros: "40 cm", largo: "58 cm", ancho: "48 cm" } },
    { image: productBlouse, name: "Blusa Bordada Boho", price: "$380 MXN", category: "Blusas", size: "M", description: "Blusa con bordados artesanales y detalles boho. Tela ligera y transpirable.", condition: "Premium — Muy buen estado", measurements: { hombros: "42 cm", largo: "62 cm", ancho: "50 cm" } },
  ],
  playeras: [
    { image: productTee, name: "Playera Gráfica Montaña", price: "$180 MXN", category: "Playeras", size: "L", description: "Playera de algodón con gráfico montañero vintage. Suave al tacto y corte relajado.", condition: "Premium — Excelente estado", measurements: { hombros: "48 cm", largo: "72 cm", ancho: "54 cm" } },
    { image: productTee, name: "Playera Band Tee 90s", price: "$220 MXN", category: "Playeras", size: "M", description: "Playera de banda de los 90s auténtica. Un tesoro para coleccionistas.", condition: "Vintage — Buen estado", measurements: { hombros: "46 cm", largo: "70 cm", ancho: "52 cm" } },
  ],
  accesorios: [
    { image: productAccessory, name: "Set Pañuelo & Accesorios", price: "$280 MXN", category: "Accesorios", description: "Set curado de pañuelo de seda y accesorios complementarios. Piezas versátiles.", condition: "Premium — Excelente estado" },
    { image: productAccessory, name: "Bolso Vintage de Piel", price: "$650 MXN", category: "Accesorios", description: "Bolso de piel genuina con herrajes dorados. Estilo atemporal y elegante.", condition: "Vintage — Muy buen estado" },
  ],
};

const categoryTitles: Record<string, string> = {
  vestidos: "Vestidos",
  blusas: "Blusas",
  playeras: "Playeras",
  accesorios: "Accesorios",
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = allProducts[category || ""] || [];
  const title = categoryTitles[category || ""] || "Categoría";

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />
      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <Link to="/" className="text-muted-foreground text-xs uppercase tracking-widest font-sans hover:text-primary transition-colors">
                ← Inicio
              </Link>
            </div>
            <div className="text-center mb-12">
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2 font-sans">Colección</p>
              <h1 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">{title}</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <StoreFooter />
    </div>
  );
};

export default CategoryPage;
