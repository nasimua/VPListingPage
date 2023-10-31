import { styled } from "styled-components";

export const ProdList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media only screen and (max-width: 1070px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media only screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media only screen and (max-width: 300px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Prod = styled.div`
  width: 270px;
  margin: 20px 0;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    width: 230px;
  }

  @media only screen and (max-width: 450px) {
    width: 10em;
  }

  @media only screen and (max-width: 300px) {
    width: 260px;
  }
`;
