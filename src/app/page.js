import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import About from '@/components/About'
import Accommodations from '@/components/Accommodations'
import Gallery from '@/components/Gallery'
import Attractions from '@/components/Attractions'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Accommodations />
        <Gallery />
        <Attractions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
