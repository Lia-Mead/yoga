import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = ({ t, isHebrew }) => {
    return (
        <footer className="footer">
            <div className="footer-box first">
                <p className="link-con">{t("footer_made_with_love")}</p>
                {/* <a
                    className="link-con"
                    href="https://www.github.com/Lia-Mead"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="icon" src={github} alt="github" />
                    gitHub
                </a> */}

                <a className="link-con" href="mailto:meadowsliat@gmail.com">
                    liatyoga@gmail.com
                </a>
            </div>

            <div className={`footer-box ${isHebrew ? "rtl-text" : "ltr-text"}`}>
                <Link className="footer-link" to="/imprint">
                    {t("footer_imprint")}
                </Link>
                <Link className="footer-link" to="/accessibility-statement">
                    {t("footer_accessibility")}
                </Link>

                <Link className="footer-link" to="/open-source">
                    {t("footer_open_source")}
                </Link>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool.isRequired,
};

export default Footer;
