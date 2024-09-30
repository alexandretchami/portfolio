import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import Portfolio7 from '../../assets/portfolio-7.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">Mon portfolio</h2>
        <span className="worksDesc">Ci-dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
            <img src={Portfolio7} alt="Portfolio7" className="worksImg" />
        </div>
        <button className="workBtn">Voir plus</button>
    </section>
  );
}

export default Works;