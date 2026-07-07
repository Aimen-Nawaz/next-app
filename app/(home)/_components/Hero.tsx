export default function Hero() {
  return (
    <section className="relative min-h-screen w-full  bg-[#FFF7ED] flex items-center pt-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero/cakee.jpg"
        alt="Hero Cake"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8">

  {/* TEXT */}
  <div className="text-white text-center lg:text-left max-w-xl mx-auto lg:mx-0 pl-4 sm:pl-8 lg:pl-12">

    <p className="text-orange-300 font-semibold tracking-[4px] uppercase">
      Fresh Bakery Cakes
    </p>

    <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
      Delicious Cakes
      <br />
      For Every Moment
    </h1>

    <p className="mt-6 text-white/80 text-lg">
      Premium handcrafted cakes made fresh daily for birthdays,
      weddings and celebrations.
    </p>

    <button className="mt-8 bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition">
      Explore Cakes
    </button>

  </div>

</div>
    </section>
  );
}