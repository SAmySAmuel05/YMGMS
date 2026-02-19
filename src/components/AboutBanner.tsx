const AboutBanner = () => {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-surface-dark text-surface-dark-foreground">
      <div className="container max-w-3xl text-center">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4 font-sans">Nuestra filosofía</p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6">
          Moda con historia,<br />no moda desechable
        </h2>
        <p className="text-surface-dark-foreground/70 leading-relaxed text-sm md:text-base max-w-xl mx-auto mb-8">
          Cada pieza en nuestra tienda es seleccionada a mano de paca premium. Buscamos calidad, originalidad y carácter. No encontrarás dos prendas iguales — eso es lo que las hace especiales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-center px-6">
            <p className="font-serif text-2xl md:text-3xl font-semibold text-primary">100%</p>
            <p className="text-xs uppercase tracking-widest text-surface-dark-foreground/50 mt-1">Piezas únicas</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-surface-dark-foreground/20" />
          <div className="text-center px-6">
            <p className="font-serif text-2xl md:text-3xl font-semibold text-primary">Premium</p>
            <p className="text-xs uppercase tracking-widest text-surface-dark-foreground/50 mt-1">Calidad curada</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-surface-dark-foreground/20" />
          <div className="text-center px-6">
            <p className="font-serif text-2xl md:text-3xl font-semibold text-primary">Medidas</p>
            <p className="text-xs uppercase tracking-widest text-surface-dark-foreground/50 mt-1">Detalladas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
