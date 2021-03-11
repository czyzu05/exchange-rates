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
    @media screen and (max-width: 370px) {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 60%;
  }
  @media screen and (max-width: 1050px) {
    width: 75%;
  }
  @media screen and (max-width: 815px) {
    width: 90%;
  }
  @media screen and (max-width: 665px) {
    width: 100%;
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

  @media screen and (max-width: 550px) {
    width: 45px;
    height: 30px;
  }
  @media screen and (max-width: 370px) {
    width: 30px;
    height: 20px;
  }
`;

const RateValue = styled.input`
  margin-left: 15px;
  height: 40px;
  width: 12rem;
  outline: none;
  background-color: #191d2b;
  border: none;
  border-bottom: 1px solid white;
  color: #fff;
  font-size: 1.4rem;

  @media screen and (max-width: 665px) {
    width: 8rem;
  }
  @media screen and (max-width: 550px) {
    width: 6rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 370px) {
    width: 3rem;
    font-size: 0.8rem;
  }
`;

const RateCode = styled.select`
  height: 40px;
  margin-right: 30px;
  outline: none;
  background-color: #191d2b;
  border: none;
  border-bottom: 1px solid white;
  color: #037fff;
  font-size: 1.5rem;
  padding: 5px;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export default CurrencyForm;
