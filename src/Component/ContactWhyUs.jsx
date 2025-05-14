const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Why Choose Us Section */}
        <div>
          <p className="text-sm text-blue-400 uppercase tracking-wide mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-extrabold leading-snug text-white mb-12">
            Why our IT solutions stand out
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-5 mb-10">
            <div className="bg-blue-600 p-4 rounded-full shadow-lg">
              <span className="text-white text-3xl">💻</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Web Development</h3>
              <p className="text-gray-300">
                Scalable, responsive, and custom-built websites that reflect
                your brand and drive results.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <span className="text-blue-600 text-3xl">🌐</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Internal Networking
              </h3>
              <p className="text-gray-300">
                Secure, high-performance internal network systems tailored to
                your infrastructure needs.
              </p>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="bg-blue-600 bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-extrabold text-white mb-10 text-center">
            Request a Service
          </h3>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white shadow-sm"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white shadow-sm"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white shadow-sm"
                placeholder="E.g., Website for my business"
              />
            </div>

            {/* Service Type & Specific Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Service Type
                </label>
                <select className="w-full p-3 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white shadow-sm">
                  <option value="">Select Type</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Support">Support</option>
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Service
                </label>
                <select className="w-full p-3 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white shadow-sm">
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Networking">Networking</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
