import { FaBullhorn } from "react-icons/fa";
import bannerImage from "../assets/logo.png"; // Replace with a proper banner image if available
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 bg-gradient-to-br from-white to-blue-50 text-gray-800 ml-64">
      {/* Header: Logo + Title */}
      <div className="flex items-center gap-4 mb-10">
        <img src={logoImg} alt="Logo" className="w-14 h-14 rounded-full shadow" />
        <h1 className="text-4xl font-extrabold tracking-wide text-blue-900">
          Digital Marketing
        </h1>
      </div>

      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden mb-12 shadow-lg">
        <img
          src={bannerImage}
          alt="Digital Marketing Banner"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Section: Intro */}
      <div className="flex items-center gap-4 mb-6">
        <FaBullhorn className="text-blue-600 text-4xl animate-pulse" />
        <h2 className="text-3xl font-semibold text-blue-800">
          Grow Your Business With Smart Digital Strategy
        </h2>
      </div>
      <p className="text-lg mb-10 leading-relaxed text-gray-700 max-w-4xl">
        Our Digital Marketing services focus on increasing visibility, building trust, 
        and driving conversion through tailored strategies including SEO, social media 
        marketing, content creation, and performance tracking.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "📈 SEO Optimization",
            desc: "Boost your rankings and drive organic traffic with data-driven SEO practices.",
          },
          {
            title: "📢 Social Media Strategy",
            desc: "Craft engaging content and campaigns to reach your audience on every platform.",
          },
          {
            title: "📬 Email Marketing",
            desc: "Automate nurturing sequences to convert leads into long-term customers.",
          },
          {
            title: "✍️ Content Creation",
            desc: "Deliver high-quality blogs, ads, and visuals that inspire and educate.",
          },
        ].map(({ title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-blue-600"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-100 rounded-2xl py-10 px-4 shadow-inner">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Ready to Accelerate Your Growth?
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Let us help you create a results-driven digital strategy that builds awareness,
          increases engagement, and delivers real value.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full font-semibold transition"
        >
          Hire Us
        </Link>
      </div>
    </div>
  );
};
export default DigitalMarketing;
