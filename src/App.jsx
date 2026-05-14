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

function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <BackgroundEffects />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WebProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;