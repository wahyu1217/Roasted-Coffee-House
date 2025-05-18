import { Footer } from './components/Footer'
import { About } from './components/Home/About'
import { Hero } from './components/Home/Hero'
import { OurCafe } from './components/Home/OurCafe'
import { Product } from './components/Home/Product'

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <OurCafe />
      <Footer />
      <About />
    </main>
  )
}
