import React from "react";
import "./footer.css";

const Footer = () => {
  // Always shows the current year, no manual update needed.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footerCopy">
        &copy; {year} <strong>TchamiDev</strong>. Tous droits réservés.
      </p>
      <a
        href="#top"
        className="footerTop"
        aria-label="Retour en haut de la page"
      >
        ↑ Retour en haut
      </a>
    </footer>
  );
};

export default Footer;
