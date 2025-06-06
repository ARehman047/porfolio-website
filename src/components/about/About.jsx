import { useInView } from "react-intersection-observer";

import figma from "../../img/figma.svg";
import gh from "../../img/gh.svg";
import git from "../../img/git.svg";
import js from "../../img/js.svg";
import nodejs from "../../img/nodejs.svg";
import postman from "../../img/postman.svg";
import react from "../../img/react.svg";
import typescript from "../../img/typescript.svg";
import mongodb from "../../img/mongodb.svg";
import reactNative from "../../img/react-native.svg";
import mysql from "../../img/mysql.svg";
import tailwind from "../../img/tailwind.svg";

const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  const skills = [
    { src: typescript, alt: "TypeScript", width: "w-12 rounded-md" },
    { src: mongodb, alt: "MongoDB", width: "w-30" },
    { src: react, alt: "React", width: "w-12" },
    { src: mysql, alt: "My SQL", width: "w-30" },
    { src: nodejs, alt: "Node.js", width: "w-22" },
    { src: js, alt: "JavaScript", width: "w-12" },
    { src: tailwind, alt: "Tailwind CSS", width: "w-12" },
    { src: reactNative, alt: "React Native", width: "w-18" },
    { src: postman, alt: "Postman", width: "w-12" },
    { src: git, alt: "Git", width: "w-15" },
    { src: gh, alt: "GitHub", width: "w-12" },
    { src: figma, alt: "Figma", width: "w-8" },
  ];

  return (
    <div id="showcase" className="py-20 text-[#274546]">
      <section
        id="about"
        className={`max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24`}
      >
        <section className="space-y-8 md:space-y-0 md:grid sm:grid-cols-2 gap-12">
          <article className="">
            <div
              id="header"
              className="bgskills-bg bg-contain bg-no-repeat bg-center"
            >
              <h2 className="text-center md:text-left font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                Skills
              </h2>
            </div>
            <div
              ref={myRef}
              className={`fade-in mt-12 grid grid-flow-row grid-rows-3 grid-cols-4 gap-6 justify-items-center items-center ${
                myElementIsVisible ? "appear" : ""
              }`}
            >
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.src}
                  alt={skill.alt}
                  className={`${skill.width} hover:scale-110 transition-transform`}
                />
              ))}
            </div>
          </article>

          <article className="flex flex-col md:flex-row">
            <article className="p-[1px] mb-12 md:mb-0 md:mr-4 bg-[#274546] rounded-full md:-translate-x-5 lg:-translate-x-7"></article>
            <div>
              <div
                id="header"
                className="bgabout-bg bg-contain bg-no-repeat bg-center"
              >
                <h2 className="text-center md:text-left font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  About
                </h2>
              </div>
              <div
                ref={myRef}
                className={`fade-in mt-12 space-y-3 text-justify ${
                  myElementIsVisible ? "appear" : ""
                }`}
              >
                <p className="text-sm">
                  Hey👋, I'm Abdul Rehman Shahid — a self-taught Front-End
                  Developer based in Lahore, Pakistan. I'm passionate about
                  crafting clean, responsive, and scalable web and mobile
                  applications.
                  <br />
                  <br />
                  While pursuing a Bachelor's degree in Software Engineering at
                  NUST, I’ve been actively developing real-world projects, both
                  independently and professionally. Currently, I work at Oryns
                  Solutions where I build modern, performant UIs using React,
                  Next.js, and React Native.
                  <br />
                  <br />
                  Outside of work, I’ve created full-stack applications like a
                  MERN-based e-commerce platform and a fintech mobile app clone.
                  I focus heavily on usability, maintainability, and design
                  consistency — whether it’s a browser game built with vanilla
                  JavaScript or a cross-platform app like Unify.
                  <br />
                  <br />
                  I’m always eager to learn, collaborate, and bring meaningful
                  ideas to life through code and design.
                </p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default About;
