import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";
import { items } from "../../Utils.js";

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const getAdjustedIndex = (index) => {
    if (index < 0) {
      return items.length - 1;
    } else if (index >= items.length) {
      return 0;
    }
    return index;
  };

  return (
    <>
      <div className="my-12 lg:w-3/4 lg:m-auto">
        <div className="flex justify-start items-center">
          <button className="inline-flex text-blue-600 outline outline-1 outline-blue-200 border-0 py-1 px-4 focus:outline-none rounded text-sm font-semibold font-sans bg-white" disabled>🧡 TESTIMONIALS</button>
        </div>
        
        {/* Small Screen */}
        <div className="lg:hidden font-sans my-2 flex flex-col justify-start items-start font-medium text-4xl">
          <span>Hear From our</span>
          <span><span className="text-red-400">Satisfied</span> clients</span>
        </div>
        <div className="lg:hidden font-semibold text-lg font-sans flex justify-start items-start">
          <p className="text-custom-gray">
            Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
          </p>
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex font-sans my-2 lg:my-4 flex-col justify-start items-start font-medium text-5xl">
          <span>Hear From our<span className="text-red-400"> Satisfied</span> clients</span>
        </div>
        <div className="hidden lg:flex font-semibold text-lg font-sans justify-start items-start lg:w-1/2">
          <p className="text-custom-gray">
            Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
          </p>
        </div>

      </div>

      {/* <marquee behavior="" direction="right">hih</marquee> */}

      <Marquee direction="right" loop={100} autoFill={true} speed={1000} gradient={true} pauseOnHover={false}>
        <div className="w-screen lg:w-1/5 mx-auto overflow-hidden my-10">
          <ul className={`flex transition-transform duration-1000 ease-in-out transform -translate-x-1/5 * ${currentIndex}`}>
            {items.map((item, index) => (
              <div key={index} className="md:w-1/2 w-full">
                <div className="h-full bg-gray-50 mx-4 p-8 rounded">
                  <p className="leading-relaxed mb-6">&quot;{item.review}.&quot;</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src={items[getAdjustedIndex(index)].imgSrc} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">{item.name}</span>
                      <span className="text-gray-500 text-sm">{item.designation}</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </Marquee>
    </>
  )
}

Testimonials.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Testimonials
