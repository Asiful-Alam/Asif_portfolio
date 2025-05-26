import { ChevronDown } from "lucide-react";

const ScrollDownArrow = ({ target = "#next-section", className = "" }) => {
  return (
    <div className={`absolute top-[900px] left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${className}`}>
      <a
        href={target}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </div>
  );
};

export default ScrollDownArrow;
