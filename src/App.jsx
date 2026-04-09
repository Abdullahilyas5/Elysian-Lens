import { ReactLenis, useLenis } from 'lenis/react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="bg-[#0B0B0B] text-[#F5F5F5] min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <Services />
          <About />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
