import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ExchangeRatesContext = createContext();

export const ExchangeRatesProvider = ({ children }) => {
  const [currencyData, setCurrencyData] = useState([]);
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");

  useEffect(() => {
    axios("http://api.nbp.pl/api/exchangerates/tables/a/").then((res) => {
      setCurrencyData([...res.data[0].rates]);
      setFirstCurrency(res.data[0].rates[0].code);
      setSecondCurrency(res.data[0].rates[1].code);
    });
  }, []);

  return (
    <ExchangeRatesContext.Provider
      value={{
        currencyData,
        firstCurrency,
        setFirstCurrency,
        setSecondCurrency,
        secondCurrency,
      }}
    >
      {children}
    </ExchangeRatesContext.Provider>
  );
};
