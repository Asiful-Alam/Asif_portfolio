import {
  Home,
  Briefcase,
  Layers,
  Wrench,
  Image,
  Pen,
  User,
  Phone,
} from "lucide-react";
import logo from "../assets/logggggo.jfif";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#industries", label: "Industries", icon: Layers },
  { href: "#tools", label: "Free Tools", icon: Briefcase },
  { href: "#portfolio", label: "Portfolio", icon: Image },
  { href: "#blog", label: "Blog", icon: Pen },
  { href: "#about", label: "About", icon: User },
  { href: "#contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  return (
    <div className="flex bg-white text-gray-800">
      {/* Sidebar */}
      <div className="h-screen w-80 fixed flex flex-col justify-between border-r z-10 bg-white text-gray-800">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8 p-8">
            <img
              src={logo}
              alt="Orpyn Logo"
              className="w-72 flex justify-center"
            />
          </div>
          <hr className="border-gray-200 mb-6" />

          {/* Navigation Links with Styled Button */}
          <nav className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="relative inline-block px-4 py-3 w-full font-medium group"
              >
               <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-cyan-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full  border-2 border-white group-hover:bg-white dark:bg-white dark:border-cyan-700 dark:group-hover:text-black"></span>
                <span className="relative flex items-center gap-3 text-black group-hover:text-black dark:text-black dark:group-hover:text-black text-4xl">
                  <Icon size={36} />
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6 text-sm">
          <p className="text-xs text-gray-500">
            &copy; 2025 Orpyn. All rights reserved.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-80 p-6 w-full"></div>
    </div>
  );
};

export default Navbar;
