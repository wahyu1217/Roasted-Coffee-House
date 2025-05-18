import Image from 'next/image'

const listAbout = [
  {
    img: '/icons/speciality-coffee.svg',
    title: 'SPECIALITY COFFEE',
    desc: 'Speciality grade coffees that’s rated above 80+ on taste'
  },
  {
    img: '/icons/roasted-fresh.svg',
    title: 'ROASTED FRESH',
    desc: 'Freshly roasted, direct from our roastery'
  },
  {
    img: '/icons/responsibily-taste.svg',
    title: 'RESPONSIBILY SOURCED',
    desc: 'Organic and biodiverse coffee partners'
  },
  {
    img: '/icons/delicious-taste.svg',
    title: 'DELCIOUS TASTE',
    desc: 'Making great taste accessible'
  }
]

export const About = () => {
  return (
    <section className="bg-[#F5F1E8] py-15 text-[#5B1312] px-3 lg:px-5" id="about">
      <div className="flex justify-around items-center gap-8 flex-wrap">
        {listAbout.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image
                src={item.img}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
