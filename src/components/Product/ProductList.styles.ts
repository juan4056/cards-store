import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  font-family: "Lora", serif;
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
