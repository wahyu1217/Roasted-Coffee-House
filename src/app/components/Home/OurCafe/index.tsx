import Image from 'next/image'
import { CoffeeBorder } from '../../CoffeeBorder'

export const OurCafe = () => {
  return (
    <section className="bg-[#5B1312] flex">
      <div className="flex flex-col max-lg:py-15 max-lg:bg-[url(/images/our-cafe.png)] max-lg:text-[#5B1312] items-center justify-center">
        <p className="text-4xl leading-[125%]">OUR CAFE</p>
        <CoffeeBorder />
        <p className="lg:text-xl font-extralight text-center px-4 lg:px-14 py-10">
          Find Roastery coffee house near you to experience finest coffee selections, live roasting
          spaces and cafes that are designed to give calming coffee estate banglow experience.
        </p>
        <button className="lg:border-white border-[#5B1312] border-1 rounded-sm px-5 py-2 font-extralight hover:bg-white hover:text-[#5B1312] transition duration-150 hover:shadow-lg hover:border-black ease-in-out hover:border-">
          VIEW CAFES {'>'}
        </button>
      </div>
      {/* disini */}
      <div className="bg-[url('/images/our-cafe.png')] max-lg:hidden bg-cover bg-center bg-fixed min-h-screen w-[60vw]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative pt-28 z-10 flex w-full h-screen flex-col justify-center items-center  text-white text-center">
          <Image
            src="/logo/roasted-coffee.png"
            alt="Logo Roasted Coffee House"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}
