
import Projects from '../Compo/Projects.jsx';
// import Contact from '../Compo/Contact.jsx';
import AnimatedComponent from '../design/AnimatedComponent.jsx';
import Mail from '../Compo/Mail.jsx';
import Skills from '../Compo/Skills.jsx';
import Aboutme from '../Component/Aboutme.jsx';
import Education from '../Compo/Education.jsx';


const Home = () => {
    return (
        
        <div className="px-4 md:px-8 lg:px-16 xl:px-24">
            <div className=''>
              <AnimatedComponent>
              <Aboutme></Aboutme>
              <Education></Education>
             <Skills></Skills>
              <Projects></Projects>
             <Mail></Mail>
              </AnimatedComponent>
              
            </div>
        </div>
    );
};

export default Home;
