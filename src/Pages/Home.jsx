
import Banner from '../Component/Banner.jsx';
import Aboutme from '../Compo/Aboutme.jsx';
import Projects from '../Compo/Projects.jsx';
// import Contact from '../Compo/Contact.jsx';
import AnimatedComponent from '../design/AnimatedComponent.jsx';
import Mail from '../Compo/Mail.jsx';


const Home = () => {
    return (
        
        <div className="px-4 md:px-8 lg:px-16 xl:px-24">
            <div className=''>
              <AnimatedComponent>
              <Banner></Banner>
              <Aboutme></Aboutme>
              <Projects></Projects>
             <Mail></Mail>
              </AnimatedComponent>
              
            </div>
        </div>
    );
};

export default Home;
