import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./i18next";

ReactDOM.render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <App/>
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
