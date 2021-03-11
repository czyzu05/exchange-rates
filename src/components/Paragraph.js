import styled from "styled-components";

const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 1.7rem;
  color: #82889d;

  @media screen and (max-width: 815px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
    text-align: center;
    margin-top: 0px;
  }
`;

export default Paragraph;
