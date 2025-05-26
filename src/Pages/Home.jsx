import Banner from "../Component/Banner";
import BlogSection from "../Component/BlogSection";
import BusinessCategories from "../Component/BusinessCategories";
import BusinessIntro from "../Component/BusinessIntro";
import ContactWhyUs from "../Component/ContactWhyUs";
import ServicesSection from "../Component/ServicesSection ";
import StatsSection from "../Component/StatsSection";
import ToolsSection from "../Component/ToolsSection";

const Home = () => {
  return (
    <div className="ml-64 w-auto h-auto ">
      <Banner />
      
      {/* Next section starts here to allow scroll from banner */}
      <div id="next-section">
        <BusinessIntro />
        <BusinessCategories />
        <ServicesSection />
        <StatsSection />
        <ToolsSection />
        <ContactWhyUs />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
