import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useMeterBars } from './hooks/useMeterBars'

export default function App() {
  useScrollReveal()
  useMeterBars()

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Equipment />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}
