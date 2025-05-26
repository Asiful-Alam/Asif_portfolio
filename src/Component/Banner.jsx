import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import bannerImg from "../assets/vecteezy_the-web-developer-team-is-building-a-smartphone-app-in-flat_.webp";

const Banner = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 min-h-screen bg-transparent text-gray-800"
      id="banner"
    >
     
      <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
       <h1 className="text-8xl font-extrabold mb-6 text-[#11786d] tracking-tighter flex flex-wrap justify-center md:justify-start items-center gap-x-3">
  <span>Empowering Your</span>
  <span className="">
    <TypeAnimation
      sequence={["Vision", 3500, "Mission", 3500, "Goals", 3500, "Success", 3500]}
      speed={100}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: "inline" }}
    />
  </span>
</h1>


        <p className="text-xl md:text-2xl max-w-xl mx-auto md:mx-0 text-gray-600 leading-relaxed mb-8">
          At Orpyn, we specialize in automation, web & mobile development, and
          data-driven solutions tailored to help your business scale. Let us
          turn your ideas into cutting-edge digital products.
        </p>

        <button className="inline-flex items-center gap-3 bg-[#11786d] hover:bg-[#0e635c] text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started <ArrowRight size={20} />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-2xl relative z-0">
        <img
          src={bannerImg}
          alt="Web developer team building a smartphone app"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
          style={{ maxHeight: "600px" }}
        />
      </div>

      {/* Scroll Arrow */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500">
          <a
            href="#next-section"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      )}
    </section>
  );
};

export default Banner;
