import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e2e8f0;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
`;

export const ProductImage = styled.img`
  display: inline-block;
  height: 15rem;
  @media (max-width: 1024px) {
    max-height: 12rem;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-evenly;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ControlButton = styled.button`
  border: none;
  background-color: #efefef;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const TrashIcon = styled.button`
  background-color: transparent;
  color: red;
  font-size: 26px;
  display: grid;
  place-items: center;
  padding: 0 1rem;
  border: 0px;
  cursor: pointer;
`;
