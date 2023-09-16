import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const Development = () => {
    const { t, i18n } = useTranslation();
    const isHebrew = i18n.language === "he";

    return (
        <div
            id="my-dev-projects"
            className={`development-con ${isHebrew ? "rtl-text" : "ltr-text"}`}
        >
            <div className="box">
                <h1>
                    <a href="#my-dev-projects">
                        {t("development_my_development_projects")}
                    </a>
                </h1>
                <div className={"cards-box"}></div>
            </div>
        </div>
    );
};

Development.propTypes = {
    projectArray: PropTypes.array,
    isWideCard: PropTypes.bool,
    // toTop: PropTypes.func,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(Development);
