
import React, { useState } from "react";
import "./navbar.css";

import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => setShowMenu(false);

    const scrollToContact = () => {
        closeMenu();

        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const navItems = [
        { label: "Accueil", to: "intro", offset: -100 },
        { label: "À propos", to: "skills", offset: -80 },
        { label: "Portfolio", to: "works", offset: -80 },
        { label: "Services", to: "services", offset: -80 },
    ];

    return (
        <nav className="navbar" aria-label="Navigation principale">
            <Link
                to="intro"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={closeMenu}
                className="logoLink"
            >
                <img src={logo} alt="Accueil" className="logo" />
            </Link>

            <div className="desktopMenu">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        activeClass="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={item.offset}
                        duration={500}
                        className="desktopMenuListItem"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <button
                type="button"
                className="desktopMenuBtn"
                onClick={scrollToContact}
            >
                <img
                    src={contactImg}
                    alt=""
                    className="desktopMenuImg"
                />
                Contactez-moi
            </button>

            <button
                type="button"
                className="mobMenu"
                aria-label={showMenu ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={showMenu}
                aria-controls="mobile-navigation"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                <img src={menu} alt="" />
            </button>

            {showMenu && (
                <div className="navMenu" id="mobile-navigation">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={item.offset}
                            duration={500}
                            className="listItem"
                            onClick={closeMenu}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="listItem"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
