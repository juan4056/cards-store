import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e2e8f0;
  font-family: "Lato", sans-serif;
`;

export const ImageContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
`;

export const ProductImage = styled.img`
  display: inline-block;
  height: 15rem;
`;

export const ProductInfo = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Category = styled.p`
  color: #718096;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const TitleLink = styled(Link)`
  font-weight: 600;
  color: black;
  text-decoration: unset;
  &:hover {
    text-decoration: underline;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ProductPrice = styled.h2`
  font-size: medium;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 0px;
  background-color: #304ddb;
  cursor: pointer;
  &:hover {
    background-color: #263aad;
  }
`;
