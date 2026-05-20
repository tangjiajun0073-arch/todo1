export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden max-w-none px-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.05] group-hover:scale-100 transition-transform duration-[8s] ease-out brightness-[0.45]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center">
        <h1 className="text-[clamp(40px,8vw,80px)] font-extralight tracking-[0.15em] text-white mb-4">
          林 墨
        </h1>
        <p className="text-[clamp(14px,2vw,18px)] text-accent tracking-[0.25em] uppercase font-light">
          Fine Art Photographer
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="relative w-6 h-[38px] border border-text-dim rounded-xl">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-accent rounded-[1px] animate-scroll-mouse" />
        </div>
        <span className="text-[10px] tracking-[0.2em] text-text-dim uppercase">Scroll</span>
      </div>
    </section>
  )
}
