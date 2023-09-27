import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();

    const switchLanguage = useCallback(
        (newLanguage) => {
            i18n.changeLanguage(newLanguage);

            const saveLanguageToLocalStorage = (language) => {
                localStorage.setItem("selectedLanguage", language);
                // console.log('newlang in local storage', language);
            };

            saveLanguageToLocalStorage(newLanguage);
        },
        [i18n]
    );

    return (
        <div className="lang-box">
            <button
                className="lang-btn"
                onClick={() => {
                    switchLanguage("en");
                }}
            >
                EN
            </button>
            <button
                className="lang-btn"
                onClick={() => {
                    switchLanguage("de");
                }}
            >
                DE
            </button>
            <button
                className="lang-btn"
                onClick={() => {
                    switchLanguage("he");
                }}
            >
                עב
            </button>
        </div>
    );
};

export default LanguageSwitch;
