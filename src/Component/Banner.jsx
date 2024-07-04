import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 lg:p-20">
      <div className="text-center lg:text-left lg:w-1/2 space-y-5">
        <h1 className="text-5xl font-extrabold">Hello, I am Asif</h1>
        <TypeAnimation
          sequence={["Fullstack Web Developer.", 10000]}
        />
        <div className="flex justify-center lg:justify-start space-x-4 mt-5">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.287-.012-1.244-.012-2.263-3.338.724-4.043-1.413-4.043-1.413-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.204.087 1.838 1.23 1.838 1.23 1.07 1.834 2.807 1.304 3.492.996.107-.776.42-1.304.763-1.603-2.665-.3-5.466-1.333-5.466-5.93 0-1.312.467-2.383 1.23-3.224-.123-.3-.533-1.513.117-3.155 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.4 11.5 11.5 0 0 1 3 .4c2.295-1.552 3.3-1.23 3.3-1.23.65 1.642.24 2.855.12 3.155.765.841 1.23 1.912 1.23 3.224 0 4.61-2.807 5.625-5.475 5.918.43.37.81 1.096.81 2.21 0 1.595-.014 2.877-.014 3.272 0 .322.192.698.801.58C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 3h-15C3.57 3 3 3.57 3 4.5v15c0 .93.57 1.5 1.5 1.5h15c.93 0 1.5-.57 1.5-1.5v-15C21 3.57 20.43 3 19.5 3zM8.46 18H5.74v-8.93h2.72V18zm-1.36-9.97c-.87 0-1.43-.56-1.43-1.27 0-.72.57-1.28 1.45-1.28.88 0 1.43.56 1.44 1.28 0 .71-.56 1.27-1.46 1.27zM18.25 18h-2.73v-4.58c0-1.09-.39-1.83-1.35-1.83-.74 0-1.18.5-1.37.98-.07.17-.09.4-.09.64v4.79H10.98s.04-7.78 0-8.93h2.73v1.26c.36-.56 1-1.36 2.42-1.36 1.77 0 3.1 1.15 3.1 3.63V18z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.95 4.57c-.89.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.17-2.71 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 4.95 4.95 0 0 1-2.21.08 4.92 4.92 0 0 0 4.59 3.42 9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14v-.64a9.98 9.98 0 0 0 2.46-2.54z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative lg:w-1/2 mt-10 lg:mt-0">
        <motion.img
          src="src\assets\asif pic.jpeg"
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default Banner;
