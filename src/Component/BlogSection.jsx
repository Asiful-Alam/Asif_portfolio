import { CalendarDays, User } from "lucide-react";
import logo from "../assets/logo.png";

const blogPosts = [
  {
    title: "Your Business Safe Ensure High Availability.",
    date: "June 4, 2023",
    author: "admin",
    image: logo,
    link: "#"
  },
  {
    title: "Data Backup and Recovery Best Practices Small",
    date: "June 4, 2023",
    author: "admin",
    image: logo,
    link: "#"
  },
  {
    title: "Small Business Disaster Recovery Planning",
    date: "June 4, 2023",
    author: "admin",
    image: logo,
    link: "#"
  }
];

export default function BlogSection() {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Blog Posts</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden text-left border hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt="blog cover"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarDays className="h-4 w-4 mr-1" />
                {post.date}
                <User className="h-4 w-4 ml-4 mr-1" />
                by {post.author}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {post.title}
              </h3>
              <a href={post.link} className="text-blue-600 font-medium hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See All Blog Button */}
      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition"
        >
          See All Blog Posts
        </a>
      </div>
    </div>
  );
}
