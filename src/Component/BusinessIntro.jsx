import { FaCheckCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';

// Replace with your actual images
import slide2 from '../assets/logo.png';
import slide3 from '../assets/logo.png';

const BusinessIntro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12">
      {/* Left - Swiper Carousel */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} 
          className="rounded-xl w-full h-64"
        >
          <SwiperSlide className="transition-transform scale-105">
            <img
              src="https://media.istockphoto.com/id/1460172015/photo/businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business.jpg?s=2048x2048&w=is&k=20&c=C-eErNHMrUsJz7D7Y3gZZklVHbDFu7l_Oh1z9vs4BVs="
              alt="Business Handshake"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="scale-90 opacity-80">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
          <SwiperSlide className="scale-90 opacity-80">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <p className="text-black font-semibold text-lg uppercase tracking-wide mb-2">
          Welcome to our company
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Make Your Business Great With Tronix
        </h2>
        <p className="text-gray-600 mb-6">
          An IT solution service company may serve clients from various industries such as healthcare,
          finance, education, and manufacturing. They may work on a project basis...
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
          {/* Left: Year */}
          <div className="flex items-center sm:items-start sm:flex-col">
            <div className="text-5xl text-blue-600 font-bold sm:mb-2 mr-4 sm:mr-0">1996</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Started Journey
            </div>
          </div>

          {/* Right: Features */}
          <ul className="space-y-3 text-left flex-1">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Emergency Solutions Anytime
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Affordable price up to 2 years
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Reliable & Experienced Team
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntro;
