import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Footer.css";

export function Footer() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer">
      <h3 aria-label="Título do rodapé da página">
        <span>GT</span> Personal
      </h3>
      <nav className="footer-menu" aria-label="Menu de navegação do rodapé.">
        <ul className="footer-list">
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página inicial."
            onClick={() => handleScrollToSection("home")}
          >
            Início
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página Sobre Mim."
            onClick={() => handleScrollToSection("sobre-mim")}
          >
            Sobre Mim
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página de Serviços."
            onClick={() => handleScrollToSection("servicos")}
          >
            Serviços
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página de Galeria de fotos."
            onClick={() => handleScrollToSection("galeria")}
          >
            Galeria
          </li>
        </ul>
      </nav>
      <article className="footer-article">
        <div className="container-social">
          <a
            href="https://wa.me/+556195111383?text=Olá, vim pelo site."
            className="insta-button"
          >
            <IoLogoWhatsapp className="insta-icon" />
          </a>
          <a
            className="insta-button"
            href="https://www.instagram.com/gutenbergsalesoficial/"
            target="blank"
          >
            <RiInstagramFill className="insta-icon" />
          </a>
        </div>

        <a
          className="tgv-button"
          aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
          href="https://togyrogroupvictory.com/"
          target="blank"
        >
          Desenvolvido por Togyro <span>Group</span> Victory
        </a>
        <h3 className="title-direitos">
          © Todos os direitos reservados a Gutenberg Sales Pereira
        </h3>
      </article>
    </footer>
  );
}
