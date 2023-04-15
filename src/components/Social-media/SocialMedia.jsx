import instagram from "./../../assets/svg/instagram.svg";
import github from "./../../assets/svg/github.svg";
import "./socialMedia.css";

export default function SocialMedia() {
  return (
    <nav className="social">
      <a
        href="https://github.com/JavierCarrasco08"
        title="Github"
        className="social__link"
        rel="noopener referrer"
        target="_blank">
        <img src={github} alt="Github" />
      </a>
      <a
        href="https://www.instagram.com/javier_carrasco08/?hl=es-la"
        title="Instagram"
        className="social__link"
        rel="noopener referrer"
        target="_blank">
        <img src={instagram} alt="Instagram" />
      </a>
    </nav>
  );
}
