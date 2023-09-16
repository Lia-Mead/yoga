/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import Avatar from "../assets/images/liatm.jpg";
import StackIcon from "../assets/icons/stack.svg";

const About = ({ isHebrew }) => {
    const { t } = useTranslation();

    //   const isHebrew = i18n.language === 'he';

    return (
        <div
            id="about"
            className={`about-container ${isHebrew ? "rtl-text" : "ltr-text"}`}
        >
            <div className="box">
                <h1>
                    <a href="#about">{t("about")}</a>
                </h1>
                <div className="text-box">
                    <div className="text-con">
                        <p>{t("about_para_1_1")}</p>
                        <p>
                            {" "}
                            {t("about_para_1_1_1")}
                            <strong className="highlight">
                                {t("about_para_1_2")}
                            </strong>
                            {t("about_para_1_3")}
                        </p>
                        <p>{t("about_para_2_1")}</p>
                        <p>
                            {t("about_para_3_1")}
                            <strong className="highlight">
                                {t("about_para_3_2")}
                            </strong>
                        </p>
                        <br />
                        <p>{t("about_para_4_1")}</p>
                        <br />
                        <br />
                        <img
                            className="icon"
                            src={StackIcon}
                            alt="liat-meadows"
                        />
                        <p>
                            JavaScript &#8226; HTML5 &#8226; CSS &#8226; SASS
                            &#8226; Node.js &#8226; Express &#8226; React-Native
                            &#8226; React.js &#8226; Redux &#8226; Bootstrap
                            &#8226; Git &#8226; GitHub &#8226; jQuery &#8226;
                            Wordpress &#8226; Socket.IO &#8226; Sketch &#8226;
                            Adobe Creative Suite
                        </p>
                    </div>
                </div>

                <div className={"avatar-box"}>
                    <img className="avatar" src={Avatar} alt="liat-meadows" />
                </div>
            </div>
        </div>
    );
};

About.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(About);
