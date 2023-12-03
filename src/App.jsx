import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Header from "./Components/Header.jsx"
import PremierFeatures from './Components/PremierFeatures.jsx'
import Features from './Components/Features.jsx'
import Integration from './Components/Integration.jsx'
import Faqs from './Components/Faqs.jsx'
import Pricing from './Components/Pricing.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Footer from './Components/Footer.jsx'
import Reveal from './Components/Reveal.jsx'

// import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#fdf2ec] to-white'>
        <Reveal>
          <Navbar />
        </Reveal>
        <Reveal>
          <Header />
        </Reveal>
      </div>
      <Reveal>
        <PremierFeatures />
      </Reveal>
      <div className='px-4 pt-4 bg-[#1c1c1c] text-white'>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Integration />
        </Reveal>

      </div>
      <div className='px-4 pt-4 text-black'>
        <Reveal>
          <Faqs />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Testimonials/>
        </Reveal>
      </div>
      <div className='px-4 pt-4 text-black bg-gradient-to-t from-[#fdf2ec] to-white'>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </>
  )
}

export default App
