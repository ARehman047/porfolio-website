import React from "react";
import { useInView } from "react-intersection-observer";

// Imgs

const PortfolioCard = ({ head, para, href, mockup, button }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <a href={href} target="__blank" className="inline-block">
      <div
        ref={myRef}
        className={`fade-in text-[#274546] rounded-2xl sm:w-4/6 md:w-full lg:w-6/6 mx-auto hover:scale-105 transition duration-200 ${
          myElementIsVisible ? "appear" : ""
        }`}
      >
        <div className="pt-4 rounded-xl">
          <img src={mockup} alt="Website Mockup" className="scale-110" />
        </div>
        <div className="px-4 lg:px-12 space-y-6 mt-8">
          <h2 className="font-semibold text-3xl lg:text-4xl">{head}</h2>
          <p className="text-sm md:text-lg font-jost">{para}</p>
          <div className="w5/6 sm:w-3/6 transition-all lg:pt-6">
            <a
              href={href}
              target="__blank"
              className="inline-block text-center text-[#f99a49] border-2 border-[#f99a49] hover:bg-[#f99a49]/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-[#f99a49]/30 transition-all hover:-translate-y-[2px] duration-200"
            >
              {button}{" "}
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
