import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const ExchangeRatesContext = createContext();

export const ExchangeRatesProvider = ({ children }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios("http://api.nbp.pl/api/exchangerates/tables/a/")
      .then(res => {
        console.log(res.data);
        setRates(res.data);
      })
  }, []);

  return (
    <ExchangeRatesContext.Provider value={{ rates }}>
      {children}
    </ExchangeRatesContext.Provider>
  );
};
