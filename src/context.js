import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ExchangeRatesContext = createContext();

export const ExchangeRatesProvider = ({ children }) => {
  const [currencyData, setCurrencyData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [isAmountFrom, setIsAmountFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  let toAmount, fromAmount;

  const changeCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChangeToAmount = (e) => {
    setAmount(e.target.value);
    setIsAmountFrom(false);
  };

  const handleChangeFromAmount = (e) => {
    setAmount(e.target.value);
    setIsAmountFrom(true);
  };

  useEffect(() => {
    axios("http://api.nbp.pl/api/exchangerates/tables/a/").then((res) => {
      setCurrencyData([...res.data[0].rates]);
      setFromCurrency(res.data[0].rates[0].code);
      setExchangeRate(res.data[0].rates[0].mid);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency != null) {
      axios(
        `http://api.nbp.pl/api/exchangerates/rates/a/${fromCurrency}/`
      ).then((res) => setExchangeRate(res.data.rates[0].mid));
    }
  }, [fromCurrency]);

  if (isAmountFrom) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  return (
    <ExchangeRatesContext.Provider
      value={{
        currencyData,
        fromCurrency,
        changeCurrency,
        fromAmount,
        toAmount,
        handleChangeToAmount,
        handleChangeFromAmount,
      }}
    >
      {children}
    </ExchangeRatesContext.Provider>
  );
};
