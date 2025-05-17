import { Hero } from './components/Home/Hero'
import { Product } from './components/Home/Product'

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <section className="bg-[#5B1312] flex items-center justify-center">
        <p className="text-4xl">OUR CAFE</p>
      </section>
    </main>
  )
}
