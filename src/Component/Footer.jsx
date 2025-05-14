import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b1224] text-white pt-20 pb-10 relative mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-sm text-gray-300 mb-4">
            An IT consultancy can help you assess your technology needs and develop a technology strategy that aligns with your business.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <div className="w-12 h-1 bg-white mb-4" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Explore</a></li>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Our Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <div className="w-12 h-1 bg-white mb-4" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Cyber Security</a></li>
            <li><a href="#">IT Management</a></li>
            <li><a href="#">QA & Testing</a></li>
            <li><a href="#">Infrastructure Plan</a></li>
            <li><a href="#">IT Consultant</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-sm text-gray-300">
            Curabitur aliquet quam posuere blandit elementum. Insd orci ipsum id porta dapibus.
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-16 border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
          <span>Tronix</span>
        </div>
        <p className="mt-2">Copyright © 2024. All Rights Reserved.</p>
      </div>

      {/* Side links */}
      <div className="fixed top-1/3 right-0 space-y-1 z-20">
        {['Hire Us'].map((label, idx) => (
          <a
            key={idx}
            href="#"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
