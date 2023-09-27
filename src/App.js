import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ContactForm from "./ContactForm";
// import * as emailjs from "emailjs-com";

// import i18n from "./i18n/i18n";
// import { LanguageProvider, useLanguage } from './components/LanguageContext';
// import { LanguageProvider } from "./components/LanguageContext";

import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/scrollToTop";

import HomeScreen from "./components/homeScreen";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AccessibilityStatement from "./components/Terms/accessibilityStatement";
import Imprint from "./components/Terms/imprint";
import OpenSource from "./components/Terms/openSource";
import "./styles/App.scss";

function App() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    const ReactDOM = require("react-dom");

    if (process.env.NODE_ENV !== "production") {
        const axe = require("@axe-core/react");
        axe(React, ReactDOM, 1000);
    }

    const isHebrew = i18n.language === "he";

    useEffect(() => {
        const savedLanguage = localStorage.getItem("selectedLanguage");
        i18n.changeLanguage(savedLanguage);
    }, [i18n]);

    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

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

    // useEffect(() => {
    //     const savedLanguage = localStorage.getItem("selectedLanguage");
    //     console.log("savedLanguage", savedLanguage);
    // }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="wrapper">
                <Header t={t} toTop={toTop} />
                <main
                    id="container"
                    className={`main-content ${
                        isScrolled ? "is-scrolled" : ""
                    } ${isHebrew ? "rtl-text" : "ltr-text"}`}
                    onScroll={handleScroll}
                >
                    <Routes>
                        <Route path="/" exact element={<HomeScreen />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/imprint" element={<Imprint />} />
                        <Route path="/open-source" element={<OpenSource />} />
                        <Route
                            path="/accessibility-statement"
                            element={<AccessibilityStatement />}
                        />
                        {/* <Route path="/contact" component={ContactForm} /> */}
                    </Routes>

                    {isScrolled && (
                        <button
                            className="top"
                            onClick={() => {
                                toTop();
                            }}
                        >
                            {t("button_up")}
                        </button>
                    )}
                </main>

                {hasScrolledToBottom ? (
                    <Footer t={t} isHebrew={isHebrew} />
                ) : null}
            </div>
        </Router>
    );
}

export default App;
