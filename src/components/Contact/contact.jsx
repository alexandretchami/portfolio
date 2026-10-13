import React, { useRef, useState } from "react";
import "./contact.css";
import Framework from "../../assets/react-logo.png";
import VielleTechno from "../../assets/vielle-techno.png";
import Ergonomie from "../../assets/ergonomique.png";
import Passion from "../../assets/passion.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

// EmailJS settings (the public key is designed to be visible in the browser).
const EMAILJS_SERVICE_ID = "service_8o5gmom";
const EMAILJS_TEMPLATE_ID = "template_xbuahrp";
const EMAILJS_PUBLIC_KEY = "rD7XuF_Qh2v3VIf_a";

// Edit the labels to match what each image represents.
const SERVICES = [
  { id: "framework", img: Framework, label: "Frameworks modernes" },
  { id: "veille", img: VielleTechno, label: "Veille technologique" },
  { id: "ergonomie", img: Ergonomie, label: "Ergonomie & UX" },
  { id: "passion", img: Passion, label: "Passion du code" },
];

// Replace "#" with your real profile URLs.
const SOCIALS = [
  { id: "facebook", img: FacebookIcon, label: "Facebook", href: "#" },
  { id: "twitter", img: TwitterIcon, label: "Twitter", href: "#" },
  { id: "youtube", img: YoutubeIcon, label: "YouTube", href: "#" },
  { id: "instagram", img: InstagramIcon, label: "Instagram", href: "#" },
];

const Contact = () => {
  const form = useRef();
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorDetail("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        // Full error in the console (F12) to help diagnose the problem.
        console.error("EmailJS error:", error);
        setErrorDetail(error?.text || error?.message || "");
        setStatus("error");
      });
  };

  return (
    <section id="contactPage">
      <div id="services">
        <h2 className="contactPageTitle">À votre service !</h2>
        <p className="serviceDesc">Ce que je peux faire pour vous</p>

        <ul className="serviceImgs">
          {SERVICES.map(({ id, img, label }) => (
            <li key={id} className="serviceItem">
              <img
                src={img}
                alt=""
                className="serviceImg"
                width="80"
                height="80"
                loading="lazy"
              />
              <p className="serviceLabel">{label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div id="contact">
        <h2 className="contactPageTitle">Contactez-moi</h2>
        <p className="contactDesc">
          Veuillez remplir le formulaire pour discuter de toute opportunité de
          travail.
        </p>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="formGroup">
            <label htmlFor="your_name">Nom</label>
            <input
              id="your_name"
              type="text"
              className="name"
              placeholder="Votre nom"
              name="your_name"
              autoComplete="name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="your_email">E-mail</label>
            <input
              id="your_email"
              type="email"
              className="email"
              placeholder="Votre e-mail"
              name="your_email"
              autoComplete="email"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="msg"
              name="message"
              rows="5"
              placeholder="Votre message"
              required
            />
          </div>

          <button
            type="submit"
            className="submitBtn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours…" : "Soumettre"}
          </button>

          <p
            className={`formStatus ${status}`}
            role="status"
            aria-live="polite"
          >
            {status === "success" && "Merci ! Votre message a bien été envoyé."}
            {status === "error" &&
              `Une erreur est survenue. Veuillez réessayer plus tard.${
                errorDetail ? ` (${errorDetail})` : ""
              }`}
          </p>
        </form>

        <div className="links">
          {SOCIALS.map(({ id, img, label, href }) => (
            <a
              key={id}
              href={href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <img src={img} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
