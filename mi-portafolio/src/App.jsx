import "./App.css";

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
  },
  {
    nombre: "Ecommerce Backend",
    rol: "Backend Developer",
    descripcion:
      "API REST modular para e-commerce. Incluye registro/login, seguridad con JWT y CRUD de productos/categorías.",
    enlace: "https://github.com/osomoya94/ecommerce-backend",
  },
];

const educacion = [
  {
    nombre:"Instituto de estudios superiores Santa Maria",
    titulo:"Tecnico superior en desarrollo de sofware",
    anio: "2024",
    descripcion:"luego pienso"
  },
  {
    nombre:"Henry",
    titulo:"Desarrollador fullstack",
    anio: "2025",
    descripcion:"luego pongo"
  },
  {
    nombre:"Centro de formacion profesional",
    titulo:"Programador",
    anio: "2025",
    descripcion:"luego pongo"
  }
];

function App() {
  return (
    <div className="contenedor">

    <header className="encabezado">
        <h1>Emanuel Moya</h1>
        <h3>Backend Developer | Full Stack Web Developer</h3>
        <p> Catamarca, Argentina</p>
        <p className="bio">
          Desarrollador Full Stack enfocado en Backend y estudiante del último año de la Tecnicatura Superior en Desarrollo de Software. Construyo APIs REST seguras y escalables con Node.js, NestJS, TypeScript y PostgreSQL.
        </p>
        <div className="enlaces-contacto">
          <a href="mailto:emanuelmoya11@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/emanuel-moya-desarrolladorfullstack/" target="_blank">LinkedIn</a>
          <a href="https://github.com/osomoya94" target="_blank">GitHub</a>
        </div>
      </header>

      {tecnologias.map((bloque) => (
        <div key={bloque.categoria}>
          <h2>{bloque.categoria}</h2>
          <ul>
            {bloque.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <hr />

      <h2> Mis proyectos</h2>
      {proyectos.map((estudio) => (
        <div key={estudio.nombre}>
          <h3>{estudio.nombre}</h3>
          <h4>{estudio.rol}</h4>
          <p>{estudio.descripcion}</p>
          <p>
            <a href={estudio.enlace}> Ver repositorio</a>
          </p>
        </div>
      ))}

      <hr />

      <h2>Educacion</h2>
      {educacion.map((educacion)=>(
        <div key={educacion.nombre}>
          <h3>{educacion.nombre}</h3>
          <h4>{educacion.titulo}</h4>
          <h5>{educacion.anio}</h5>
          <p>{educacion.descripcion}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
