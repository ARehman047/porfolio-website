import React from "react";
import { Link } from "react-scroll";

// Imgs
import logo from "../../img/ars.png";
import msg from "../../img/msg.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";

const Navbar = () => {
  const menuToggle = () => {
    document.querySelector("#toggle").classList.toggle("active");
    document.querySelector("#showcase").classList.toggle("active");
  };

  return (
    <section className="font-poppins">
      <header className="fixed px-4 lg:px-12 xl:px-24 2xl:px-32 py-2 md:py-4">
        <div div id="logo">
          <Link to="hero" spy={true} smooth={true} offset={-150} duration={800}>
            <img
              src={logo}
              alt="vector"
              className="w-24 lg:w-32 h-14 lg:h-20 hover:scale-115 hover:cursor-pointer transition-all"
            />
          </Link>
        </div>

        <div
          id="toggle"
          className="shadow-2xl shadow-[#274546]/50 hover:shadow-lg hover:shadow-[#274546]/30 transition-all"
          onClick={menuToggle}
        ></div>
      </header>

      <div className="menu px-6 pt-12">
        <ul className="btn mt-6 space-y-8 font-medium tracking-wider text-lg lg:text-2xl">
          <li id="underline">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
              onClick={menuToggle}
            >
              Home
            </Link>
          </li>
          <li id="underline">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              onClick={menuToggle}
            >
              My Projects
            </Link>
          </li>
          <li id="underline">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              onClick={menuToggle}
            >
              Services
            </Link>
          </li>
          <li id="underline">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              onClick={menuToggle}
            >
              About
            </Link>
          </li>
          <li id="underline">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              onClick={menuToggle}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* <div className="w-4/6 text-center text-[#f99a49]">
            <ButtonGhost
                href="https://drive.google.com/file/d/1TpoWs_9WP8vOUGg_a1KbOYJGaVmebVd_/view?usp=sharing"
              text="Resume"
              target="__blank"
              />
          </div> */}

        <div className="flex flex-col gap-4 items-center text-center  text-[#efeee5]">
          <img src={msg} alt="vector" className="w-6" />
          <div className="space-y-4">
            <h2 className="font-[#6ce5b1]light text-sm md:text-lg uppercase">
              Don't be a stranger!
            </h2>
            <span id="divide"></span>
          </div>
          <div className="flex gap-3 lg:gap-6">
            <p>
              <img
                src={twitter}
                alt="vector"
                className="w-8 lg:w-10 hover:-translate-y-2 transition-all"
              />
            </p>
            <a
              href="https://www.instagram.com/abdur.rehman_7/"
              target="__blank"
            >
              <img
                src={instagram}
                alt="vector"
                className="w-8 lg:w-10 hover:-translate-y-2 transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rehman-shahid-003050315/"
              target="__blank"
            >
              <img
                src={linkedin}
                alt="vector"
                className="w-8 lg:w-10 hover:-translate-y-2 transition-all"
              />
            </a>
            <a href="https://github.com/ARehman047" target="__blank">
              <img
                src={github}
                alt="vector"
                className="w-8 lg:w-10 hover:-translate-y-2 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
