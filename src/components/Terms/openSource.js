import React from "react";
import { useTranslation } from "react-i18next";

const OpenSource = () => {
    const { t } = useTranslation();
    return (
        <div id="open-source" className={`terms-con`}>
            <div className="box">
                <div className="text-content">
                    <h1>{t("oss_title")}</h1>
                    <p>{t("oss_text_1")}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default OpenSource;
