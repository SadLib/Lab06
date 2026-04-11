import Image from "next/image";
import HeaderModule from "./Componentes/Header/Header"
import HeroModule from "./Componentes/Hero/Hero"
import Interests from "./Componentes/Interests/Interests";
import CV from "./Componentes/CV/CV";
import Projects from "./Componentes/Projects/Projects";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";

export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule />
    <Interests />
    <CV />
    <Projects />
    <Contact />
    <Footer />
    <a href="#home" className="scroll-top" id="scroll-top">
        <i className="fas fa-arrow-up"></i>
    </a>
    </>
  );
}
