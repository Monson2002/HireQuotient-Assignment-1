

const Pricing = () => {
  return (
    <>
      <div className="my-24 lg:w-3/4 lg:mx-auto">
        <div className="">
          <div className="flex justify-around items-center">
            <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>💲  PRICING</button>
          </div>

          {/* Small Screen */}
          <div className="lg:hidden font-sans text-center my-2 flex flex-col justify-center items-center font-medium text-4xl">
            <span>Select your ideal </span>
            <span><span className="text-red-400">Pricing</span> plan</span>
          </div>
          <div className="lg:hidden font-semibold text-lg font-sans text-center">
            <p className="text-custom-gray">
              At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
            </p>
          </div>

          {/* Large Screen */}
          <div className="hidden lg:flex font-sans text-center my-4 flex-col justify-center items-center font-medium text-5xl">
            <span>Select your ideal <span className="text-red-400">Pricing</span> plan</span>
          </div>
          <div className="hidden lg:block lg:w-1/3 lg:m-auto font-semibold text-lg font-sans text-center">
            <p className="text-custom-gray">
              At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
            </p>
          </div>

        </div>
        <div className="my-10 lg:flex lg:justify-between lg:items-center">
          <div className="bg-[#ededfa] rounded-2xl md:w-1/2 w-full lg:mx-4 lg:p-2">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
              <div className="flex justify-start items-center py-2">
                <button className="inline-flex text-orange-500 outline outline-1 border-0 py-1 px-2 focus:outline-none rounded-lg text-xs font-semibold font-sans bg-white" disabled>FREE</button>
              </div>
              <div className="font-serif py-2">
                <h1 className="inline font-sans text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none font-bold">$0</h1> /month
              </div>
              <p className="flex items-center text-custom-gray mt-4 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Access to all basic features
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reporting and analytics
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Upto 5 individual users
              </p>
              <p className="flex items-center text-custom-gray mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Chat and email support
              </p>
              <div className="mt-10 flex justify-start items-center">
                <button className="inline-flex text-black outline-none border-0 p-4 py-3 rounded-lg text-md font-semibold font-sans bg-white">Get Started</button>
              </div>
            </div>
          </div>
          <div className="my-4 bg-[#1c1c1c] rounded-2xl md:w-1/2 w-full lg:mx-4 lg:p-2">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
              <div className="flex justify-start items-center py-2">
                <button className="inline-flex text-orange-500 outline outline-1 border-0 py-1 px-2 focus:outline-none rounded-lg text-xs font-semibold font-sans bg-white" disabled>STANDARD</button>
              </div>
              <div className="font-serif py-2 text-white">
                <h1 className="inline font-sans text-4xl pb-4 mb-4 border-b border-gray-200 leading-none font-bold">$25</h1> /month
              </div>
              <p className="flex items-center text-custom-gray mt-4 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Access to all basic features
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reporting and analytics
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Upto 5 individual users
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Chat and email support
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>3+ integrations
              </p>
              <p className="flex items-center text-custom-gray mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Account performance reporting
              </p>
              <div className="mt-10 flex justify-start items-center">
                <button className="inline-flex text-white outline-none border-0 p-4 py-3 rounded-lg text-md font-semibold font-sans bg-purple-600">Get Started</button>
              </div>
            </div>
          </div>
          <div className="my-4 bg-[#ededfa] rounded-2xl md:w-1/2 w-full lg:mx-4 lg:p-2">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
              <div className="flex justify-start items-center py-2">
                <button className="inline-flex text-orange-500 outline outline-1 border-0 py-1 px-2 focus:outline-none rounded-lg text-xs font-semibold font-sans bg-white" disabled>BUSINESS</button>
              </div>
              <div className="font-serif py-2 text-black">
                <h1 className="inline font-sans text-4xl pb-4 mb-4 border-b border-gray-200 leading-none font-bold">$25</h1> /month
              </div>
              <p className="flex items-center text-custom-gray mt-4 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Access to all basic features
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reporting and analytics
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Upto 5 individual users
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Chat and email support
              </p>
              <p className="flex items-center text-custom-gray mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>3+ integrations
              </p>
              <div className="mt-10 flex justify-start items-center">
                <button className="inline-flex text-black outline-none border-0 p-4 py-3 rounded-lg text-md font-semibold font-sans bg-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing