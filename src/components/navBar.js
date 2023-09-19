import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import LanguageSwitch from "../components/LanguageSwitch";

import { Nav, NavLink } from "../components/navElements";
import Logo from "../components/logo";

import "../styles/navBar.scss";

const Navbar = ({
    t,
    toTop,
    setIsHebrew,
    setIsEnglish,
    setIsGerman,
    isHebrew,
}) => {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <div id="mainNav" className="nav-con">
            <Nav
                className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
                role="menu"
            >
                <Link to="/" onClick={toTop}>
                    <Logo />
                </Link>

                <div
                    className={`nav-menu ${isHebrew ? "rtl-text" : "ltr-text"}`}
                >
                    {isHomePage ? (
                        <ScrollLink to="about" smooth="true" duration={500}>
                            {t("nav_about")}
                        </ScrollLink>
                    ) : (
                        <NavLink to="/" smooth="true" duration={500}>
                            {t("nav_home")}
                        </NavLink>
                    )}

                    <NavLink to="/contact">{t("nav_contact")}</NavLink>
                </div>

                <LanguageSwitch
                    setIsHebrew={setIsHebrew}
                    setIsGerman={setIsGerman}
                    setIsEnglish={setIsEnglish}
                />
            </Nav>
        </div>
    );
};

Navbar.propTypes = {
    t: PropTypes.func.isRequired,
    toTop: PropTypes.func.isRequired,
    setIsHebrew: PropTypes.func,
    setIsEnglish: PropTypes.func,
    setIsGerman: PropTypes.func,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(Navbar);
