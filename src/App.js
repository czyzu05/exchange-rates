import React from "react";
import { ExchangeRatesProvider } from "./context";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <ExchangeRatesProvider>
        <Header />
      </ExchangeRatesProvider>
    </>
  );
};

export default App;
