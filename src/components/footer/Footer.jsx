import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Imgs
import footer_me from "../../img/hero_me2.jpg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import grass from "../../img/grass.svg";

const Footer = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== year) {
        setYear(newYear);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [year]);

  return (
    <div id="showcase" className="text-[#efeee5]">
      <img src={grass} alt="Grass" className="w-full" />
      <section className="bg-[#274546]">
        <article className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
          <section
            ref={myRef}
            className={`fadein pb-16 lg:pb-26 pt-10 lg:pt-0 ${
              myElementIsVisible ? "appear" : ""
            }`}
          >
            <article className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
              <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                <img
                  src={footer_me}
                  alt="Sexy Pants!"
                  className="w-16 h-16 rounded-full object-cover object-center border-2 border-[#efeee5] grayscale hover:grayscale-0"
                />
                <h2 className="font-light">
                  Designed & Developed with 💚 & ☕ by{" "}
                  <span className="md:block font-semibold">
                    Abdul Rehman Shahid
                  </span>
                </h2>
              </div>
              <div className="flex gap-6">
                <p>
                  <img
                    src={twitter}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </p>
                <a
                  href="https://www.instagram.com/abdur.rehman_7/"
                  target="__blank"
                >
                  <img
                    src={instagram}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-shahid-003050315/"
                  target="__blank"
                >
                  <img
                    src={linkedin}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
                <a href="https://github.com/ARehman047" target="__blank">
                  <img
                    src={github}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
              </div>
            </article>

            <hr className="border-[#efeee5] rounded-full my-10" />

            <p className="text-center">
              All rights reserved | Copyright © {year} Abdul Rehman Shahid
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Footer;
