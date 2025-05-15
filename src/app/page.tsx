import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="relative bg-[url('/bg/hero-image.png')] bg-cover bg-center bg-fixed min-h-screen w-full">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex w-full h-screen flex-col justify-center items-center  text-white text-center">
          <p className="text-9xl uppercase">Roasted</p>
          <p className="font-bold text-6xl">Coffee House</p>
        </div>
      </div>

      <section className="bg-[#F5F1E8] py-44 px-40">
        <div className="flex gap-20 items-center mb-44 justify-center">
          <Image
            src="/images/bankdki-logo.svg"
            alt="Logo Bank DKI"
            width={75}
            height={75}
            className="opacity-50"
          />
          <Image
            src="/images/fanintek-logo.svg"
            alt="Logo Fanintek"
            width={50}
            height={59}
            className="opacity-50"
          />
          <Image
            src="/images/bptapera-logo.png"
            alt="Logo BP Tapera"
            width={77}
            height={77}
            className="opacity-50"
          />
        </div>
        <div className="text-[#5B1312] flex-col text-[40px] leading-3.5 flex items-center justify-center gap-5">
          <p>OUR BEST SELLERS</p>
          <div className="text-[#A56D44] flex justify-center gap-2">
            <div className="pt-1.5">-------------</div>
            <Image src="/images/coffee-icon.svg" alt="Coffee Icons" width={28} height={33} />
            <div className="pt-1.5">-------------</div>
          </div>
        </div>
      </section>

      <section className="bg-[#5B1312] flex items-center justify-center">
        <p className="text-4xl">OUR CAFE</p>
      </section>
    </main>
  )
}
