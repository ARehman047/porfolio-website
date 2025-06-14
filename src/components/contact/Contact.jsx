import React from "react";
import { useInView } from "react-intersection-observer";

// Imgs
import contactDoodle from "../../img/contactDoodle.svg";

const Contact = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="showcase" className="py-20 text-[#274546]">
      <section
        id="contact"
        className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24"
      >
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div className="space-y-8 bgcontact-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                Get In Touch!
              </h2>
              <p className="font-jost font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">
                Fill out the form and I will reach out, as soon as possible!
              </p>

              <img
                ref={myRef}
                src={contactDoodle}
                alt="doodle"
                className={`fade-in mx-auto md:mx-0 ${
                  myElementIsVisible ? "appear" : ""
                }`}
              />
            </div>
          </div>

          <div
            ref={myRef}
            className={`fade-in ${myElementIsVisible ? "appear" : ""}`}
          >
            <form
              action="https://formsubmit.co/abdurehman0047@gmail.com"
              method="POST"
            >
              <div className="flex flex-col gap-4">
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Yay! You have a mail from your website!."
                />
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abdul Rehman Shahid"
                  className="p-2 border-2 rounded-lg border-[#274546] focus:border-action focus:ring-0 bg-[#efeee5]"
                  required
                />

                <label htmlFor="email" className="font-semibold mt-10">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="abdurehman0047@gmail.com"
                  className="p-2 border-2 rounded-lg border-[#274546] focus:border-action focus:ring-0 bg-[#efeee5]"
                  required
                />

                <label htmlFor="message" className="font-semibold mt-10">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where for any reason whatsoever..."
                  className="py-2 px-2 border-2 rounded-lg border-[#274546] focus:border-action focus:ring-0 bg-[#efeee5]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-20 md:w-3/6 text-center text-[#f99a49] border-2 border-[#f99a49] hover:bg-[#f99a49]/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;
