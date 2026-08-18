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
          Full Stack Developer | Backend con Node.js, NestJS y TypeScript
        </h3>
        <p className="ubicacion-sidebar">Catamarca, Argentina</p>
        <p className="bio">
          Desarrollador Full Stack con orientación al Backend y experiencia
          profesional freelance desarrollando software a medida para un cliente
          real.
          <br />
          Trabajo principalmente con Node.js, NestJS, TypeScript, PostgreSQL,
          Prisma y React, participando desde el relevamiento de requerimientos
          hasta el desarrollo, pruebas, despliegue y mantenimiento.
          <br />
          También tengo experiencia con C#/.NET y continúo desarrollando
          LoteríaVirtual como proyecto personal en evolución.
          <br />
          Utilizo herramientas de IA como copiloto técnico para analizar,
          depurar y revisar alternativas, validando cada implementación antes de
          incorporarla.
        </p>
      </div>

      <div className="acciones-sidebar">
        <a
          href={`${import.meta.env.BASE_URL}cv/CV-Emanuel-Moya.pdf`}
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
