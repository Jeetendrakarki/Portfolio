import './App.css';
//importing images
import pp from "./assets/pp.png"
import project3 from "./assets/project3.png"
import photo4 from "./assets/photo4.JPG"
import DarkMode from './components/DarkMode';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Info from './components/Info';
import Skills from './components/Skills';
import Project from './components/Project';
import { About } from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';



function App() {
  return (
    <div>

    {/* <!-- dark mode button --> */}
    <DarkMode/>
    <div className="wrapper">
      {/* <!-- header section --> */}
      <Header/>
      {/* <!-- hero section --> */}
      <Hero/>

     

      {/* <!-- info section --> */}
      <Info/>
      
      {/* <!-- skills section --> */}
      <Skills/>
      
      {/* <!-- project section --> */}

  <Project/>

      {/* <!-- about me section --> */}
<About/>
     
      {/* <!-- contact section --> */}

      <Contact/>
      {/* <!-- footer section --> */}
     <Footer/>

      {/* <!-- Scroll button --> */}
     <Scroll/>
    </div>
     
    </div>
  );
}

export default App;
