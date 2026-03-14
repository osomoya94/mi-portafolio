import './App.css';

function Sidebar() {
  return (
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
  );
}

export default Sidebar;