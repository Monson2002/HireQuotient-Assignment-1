

const AndMoreSection = () => {
  return (
    <>
      <div className="">
        <div className="py-10">
          <div>
            <div className="flex justify-start items-center">
              <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>🤩  AND MORE...</button>
            </div>
            <div className="font-sans text-left my-2 flex flex-col justify-center items-center font-medium text-4xl">
              <span>Explore an array of features that elevate your </span>
              <span className="font-sans w-full"><span className="text-red-400">Productivity</span> to</span>
              <span className="font-sans w-full">new heights</span>
            </div>
          </div>
          <div className="font-semibold text-lg font-sans">
            <p className="text-custom-gray">
              Discover the tools that will revolutionize the way you manage and optimize your operations
            </p>
          </div>
        </div>
        <div>
          <div className="container bg-[#212121] opacity-1 rounded-2xl mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="bg-purple-500 p-4 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-center lg:w-2/3 w-full">
              <h1 className="title-font text-xl sm:text-4xl mb-4 font-bold text-white">Cross-Platform Compatibility</h1>
              <div className="font-semibold text-base font-sans">
                <p className="text-custom-gray m-2">
                  Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.
                </p>
              </div>
            </div>
          </div>
          <div className="container bg-[#212121] opacity-1 rounded-2xl my-6 mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="bg-purple-500 p-4 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-center lg:w-2/3 w-full">
              <h1 className="title-font text-xl sm:text-4xl mb-4 font-bold text-white">Stay Informed with Essential Notifications</h1>
              <div className="font-semibold text-base font-sans">
                <p className="text-custom-gray m-2">
                  Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.
                </p>
              </div>
            </div>
          </div>
          <div className="container bg-[#212121] opacity-1  rounded-2xl my-6 mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="bg-purple-500 p-4 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-center lg:w-2/3 w-full">
              <h1 className="title-font text-xl sm:text-4xl mb-4 font-bold text-white">Secure Data Encryption at all times</h1>
              <div className="font-semibold text-base font-sans">
                <p className="text-custom-gray m-2">
                  Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AndMoreSection