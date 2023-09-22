import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "./navBar";
// import Nav from "./nav";
import BurgerMenu from "./burgerMenu";
// import LanguageSwitch from '../components/LanguageSwitch';
// import { useLanguage } from '../components/LanguageContext';
import HeaderScroll from "./headerScroll";

import close from "../assets/icons/close.svg";
import burger from "../assets/icons/burger.svg";
import Logo from "../components/logo";

export default function Header({
    t,
    setIsHebrew,
    isHebrew,
    setIsGerman,
    setIsEnglish,
    toTop,
}) {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [mQuery, setMQuery] = useState();
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const updateSize = () => {
        let mql = window.matchMedia("(max-width: 1074px)");
        setMQuery(mql.matches);
    };

    const toggleBurgerMenu = () => {
        // console.log("burgerOpen");
        setBurgerOpen(!burgerOpen);
    };

    let src;
    burgerOpen ? (src = close) : (src = burger);

    useEffect(() => {
        if (screenSize < 900) {
            console.log("screenSize", screenSize);
            setBurgerOpen(false);
            // add class justify-content: space-between; header
        }
    }, [screenSize]);

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        setScreenSize(window.innerWidth);
    }, []);

    return (
        <>
            <header className="header">
                <HeaderScroll />

                {screenSize < 900 || mQuery ? (
                    <div className="responsive-nav-con">
                        <Link to="/" onClick={toTop}>
                            <Logo />
                        </Link>
                        <img
                            onClick={toggleBurgerMenu}
                            className="navbar-icon"
                            src={src}
                            alt="responsive-menu-button"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    toggleBurgerMenu();
                                }
                            }}
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role="menu"
                            aria-labelledby="menubutton"
                            tabIndex="0"
                        />
                    </div>
                ) : (
                    <NavBar
                        t={t}
                        setIsHebrew={setIsHebrew}
                        isHebrew={isHebrew}
                        setIsGerman={setIsGerman}
                        setIsEnglish={setIsEnglish}
                        toTop={toTop}
                    />
                )}
            </header>

            {burgerOpen ? (
                <BurgerMenu
                    t={t}
                    toggleBurgerMenu={toggleBurgerMenu}
                    burgerOpen={burgerOpen}
                    setIsHebrew={setIsHebrew}
                    setIsGerman={setIsGerman}
                    setIsEnglish={setIsEnglish}
                    isHebrew={isHebrew}
                    toTop={toTop}
                    setBurgerOpen={setBurgerOpen}
                />
            ) : null}
        </>
    );
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
    setIsHebrew: PropTypes.func.isRequired,
    setIsGerman: PropTypes.func.isRequired,
    setIsEnglish: PropTypes.func.isRequired,
    toTop: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool.isRequired,
};
