import './App.css';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <div className="titulo-nombre">
        <h1>Curriculm Vitae</h1>
        <h2 className="nombre">Víctor Gutiérrez</h2>
      </div>  
      <div className="contenedor-principal">
        <Skills
          cargo="Desarrollador de Software"
          perfil="PERFIL"
          testimonio=" Estudiante de desarrollo de software en Digital House; expaniendo, en mi tiempo libre, conocimientos tanto de front como de backend de forma autodidacta. En busca de mi primera experiencia laboral como desarrollador para poder dedicarme full time a esta hermosa carrera que tiene todo lo que me gusta; desafíos, un crecimiento que parece no tener límite, grupos humanos expectaculares, empresas que valoran y mucho la dedicación y el tiempo de cada uno que forma parte del grupo, que aunque parezca normal, no lo es tanto fuera de este mundo y la posibilidad de brindar y recibir ayuda constantemente."
          habilidades="HABILIDADES"
          equipo="Trabajo en equipo"
          eli1="Metodologías de trabajo"
          eli2="Lean y Kanban"
          eli3="SCRUM"
          eli4="Agile Inception Y MVP"
          eli5="Métricas ágiles"
          personal="Personal"
          pli1="Metódico"
          pli2="Analítico"
          pli3="Constante"
          pli4="Iniciativa"
          pli5="Adaptativo"
          contacto="CONTACTO"
          telefono="Teléfono: "
        />
        <Skills
          cargo="Software Developer"
          perfil="PROFILE"
          testimonio=" Software development student at Digital House; expanding, in my free time, knowledge of both front and backend in a self-taught way. Looking for my first work experience as a developer to be able to dedicate myself full time to this beautiful career that has everything I love; challenges, a growth that seems to have no limit, spectacular human groups, companies that highly value the dedication and time of each one who is part of the group, which although it seems normal, it is not so out of this world and the possibility of constantly give and receive help."
          habilidades="SKILLS"
          equipo="Teamwork"
          eli1="Work methodologies"
          eli2="Lean y Kanban"
          eli3="SCRUM"
          eli4="Agile Inception and MVP"
          eli5="Agile Metrics"
          personal="Individual"
          pli1="Methodical"
          pli2="Analytical"
          pli3="Constant"
          pli4="Initiative"
          pli5="Adaptive"
          contacto="CONTACT"
          telefono="Phone: "
        />
      </div>  
    </div>
  );
}

export default App;
