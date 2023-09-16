import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import github from '../assets/icons/github.svg';

const Footer = ({ t, isHebrew }) => {
  return (
    <footer className="footer">
      <div className="footer-box first">
        <p>{t('footer_made_with_love')}</p>
        <a
          className="link-con"
          href="https://www.github.com/Lia-Mead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="github" />
          gitHub
        </a>

        <p>
          <a href="mailto:meadowsliat@gmail.com">meadowsliat@gmail.com</a>
        </p>
      </div>

      <div className={`footer-box ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
        <Link className="footer-link" to="/imprint">
          {t('footer_imprint')}
        </Link>
        <Link
          className="footer-link"
          to="/accessibility-statement"
          // to={{
          //   pathname: '/accessibility-statement',
          //   state: {
          //     scrollToTop: true,
          //   },
          // }}
        >
          {t('footer_accessibility')}
        </Link>

        <Link className="footer-link" to="/open-source">
          {t('footer_open_source')}
        </Link>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  isHebrew: PropTypes.bool.isRequired,
  // toTop: PropTypes.func,
};

export default Footer;
