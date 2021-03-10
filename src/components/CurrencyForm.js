import React, { useContext } from "react";
import styled from "styled-components";
import { ExchangeRatesContext } from "../context";

const CurrencyForm = ({ baseCurrency, amount, changeAmount }) => {
  const { currencyData, changeCurrency, fromCurrency } = useContext(
    ExchangeRatesContext
  );

  return (
    <Wrapper>
      <LeftContainer>
        <CountryFlag
          className={`currency-flag currency-flag-${
            baseCurrency
              ? "pln"
              : fromCurrency
              ? fromCurrency.toLowerCase()
              : null
          }`}
        />
        <RateValue
          type="number"
          value={amount ? amount : ""}
          onChange={changeAmount}
        />
      </LeftContainer>
      <RateCode
        value={baseCurrency ? "PLN" : fromCurrency}
        onChange={changeCurrency}
      >
        {baseCurrency ? (
          <option value="PLN">PLN</option>
        ) : (
          currencyData.map(({ code }) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))
        )}
      </RateCode>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 40%;
  height: 150px;
  background-color: #191d2b;
  border-radius: 5px;
  margin: 35px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 100px;
  }
`;

const LeftContainer = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.div`
  width: 60px;
  height: 45px;
  border-radius: 5px;
  background-position: center;
`;

const RateValue = styled.input`
  margin-left: 15px;
  height: 40px;
  outline: none;
  background-color: #191d2b;
  border: none;
  border-bottom: 1px solid white;
  color: #fff;
  font-size: 1rem;
`;

const RateCode = styled.select`
  height: 40px;
  outline: none;
  background-color: #191d2b;
  border: none;
  border-bottom: 1px solid white;
  color: #037fff;
  font-size: 1.5rem;
  padding: 5px;
`;

export default CurrencyForm;
