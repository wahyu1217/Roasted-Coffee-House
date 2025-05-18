export const Hero = () => {
  return (
    <section className="relative bg-[url('/bg/hero-image.png')] bg-cover bg-center bg-fixed min-h-screen w-full">
      <div className="absolute inset-0" />
      <div className="relative pt-28 z-10 flex w-full h-screen flex-col justify-center items-center  text-white text-center">
        <p className="text-5xl lg:text-9xl uppercase">Roasted</p>
        <p className="font-bold text-2xl lg:text-6xl">Coffee House</p>
      </div>
    </section>
  )
}
