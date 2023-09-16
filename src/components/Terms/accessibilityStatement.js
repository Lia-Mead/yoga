import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

const AccessibilityStatement = () => {
  const { t } = useTranslation();

  // const location = useLocation();
  // const scrollToTop = location.state?.toTop || false;

  return (
    <div id="accessibility" className={`terms-con`}>
      <div className="box">
        <div className="text-content">
          <h1>{t('accessibility_statement_title')}</h1>
          <p>{t('accessibility_statement_text_1')}</p>
          <p>{t('accessibility_statement_text_2')}</p>
          <p>{t('accessibility_statement_text_3')}</p>
        </div>
      </div>
    </div>
  );
};

// AccessibilityStatement.propTypes = {
//   toTop: PropTypes.func,
// };

export default AccessibilityStatement;
