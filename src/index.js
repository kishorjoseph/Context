import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeContextProvider } from "./ThemeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  rootElement
);
