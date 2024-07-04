import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
   <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="https://i.ibb.co/6FSRJZb/project-1.png" alt="Pet Adoption" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Pet Adoption</h3>
              <div className="flex flex-col md:flex-row md:space-x-3">
                <button className="btn btn-primary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/Pet_Adoption-client-side')}>
                  Client Link
                </button>
                <button className="btn btn-secondary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/Pet_Adoption-server-side')}>
                  Server Link
                </button>
                <button className="btn btn-accent" onClick={() => handleRedirect('https://full-project-pet.web.app/')}>
                  Live Link
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="https://i.ibb.co/q79LK8T/project-2.png" alt="Online Study" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Online Study</h3>
              <div className="flex flex-col md:flex-row md:space-x-3">
                <button className="btn btn-primary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/online_study-Client-Side')}>
                  Client Link
                </button>
                <button className="btn btn-secondary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/Online_study-Server_side')}>
                  Server Link
                </button>
                <button className="btn btn-accent" onClick={() => handleRedirect('https://online-study-2061e.web.app/')}>
                  Live Link
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="https://i.ibb.co/XzkDZJQ/project-3.png" alt="Travel" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Travel</h3>
              <div className="flex flex-col md:flex-row md:space-x-3">
                <button className="btn btn-primary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/travel-Cient-Side')}>
                  Client Link
                </button>
                <button className="btn btn-secondary mb-3 md:mb-0" onClick={() => handleRedirect('https://github.com/Asiful-Alam/travel-server-side')}>
                  Server Link
                </button>
                <button className="btn btn-accent" onClick={() => handleRedirect('https://travel-10a70.web.app/')}>
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
    
  );
};

export default Projects;
