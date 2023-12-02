import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Faqs = () => {
  return (
    <>
      <div className='lg:flex lg:items-start lg:justify-stretch lg:w-4/5 lg:m-auto lg:mt-10'>
        <div className="lg:w-2/5 lg:mt-10">
          <div className='my-8'>
            <div className="flex justify-center items-center">
              <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>
                🙋‍♀️  FAQ
              </button>
            </div>

            {/* Small Screen */}
            <div className="lg:hidden font-sans my-2 flex flex-col items-center font-bold text-4xl">
              <span className='text-center'>Need</span>
              <span className="text-red-400">Answers ?</span>
            </div>

            {/* Large Screen */}
            <div className="hidden font-sans my-2 lg:flex lg:flex-col lg:items-center font-bold text-5xl">
              <span className='text-center'>Need</span>
              <span className="text-red-400">Answers ?</span>
            </div>

          </div>
          <div className="m-2 font-semibold text-lg font-sans text-center">
            <p className="text-custom-gray">
              Check out our most commonly asked questions below to find the information you need.
            </p>
          </div>
        </div>

        <div className="w-full px-4 py-24 lg:flex lg:justify-end lg:items-center">
          <div className=" w-full max-w-md rounded-2xl bg-white p-2 flex flex-col justify-center items-end">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-purple-50 px-6 py-4 text-left text-xl font-semibold ${open ? "text-purple-500" : "text-slate-900"} focus:outline-none`}>
                    <span>Is Manage Wise suitable for small businesses and larger enterprises alike?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-10 w-10 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-purple-50 px-6 py-4 text-left text-xl font-semibold ${open ? "text-purple-500" : "text-slate-900"} focus:outline-none`}>
                    <span>Can I access Manage Wise from different devices and platforms?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-10 w-10 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-purple-50 px-6 py-4 text-left text-xl font-semibold ${open ? "text-purple-500" : "text-slate-900"} focus:outline-none`}>
                    <span>What kind of support options do you offer to users?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-10 w-10 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-purple-50 px-6 py-4 text-left text-xl font-semibold ${open ? "text-purple-500" : "text-slate-900"} focus:outline-none`}>
                    <span>How secure is the data stored within Manage Wise?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-10 w-10 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    Your data&apos;s security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="lg:hidden w-full pt-16">
          <div className="mx-auto my-2 lg:my-0 w-full lg:flex lg:justify-end lg:items-center max-w-md lg:max-w-none rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-fit justify-between items-center rounded-lg bg-purple-50 px-6 p-6 lg:p-4 text-left text-2xl lg:text-xl font-bold font-sans ${open ? "text-[#8247FF]" : "text-black"} hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-500 ease-in-out`}>
                    <span>What is Manage Wise and what does it offer?</span>
                    <ChevronUpIcon
                      className={`transition-all duration-500 ease-in-out ${open ? 'rotate-180 transform' : 'transition-all duration-500 ease-in-out'
                        } h-20 w-20 lg:h-6 lg:w-6 text-purple-500`}
                      onClick={() => {
                        console.log('clicked');
                      }}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-6 text-lg font-semibold text-gray-500 bg-purple-50  transition-all duration-500 ease-in-out">
                    Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto my-2 w-full max-w-md rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-purple-50 px-6 p-6 text-left text-2xl font-bold font-sans ${open ? "text-[#8247FF]" : "text-black"} hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-500 ease-in-out`}>
                    <span>Is Manage Wise suitable for small businesses and larger enterprises alike?</span>
                    <ChevronUpIcon
                      className={`transition-all duration-500 ease-in-out ${open ? 'rotate-180 transform' : 'transition-all duration-500 ease-in-out'
                        } h-20 w-20 text-purple-500`}
                      onClick={() => {
                        console.log('clicked');
                      }}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-6 text-lg font-semibold text-gray-500 bg-purple-50  transition-all duration-500 ease-in-out">
                    Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto my-2 w-full max-w-md rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-purple-50 px-6 p-6 text-left text-2xl font-bold font-sans ${open ? "text-[#8247FF]" : "text-black"} hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-500 ease-in-out`}>
                    <span>Can I access Manage Wise from different devices and platforms?</span>
                    <ChevronUpIcon
                      className={`transition-all duration-500 ease-in-out ${open ? 'rotate-180 transform' : 'transition-all duration-500 ease-in-out'
                        } h-20 w-20 text-purple-500`}
                      onClick={() => {
                        console.log('clicked');
                      }}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-6 text-lg font-semibold text-gray-500 bg-purple-50  transition-all duration-500 ease-in-out">
                    Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto my-2 w-full max-w-md rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-purple-50 px-6 p-6 text-left text-2xl font-bold font-sans ${open ? "text-[#8247FF]" : "text-black"} hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-500 ease-in-out`}>
                    <span>What kind of support options do you offer to users?</span>
                    <ChevronUpIcon
                      className={`transition-all duration-500 ease-in-out ${open ? 'rotate-180 transform' : 'transition-all duration-500 ease-in-out'
                        } h-20 w-20 text-purple-500`}
                      onClick={() => {
                        console.log('clicked');
                      }}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-6 text-lg font-semibold text-gray-500 bg-purple-50  transition-all duration-500 ease-in-out">
                    We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto my-2 w-full max-w-md rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-purple-50 px-6 p-6 text-left text-2xl font-bold font-sans ${open ? "text-[#8247FF]" : "text-black"} hover:bg-purple-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-500 ease-in-out`}>
                    <span>How secure is the data stored within Manage Wise?</span>
                    <ChevronUpIcon
                      className={`transition-all duration-500 ease-in-out ${open ? 'rotate-180 transform' : 'transition-all duration-500 ease-in-out'
                        } h-20 w-20 text-purple-500`}
                      onClick={() => {
                        console.log('clicked');
                      }}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-6 text-lg font-semibold text-gray-500 bg-purple-50  transition-all duration-500 ease-in-out">
                    Your data&apos;s security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faqs