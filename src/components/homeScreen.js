import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import About from "./about";

import backgroundImage from "../assets/images/header-bg.jpg";

import "../styles/homeScreen.scss";

const HomeScreen = ({ toTop }) => {
    const { t, i18n } = useTranslation();
    const isHebrew = i18n.language === "he";
    // const backgroundImageUrl = "../assets/images/header-bg.jpg";

    return (
        <div
            id="home"
            className={`con home ${isHebrew ? "rtl-text" : "ltr-text"}`}
            // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="background-image"
                // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="stage">
                    <h1>{t("liat_meadows")}</h1>

                    <h2>{t("home_yoga")}</h2>

                    <div>
                        <h3 className="animate-character">
                            {t("home_slogan")}
                        </h3>
                    </div>
                </div>
            </div>

            <About t={t} isHebrew={isHebrew} onClick={toTop} />
        </div>
    );
};

HomeScreen.propTypes = {
    toTop: PropTypes.func,
};

export default HomeScreen;
