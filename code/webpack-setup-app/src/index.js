require("file-loader?name=[name].[ext]!./index.html");

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

//React 17
// ReactDOM.render(<App />, document.getElementById("app"));

// React 18
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <App />
);
