import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

interface ItemProps {
  active?: boolean;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #f3f3f3;
  padding: 1.5rem;
  font-family: "Karla", sans-serif;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 5px solid red;
    `}
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const Description = styled.p`
  color: #718096;
`;
