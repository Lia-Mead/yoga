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
                    <p>axios@1.5.0</p>
                    <p>express@4.18.2</p>
                    <p>@testing-library/react@13.4.0</p>
                    <p>file-loader@6.2.0</p>
                    <p>nodemailer@6.9.5</p>
                    <p>react-dom@18.2.0</p>
                    <p>react-hook-form@7.46.1</p>
                    <p>react-router-dom@6.16.0</p>
                    <p>react-scripts@5.0.1</p>
                    <p>react-scroll@1.8.9</p>
                    <p>react@18.2.0</p>
                    <p>styled-components@6.0.8</p>
                    <p>surl-loader@4.1.1</p>
                    <p>web-vitals@2.1.4</p>
                    <p>webpack-cli@5.1.4</p>
                </div>
            </div>
        </div>
    );
};

export default OpenSource;
