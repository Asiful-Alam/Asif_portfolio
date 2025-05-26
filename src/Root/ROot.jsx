import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-teal-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};

export default Root;
