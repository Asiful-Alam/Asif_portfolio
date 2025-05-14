
const Banner = () => {
  // https://media.istockphoto.com/id/1460172015/photo/businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business.jpg?s=2048x2048&w=is&k=20&c=C-eErNHMrUsJz7D7Y3gZZklVHbDFu7l_Oh1z9vs4BVs=
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#11786d]">
          Empower Your Business with Modern Tech
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We build solutions that drive results and connect your ideas to innovation.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </section>

  );
};

export default Banner;
