import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import Service from "./Service";
import CTA from "../CTA/CTA";

// Imgs
import dev from "../../img/dev.webp";
import ui from "../../img/ui.webp";
import ux from "../../img/ux.webp";
import content from "../../img/content.webp";
import ctaDoodle1 from "../../img/ctaDoodle1.svg";

const Services = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="showcase" className="py-20 text-[#274546]">
      <section
        id="services"
        className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24"
      >
        <div
          id="header"
          className="space-y-6 bgservices-bg bg-contain bg-no-repeat"
        >
          <h2 className="text-center font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Services
          </h2>
          <p className="font-jost text-center font-regular text-base lg:text-lg sm:w-3/6 lg:w-2/6 mx-auto">
            Seen my work? <br /> These are the services I've provided up there!
          </p>
        </div>

        <div
          ref={myRef}
          className={`fade-in max-w-screen-lg mx-auto grid gap-16 md:gap-20 md:grid-flow-auto grid-cols-2 ${
            myElementIsVisible ? "appear" : ""
          }`}
        >
          <Service img={dev} head="Full-Stack Development" />
          <Service img={ux} head="Mobile App Development" />
          <Service img={ui} head="UI/UX Design" />
          <Service img={content} head="Responsive Web Design" />
        </div>

        <div className="sm:w-2/6 md:w-3/12 mx-auto lg:pt-6 relative z-10">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={800}
            id="btnAnchor"
            className="inline-block text-center text-[#efeee5] bg-[#f99a49] border-2 border-[#f99a49] font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-[#f99a49]/30 hover:-translate-y-[2px] transition-all duration-200"
          >
            "Ask for quotation"
          </Link>
        </div>

        <CTA
          img={ctaDoodle1}
          head="Where do we start?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  );
};

export default Services;
