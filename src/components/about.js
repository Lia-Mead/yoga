/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import "../styles/about.scss";

import Avatar from "../assets/images/liatm.jpg";
import HeadStand from "../assets/images/headstand.jpg";
import Ashram from "../assets/images/ashram.jpg";
import Pada from "../assets/images/padangusta.jpg";
import Tichon from "../assets/images/tichon7.jpg";

const About = ({ isHebrew }) => {
    const { t } = useTranslation();

    //   const isHebrew = i18n.language === 'he';

    return (
        <section className="page-section" id="about" href="#about" name="about">
            <div className={`container ${isHebrew ? "rtl-text" : "ltr-text"}`}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        {t("about")}
                    </h2>
                    <h3 className="section-subheading text-muted">
                        {t("about_my_way")}
                    </h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src={HeadStand}
                                alt="head-stand-in-sunset"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{t("about_para_1_years")}</h4>
                                <h4 className="subheading">
                                    {t("about_para_1_title")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {t("about_para_1")}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src={Ashram}
                                alt="head-stand-in-sunset"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{t("about_para_2_years")}</h4>
                                <h4 className="subheading">
                                    {t("about_para_2_title")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {t("about_para_2")}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src={Pada}
                                alt="standing-pose-leg-to-head"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{t("about_para_3_years")}</h4>
                                <h4 className="subheading">
                                    {t("about_para_3_title")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {t("about_para_3")}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src={Tichon}
                                alt="youth-in-tichon-hadash-practicing-yoga"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{t("about_para_4_years")}</h4>
                                <h4 className="subheading">
                                    {t("about_para_4_title")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {t("about_para_4")}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src={Avatar}
                                alt="liat-meadows"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{t("about_para_5_years")}</h4>
                                <h4 className="subheading">
                                    {t("about_para_5_title")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {t("about_para_5")}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                {t("about_be_part")}
                                <br />
                                {t("about_raise_your")}
                                <br />
                                {t("about_vibration")}
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

About.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(About);
