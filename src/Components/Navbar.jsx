import CompanyLogo from "../assets/icons/CompanyLogo.webp"

import { useState } from "react"

const Navbar = () => {

  const [icon, seticon] = useState("menu")

  const changeIcon = () => { 
    if (icon === "cross") {
      seticon("menu")
    } else {
      seticon("cross")
    }
  } 

  return (
    <>
      <div>
      <div className="p-4 flex justify-between items-center">
        <img src={CompanyLogo} alt="Company Logo" className="w-[180px]"/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"
        onClick={changeIcon}>
          {icon === "cross" ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </div>
      <hr className="h-2 w-screen"/>
      </div>
    </>
  )
}

export default Navbar