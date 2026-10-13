import React from "react";
import "./skills.css";
import FrontEnd from "../../assets/front-end.png";
import BackEnd from "../../assets/backend.png";

// Edit this array to match your real skills.
// `learning: true` shows a tag with a dashed border ("en cours d'apprentissage").
// TODO: replace the images below with dedicated icons (network, docker/devops).
const SKILLS = [
  {
    id: "web",
    title: "Développement web",
    img: FrontEnd,
    alt: "Icône développement web",
    description:
      "Conception d'interfaces modernes et responsives, de la maquette à la mise en ligne. C'est ma porte d'entrée dans le code.",
    tags: [
      { name: "HTML / CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Git" },
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux & systèmes",
    img: BackEnd,
    alt: "Icône réseaux et systèmes",
    description:
      "Une base solide héritée de mes expériences en réseaux informatiques : comprendre comment les services communiquent et comment les sécuriser.",
    tags: [
      { name: "TCP/IP" },
      { name: "DNS / DHCP" },
      { name: "Linux", learning: true },
    ],
  },
  {
    id: "devops",
    title: "DevOps & automatisation",
    img: BackEnd,
    alt: "Icône DevOps et automatisation",
    description:
      "Mon objectif de carrière : automatiser les déploiements, conteneuriser les applications et fiabiliser la mise en production.",
    tags: [
      { name: "Docker", learning: true },
      { name: "CI/CD", learning: true },
      { name: "GitHub Actions", learning: true },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="skillTitle">
        Ce que je fais
      </h2>

      <p className="skillDesc">
        Issu des réseaux informatiques, j’ai découvert ma passion pour la
        programmation et le développement web lors de ma formation au Greta.
        Aujourd’hui, je souhaite allier ces deux univers dans une carrière
        DevOps : comprendre le code pour mieux l’industrialiser, et connaître
        l’infrastructure pour mieux la déployer. Mon objectif est d’automatiser,
        fiabiliser et accélérer la mise en production des applications.
      </p>

      <ul className="skillBars">
        {SKILLS.map(({ id, title, img, alt, description, tags }) => (
          <li key={id} className="skillBar">
            <img
              src={img}
              alt={alt}
              className="skillBarImg"
              width="56"
              height="56"
              loading="lazy"
            />
            <div className="skillBarText">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="skillTags" aria-label={`Technologies : ${title}`}>
                {tags.map(({ name, learning }) => (
                  <li
                    key={name}
                    className={`skillTag${learning ? " learning" : ""}`}
                    title={learning ? "En cours d'apprentissage" : undefined}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
