/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import "../styles/about.scss";

import Avatar from "../assets/images/liatm.jpg";
import HeadStand from "../assets/images/headstand.jpg";
import Ashram from "../assets/images/ashram.jpg";
import Pada from "../assets/images/padangusta.jpg";

const About = ({ isHebrew }) => {
    const { t } = useTranslation();

    //   const isHebrew = i18n.language === 'he';

    return (
        <section className="page-section" id="about">
            <div className="container">
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
                                <h4>2012 – current</h4>
                                <h4 className="subheading">
                                    {t("home_hatha_yoga_instructor")}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Yoga Teachers Continuing Education Program
                                    at Amritapuri Ashram, Kerala, India
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
                                <h4>December 2012</h4>
                                <h4 className="subheading">
                                    Yoga Teachers Training in the Ashram
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Yoga Teachers Continuing Education Program
                                    at Amritapuri Ashram, Kerala, India
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
                                <h4>2008 – 2009</h4>
                                <h4 className="subheading">
                                    Freelance Yoga Teacher at "Yoga Inhale"
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"></p>Instructing
                                various yoga classes for children and adults
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src="assets/img/about/2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2007 – 2008</h4>
                                <h4 className="subheading">
                                    Highschool Yoga Teacher
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Volunteering as Yoga Teacher, Youth Program
                                    at Highschool Tichon Hadash Tel Aviv
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
                                <h4>2006-2007</h4>
                                <h4 className="subheading">
                                    Qualified Yoga Instructor
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Two years and 420 hours Yoga Instructors
                                    program instructed by Dr. Udi Bilu in the
                                    Kibbutzim College of Education in Tel Aviv,
                                    Israel
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Raise Your
                                <br />
                                Vibration!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        // <section classNameName="page-section" id="about">
        //     <div
        //         classNameName={`about-container ${
        //             isHebrew ? "rtl-text" : "ltr-text"
        //         }`}
        //     >
        //         <div classNameName="text-center">
        //             <h2 classNameName="section-heading">{t("about_title")}</h2>
        //             <h3 classNameName="section-subheading text-muted">
        //                 {t("about_my_way")}
        //             </h3>
        //         </div>
        //         <ul classNameName="timeline">
        //             <li>
        //                 <div classNameName="timeline-image">
        //                     <img
        //                         classNameName="rounded-circle img-fluid"
        //                         src="assets/img/about/1.jpg"
        //                         alt=""
        //                     />
        //                     <div classNameName={"rounded-circle"}>
        //                         <img
        //                             classNameName="rounded-circle"
        //                             src={Avatar}
        //                             alt="liat-meadows"
        //                         />
        //                     </div>
        //                 </div>
        //                 <div classNameName="timeline-panel">
        //                     <div classNameName="timeline-heading">
        //                         <h4>2006-2007</h4>
        //                         <h4 classNameName="subheading">
        //                             Qualified Yoga Instructor
        //                         </h4>
        //                     </div>
        //                     <div classNameName="timeline-body">
        //                         <p classNameName="text-muted">
        //                             {t("about_para_1_1_1")}
        //                         </p>
        //                     </div>
        //                 </div>
        //             </li>
        //             <li classNameName="timeline-inverted">
        //                 <div classNameName="timeline-image">
        //                     <img
        //                         classNameName="rounded-circle img-fluid"
        //                         src="assets/img/about/2.jpg"
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div classNameName="timeline-panel">
        //                     <div classNameName="timeline-heading">
        //                         <h4>2007</h4>
        //                         <h4 classNameName="subheading">
        //                             Highschool Yoga Teacher
        //                         </h4>
        //                     </div>
        //                     <div classNameName="timeline-body">
        //                         <p classNameName="text-muted">
        //                             Volunteering as Yoga Teacher, Youth Program
        //                             at Highschool Tichon Hadash Tel Aviv
        //                         </p>
        //                     </div>
        //                 </div>
        //             </li>
        //             <li>
        //                 <div classNameName="timeline-image">
        //                     <img
        //                         classNameName="rounded-circle img-fluid"
        //                         src="assets/img/about/3.jpg"
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div classNameName="timeline-panel">
        //                     <div classNameName="timeline-heading">
        //                         <h4>2008 – 2009</h4>
        //                         <h4 classNameName="subheading">
        //                             Freelance Yoga Teacher at "Yoga Inhale"
        //                         </h4>
        //                     </div>
        //                     <div classNameName="timeline-body">
        //                         <p classNameName="text-muted"></p>Instructing
        //                         various yoga classNameNamees for children and adults
        //                     </div>
        //                 </div>
        //             </li>
        //             <li classNameName="timeline-inverted">
        //                 <div classNameName="timeline-image">
        //                     <img
        //                         classNameName="rounded-circle img-fluid"
        //                         src="assets/img/about/4.jpg"
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div classNameName="timeline-panel">
        //                     <div classNameName="timeline-heading">
        //                         <h4>December 2012</h4>
        //                         <h4 classNameName="subheading">
        //                             Yoga Teachers Training in the Ashram
        //                         </h4>
        //                     </div>
        //                     <div classNameName="timeline-body">
        //                         <p classNameName="text-muted">
        //                             Yoga Teachers Continuing Education Program
        //                             at Amritapuri Ashram, Kerala, India
        //                         </p>
        //                     </div>
        //                 </div>
        //             </li>
        //             <li classNameName="timeline-inverted">
        //                 <div classNameName="timeline-image">
        //                     <h4>
        //                         Be Part
        //                         <br />
        //                         Raise Your
        //                         <br />
        //                         Vibration!
        //                     </h4>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </section>
    );
};

About.propTypes = {
    t: PropTypes.func.isRequired,
    isHebrew: PropTypes.bool,
};

export default withTranslation()(About);
