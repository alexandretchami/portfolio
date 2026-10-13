import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import Portfolio7 from "../../assets/portfolio-7.png";
import Portfolio8 from "../../assets/portfolio-8.png";
import Portfolio10 from "../../assets/portfolio-10.png";

// TODO: replace with your real GitHub profile URL.
const GITHUB_URL = "https://github.com/votre-pseudo";

// One place to edit your projects.
// - title: real project name
// - tech: short list of technologies (shown under the title)
// - link: live site or GitHub repo (makes the card clickable)
// Tip: put your DevOps projects (Docker, CI/CD...) first.
const PROJECTS = [
  {
    id: 1,
    img: Portfolio1,
    title: "Projet 1",
    tech: "React · CSS",
    link: "https://bamilekeconnect.netlify.app/",
  },
  {
    id: 2,
    img: Portfolio2,
    title: "Projet 2",
    tech: "HTML · CSS · JavaScript",
    link: "https://pokmons.netlify.app/",
  },
  {
    id: 3,
    img: Portfolio3,
    title: "Projet 3",
    tech: "React",
    link: "http://droits-et-reperes.netlify.app/",
  },
  {
    id: 4,
    img: Portfolio4,
    title: "Projet 4",
    tech: "HTML · CSS",
    link: "https://alexandretchami.github.io/Shifumi/",
  },
  {
    id: 5,
    img: Portfolio5,
    title: "Projet 5",
    tech: "JavaScript",
    link: "https://aidemoikombi.netlify.app/",
  },
  { id: 6, img: Portfolio6, title: "Projet 6", tech: "React" },
  { id: 7, img: Portfolio7, title: "Projet 7", tech: "HTML · CSS" },
  { id: 8, img: Portfolio8, title: "Projet 8", tech: "JavaScript" },
  {
    id: 10,
    img: Portfolio10,
    title: "Projet 10",
    tech: "React",
  },
];

const Works = () => {
  return (
    <section id="works" aria-labelledby="works-title">
      <h2 id="works-title" className="worksTitle">
        Mes réalisations
      </h2>

      <p className="worksDesc">
        Quelques projets web réalisés durant ma formation, mon stage et mes
        projets personnels. Ils montrent la base technique sur laquelle je
        construis mon profil DevOps : du code propre, prêt à être automatisé et
        déployé.
      </p>

      <ul className="worksImgs">
        {PROJECTS.map(({ id, img, title, tech, link }) => {
          const content = (
            <>
              <img
                src={img}
                alt={`Aperçu de ${title}`}
                className="worksImg"
                loading="lazy"
              />
              <span className="worksCaption">
                <strong>{title}</strong>
                {tech && <small>{tech}</small>}
              </span>
            </>
          );

          return (
            <li key={id} className="worksItem">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>

      <a
        href={GITHUB_URL}
        className="workBtn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir plus sur GitHub
      </a>
    </section>
  );
};

export default Works;
