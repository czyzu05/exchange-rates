import React, { useContext } from "react";
import { ExchangeRatesContext } from "./context";
import Header from "./components/Header";
import CurrencyForm from "./components/CurrencyForm";

const App = () => {
  const {
    fromAmount,
    toAmount,
    handleChangeFromAmount,
    handleChangeToAmount,
  } = useContext(ExchangeRatesContext);

  return (
    <>
      <Header />
      <CurrencyForm amount={fromAmount} changeAmount={handleChangeFromAmount} />
      <CurrencyForm
        amount={toAmount}
        changeAmount={handleChangeToAmount}
        baseCurrency
      />
    </>
  );
};

export default App;
