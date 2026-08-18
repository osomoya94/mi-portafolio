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
  SiDocker,
  SiInsomnia,
} from "react-icons/si";

function DapperIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Dapper
      </text>
    </svg>
  );
}

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

const crearRutaProyecto = (carpeta, archivo) =>
  `${import.meta.env.BASE_URL}proyectos/${carpeta}/${archivo}`;

const tecnologias = [
  {
    categoria: "Backend y Lenguajes",
    items: [
      { nombre: "Node.js", icono: SiNodedotjs },
      { nombre: "NestJS", icono: SiNestjs },
      { nombre: "TypeScript", icono: SiTypescript },
      { nombre: "JavaScript", icono: SiJavascript },
      { nombre: "C#", icono: CSharpIcon },
      { nombre: ".NET", icono: SiDotnet },
      { nombre: "Java", icono: FaJava },
    ],
  },
  {
    categoria: "Bases de Datos y Persistencia",
    items: [
      { nombre: "PostgreSQL", icono: SiPostgresql },
      { nombre: "Supabase", icono: FaCode },
      { nombre: "Prisma ORM", icono: FaCode },
      { nombre: "TypeORM", icono: SiTypeorm },
      { nombre: "MySQL", icono: SiMysql },
      { nombre: "Dapper", icono: DapperIcon },
    ],
  },
  {
    categoria: "APIs, Seguridad y Herramientas",
    items: [
      { nombre: "REST APIs", icono: FaCode },
      { nombre: "JWT", icono: SiJsonwebtokens },
      { nombre: "Swagger / OpenAPI", icono: SiSwagger },
      { nombre: "Docker", icono: SiDocker },
      { nombre: "Git", icono: SiGit },
      { nombre: "GitHub", icono: FaGithub },
      { nombre: "Postman", icono: SiPostman },
      { nombre: "Insomnia", icono: SiInsomnia },
    ],
  },
  {
    categoria: "Frontend",
    items: [
      { nombre: "React", icono: SiReact },
      { nombre: "Vite", icono: FaCode },
      { nombre: "HTML", icono: SiHtml5 },
      { nombre: "CSS", icono: FaCss3Alt },
      { nombre: "Tailwind CSS", icono: FaCss3Alt },
    ],
  },
  {
    categoria: "IA como apoyo al desarrollo",
    items: [
      { nombre: "ChatGPT", icono: SiOpenai },
      { nombre: "Claude", icono: SiClaude },
      { nombre: "Gemini", icono: SiGooglegemini },
    ],
  },
];

const experiencias = [
  {
    empresa: "Grupo Don Juan",
    rol: "Full Stack Developer Freelance",
    periodo: "Junio 2026 - Actualidad",
    descripcion:
      "Desarrollo de una plataforma web de gestión logística y trazabilidad de pallets para un cliente real. Participé en el proceso completo: relevamiento y documentación de requerimientos, arquitectura, modelo de datos, planificación por fases, desarrollo frontend y backend, demos con el cliente, incorporación de feedback, pruebas, puesta en producción y mantenimiento. Stack principal: React, TypeScript, NestJS, Prisma ORM, PostgreSQL/Supabase y JWT.",
  },
  {
    empresa: "Fábrica de Hielo JM",
    rol: "Gestión operativa y administración",
    periodo: "2023 - Actualidad",
    descripcion:
      "Participación en operaciones, administración, stock y logística de distribución. Esta experiencia me permitió trabajar con procesos reales de negocio y comprender mejor cómo aplicar software para resolver necesidades operativas concretas.",
  },
];

const proyectos = [
  {
    nombre: "Sistema de Gestión Logística — Grupo Don Juan",
    rol: "Proyecto profesional · Full Stack Developer Freelance",
    descripcion:
      "Plataforma web desarrollada a medida para digitalizar recepciones, almacenamiento, trazabilidad y expediciones de pallets. Incluye gestión de stock y movimientos, usuarios y roles, autenticación JWT, auditoría, reportes, impresión de documentación y administración de clientes, proveedores, destinos, transportes, vehículos y choferes. El repositorio es privado por tratarse de un desarrollo comercial.",
    enlace: null,
    carpetaImagenes: "emilio-logistica",
    imagenes: [],
  },
  {
    nombre: "LoteríaVirtual",
    rol: "Proyecto personal en evolución · Tech Lead en etapa académica",
    descripcion:
      "Proyecto que nació como trabajo integrador de la carrera y que continúo desarrollando de forma personal. Incluye API REST con C# y .NET, MySQL con Dapper y Repository, autenticación JWT, BCrypt, roles Admin/Jugador, gestión de usuarios, sorteos y cartones, interfaz web para jugadores, aplicación WinForms para administración, Swagger/OpenAPI y Docker. Actualmente está en etapa de refactorización y preparación para futuras mejoras; no se presenta como producto listo para producción.",
    enlace: "https://github.com/osomoya94/LoteriaVirtual",
    carpetaImagenes: "loteriaVirtual",
    imagenes: [
      crearRutaProyecto(
        "loteriaVirtual",
        "Captura de pantalla 2026-05-06 142818.png",
      ),
      crearRutaProyecto(
        "loteriaVirtual",
        "Captura de pantalla 2026-05-06 142830.png",
      ),
    ],
  },
  {
    nombre: "Veterinaria & Petshop",
    rol: "Backend Developer · Proyecto grupal",
    descripcion:
      "Proyecto Full Stack desarrollado en equipo. Participé principalmente en Backend con NestJS y TypeScript, construyendo endpoints para usuarios, mascotas, turnos, productos y órdenes, además de autenticación y autorización con JWT y roles. Trabajamos con PostgreSQL, TypeORM, Swagger y un flujo colaborativo con Git/GitHub, ramas y pull requests.",
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
    ],
  },
  {
    nombre: "LoginFullStack",
    rol: "Full Stack Developer · Proyecto individual",
    descripcion:
      "Aplicación Full Stack para gestión de usuarios y turnos. Integra React y Vite con un backend en Node.js, Express y TypeScript, persistencia con PostgreSQL/TypeORM, autenticación, rutas protegidas, gestión de turnos, validaciones de negocio, manejo de estado global y consumo de API REST.",
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
];

const educacion = [
  {
    nombre: "Instituto de Estudios Superiores Santa María",
    titulo: "Tecnicatura Superior en Desarrollo de Software",
    anio: "2024 - Actualidad",
    descripcion:
      "Formación superior orientada al análisis, diseño y desarrollo de software. Trabajo con programación orientada a objetos, bases de datos, arquitectura de aplicaciones y proyectos prácticos utilizando principalmente C#, .NET, Java, MySQL, HTML, CSS y Git/GitHub.",
  },
  {
    nombre: "Henry",
    titulo: "Bootcamp Full Stack Web Developer",
    anio: "2025",
    descripcion:
      "Bootcamp intensivo Full Stack con especialización práctica en Backend. Trabajé con Node.js, NestJS y TypeScript desarrollando APIs REST con JWT, roles, validaciones, Swagger y PostgreSQL/TypeORM. También trabajé con React y participé en proyectos individuales y grupales utilizando Git/GitHub.",
  },
  {
    nombre: "Centro de Formación Profesional N.º 2",
    titulo: "Programación y Desarrollo Web",
    anio: "2024",
    descripcion:
      "Formación inicial en programación, lógica, algoritmos y fundamentos del desarrollo web con HTML, CSS, JavaScript y Java. Reconocimiento como alumno destacado por desempeño académico.",
  },
];

function CarruselProyecto({ nombre, imagenes, intervalo = 4000 }) {
  const totalImagenes = imagenes.length;
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    if (totalImagenes <= 1) return undefined;

    const temporizador = window.setInterval(() => {
      setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % totalImagenes);
    }, intervalo);

    return () => window.clearInterval(temporizador);
  }, [intervalo, totalImagenes]);

  if (!totalImagenes) return null;

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
          <div className="indicadores-carrusel" aria-label="Indicadores del carrusel">
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
          <h2 className="titulo-seccion">Tecnologías y herramientas</h2>

          {tecnologias.map((bloque) => (
            <article key={bloque.categoria} className="tarjeta-base tarjeta-skill">
              <h3 className="titulo-bloque">{bloque.categoria}</h3>
              <ul className="lista-skills">
                {bloque.items.map((item) => {
                  const Icono = item.icono || FaCode;
                  return (
                    <li key={item.nombre} className="skill-item">
                      <span className="skill-icono">
                        <Icono />
                      </span>
                      <span className="skill-nombre">{item.nombre}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </section>

        <section className="seccion-principal">
          <h2 className="titulo-seccion">Experiencia</h2>

          {experiencias.map((experiencia) => (
            <article
              key={`${experiencia.empresa}-${experiencia.rol}`}
              className="tarjeta-base tarjeta-educacion"
            >
              <div className="cabecera-educacion">
                <p className="anio-educacion">{experiencia.periodo}</p>
                <h3 className="titulo-educacion">{experiencia.rol}</h3>
                <p className="institucion-educacion">{experiencia.empresa}</p>
              </div>
              <p className="descripcion-educacion">{experiencia.descripcion}</p>
            </article>
          ))}
        </section>

        <section className="seccion-principal">
          <h2 className="titulo-seccion">Proyectos destacados</h2>

          {proyectos.map((proyecto) => (
            <article key={proyecto.nombre} className="tarjeta-base tarjeta-proyecto">
              <h3 className="titulo-proyecto">{proyecto.nombre}</h3>
              <p className="meta-proyecto">{proyecto.rol}</p>

              {proyecto.imagenes.length > 0 && (
                <CarruselProyecto nombre={proyecto.nombre} imagenes={proyecto.imagenes} />
              )}

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
          <h2 className="titulo-seccion">Educación</h2>

          {educacion.map((item) => (
            <article key={item.nombre} className="tarjeta-base tarjeta-educacion">
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
            Estoy abierto a oportunidades como Backend / Full Stack Developer Junior,
            especialmente en equipos donde pueda aportar experiencia práctica y seguir
            creciendo junto a otros desarrolladores.
          </p>

          <div className="contacto-links">
            <a href="mailto:emanuelmoya11@gmail.com" className="contacto-item">
              <span>
                Enviame un
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
