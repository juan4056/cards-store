import { BsCart } from "react-icons/bs";
import { Container, ReturnText, Text } from "./EmptyCart.styles";

export function EmptyCart() {
  return (
    <Container>
      <BsCart fontSize={200} />
      <Text>Tu carrito está vacío</Text>
      <ReturnText to="/">Volver a la tienda</ReturnText>
    </Container>
  );
}
