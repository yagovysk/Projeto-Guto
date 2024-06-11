import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";
import { Sobre } from "./Components/Sobre/Sobre";
import { Antes } from "./Components/Galeria/Antes";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Depoiments } from "./Components/Depoiments/Depoiments";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  const [showButton, setShowButton] = useState(false);

  // Função para manipular o evento de scroll
  const handleScroll = () => {
    // Calcule a posição do meio da página
    const middleOfPage = window.innerHeight / 2;

    // Verifique se a posição do scroll é maior que o meio da página
    const isPastMiddle = window.scrollY > middleOfPage;

    // Atualize o estado com base na condição
    setShowButton(isPastMiddle);
  };

  // Adicione um ouvinte de evento de scroll quando o componente for montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="main">
      <Menu />
      <Home />
      {showButton && (
        <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp className="scrolltotop-icon" />
        </button>
      )}
      <Services />
      <Sobre />
      <Antes />
      <Depoiments />
      <Footer />
    </main>
  );
}
