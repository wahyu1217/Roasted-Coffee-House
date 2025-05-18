import { Footer } from './components/Footer'
import { About } from './components/Home/About'
import { Hero } from './components/Home/Hero'
import { KeyOffering } from './components/Home/KeyOffering'
import { OurCafe } from './components/Home/OurCafe'
import { Product } from './components/Home/Product'
import { StayConnected } from './components/Home/StayConnected'

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <OurCafe />
      <About />
      <KeyOffering />
      <StayConnected />
      <Footer />
    </main>
  )
}
