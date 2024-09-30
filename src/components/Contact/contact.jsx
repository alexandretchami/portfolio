import React, { useRef } from 'react';
import './contact.css';
import Framework from '../../assets/react-logo.png';
import VielleTechno from '../../assets/vielle-techno.png';
import Ergonomie from '../../assets/ergonomique.png';
import Passion from '../../assets/passion.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8o5gmom', 'template_xbuahrp', form.current, 'rD7XuF_Qh2v3VIf_a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <div id="services">
            <h1 className="contactPageTitle">A votre service !</h1>
            <p className="serviceDesc">
            Ce que je peux faire pour vous
            </p>
            <div className="serviceImgs">
                <img src={Framework} alt="Services" className="serviceImg" />
                <img src={VielleTechno} alt="Services" className="serviceImg" />
                <img src={Ergonomie} alt="Services" className="serviceImg" />
                <img src={Passion} alt="Services" className="serviceImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contactez moi</h1>
            <span className="contacDesc">Veuillez remplir le formulaire pour discuter de toute opportunité de travail.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='votre nom' name='your_name'/>
                <input type="email" className="email" placeholder='Votre e-mail' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Votre message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Soumettre</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact



