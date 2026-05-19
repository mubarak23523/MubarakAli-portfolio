import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import WebProjects from "./components/WebProjects";
import Loader from "./components/Loader";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <BackgroundEffects />
      <Loader />
      <Navbar />
      <Hero />
      <Reveal>
      <About />
      </Reveal> 
      <Reveal> 
      <Skills />
      </Reveal> 
      <Reveal> 
      <Projects />
      </Reveal>
      <Reveal>  
      <WebProjects />
      </Reveal> 
      <Reveal> 
      <Contact />
      </Reveal> 
      <Reveal> 
      <Footer />
      </Reveal> 
      <Reveal />
    </>
  );
}

export default App;