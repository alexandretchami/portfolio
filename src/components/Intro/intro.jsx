import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Bonjour, </span>
        <span className="introText">
          Je suis<span className="introName"> ALexandre Tchami,</span> <br />
          Développeur Web & Mobile
        </span>
        <p className="introPara">
          passionné par les nouvelles technologies et leurs facultés à améliorer{" "}
          <br />
          la productivité des entreprises.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Engagez moi" className="btnImg" /> 
            Engagez moi
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
