import CompanyLogo from "../assets/icons/CompanyLogo.webp"

import { useState } from "react"

const Navbar = () => {

  const [icon, seticon] = useState("menu")
  const [dropdown, setdropdown] = useState(false)

  const changeIcon = () => {
    if (icon === "cross") {
      seticon("menu")
      setdropdown(false)
    } else {
      seticon("cross")
      setdropdown(true)
    }
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center">
          <div className={`p-4 flex justify-between items-center bg-[#fdf2ec]`}>
            <img src={CompanyLogo} alt="Company Logo" className="w-[180px]" />
          </div>
          <div className="menu ">
            <ol className="flex justify-center items-center font-sans text-lg">
              <li className="px-4"><a href="http://">Features</a></li>
              <li className="px-4"><a href="http://">FAQ</a></li>
              <li className="px-4"><a href="http://">Pricing</a></li>
              <li className="px-4"><a href="http://">Testimonials</a></li>
              <div className="flex justify-stretch items-center">
                <button className="text-black bg-white border-2 py-2 px-6 mx-6 focus:outline-none hover:border-black rounded-2xl text-lg font-bold font-sans w-fit text-center">Buy Template</button>
              </div>
            </ol>
          </div>
        </div>
        <hr className={`h-2 w-screen ${icon === "cross" ? "bg-white" : "bg-[#fdf2ec]"} transition-all ease-in-out duration-1000`} />
      </div>
      <div className="lg:hidden">
        <div className={`p-4 flex justify-between items-center ${icon === "cross" ? "bg-white" : "bg-[#fdf2ec]"} transition-all ease-in-out duration-1000`}>
          <img src={CompanyLogo} alt="Company Logo" className="w-[180px]" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"
            onClick={changeIcon}>
            {icon === "cross" ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
        <hr className={`h-2 w-screen ${icon === "cross" ? "bg-white" : "bg-[#fdf2ec]"} transition-all ease-in-out duration-1000`} />
        {icon === "cross" ? (
          <div className={`${dropdown === true ? "" : "hidden"} absolute flex flex-col justify-center items-center w-full h-screen bg-white transition-all ease-in-out duration-1000`}>
            <ul className="flex flex-col justify-center items-center font-sans text-lg">
              <li className="py-4"><a href="http://">Features</a></li>
              <li className="py-4"><a href="http://">FAQ</a></li>
              <li className="py-4"><a href="http://">Pricing</a></li>
              <li className="py-4"><a href="http://">Testimonials</a></li>
            </ul>
            <div className="flex justify-stretch items-center">
              <button className="text-white bg-[#8247ff] border-0 py-4 px-6 focus:outline-none hover:bg-blue-700 rounded-2xl text-lg font-bold font-sans w-fit text-center">Buy Template</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Navbar