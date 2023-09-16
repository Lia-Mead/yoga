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
                    <p>@babel/core@7.22.11</p>
                    <p>@babel/eslint-parser@7.22.11</p>
                    <p>@babel/eslint-plugin@7.22.10</p>
                    <p>@babel/parser@7.22.14</p>
                    <p>@babel/preset-react@7.22.5</p>
                    <p>
                        @babel/plugin-proposal-private-property-in-object@7.21.11
                    </p>
                    <p>babel-loader@9.1.3</p>
                    <p> @testing-library/jest-dom@5.17.0</p>
                    <p>@testing-library/react@13.4.0 </p>
                    <p>@testing-library/user-event@13.5.0</p>
                    <p>accessibility@4.5.7</p>
                    <p>classnames@2.3.2</p>
                    <p>i18next@23.5.1</p>
                    <p>js-cookie@3.0.5</p>
                    <p>react-dom@18.2.0</p>
                    <p>react-i18next@13.2.2</p>
                    <p>react-icons@4.10.1</p>
                    <p>react-router-dom@5.3.4</p>
                    <p>react-scripts@5.0.1</p>
                    <p>react-ui-cards@2.0.0</p>
                    <p>react@18.2.0</p>
                    <p>sass@1.66.1</p>
                    <p>eslint-plugin-react-hooks@4.6.0</p>
                    <p>eslint@8.48.0</p>
                    <p>uuid@9.0.0</p>
                    <p>react-axe@3.5.4</p>
                    <p>web-vitals@2.1.4</p>
                    <p>webpack-cli@5.1.4</p>
                    <p>webpack@5.88.2</p>
                </div>
            </div>
        </div>
    );
};

export default OpenSource;
