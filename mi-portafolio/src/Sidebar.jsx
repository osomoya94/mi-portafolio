import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import fotoPerfil from "./img/foto-perfil.png";

function Sidebar() {
  return (
    <header className="encabezado">
      <div className="perfil-sidebar">
        <img src={fotoPerfil} alt="Emanuel Moya" className="foto-perfil" />
        <h1 className="nombre-sidebar">Emanuel Moya</h1>
      </div>

      <div className="info-sidebar">
        <h3 className="rol-sidebar">
          Backend Developer | Full Stack Developer
        </h3>
        <p className="ubicacion-sidebar">Catamarca, Argentina</p>
        <p className="bio">
          Desarrollador Full Stack con enfoque en Backend, especializado en la
          construcción de APIs REST escalables.
          <br />
          Experiencia trabajando con Node.js, NestJS, TypeScript, PostgreSQL y
          también con tecnologías como C# y .NET.
          <br />
          He desarrollado aplicaciones completas tanto de forma individual como
          en equipo, aplicando buenas prácticas, arquitectura modular y control
          de versiones con Git/GitHub.
          <br />
          Actualmente utilizo herramientas de inteligencia artificial para
          optimizar el desarrollo, mejorar la productividad y acelerar el
          aprendizaje continuo.
        </p>
      </div>

      <div className="acciones-sidebar">
        <a
          href={`${import.meta.env.BASE_URL}cv/CV_Emanuel_Moya_Actual.pdf`}
          download
          className="boton-cv"
        >
          Descargar CV
        </a>

        <div className="enlaces-contacto">
          <a href="mailto:emanuelmoya11@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/emanuel-moya-desarrolladorfullstack/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/osomoya94"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
