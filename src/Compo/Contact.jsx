import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <span className="text-lg text-gray-300">
          Do you have a project in mind? Contact me here.
        </span>
      </div>
      <div className="flex flex-wrap -mx-4 px-24">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg relative flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl font-semibold mb-4">
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p className="flex items-center mb-2">
              <i className="uil uil-envelope text-lg mr-2"></i> Email:
              asifulalam652@gmail.com
            </p>
            <p className="flex items-center">
              <i className="uil uil-phone text-lg mr-2"></i> Phone:+8801521251680
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form id="contact-form">
              <div className="mb-4 flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full h-14 text-black bg-gray-100 border-2 border-gray-300 rounded-lg px-4 outline-none focus:bg-white"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full h-14 text-black bg-gray-100 border-2 border-gray-300 rounded-lg px-4 outline-none focus:bg-white"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full h-64 text-black bg-gray-100 border-2 border-gray-300 rounded-lg p-4 outline-none resize-none focus:bg-white"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transform hover:scale-105">
                  Send{" "}
                  <i className="uil uil-message ml-2 -rotate-45 text-lg"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
