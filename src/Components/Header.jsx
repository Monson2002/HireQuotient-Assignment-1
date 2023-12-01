import HeaderImage from '../assets/icons/HeaderImage.webp'

const Header = () => {
  return (
    <>
      <div className='py-20'>
        <div className='px-3'>
          <div>
            <div className="flex justify-center items-center">
              <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>👋  WELCOME TO MANAGE WISE!</button>
            </div>
            <div className="font-sans text-center my-2 flex flex-col justify-center items-center font-medium text-5xl">
              <span>Empower your business with</span>
              <span className="text-red-400">Strategic</span>
              <span>insights</span>
            </div>
          </div>
          <div className="m-4 font-semibold text-lg font-sans text-center">
            <p className="text-custom-gray">
              Powerful management platform designed to streamline your business operations, boost productivity, and drive success
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button className="text-white bg-[#8247ff] border-0 py-4 px-6 focus:outline-none hover:bg-blue-700 rounded-2xl text-lg font-bold font-sans w-full text-center">Get Started</button>
            </div>
            <div className="my-6 flex justify-center items-center">
              <button className="text-black outline outline-1 outline-gray-400 border-0 py-4 px-6 focus:outline-none rounded-2xl text-lg font-bold font-sans w-full text-center flex justify-center items-center">
                Watch Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-4 w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='px-3 pt-16'>
          <img src={HeaderImage} alt="Header Image" className="w-full shadow-xl" />
        </div>
      </div>
    </>
  )
}

export default Header