import { CoffeeBorder } from '../../CoffeeBorder'

type Offering = {
  title: string
  imageUrl: string
}

const offerings: Offering[] = [
  {
    title: 'Coffee Beans',
    imageUrl: '/images/coffee-beans.png' // ganti dengan path gambar asli
  },
  {
    title: 'Coffee Equipments',
    imageUrl: '/images/coffee-equipments.png'
  },
  {
    title: 'Insta Pour',
    imageUrl: '/images/insta-pour-card.png'
  }
]

export const KeyOffering: React.FC = () => {
  return (
    <section className="bg-[#5B1312] py-15 max-lg:px-8 px-2 text-center space-y-3" id="journal">
      <p className="text-center text-4xl text-[#f8f3ed]">Key Offering</p>
      <CoffeeBorder />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {offerings.map((item, index) => (
          <div key={index} className="relative h-[500px] overflow-hidden rounded shadow-md group">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
