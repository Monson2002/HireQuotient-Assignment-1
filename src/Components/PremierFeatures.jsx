

const PremierFeatures = () => {
  return (
    <>
      <div className="py-10 pt-0 m-4">
        <div className="">
          <div className="flex justify-around items-center">
            <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans" disabled>🔥  PREMIER FEATURES</button>
          </div>
          <div className="font-sans text-center my-2 flex flex-col justify-center items-center font-medium text-4xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <span>Discover our product's</span>
            <span className="text-red-400">Capabilities</span>
          </div>
          <div className="m-2 font-semibold text-lg font-sans text-center">
            <p className="text-custom-gray">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't settle for mediocrity - embrace the future of management with Manage Wise.
            </p>
          </div>
        </div>
        <div className="my-10">
          <div className="h-full p-6 border-2 border-[#ededfa] rounded-2xl bg-[#ededfa]">
            <div className="inline-flex justify-start items-center text-2xl title-font font-medium mt-16 p-1 border-2 border-white bg-white rounded-2xl">
              <div>⭐️</div>
            </div>
            <p className="mt-1 mb-3 text-2xl font-semibold font-sans">
              Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
            </p>
          </div>
          <div className="my-6 h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-[2.3]" src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="mt-14 mb-3 text-2xl font-semibold font-sans">Smart Task Management</h1>
                <p className="leading-relaxed font-semibold text-lg mb-3 text-custom-gray">
                  Say goodbye to chaos with our smart task management system
                </p>
              </div>
          </div>
        </div>
        <div className="">
          <div className="my-6 h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="blog"/>
              <div className="px-6">
                <h1 className="mb-3 text-2xl font-semibold font-sans">Flexible Scheduling</h1>
                <p className="leading-relaxed font-semibold text-lg mb-3 text-custom-gray">
                  Stay productive with our flexible scheduling system
                </p>
              </div>
          </div>
          <div className="my-6 h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="blog"/>
              <div className="px-6">
                <h1 className="mb-3 text-2xl font-semibold font-sans">Easy Communication</h1>
                <p className="leading-relaxed font-semibold text-lg mb-3 text-custom-gray">
                  Collaborate seamlessly with your team in real-time
                </p>
              </div>
          </div>
          <div className="my-6 h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="blog"/>
              <div className="px-6">
                <h1 className="mb-3 text-2xl font-semibold font-sans">Analytics</h1>
                <p className="leading-relaxed font-semibold text-lg mb-3 text-custom-gray">
                  Gain valuable insights with our advanced analytics feature
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PremierFeatures