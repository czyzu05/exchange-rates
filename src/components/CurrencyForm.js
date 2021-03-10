import React, { useContext } from "react";
import styled from "styled-components";
import { ExchangeRatesContext } from "../context";

const CurrencyForm = ({ selectedCode, changeRateCode }) => {
  const { currencyData } = useContext(ExchangeRatesContext);

  return (
    <Wrapper>
      <LeftContainer>
        <CountryFlag
          className={`currency-flag currency-flag-${selectedCode.toLowerCase()}`}
        />
        <RateValue type="number" />
      </LeftContainer>
      <RateCode value={selectedCode} onChange={changeRateCode}>
        {currencyData.map(({ code }) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
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
