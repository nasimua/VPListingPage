import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0 auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 15px;

  @media only screen and (max-width: 1070px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSection = styled.section`
  margin: 20px 5px;
`;

export const RightSection = styled.section`
  margin: 20px 5px;
`;

export const MobileFilterSection = styled.div`
  display: none;

  @media only screen and (max-width: 750px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin: 0 auto;
  width: 40%;
  align-items: center;
  justify-content: space-around;
`;

export const PageButton = styled.button`
  background-color: #fff;
  padding: 15px 30px;
  border: 1px solid #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 1px solid black;
    transition: 0.2s;
  }
`;
