import "./App.css";
import Sidebar from "./Sidebar";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaCode,
  FaJava,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiNestjs,
  SiDotnet,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiJsonwebtokens,
  SiSwagger,
  SiTypeorm,
  SiGit,
  SiPostman,
  SiSocketdotio,
  SiReact,
  SiHtml5,
} from "react-icons/si";

const tecnologias = [
  {
    categoria: "Backend y Lenguajes",
    items: [
      { nombre: "Node.js", icono: SiNodedotjs },
      { nombre: "NestJS", icono: SiNestjs },
      { nombre: "C#", icono: FaCode },
      { nombre: ".NET", icono: SiDotnet },
      { nombre: "Java", icono: FaJava },
      { nombre: "Python", icono: SiPython },
      { nombre: "TypeScript", icono: SiTypescript },
      { nombre: "JavaScript", icono: SiJavascript },
    ],
  },
  {
    categoria: "Bases de Datos",
    items: [
      { nombre: "PostgreSQL", icono: SiPostgresql },
      { nombre: "MySQL", icono: SiMysql },
      { nombre: "SQLite", icono: SiSqlite },
      { nombre: "MongoDB", icono: SiMongodb },
    ],
  },
  {
    categoria: "Arquitectura y Herramientas",
    items: [
      { nombre: "JWT", icono: SiJsonwebtokens },
      { nombre: "Swagger", icono: SiSwagger },
      { nombre: "TypeORM", icono: SiTypeorm },
      { nombre: "Git", icono: SiGit },
      { nombre: "GitHub", icono: FaGithub },
      { nombre: "Postman", icono: SiPostman },
      { nombre: "Socket.IO", icono: SiSocketdotio },
    ],
  },
  {
    categoria: "Frontend",
    items: [
      { nombre: "React", icono: SiReact },
      { nombre: "HTML", icono: SiHtml5 },
      { nombre: "CSS", icono: FaCss3Alt },
    ],
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
      "API REST modular para e-commerce. Incluye registro/login, seguridad con JWT y CRUD de productos y categorías.",
    enlace: "https://github.com/osomoya94/ecommerce-backend",
    imagen:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
  },
];

const educacion = [
  {
    nombre: "Instituto de Estudios Superiores Santa María",
    titulo: "Técnico Superior en Desarrollo de Software",
    anio: "2024",
    descripcion:
      "Formación terciaria orientada a programación, diseño de software y desarrollo de aplicaciones.",
  },
  {
    nombre: "Henry",
    titulo: "Desarrollador Full Stack",
    anio: "2025",
    descripcion:
      "Bootcamp intensivo enfocado en desarrollo web full stack, trabajo en equipo y construcción de proyectos.",
  },
  {
    nombre: "Centro de Formación Profesional",
    titulo: "Programador",
    anio: "2025",
    descripcion:
      "Capacitación práctica en lógica, programación y fundamentos para el desarrollo de software.",
  },
];

function App() {
  return (
    <div className="layout-principal">
      <div className="columna-sidebar">
        <Sidebar />
      </div>

      <main className="contenido-principal">
        <section className="seccion-principal">
          <h2 className="titulo-seccion">Mis Skills</h2>

          {tecnologias.map((bloque) => (
            <article
              key={bloque.categoria}
              className="tarjeta-base tarjeta-skill"
            >
              <h3 className="titulo-bloque">{bloque.categoria}</h3>
              <ul className="lista-skills">
                {bloque.items.map((item) => {
                  const skill =
                    typeof item === "string"
                      ? { nombre: item, icono: FaCode }
                      : item;

                  const Icono = skill.icono;

                  return (
                    <li key={skill.nombre} className="skill-item">
                      <span className="skill-icono">
                        <Icono />
                      </span>
                      <span className="skill-nombre">{skill.nombre}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </section>

        <section className="seccion-principal">
          <h2 className="titulo-seccion">Mis proyectos</h2>

          {proyectos.map((estudio) => (
            <article
              key={estudio.nombre}
              className="tarjeta-base tarjeta-proyecto"
            >
              <h3 className="titulo-proyecto">{estudio.nombre}</h3>
              <p className="meta-proyecto">{estudio.rol}</p>
              <div className="media-proyecto">
                <img
                  src={estudio.imagen}
                  alt={estudio.nombre}
                  className="imagen-proyecto"
                  loading="lazy"
                />
              </div>
              <p className="descripcion-proyecto">{estudio.descripcion}</p>
              <div className="acciones-proyecto">
                <a
                  href={estudio.enlace}
                  target="_blank"
                  rel="noreferrer"
                  className="boton-cv"
                >
                  Ver repositorio
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="seccion-principal">
          <h2 className="titulo-seccion">Educación</h2>

          {educacion.map((item) => (
            <article
              key={item.nombre}
              className="tarjeta-base tarjeta-educacion"
            >
              <div className="cabecera-educacion">
                <p className="anio-educacion">{item.anio}</p>
                <h3 className="titulo-educacion">{item.titulo}</h3>
                <p className="institucion-educacion">{item.nombre}</p>
              </div>

              <p className="descripcion-educacion">{item.descripcion}</p>
            </article>
          ))}
        </section>

        <section className="seccion-contacto">
          <h2>Contacto</h2>
          <h3>Trabajemos juntos</h3>
          <p>
            Actualmente estoy abierto a oportunidades laborales, ya sea un
            puesto a tiempo completo, una colaboración como freelance o
            simplemente una charla sobre tecnología.
          </p>

          <div className="contacto-links">
            <a href="mailto:emanuelmoya11@gmail.com" className="contacto-item">
              <span>
                Envíame un
                <br />
                correo electrónico
              </span>
              <FaEnvelope className="icono-contacto" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}cv/CV-Emanuel-Moya.pdf`}
              download
              className="contacto-item"
            >
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
              rel="noreferrer"
              className="contacto-item"
            >
              <span>LinkedIn</span>
              <FaLinkedin className="icono-contacto" />
            </a>

            <a
              href="https://github.com/osomoya94"
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <span>GitHub</span>
              <FaGithub className="icono-contacto" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
