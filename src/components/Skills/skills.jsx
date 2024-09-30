import React from 'react';
import './skills.css';
import FrontEnd from '../../assets/front-end.png';
import BackEnd from '../../assets/backend.png';
import Wordpress from '../../assets/wordpress.png';

const Skills = () => {
  return (
   <section id='skills'>
     <span className="skillTitle">Ce que je fais</span> 
     <span className="skillDesc"> Après plusieurs années d'études et quelques expériences professionnelles dans les réseaux informatiques, j'ai décidé de me diriger vers un domaine pour lequel je me suis découvert une passion, la programmation et plus particulièrement le Web. J'ai suivi une formation au Greta, ce qui m'a permis d'apprendre les différents languages du web et leur utilisation à travers différents cas pratiques.</span>
     <div className="skillBars">
        <div className="skillBar">
            <img src={FrontEnd} alt="FrontEnd" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Front-end</h2>
                <p>Ceci est un texte de démonstration, vous pouvez écrire votre propre contenu ici.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={BackEnd} alt="BackEnd" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Back-end</h2>
                <p>Ceci est un texte de démonstration, vous pouvez écrire votre propre contenu ici.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={Wordpress} alt="Wordpress" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>CMS</h2>
                <p>Ceci est un texte de démonstration, vous pouvez écrire votre propre contenu ici.</p>
            </div>
        </div>
     </div>
   </section>
  );
}

export default Skills
