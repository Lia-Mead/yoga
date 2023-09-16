import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create a context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");

    const switchLanguage = (newLanguage) => {
        setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
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
