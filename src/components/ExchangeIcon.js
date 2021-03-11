import React from "react";
import styled from "styled-components";
import { FiRefreshCw } from "react-icons/fi";

const ExchangeIcon = () => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 50%;
  border: 8px solid #10121b;
  background-color: #191d2b;
`;

const Icon = styled(FiRefreshCw)`
  font-size: 1.7rem;
  color: #fff;
`;

export default ExchangeIcon;
