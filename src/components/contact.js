/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

// import "../styles/about.scss";

const Contact = ({ isHebrew }) => {
    const { t } = useTranslation();

    //   const isHebrew = i18n.language === 'he';

    return (
        <section
            className="page-section"
            id="contact"
            href="#contact"
            name="contact"
        >
            <div className={`container ${isHebrew ? "rtl-text" : "ltr-text"}`}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        {t("contact")}
                    </h2>
                    <h3 className="section-subheading text-muted">
                        {t("text")}
                    </h3>
                </div>
            </div>
        </section>
    );
};

Contact.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(Contact);
