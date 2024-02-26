import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductsContainer = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  padding: 15px;
  width: 300px;
  border: 1px solid #e2e8f0;
  height: fit-content;
  border-radius: 10px;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px;
`;

export const CheckoutButton = styled.button`
  align-items: center;
  color: #fff;
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  border: 0px;
  background-color: #304ddb;
  text-align: center;
  cursor: pointer;
  font-size: large;
  &:hover {
    background-color: #263aad;
  }
`;

export const ClearButton = styled.button`
  align-items: center;
  color: #304ddb;
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  border: 0px;
  background-color: transparent;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  font-size: large;
  &:hover {
    color: #263aad;
  }
`;
