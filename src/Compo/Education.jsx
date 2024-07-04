import React from 'react';

const Education = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12 lg:py-20 px-6 lg:px-32">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-8">Education</h2>

                <div className="space-y-12">
                    {/* Education Item 1 */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Bachelor of Science </h3>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-2"> Computer Science</h3>
                          <div className="flex items-center space-x-4">
                          <img src="https://i.ibb.co/SxdGhyb/national-bal-logo.jpg" alt="College Logo" className="w-16 h-16 rounded-full" />
                          <p className="text-lg text-gray-300">National University</p>
                          </div>
                            <p className="text-lg text-gray-300">2017 - 2023</p>
                        </div>
                    </div>

                    {/* Education Item 2 */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Higher Secondary School</h3>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-2">Science</h3>
                            <div className="flex items-center space-x-4">
                                <img src="https://i.ibb.co/qxBjnt5/bsmarpc-logo.jpg" alt="College Logo" className="w-16 h-16 rounded-full" />
                                <p className="text-lg text-gray-300">Bir Shreshtha Munshi Abdur Rouf Public College</p>
                            </div>
                            <p className="text-lg text-gray-300">2015 - 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
