import Marquee from 'react-fast-marquee';

const categories = [
  { name: 'WEB & MOBILE APP DEVELOPMENT', color: 'bg-blue-500' },
  { name: 'DATA ENTRY', color: 'bg-yellow-400' },
  { name: 'DATA SCRAPING', color: 'bg-green-400' },
  { name: 'SEO', color: 'bg-pink-500' },
  { name: 'SOCIAL MEDIA MARKETING', color: 'bg-purple-400' },
  { name: 'VIDEO EDITING', color: 'bg-red-500' },
  { name: 'UI/UX DESIGN', color: 'bg-indigo-500' },
  { name: 'AUTOMATION', color: 'bg-orange-400' },
  { name: 'GRAPHICS DESIGN', color: 'bg-orange-400' },
];

const BusinessCategories = () => {
  return (
    <section className="bg-[#f8f9fc] py-12 px-6 text-center">
      {/* Tag */}
     

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        Our <span className="text-blue-600">main</span> industries
      </h2>

      {/* Marquee */}
      <Marquee gradient={false} speed={50}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center mx-4 bg-white rounded-xl px-5 py-3 shadow min-w-max hover:shadow-md transition"
          >
            <span className={`w-2 h-2 rounded-full mr-2 ${category.color}`}></span>
            <span className="text-gray-800 font-medium">{category.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BusinessCategories;
