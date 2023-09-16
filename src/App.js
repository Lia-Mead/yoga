import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
// import PropTypes from 'prop-types';

// import './nagishli.js';
import i18n from "./i18n/i18n";
// import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageProvider } from "./components/LanguageContext";

import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/scrollToTop";

import HomeScreen from "./components/homeScreen";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Development from "./components/development";
import AccessibilityStatement from "./components/Terms/accessibilityStatement";
import Imprint from "./components/Terms/imprint";
import OpenSource from "./components/Terms/openSource";
import "./styles/App.scss";

function App() {
    const { t } = useTranslation();
    const [isHebrew, setIsHebrew] = useState(false);
    const [isGerman, setIsGerman] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

    // const { switchLanguage } = useLanguage();

    // useEffect(() => {
    //   if (i18n.language === 'he') {
    //     setIsHebrew(true);
    //   } else {
    //     setIsHebrew(false);
    //   }

    //   // if (i18n.language === 'de') {
    //   //   setIsGerman(true);
    //   // } else {
    //   //   setIsGerman(false);
    //   // }

    //   // if (i18n.language === 'en') {
    //   //   setIsEnglish(true);
    //   // } else {
    //   //   setIsEnglish(false);
    //   // }
    // }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            // console.log('cleanup');
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (position > 400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const pageHeight = document.documentElement.scrollHeight;

            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= pageHeight) {
                setHasScrolledToBottom(true);
            } else {
                setHasScrolledToBottom(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <LanguageProvider>
                <Router>
                    <ScrollToTop />
                    <div className="wrapper">
                        <Header
                            t={t}
                            isHebrew={isHebrew}
                            setIsHebrew={setIsHebrew}
                            setIsGerman={setIsGerman}
                            setIsEnglish={setIsEnglish}
                            toTop={toTop}
                        />
                        <main
                            id="container"
                            className={`main-content ${
                                isScrolled ? "is-scrolled" : ""
                            } ${isHebrew ? "rtl-text" : "ltr-text"}`}
                            onScroll={handleScroll}
                        >
                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                {/* <Route path="/" exact component={HomeScreen} /> */}
                                {/* <Route
                                    path="/development"
                                    component={Development}
                                />
                                <Route path="/about" component={About} />

                                <Route
                                    path="/accessibility-statement"
                                    component={AccessibilityStatement}
                                />
                                <Route path="/imprint" component={Imprint} />
                                <Route
                                    path="/open-source"
                                    component={OpenSource}
                                /> */}
                            </Routes>

                            {isScrolled && (
                                <button
                                    className="top"
                                    onClick={() => {
                                        toTop();
                                    }}
                                >
                                    top
                                </button>
                            )}
                        </main>

                        {hasScrolledToBottom ? (
                            <Footer t={t} isHebrew={isHebrew} />
                        ) : null}
                    </div>
                </Router>
            </LanguageProvider>
        </I18nextProvider>
    );
}

export default App;
