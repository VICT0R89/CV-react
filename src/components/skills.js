import React from "react";
import "../estilos/skills.css";

const skills = (props) => {
  return (
    <div className="contenedor-skills">      
      <p className="cargo">{props.cargo}</p>      
      <h3 className="perfil">{props.perfil}</h3>
      <p className="descripcion-perfeil">{props.testimonio} 
      </p>
      <h3 className="skills">{props.habilidades}</h3>

      <ol className="skills-equipo">
        <p className="skill-pe">{props.equipo}</p>
        <li>{props.eli1}</li>
        <li>{props.eli2}</li>
        <li>{props.eli3}</li>
        <li>{props.eli4}</li>
        <li>{props.eli5}</li>        
      </ol>

      <ol className="skills-personal">
        <p className="skill-pp">{props.personal}</p>
        <li>{props.pli1}</li>
        <li>{props.pli2}</li>
        <li>{props.pli3}</li>
        <li>{props.pli4}</li>
        <li>{props.pli5}</li>        
      </ol>

      <h3 className="contacto">{props.contacto}</h3>
      <p className="telefono">{props.telefono}+59899625460</p>
      <p className="mail">Mail: victor4guiar89@gmail.com</p>
      <p className="git">Git: </p>
    </div>
  )
}

export default skills;