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
// import Test from './Components/Test.jsx'

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#fdf2ec] to-white'>
        <Navbar/>
        <Header/>
      </div>
      <PremierFeatures/>
      <div className='px-4 pt-4 bg-[#1c1c1c] text-white'>
        <Features/>
        <Integration/>
      </div>
      <div className='px-4 pt-4 text-black'>
        <Faqs/>
        <Pricing/>
      </div>
      <Testimonials/>
      <div className='px-4 pt-4 text-black bg-gradient-to-t from-[#fdf2ec] to-white'>
        <Footer/>
      </div>
    </>
  )
}

export default App
