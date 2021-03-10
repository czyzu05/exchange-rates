import React from "react";
import { ExchangeRatesProvider } from "./context";
import ReactDOM from "react-dom";
import "./index.css";
import 'currency-flags/dist/currency-flags.css'
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <ExchangeRatesProvider>
      <App />
    </ExchangeRatesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
