import { useInView } from "react-intersection-observer";

const CTA = ({ img, head, text }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-[#6ce5b1] rounded-3xl mx4 sm:mxauto py-8 px-8 flex flex-col sm:flex-row-reverse gap-12">
      <img
        ref={myRef}
        src={img}
        alt="doodle"
        className={`fade-in sm:w-3/6 md:w-5/12 drop-shadow-2xl ${
          myElementIsVisible ? "appear" : ""
        }`}
      />
      <div
        ref={myRef}
        className={`fade-in space-y-8 my-auto sm:w-3/6 md:w-4/6 lg:px-6 ${
          myElementIsVisible ? "appear" : ""
        }`}
      >
        <h2 className="font-bold text-4xl xl:text-5xl 2xl:text6xl">{head}</h2>
        <p className="font-jost 2xl:text-xl">{text}</p>

        <div className="lg:pt-6"></div>
      </div>
    </div>
  );
};

export default CTA;
