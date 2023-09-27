import { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

import LanguageSwitch from "../components/LanguageSwitch";

export default function BurgerMenu({ toggleBurgerMenu, setBurgerOpen, toTop }) {
    const menuRef = useRef(null);

    const { t, i18n } = useTranslation();

    const isHebrew = i18n.language === "he";

    // const handleMenuClick = (event) => {
    //     // Stop propagation to prevent closing when clicking inside the menu.
    //     event.stopPropagation();
    // };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedElement = event.target;

            if (menuRef.current && !menuRef.current.contains(clickedElement)) {
                if (!clickedElement.classList.contains("navbar-icon")) {
                    setBurgerOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <nav
            ref={menuRef}
            className={`open-nav ${isHebrew ? "rtl-text" : "ltr-text"}`}
            role="navigation"
            aria-label="Main navigation"
            id="primary-nav"
        >
            <ul>
                {isHomePage ? (
                    <ScrollLink
                        to="about"
                        smooth="true"
                        duration={500}
                        onClick={toggleBurgerMenu}
                        // activeClassName="active-b"
                        role="button"
                    >
                        {t("nav_about")}
                    </ScrollLink>
                ) : (
                    <NavLink
                        to="/"
                        smooth="true"
                        duration={500}
                        onClick={toggleBurgerMenu}
                        // activeClassName="active-b"
                        role="button"
                    >
                        {t("nav_home")}
                    </NavLink>
                )}

                <li>
                    <NavLink
                        className="nav-icon"
                        // activeClassName="active-b"
                        onClick={() => {
                            toggleBurgerMenu();
                            toTop();
                        }}
                        to="/contact"
                        role="button"
                    >
                        {t("nav_contact")}
                    </NavLink>
                </li>
            </ul>

            <LanguageSwitch />
        </nav>
    );
}

BurgerMenu.propTypes = {
    toggleBurgerMenu: PropTypes.func.isRequired,
    setBurgerOpen: PropTypes.func.isRequired,
    toTop: PropTypes.func,
};
