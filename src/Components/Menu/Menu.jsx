import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo-teste.png";
import "./Menu.css";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset, behavior: "smooth" });

      // Feche o menu após clicar em um item (opcional)
      setIsMenuOpen(false);
    }
  };
  return (
    <nav
      aria-label="Menu de Navegação da página"
      className={`container-menu ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo Souza Black" />{" "}
      </div>
      <div
        className={`menu-toggle ${isScrolled ? "hidden" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <AiOutlineClose
            aria-label="botão que fecha o menu de navegação em tela para celulares e tablets."
            className="icon-close"
          />
        ) : (
          <div
            aria-label="botão que abre o menu de navegação em tela para celulares e tablets"
            className="hamburger-icon"
          >
            &#9776;
          </div>
        )}
      </div>
      <ul
        aria-label="lista com os itens para escolha do menu de navegação."
        className={`menu-list ${isMenuOpen ? "menu-expanded" : ""}`}
      >
        <li
          aria-label="item clicável, rolagem para a página Home."
          className="item-list"
          onClick={() => scrollToSection("home")}
        >
          Início
        </li>
        <li
          aria-label="item clicável, rolagem para a página Sobre Mim."
          className="item-list"
          onClick={() => scrollToSection("sobre-mim")}
        >
          Sobre Mim
        </li>
        <li
          aria-label="item clicável, rolagem para a página de Serviços."
          className="item-list"
          onClick={() => scrollToSection("servicos")}
        >
          Serviços
        </li>
        <li
          aria-label="item clicável, rolagem para a página de Galeria de fotos."
          className="item-list"
          onClick={() => scrollToSection("galeria")}
        >
          Galeria
        </li>
        <li
          aria-label="item clicável, rolagem para a página de Depoimentos de Alunos."
          className="item-list"
          onClick={() => scrollToSection("depoiments")}
        >
          Depoimentos
        </li>
      </ul>
    </nav>
  );
}
