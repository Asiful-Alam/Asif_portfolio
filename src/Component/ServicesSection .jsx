import { Link } from 'react-router-dom';
import {
  FaBullhorn,
  FaChartBar,
  FaShieldAlt,
  FaPencilRuler,
} from "react-icons/fa";
import logoImg from "../assets/logo.png";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaBullhorn className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: "Digital Marketing",
      desc: "Boost your visibility and grow your brand with modern marketing strategies.",
      link: "/services/digital-marketing",
    },
    {
      icon: <FaChartBar className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: "Data Analysis",
      desc: "Transform data into actionable insights to drive smarter decisions.",
      link: "/services/data-analysis",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: "System Security",
      desc: "Protect your infrastructure with industry-grade security services.",
      link: "/services/system-security",
    },
    {
      icon: <FaPencilRuler className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: "UI/UX Design",
      desc: "Design user-focused interfaces for engaging and smooth experiences.",
      link: "/services/ui-ux-design",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Services We Provide
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Service */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={logoImg}
            alt="IT Management"
            className="rounded-xl mb-6 w-full h-60 object-cover"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            IT Management
          </h3>
          <p className="text-gray-600 mb-6">
            Streamline your IT operations with expert support. We ensure seamless integration, infrastructure, and data protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold transition">
              Start A Project
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-full font-semibold transition">
              Hire Us
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl text-center transition-all duration-300 cursor-pointer">
                {service.icon}
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 text-sm rounded-xl font-medium transition w-fit mx-auto">
                  Hire Us
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
