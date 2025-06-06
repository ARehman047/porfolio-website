import React from "react";
import { useInView } from "react-intersection-observer";
import PortfolioCard from "./PorfolioCard";
import CTA from "../CTA/CTA";

// Imgs
import mdp from "../../img/Khareedle.png";
import pmc from "../../img/SimonGame.png";
import portfolioDoodle from "../../img/portfolioDoodle.svg";
import ctaDoodle2 from "../../img/ctaDoodle2.svg";

const Portfolio = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  const techStack = [
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Expo",
    "MySQL",
  ];

  // Array of portfolio items
  const portfolioItems = [
    {
      head: "Khareedle",
      para: "This project delivers a comprehensive E-commerce website. It enables secure user authentication, intuitive product browsing, and seamless purchasing experiences, while empowering store managers with a feature-rich admin dashboard for efficient product and order management.",
      href: "https://github.com/ARehman047/mern-ecommerce-mui",
      mockup: mdp,
      button: "View Project",
    },
    {
      head: "Simon Game",
      para: "A fun and interactive command-line Simon Game built with Node.js where players test their memory by recalling and repeating an ever-growing sequence of colors. Each round adds a new step to the pattern — how long can you keep up?",
      href: "https://simon-game-two-mu.vercel.app/",
      mockup: pmc,
      button: "View Live",
    },
  ];

  return (
    <div id="showcase" className="py-12 text-[#274546]">
      <section
        id="portfolio"
        className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-32"
      >
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div
              ref={myRef}
              className={`fade-in md:sticky top-36 space-y-8 bgportfolio-bg bg-contain bg-no-repeat text-center md:text-left ${
                myElementIsVisible ? "appear" : ""
              }`}
            >
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                My Projects
              </h2>
              <p className="font-jost font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">
                I've worked on some interesting projects, but I won't blab about
                them all. Here are a few best bits.
              </p>

              <img
                src={portfolioDoodle}
                alt="doodle"
                className="mx-auto md:mx-0 -scale-x-100"
              />
              <div className="hidden md:block sm:w-5/6 mx-auto md:mx-0">
                <h2 className="font-light text-lg lg:text-xl xl:text-2xl">
                  All the sites on your right are built from scratch in the
                  following stack:
                </h2>
                {techStack.map((item, index) => (
                  <aside
                    key={index}
                    className="inline-block mt-6 rounded-lg py-1 font-jost font-medium pr-4 text-[#274546]"
                  >
                    <i className="fa-solid fa-circle text-xs pr-2"></i>
                    {item}
                  </aside>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-20 lg:px-4">
            {/* Map over portfolioItems to render PortfolioCard components */}
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                head={item.head}
                para={item.para}
                href={item.href}
                mockup={item.mockup}
                button={item.button}
              />
            ))}
          </div>

          <div className="md:hidden sm:w-5/6 mx-auto md:mx-0">
            <h2 className="font-light text-lg">
              All the above sites are built from scratch in the following stack:
            </h2>
            {techStack.map((item, index) => (
              <aside
                key={index}
                className="inline-block mt-6 rounded-lg py-1 font-jost font-medium pr-4 text-[#274546]"
              >
                <i className="fa-solid fa-circle text-xs pr-2"></i>
                {item}
              </aside>
            ))}
          </div>
        </article>
        <CTA
          img={ctaDoodle2}
          head="Redesign your existing website?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  );
};

export default Portfolio;
