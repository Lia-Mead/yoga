import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "./navBar";
import BurgerMenu from "./burgerMenu";
import HeaderScroll from "./headerScroll";

import close from "../assets/icons/close.svg";
import burger from "../assets/icons/burger.svg";
import Logo from "../components/logo";

export default function Header({ toTop }) {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [mQuery, setMQuery] = useState();
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const updateSize = () => {
        let mql = window.matchMedia("(max-width: 1074px)");
        setMQuery(mql.matches);
    };

    const toggleBurgerMenu = () => {
        setBurgerOpen(!burgerOpen);
    };

    let src;
    burgerOpen ? (src = close) : (src = burger);

    useEffect(() => {
        if (screenSize < 900) {
            // console.log("screenSize", screenSize);
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
                    <div className="responsive-nav-con" role="group">
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
                            role="button"
                            aria-labelledby="menubutton"
                            aria-label="Toggle Menu"
                            tabIndex="0"
                        />
                    </div>
                ) : (
                    <NavBar toTop={toTop} />
                )}
            </header>

            {burgerOpen ? (
                <BurgerMenu
                    burgerOpen={burgerOpen}
                    setBurgerOpen={setBurgerOpen}
                    toggleBurgerMenu={toggleBurgerMenu}
                    toTop={toTop}
                />
            ) : null}
        </>
    );
}

Header.propTypes = {
    toTop: PropTypes.func.isRequired,
};
