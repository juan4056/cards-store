import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 60px 0px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const ReturnText = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
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
