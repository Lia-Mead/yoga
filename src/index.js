import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import i18nConfig from "./i18n/i18n";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18nConfig}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);

reportWebVitals();
