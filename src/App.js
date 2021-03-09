import React, { useContext } from "react";
import { ExchangeRatesContext } from "./context";
import Header from "./components/Header";
import CurrencyForm from "./components/CurrencyForm";

const App = () => {
  const {
    firstCurrency,
    setFirstCurrency,
    setSecondCurrency,
    secondCurrency,
  } = useContext(ExchangeRatesContext);
  return (
    <>
      <Header />
      <CurrencyForm
        selectedCode={firstCurrency}
        changeRateCode={(e) => setFirstCurrency(e.target.value)}
      />
      <CurrencyForm
        selectedCode={secondCurrency}
        changeRateCode={(e) => setSecondCurrency(e.target.value)}
      />
    </>
  );
};

export default App;
