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
import { useState } from "react";
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
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex text-gray-800">
      {/* Sidebar */}
      <aside className="h-screen w-64 bg-transparent fixed flex flex-col justify-between border-r shadow-sm">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
            <img src={logo} alt="Orpyn Logo" className="w-96" />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-4 px-4 py-3 rounded hover:bg-gray-100 transition text-gray-700 text-2xl font-medium"
              >
                <Icon size={40} />
                {label}
              </a>
            ))}
          </nav>
          
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-sm font-medium">{isOn ? "ON" : "OFF"}</span>
            <input
              type="checkbox"
              className="toggle toggle-success"
              checked={isOn}
              onChange={handleToggle}
            />
          </div>
      </aside>
    </div>
  );
};

export default Navbar;
