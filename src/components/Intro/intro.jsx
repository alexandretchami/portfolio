import React from "react";
import "./intro.css";

import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      {/* LEFT CONTENT */}
      <div className="introContent">
        <span className="introBadge">
          <span className="badgeDot"></span>
          Développeur Web · Vers le DevOps
        </span>

        <span className="hello">Bonjour,</span>

        <h1 className="introText">
          Je suis <span className="introName">Alexandre Tchami</span>
          ,
          <br />
          Développeur Web
          <br className="desktopBreak" /> en route vers le DevOps
        </h1>

        <p className="introPara">
          Issu des réseaux informatiques et formé au développement web, je me
          spécialise dans le DevOps pour automatiser, conteneuriser et
          fiabiliser la mise en production des applications.
        </p>

        {/* BUTTONS */}
        <div className="introActions">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="introLink"
          >
            <img src={btnImg} alt="" className="btnImg" />

            <span>Engagez-moi</span>

            <span className="btnArrow">↗</span>
          </Link>

          <Link
            to="works"
            smooth={true}
            duration={500}
            offset={-80}
            className="secondaryLink"
          >
            Découvrir mes projets
            <span aria-hidden="true"> ↓</span>
          </Link>
        </div>

        {/* FEATURES */}
        <div className="introFeatures">
          <div className="introFeature">
            <span className="featureIcon">{"</>"}</span>

            <div>
              <strong>Développement</strong>
              <span>Web moderne</span>
            </div>
          </div>

          <div className="introFeature">
            <span className="featureIcon">⚙</span>

            <div>
              <strong>Automatisation</strong>
              <span>CI/CD & Docker</span>
            </div>
          </div>

          <div className="introFeature">
            <span className="featureIcon">☁</span>

            <div>
              <strong>Infrastructure</strong>
              <span>Réseaux & Linux</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="introVisual">
        <div className="introGlow"></div>
        <div className="introCircle"></div>

        <img
          src={bg}
          alt="Alexandre Tchami, développeur Web orienté DevOps"
          className="bg"
        />

        {/* FLOATING CARDS */}
        <div className="floatingCard floatingCardTop">
          <span>⚙</span>

          <div>
            <strong>Automatisation</strong>
            <small>Du code à la production</small>
          </div>
        </div>

        <div className="floatingCard floatingCardBottom">
          <span>✓</span>

          <div>
            <strong>Fiabilité</strong>
            <small>Des déploiements maîtrisés</small>
          </div>
        </div>

        <div className="introSignature">
          Du code au déploiement,
          <br />
          en toute confiance !
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="introScroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
};

export default Intro;
