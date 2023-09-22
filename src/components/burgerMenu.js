import { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

import LanguageSwitch from "../components/LanguageSwitch";

export default function BurgerMenu({
    t,
    toggleBurgerMenu,
    setBurgerOpen,
    setIsHebrew,
    setIsGerman,
    setIsEnglish,
    isHebrew,
    toTop,
}) {
    const menuRef = useRef(null);

    // console.log('ishebrew burgermenu', isHebrew);

    const handleMenuClick = (event) => {
        // Stop propagation to prevent closing when clicking inside the menu.
        event.stopPropagation();
    };

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
            onClick={handleMenuClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleMenuClick();
                }
            }}
            // role="menu"
            // aria-labelledby="menubutton"
            // tabIndex="0"
        >
            {isHomePage ? (
                <ScrollLink
                    to="about"
                    smooth="true"
                    duration={500}
                    onClick={toggleBurgerMenu}
                >
                    {t("nav_about")}
                </ScrollLink>
            ) : (
                <NavLink
                    to="/"
                    smooth="true"
                    duration={500}
                    onClick={toggleBurgerMenu}
                >
                    {t("nav_home")}
                </NavLink>
            )}

            <NavLink
                className="nav-icon"
                // activeClassName="active-b"
                onClick={() => {
                    toggleBurgerMenu();
                    toTop();
                }}
                to="/contact"
            >
                {t("nav_contact")}
            </NavLink>

            <LanguageSwitch
                setIsHebrew={setIsHebrew}
                setIsGerman={setIsGerman}
                setIsEnglish={setIsEnglish}
            />
        </nav>
    );
}

BurgerMenu.propTypes = {
    t: PropTypes.func.isRequired,
    toggleBurgerMenu: PropTypes.func.isRequired,
    setBurgerOpen: PropTypes.func.isRequired,
    setIsHebrew: PropTypes.func.isRequired,
    setIsEnglish: PropTypes.func.isRequired,
    setIsGerman: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool.isRequired,
    toTop: PropTypes.func,
};
