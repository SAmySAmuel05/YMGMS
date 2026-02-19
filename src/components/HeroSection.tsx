import heroImage from "@/assets/hero-editorial.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Colección curada de ropa única"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/20 to-transparent" />
      <div className="relative container pb-16 md:pb-24 z-10">
        <div className="max-w-xl animate-fade-up">
          <p className="text-primary font-sans text-xs md:text-sm uppercase tracking-[0.3em] mb-3">
            Curaduría de moda
          </p>
           <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-surface-dark-foreground leading-[1.1] mb-4">
             YMGMS
           </h1>
          <p className="text-surface-dark-foreground/80 text-sm md:text-base max-w-md mb-8 font-light leading-relaxed">
            Piezas únicas con historia. Cada prenda es seleccionada a mano por su calidad, originalidad y carácter.
          </p>
          <a
            href="#nuevos"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
          >
            Explorar colección
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
