import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Index () {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
