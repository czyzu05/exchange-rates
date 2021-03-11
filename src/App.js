import React, { useContext } from "react";
import { ExchangeRatesContext } from "./context";
import styled from "styled-components";
import Header from "./components/Header";
import CurrencyForm from "./components/CurrencyForm";
import Paragraph from "./components/Paragraph";
import ExchangeIcon from "./components/ExchangeIcon";

const App = () => {
  const {
    fromAmount,
    toAmount,
    handleChangeFromAmount,
    handleChangeToAmount,
    errMsg,
  } = useContext(ExchangeRatesContext);

  return (
    <>
      <Header />
      <Paragraph>Based on the exchange rate of NBP</Paragraph>
      <CurrencyConverter>
        <CurrencyForm
          amount={fromAmount}
          changeAmount={handleChangeFromAmount}
        />
        <ExchangeIcon />
        <CurrencyForm
          amount={toAmount}
          changeAmount={handleChangeToAmount}
          baseCurrency
        />
      </CurrencyConverter>
      {errMsg && <ErrorInfo>{errMsg}</ErrorInfo>}
    </>
  );
};

const ErrorInfo = styled(Paragraph)`
  text-align: center;
`;
const CurrencyConverter = styled.div`
  position: relative;
`;
export default App;
