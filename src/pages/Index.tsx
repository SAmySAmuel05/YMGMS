import StoreHeader from "@/components/StoreHeader";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreFooter from "@/components/StoreFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
      </main>
      <StoreFooter />
    </div>
  );
};

export default Index;
