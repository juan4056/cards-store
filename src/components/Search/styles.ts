import styled from "styled-components";

export const SearchContainer = styled.div`
  display: none;
  padding: 1rem;
  margin-top: 1.5rem;
  display: flex;
`;

export const SearchInput = styled.input`
  border: 2px solid #304ddb;
  padding: 0.5rem 1rem;
  width: 100%;
  &:focus {
    border-color: #263aad;
    outline: none;
  }
`;

export const SearchButton = styled.div`
  background-color: #304ddb;
  color: white;
  font-size: 26px;
  display: grid;
  place-items: center;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: #263aad;
  }
`;
