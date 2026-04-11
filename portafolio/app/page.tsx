import Image from "next/image";
import HeaderModule from "./Componentes/Header/Header"
import HeroModule from "./Componentes/Hero/Hero"
import Interests from "./Componentes/Interests/Interests";

export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule />
    <Interests />
  
    </>
  );
}
