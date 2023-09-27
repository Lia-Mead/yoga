import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import LanguageSwitch from "../components/LanguageSwitch";

import Logo from "../components/logo";

import "../styles/navBar.scss";

const Navbar = ({ toTop }) => {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const { t, i18n } = useTranslation();
    const isHebrew = i18n.language === "he";

    return (
        <div id="mainNav" className="nav-con">
            <Link to="/" onClick={toTop}>
                <Logo />
            </Link>
            <nav className="nav-button" role="navigation">
                <ul
                    className={`nav-menu ${isHebrew ? "rtl-text" : "ltr-text"}`}
                >
                    <li className="nav-link">
                        {isHomePage ? (
                            <ScrollLink to="about" smooth="true" duration={500}>
                                {t("nav_about")}
                            </ScrollLink>
                        ) : (
                            <NavLink to="/" smooth="true" duration={500}>
                                {t("nav_home")}
                            </NavLink>
                        )}
                    </li>
                    <li className="nav-link">
                        <NavLink to="/contact">{t("nav_contact")}</NavLink>
                    </li>
                </ul>
            </nav>
            <LanguageSwitch />
        </div>
    );
};

Navbar.propTypes = {
    toTop: PropTypes.func.isRequired,
};

export default Navbar;
