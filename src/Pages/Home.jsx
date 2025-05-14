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
    <div className="ml-64 w-auto h-auto"> 
      <Banner />
      <BusinessIntro />
      <BusinessCategories></BusinessCategories>
      <ServicesSection></ServicesSection>
      <StatsSection></StatsSection>
      <ToolsSection></ToolsSection>
      <ContactWhyUs></ContactWhyUs>
      <BlogSection></BlogSection>
    </div>
  );
};

export default Home;
