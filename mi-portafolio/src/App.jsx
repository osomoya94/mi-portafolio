import "./App.css";
import Sidebar from "./Sidebar";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const tecnologias = [
  {
    categoria: "Backend y Lenguajes",
    items: [
      "Node.js",
      "NestJS",
      "C#",
      ".NET",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    categoria: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    categoria: "Arquitectura y Herramientas",
    items: [
      "JWT",
      "Swagger",
      "TypeORM",
      "Git",
      "GitHub",
      "Postman",
      "Socket.IO",
    ],
  },
  {
    categoria: "Frontend",
    items: ["React", "HTML", "CSS"],
  },
];

const proyectos = [
  {
    nombre: "Veterinaria & Petshop",
    rol: "Backend Developer",
    descripcion:
      "API REST con autenticación y autorización (JWT + roles). Gestión de usuarios, mascotas, turnos, productos y órdenes. Documentación de API con Swagger.",
    enlace: "https://github.com/osomoya94/Veterinaria-Petshop",
    imagen:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    nombre: "Ecommerce Backend",
    rol: "Backend Developer",
    descripcion:
      "API REST modular para e-commerce. Incluye registro/login, seguridad con JWT y CRUD de productos/categorías.",
    enlace: "https://github.com/osomoya94/ecommerce-backend",
    imagen:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
  },
];

const educacion = [
  {
    nombre: "Instituto de estudios superiores Santa Maria",
    titulo: "Tecnico superior en desarrollo de sofware",
    anio: "2024",
    descripcion: "luego pienso",
  },
  {
    nombre: "Henry",
    titulo: "Desarrollador fullstack",
    anio: "2025",
    descripcion: "luego pongo",
  },
  {
    nombre: "Centro de formacion profesional",
    titulo: "Programador",
    anio: "2025",
    descripcion: "luego pongo",
  },
];

function App() {
  return (
    <div className="layout-principal">

      <div className="columna-sidebar">
          <Sidebar />
      </div>

      <main className="contenido-principal">
        <h2 className="titulo-seccion"> Mis Skills</h2>
        {tecnologias.map((bloque) => (
          <div key={bloque.categoria}>
            <h3 className="titulo-bloque">{bloque.categoria}</h3>
            <ul>
              {bloque.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <hr />

        <h2 className="titulo-seccion"> Mis proyectos</h2>
        {proyectos.map((estudio) => (
          <div key={estudio.nombre} className="tarjeta-proyecto">
            <h3>{estudio.nombre}</h3>
            <img
              src={estudio.imagen}
              alt={estudio.nombre}
              className="imagen-proyecto"
            />
            <h4>{estudio.rol}</h4>
            <p>{estudio.descripcion}</p>
            <p>
              <a href={estudio.enlace} target="_blank" className="boton-cv">
                Ver repositorio
              </a>
            </p>
          </div>
        ))}

        <hr />

        <h2 className="titulo-seccion" >Educacion</h2>
        {educacion.map((educacion) => (
          <div key={educacion.nombre}>
            <h3>{educacion.nombre}</h3>
            <h4>{educacion.titulo}</h4>
            <h5>{educacion.anio}</h5>
            <p>{educacion.descripcion}</p>
          </div>
        ))}

        <hr />

        <section className="seccion-contacto">
          <div className="contacto-overlay">
            <h2>Contacto</h2>
            <h3>Trabajemos juntos</h3>
            <p>
              Actualmente estoy abierto a oportunidades laborales, ya sea un
              puesto a tiempo completo, una colaboración como freelance o
              simplemente una charla sobre tecnología.
            </p>

            <div className="contacto-links">
              <a
                href="mailto:emanuelmoya11@gmail.com"
                className="contacto-item"
              >
                <span>
                  Envíame un
                  <br />
                  correo electrónico
                </span>
                <FaEnvelope className="icono-contacto" />
              </a>

              <a href={`${import.meta.env.BASE_URL}cv/CV-Emanuel-Moya.pdf`} download className="contacto-item">
                <span>
                  Descargar
                  <br />
                  CV
                </span>
                <FaFileDownload className="icono-contacto" />
              </a>

              <a
                href="https://www.linkedin.com/in/emanuel-moya-desarrolladorfullstack/"
                target="_blank"
                className="contacto-item"
              >
                <span>LinkedIn</span>
                <FaLinkedin className="icono-contacto" />
              </a>

              <a
                href="https://github.com/osomoya94"
                target="_blank"
                className="contacto-item"
              >
                <span>GitHub</span>
                <FaGithub className="icono-contacto" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
