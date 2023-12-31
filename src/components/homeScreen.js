import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import About from "./about";
import backgroundImageStage from "../assets/images/header-bg.jpg";
import "../styles/homeScreen.scss";

const HomeScreen = ({ toTop }) => {
    const { t, i18n } = useTranslation();
    const isHebrew = i18n.language === "he";

    return (
        <div
            id="home"
            className={`con home ${isHebrew ? "rtl-text" : "ltr-text"}`}
        >
            <div
                className="stage background-image"
                style={{ backgroundImage: `url(${backgroundImageStage})` }}
            >
                <div className="opening-text-con">
                    <h1>
                        {t("home_yoga")}
                        {t("with_liat")}
                    </h1>
                    <h2>{t("yoga_classes_and_retreats")}</h2>
                </div>
            </div>

            <div className="animate-box">
                <h3 className="animate-character">{t("home_slogan")}</h3>
            </div>

            <About onClick={toTop} />
        </div>
    );
};

HomeScreen.propTypes = {
    toTop: PropTypes.func,
};

export default HomeScreen;
