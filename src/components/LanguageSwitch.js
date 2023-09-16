import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useLanguage } from './LanguageContext';

const LanguageSwitch = ({ setIsHebrew, setIsEnglish, setIsGerman }) => {
  const { i18n } = useTranslation();

  const setIsHebrewCallback = useCallback(
    (value) => {
      setIsHebrew(value);
    },
    [setIsHebrew]
  );

  const { switchLanguage } = useLanguage();

  const handleLanguageChange = useCallback(
    (newLanguage) => {
      i18n.changeLanguage(newLanguage);

      const saveLanguageToLocalStorage = (language) => {
        localStorage.setItem('selectedLanguage', language);
        // console.log('newlang in local storage', language);
      };

      saveLanguageToLocalStorage(newLanguage);
    },
    [i18n]
  );

  useEffect(() => {
    const browserLanguage = window.navigator.language;
    // console.log("User's browser language:", browserLanguage);

    const savedLanguage = localStorage.getItem('selectedLanguage');
    // console.log('savedLanguage', savedLanguage);

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      handleLanguageChange(browserLanguage);
    }

    if (savedLanguage === 'he') {
      setIsHebrewCallback(true);
    }
  }, [handleLanguageChange, i18n, setIsHebrewCallback]);

  return (
    <div className="lang-box">
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('en');
          setIsHebrewCallback(false);
          setIsEnglish(true);
          switchLanguage('en');
          setIsGerman(false);
        }}
      >
        English
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('de');
          setIsHebrewCallback(false);
          setIsEnglish(false);
          switchLanguage('de');
          setIsGerman(true);
        }}
      >
        Deutsch
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('he');
          setIsHebrew(true);
          switchLanguage('he');
          setIsEnglish(false);
          setIsGerman(false);
        }}
      >
        עברית
      </button>
    </div>
  );
};

LanguageSwitch.propTypes = {
  setIsHebrew: PropTypes.func.isRequired,
  setIsGerman: PropTypes.func.isRequired,
  setIsEnglish: PropTypes.func.isRequired,
};

export default LanguageSwitch;
