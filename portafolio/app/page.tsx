import Image from "next/image";
import HeaderModule from "./Componentes/Header/Header"
import HeroModule from "./Componentes/Hero/Hero"
import Interests from "./Componentes/Interests/Interests";
import CV from "./Componentes/CV/CV";
import Projects from "./Componentes/Projects/Projects";

export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule />
    <Interests />
    <CV />
    <Projects />
  
    </>
  );
}
