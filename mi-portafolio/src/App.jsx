import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaJava,
  FaCode,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiNestjs,
  SiDotnet,
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
  SiReact,
  SiHtml5,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiOllama,
  SiNotebooklm,
} from "react-icons/si";

const crearRutaProyecto = (carpeta, archivo) =>
  `${import.meta.env.BASE_URL}proyectos/${carpeta}/${archivo}`;

function CSharpIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        C#
      </text>
    </svg>
  );
}

const iaAplicadaAlDesarrollo = [
  { nombre: "ChatGPT", icono: SiOpenai },
  { nombre: "Claude", icono: SiClaude },
  { nombre: "Gemini", icono: SiGooglegemini },
  { nombre: "Ollama", icono: SiOllama },
  { nombre: "NotebookLM", icono: SiNotebooklm },
];

const tecnologias = [
  {
    categoria: "Backend y Lenguajes",
    items: [
      { nombre: "Node.js", icono: SiNodedotjs },
      { nombre: "NestJS", icono: SiNestjs },
      { nombre: "C#", icono: CSharpIcon },
      { nombre: ".NET", icono: SiDotnet },
      { nombre: "Java", icono: FaJava },
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
  {
    categoria: "IA aplicada al desarrollo",
    items: iaAplicadaAlDesarrollo,
  },
];

const proyectos = [
  {
    nombre: "Veterinaria & Petshop",
    rol: "Backend Developer",
    descripcion:
      "Desarrollo de proyecto full stack escalable en entorno colaborativo (equipo de 6 desarrolladores), implementando autenticación y autorización con JWT y control de roles. Participé como Backend Developer, diseñando y construyendo endpoints para la gestión de usuarios, mascotas, turnos, productos y órdenes. Tecnologías: Node.js, Express, TypeScript, NestJS, TypeORM y PostgreSQL. Metodología: trabajo en equipo con Git y GitHub (control de versiones, ramas y PRs).  Documentación de API con Swagger.",
    enlace: "https://github.com/osomoya94/veterinaria-petshop-backend",
    carpetaImagenes: "veterinaria-petshop",
    imagenes: [
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 120705.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 120816.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121812.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121836.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121844.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121854.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121905.png",
      ),
      crearRutaProyecto(
        "veterinaria-petshop",
        "Captura de pantalla 2026-03-23 121913.png",
      ),
    ],
  },
  {
    nombre: "Ecommerce Backend",
    rol: "Backend Developer",
    descripcion:
      "Desarrollo de API REST modular para e-commerce, implementada de forma individual. Incluye sistema de autenticación y autorización con JWT, manejo de usuarios y lógica completa de productos y categorías. Diseñé la arquitectura backend siguiendo buenas prácticas (separación por módulos, controladores y servicios), asegurando escalabilidad y mantenibilidad. Tecnologías: Node.js, NestJS, TypeScript y PostgreSQL. Documentación de endpoints con Swagger. ",
    enlace: "https://github.com/osomoya94/ecommerce-backend",
    carpetaImagenes: "ecommerce",
    imagenes: [
      crearRutaProyecto(
        "ecommerce",
        "Captura de pantalla 2026-03-23 115929.png",
      ),
      crearRutaProyecto(
        "ecommerce",
        "Captura de pantalla 2026-03-23 115951.png",
      ),
    ],
  },
  {
    nombre: "React Login",
    rol: "Frontend Developer",
    descripcion:
      "Aplicación Full Stack para gestión de usuarios y turnos, desarrollada de forma individual. Implementa autenticación y autorización, permitiendo a los usuarios registrarse, iniciar sesión y gestionar sus citas. Diseñé e integré tanto el backend como el frontend, construyendo una API REST robusta y consumiéndola desde una interfaz interactiva. Backend: Node.js, Express, TypeScript, TypeORM y PostgreSQL. Frontend: React (Vite), manejo de estado global y consumo de API. Arquitectura enfocada en escalabilidad, separación de responsabilidades y buenas prácticas.",
    enlace: "https://github.com/osomoya94/loginFullStack",
    carpetaImagenes: "react-login",
    imagenes: [
      crearRutaProyecto(
        "react-login",
        "Captura de pantalla 2026-03-23 114912.png",
      ),
      crearRutaProyecto(
        "react-login",
        "Captura de pantalla 2026-03-23 114927.png",
      ),
      crearRutaProyecto(
        "react-login",
        "Captura de pantalla 2026-03-23 114935.png",
      ),
    ],
  },
  {
    nombre: "IA aplicada al desarrollo",
    rol: "Full Stack + IA",
    descripcion:
      "Uso la IA como herramienta de desarrollo, aprendizaje y mejora continua. Trabajo con ChatGPT, Claude, Gemini, NotebookLM y Ollama para prototipar, corregir errores, validar decisiones y aprender más rápido mientras construyo proyectos reales.",
    enlace: "https://github.com/osomoya94/ProyectoIA",
    carpetaImagenes: "IAproyectos",
    imagenes: [
      crearRutaProyecto(
        "IAproyectos",
        "Captura de pantalla 2026-03-24 113112.png",
      ),
      crearRutaProyecto(
        "IAproyectos",
        "Captura de pantalla 2026-03-24 113129.png",
      ),
      crearRutaProyecto(
        "IAproyectos",
        "Captura de pantalla 2026-03-24 113141.png",
      ),
      crearRutaProyecto(
        "IAproyectos",
        "Captura de pantalla 2026-03-24 113259.png",
      ),
      crearRutaProyecto(
        "IAproyectos",
        "Captura de pantalla 2026-03-24 113313.png",
      ),
    ],
  },
];

const educacion = [
  {
    nombre: "Instituto de Estudios Superiores Santa Maria",
    titulo: "Tecnico Superior en Desarrollo de Software",
    anio: "2024",
    descripcion:
      "Formación terciaria orientada al desarrollo de software, con enfoque en programación, diseño de sistemas y desarrollo de aplicaciones. Adquirí experiencia en Programación Orientada a Objetos utilizando Java, desarrollo con C# y .NET, y construcción de aplicaciones web con HTML, CSS y React. Formación en estructuras de datos y bases de datos (MySQL y SQLite), incluyendo diseño de modelos relacionales y diagramas entidad-relación. Uso de herramientas de control de versiones (Git y GitHub) y aplicación de buenas prácticas de desarrollo.",
  },
  {
    nombre: "Henry",
    titulo: "Desarrollador Full Stack",
    anio: "2025",
    descripcion:
      "Bootcamp intensivo de desarrollo Full Stack enfocado en la construcción de aplicaciones reales y trabajo en equipo. Formación integral en desarrollo backend y frontend, con especialización en Backend utilizando NestJS, donde diseñé y desarrollé APIs REST escalables con autenticación (JWT), control de roles y documentación con Swagger. xperiencia trabajando con bases de datos relacionales y no relacionales (PostgreSQL y MongoDB), así como integración de servicios como Supabase. Desarrollo de proyectos en equipo aplicando metodologías colaborativas, control de versiones con Git/GitHub y buenas prácticas de arquitectura y código limpio.",
  },
  {
    nombre: "Centro de Formacion Profesional",
    titulo: "Programador",
    anio: "2024",
    descripcion:
      "Formación inicial en programación con fuerte enfoque en lógica computacional y fundamentos del desarrollo de software. Fui reconocido como alumno destacado por desempeño académico ( Enlace al mismo: https://drive.google.com/file/d/1Gv5xkcry2oEqV1NCvBmxYgJrgAQ-Dz4-/view?usp=sharing ). Durante el programa desarrollé habilidades en resolución de problemas, algoritmos y pensamiento estructurado utilizando herramientas como PSeInt. Implementación de interfaces web con HTML, CSS y JavaScript, incluyendo manipulación del DOM e interacción dinámica en aplicaciones. Introducción al entorno de desarrollo con Visual Studio y posterior transición a Visual Studio Code, aplicando buenas prácticas en el proceso de aprendizaje. ",
  },
];

function CarruselProyecto({
  nombre,
  imagenes,
  carpetaImagenes,
  intervalo = 4000,
}) {
  const totalImagenes = imagenes.length;
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    if (totalImagenes <= 1) {
      return undefined;
    }

    const temporizador = window.setInterval(() => {
      setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % totalImagenes);
    }, intervalo);

    return () => window.clearInterval(temporizador);
  }, [intervalo, totalImagenes]);

  if (!totalImagenes) {
    return (
      <div className="media-proyecto media-proyecto-vacia">
        <div className="placeholder-proyecto">
          <p className="placeholder-titulo">Sin imagenes todavia</p>
          <p className="placeholder-texto">
            Sube tus capturas en{" "}
            <strong>{`public/proyectos/${carpetaImagenes}`}</strong>
          </p>
        </div>
      </div>
    );
  }

  const irAImagenAnterior = () => {
    setIndiceActual(
      (indiceAnterior) => (indiceAnterior - 1 + totalImagenes) % totalImagenes,
    );
  };

  const irAImagenSiguiente = () => {
    setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % totalImagenes);
  };

  return (
    <div className="media-proyecto">
      <img
        src={imagenes[indiceActual]}
        alt={`${nombre} - captura ${indiceActual + 1}`}
        className="imagen-proyecto"
        loading="lazy"
      />

      {totalImagenes > 1 && (
        <>
          <button
            type="button"
            className="control-carrusel control-carrusel-anterior"
            onClick={irAImagenAnterior}
            aria-label={`Ver captura anterior de ${nombre}`}
          >
            {"<"}
          </button>

          <button
            type="button"
            className="control-carrusel control-carrusel-siguiente"
            onClick={irAImagenSiguiente}
            aria-label={`Ver captura siguiente de ${nombre}`}
          >
            {">"}
          </button>

          <div className="contador-carrusel">
            {indiceActual + 1} / {totalImagenes}
          </div>

          <div
            className="indicadores-carrusel"
            aria-label="Indicadores del carrusel"
          >
            {imagenes.map((_, indice) => (
              <button
                key={`${nombre}-indicador-${indice + 1}`}
                type="button"
                className={`indicador-carrusel ${
                  indice === indiceActual ? "activo" : ""
                }`}
                onClick={() => setIndiceActual(indice)}
                aria-label={`Ir a la captura ${indice + 1} de ${nombre}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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

          {proyectos.map((proyecto) => (
            <article
              key={proyecto.nombre}
              className="tarjeta-base tarjeta-proyecto"
            >
              <h3 className="titulo-proyecto">{proyecto.nombre}</h3>
              <p className="meta-proyecto">{proyecto.rol}</p>

              <CarruselProyecto
                nombre={proyecto.nombre}
                imagenes={proyecto.imagenes}
                carpetaImagenes={proyecto.carpetaImagenes}
              />

              <p className="descripcion-proyecto">{proyecto.descripcion}</p>

              {proyecto.enlace && (
                <div className="acciones-proyecto">
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noreferrer"
                    className="boton-cv"
                  >
                    Ver repositorio
                  </a>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="seccion-principal">
          <h2 className="titulo-seccion">Educacion</h2>

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
            puesto a tiempo completo, una colaboracion como freelance o
            simplemente una charla sobre tecnologia.
          </p>

          <div className="contacto-links">
            <a href="mailto:emanuelmoya11@gmail.com" className="contacto-item">
              <span>
                Enviame un
                <br />
                correo electronico
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
