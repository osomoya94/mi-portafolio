import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import fotoPerfil from "./img/foto-perfil.avif";

function Sidebar() {
  return (
    <header className="encabezado">
      <img src={fotoPerfil} alt="Emanuel Moya" className="foto-perfil" />
      <h1>Emanuel Moya</h1>
      <h3>Backend Developer | Full Stack Web Developer</h3>
      <p> Catamarca, Argentina</p>
      <p className="bio">
        Desarrollador Full Stack enfocado en Backend y estudiante del último año
        de la Tecnicatura Superior en Desarrollo de Software. Construyo APIs
        REST seguras y escalables con Node.js, NestJS, TypeScript y PostgreSQL.
      </p>
      <a href={`${import.meta.env.BASE_URL}cv/CV-Emanuel-Moya.pdf`} download className="boton-cv">
        Descargar CV
      </a>
      <div className="enlaces-contacto">
        <a href="mailto:emanuelmoya11@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/emanuel-moya-desarrolladorfullstack/"
          target="_blank"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/osomoya94" target="_blank" title="GitHub">
          <FaGithub />
        </a>
      </div>
    </header>
  );
}

export default Sidebar;
