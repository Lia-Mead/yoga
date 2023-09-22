import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // const [currentLanguage, setCurrentLanguage] = useState("en");
    const [currentLanguage, setCurrentLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "en"
    );

    const switchLanguage = (newLanguage) => {
        setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
        console.log("language", currentLanguage);
        localStorage.setItem("language", currentLanguage);
    }, [currentLanguage]);

    return (
        <LanguageContext.Provider value={{ currentLanguage, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};

LanguageProvider.propTypes = {
    children: PropTypes.node,
};
