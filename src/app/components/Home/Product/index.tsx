import Image from 'next/image'
import React from 'react'
import { ProductCard } from '../../ProductCard'
import { CoffeeBorder } from '../../CoffeeBorder'

const product = [
  {
    isNew: true,
    imgSrc: '/images/pineapple-coffee.png',
    price: '$ 4.24',
    count: '250 gr',
    title: 'Baarbara Estate – Pineapple'
  },
  {
    isNew: true,
    imgSrc: '/images/colbrew-blend.png',
    price: '$ 4.24',
    count: '250 gr',
    title: 'Cold Brew Blend'
  },
  {
    isNew: false,
    imgSrc: '/images/insta-pour.png',
    price: '$ 7.24',
    count: '250 gr',
    title: 'Espresso Milk Blend'
  },
  {
    isNew: true,
    imgSrc: '/images/pineapple-coffee.png',
    price: '$ 4.24',
    count: '250 gr',
    title: 'Baarbara Estate – Pineapple'
  },
  {
    isNew: true,
    imgSrc: '/images/colbrew-blend.png',
    price: '$ 4.24',
    count: '250 gr',
    title: 'Cold Brew Blend'
  },
  {
    isNew: false,
    imgSrc: '/images/insta-pour.png',
    price: '$ 7.24',
    count: '250 gr',
    title: 'Espresso Milk Blend'
  },
  {
    isNew: false,
    imgSrc: '/images/insta-pour.png',
    price: '$ 7.24',
    count: '250 gr',
    title: 'Mandalkhan Estate'
  }
]

export const Product = () => {
  return (
    <section className="bg-[#F5F1E8] py-15 lg:py-44 lg:px-40">
      <div className="flex gap-12 lg:gap-20 items-center lg:mb-44 justify-center">
        <Image
          src="/logo/bankdki-logo.svg"
          alt="Logo Bank DKI"
          width={75}
          height={75}
          className="opacity-50 w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]"
        />
        <Image
          src="/logo/fanintek-logo.svg"
          alt="Logo Fanintek"
          width={50}
          height={59}
          className="opacity-50 lg:w-[50px] lg:h-[59px] w-[30px] h-[37px]"
        />
        <Image
          src="/logo/bptapera-logo.png"
          alt="Logo BP Tapera"
          width={77}
          height={77}
          className="opacity-50 lg:w-[77px] lg:h-[77px] w-[40px] h-[40px]"
        />
      </div>
      <div className="text-[#5B1312] flex-col mt-18 lg:text-[40px] leading-3.5 flex items-center justify-center gap-5">
        <p className="text-center">OUR BEST SELLERS</p>
        <CoffeeBorder />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 xl:grid-cols-4 gap-13">
          {product.map((e, i) => {
            return (
              <ProductCard
                key={i}
                count={e.count}
                imgSrc={e.imgSrc}
                price={e.price}
                isNew={e.isNew}
                title={e.title}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
