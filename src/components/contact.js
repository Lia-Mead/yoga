/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
// import ContactForm from "./contactForm";

import backgroundImageContact from "../assets/images/warrier.jpg";

import "../styles/contact.scss";

const Contact = ({ isHebrew }) => {
    const { t } = useTranslation();

    return (
        <section
            className="page-section line-break"
            id="contact"
            href="#contact"
            name="contact"
        >
            <div
                className={`container contact ${
                    isHebrew ? "rtl-text" : "ltr-text"
                }`}
            >
                <div className="text-center">
                    <h1 className="section-heading text-uppercase">
                        {t("contact")}
                    </h1>

                    <h2>{t("contact_contact_me")}</h2>
                    {/* <ContactForm /> */}
                    <h3 className="section-subheading ">
                        <p>
                            <a href="mailto:liatyoga@gmail.com">
                                {t("imprint_text_4")}
                            </a>
                        </p>
                    </h3>
                </div>
            </div>
            <div
                className="form-box background-image"
                style={{
                    backgroundImage: `url(${backgroundImageContact})`,
                }}
            ></div>
        </section>
    );
};

Contact.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(Contact);
