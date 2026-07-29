export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#FFF7ED] flex items-center pt-0 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero/cakee.jpg"
        alt="Hero Cake"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-[center_35%] md:object-[center_40%] lg:object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-8">

        {/* TEXT */}
        <div className="text-white text-center lg:text-left max-w-xl mx-auto lg:mx-0 pl-0 sm:pl-2 md:pl-4 lg:pl-12">

          <p className="text-orange-300 font-semibold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[4px] text-sm sm:text-base md:text-lg lg:text-lg uppercase">
            Fresh Bakery Cakes
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-5 md:mt-6 lg:mt-6 leading-tight">
            Delicious Cakes
            <br />
            For Every Moment
          </h1>

          <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-lg text-white/80">
            Premium handcrafted cakes made fresh daily for birthdays,
            weddings and celebrations.
          </p>

        </div>

      </div>
    </section>
  );
}