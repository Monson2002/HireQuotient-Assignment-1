import imgSrc from '../assets/react.svg'

const Integration = () => {

  return (
    <>
      <div>
        <div className='flex lg:hidden justify-around items-center p-1'>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
        </div>
        <div className='flex lg:hidden justify-around items-center p-1'>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
        </div>
        <div className='flex lg:hidden justify-evenly items-center p-1'>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
          <div className='p-1 w-16 h-16 bg-slate-800 rounded-2xl flex justify-center items-center'>
            <img src={imgSrc} alt="" srcSet="" />
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className='lg:hidden'>
        <div className='my-8'>
          <div className="flex justify-center items-center">
            <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>  INTEGRATIONS</button>
          </div>
          <div className="font-sans my-2 flex flex-col items-center font-medium text-3xl">
            <span className='text-justify'>Enable <span className="text-red-400">integration</span></span>
            <span className='text-center'> with other popular tools and platforms</span>
          </div>
        </div>
        <div className="m-2 font-semibold text-lg font-sans text-center">
          <p className="text-custom-gray">
            Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
          </p>
        </div>
      </div>

      {/* Large Screen */}
      <div className='hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:my-20 lg:w-2/3 lg:m-auto'>
        <div className='my-8'>
          <div className="flex justify-center items-center">
            <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>  INTEGRATIONS</button>
          </div>
          
          {/* Small Screens */}
          <div className="lg:hidden font-sans my-2 lg:my-4 flex flex-col items-center font-medium text-3xl">
            <span className='text-justify'>Enable <span className="text-red-400">integration</span></span>
            <span className='text-center'> with other popular tools and platforms</span>
          </div>

          {/* Large Screens */}
          <div className="hidden lg:flex font-sans my-2 lg:mt-4 flex-col items-center font-medium text-3xl lg:text-5xl">
            <span className='text-justify'>Enable <span className="text-red-400">integration</span> with</span>
            <span className='text-center'>other popular tools and</span>
            <span className='text-center'>platforms</span>
          </div>

        </div>
        <div className="m-2 font-semibold text-lg font-sans text-center lg:w-1/2">
          <p className="text-custom-gray">
            Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
          </p>
        </div>
      </div>

      <div className='overflow-hidden mt-8 rounded-t-2xl lg:w-2/3 lg:m-auto lg:flex lg:justify-center lg:items-center'>
        <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=512" alt="An image" srcSet=""
          className='scale-110' />
      </div>
    </>
  )
}

export default Integration