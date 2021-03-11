import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ExchangeRatesContext = createContext();

export const ExchangeRatesProvider = ({ children }) => {
  const [currencyData, setCurrencyData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [isAmountFrom, setIsAmountFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();
  const [errMsg, setErrMsg] = useState(null);

  let toAmount, fromAmount;

  const changeCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChangeToAmount = (e) => {
    if (e.target.value >= 0) {
      setAmount(e.target.value);
      setIsAmountFrom(false);
      setErrMsg(null);
    } else {
      setErrMsg("Value cannot be less than 0");
    }
  };

  const handleChangeFromAmount = (e) => {
    if (e.target.value >= 0) {
      setAmount(e.target.value);
      setIsAmountFrom(true);
      setErrMsg(null);
    } else {
      setErrMsg("Value cannot be less than 0");
    }
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
      ).then((res) => {
        setExchangeRate(res.data.rates[0].mid);
        setErrMsg(null);
      });
    } else {
      setErrMsg("Cannot connect to NBP");
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
        errMsg,
      }}
    >
      {children}
    </ExchangeRatesContext.Provider>
  );
};
