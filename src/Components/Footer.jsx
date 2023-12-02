import CompanyLogo from "../assets/icons/CompanyLogo.webp"

const Footer = () => {
  return (
    <>
      <footer className="lg:w-4/5 lg:m-auto py-10 text-black body-font">
        <div className="container px-5 py-8 mx-auto flex items-center lg:justify-between sm:flex-row flex-col">
          <div className="">
            <img src={CompanyLogo} alt="Company Logo" className="w-[180px]"/>
          </div>
          <div className="py-6">
            <ul className="flex flex-col justify-start items-center font-sans text-lg">
              <li className="py-1"><a href="http://">Features</a></li>
              <li className="py-1"><a href="http://">FAQ</a></li>
              <li className="py-1"><a href="http://">Pricing</a></li>
              <li className="py-1"><a href="http://">Testimonials</a></li>
            </ul>
          </div>
        </div>
        <div className="container px-5 py-8 mx-auto text-black flex items-center lg:justify-between sm:flex-row flex-col">
          <div className="font-semibold">
            © 2022 ManageWise, Inc.
          </div>
          <div className="flex justify-center items-center m-6 scale-150">
            <i className="fa-brands fa-instagram px-1"></i>
            <i className="fa-brands fa-square-x-twitter px-1"></i>
            <i className="fa-brands fa-linkedin px-1"></i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer