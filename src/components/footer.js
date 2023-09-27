import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isHebrew = i18n.language === "he";

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

export default Footer;
