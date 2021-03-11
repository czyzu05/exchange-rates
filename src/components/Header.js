import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Exchange Rates</Title>
      <span>Exchange Rates</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    top: 100%;
    font-size: 6rem;
    line-height: 1;
    font-weight: 700;
    color: rgba(25, 29, 43, 0.4);
    display: inline-block;
    text-transform: uppercase;
    z-index: -1;
    transform: translateY(-90%);

    @media screen and (max-width: 1400px) {
      font-size: 4.7rem;
      transform: translateY(-98%);
    }
    @media screen and (max-width: 1050px) {
      font-size: 3.7rem;
      transform: translateY(-115%);
    }
    @media screen and (max-width: 815px) {
      font-size: 3rem;
      transform: translateY(-145%);
    }
    @media screen and (max-width: 665px) {
      font-size: 2.5rem;
      transform: translateY(-165%);
    }
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;

const Title = styled.h1`
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-size: 2.7rem;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    width: 100px;
    background: rgba(3, 127, 255, 0.3);
    height: 5px;
    border-radius: 100px;
    @media screen and (max-width: 815px) {
      width: 60px;
    }
    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    width: 35px;
    background: #037fff;
    height: 5px;
    border-radius: 100px;

    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  @media screen and (max-width: 1050px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 815px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 550px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export default Header;
