import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Header from "./Components/Header.jsx"
import PremierFeatures from './Components/PremierFeatures.jsx'
import AndMoreSection1 from './Components/AndMoreSection1.jsx'
import AndMoreSection2 from './Components/AndMoreSection2.jsx'

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#fdf2ec] to-white'>
        <Navbar/>
        <Header/>
      </div>
      <PremierFeatures/>
      <div className='px-4 pt-4 bg-[#1c1c1c] text-white'>
        <AndMoreSection1/>
        <AndMoreSection2/>
      </div>
    </>
  )
}

export default App
