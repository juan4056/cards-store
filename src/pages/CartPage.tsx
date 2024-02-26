import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductInCart } from "../components/Product/ProductInCart";
import { EmptyCart } from "../components/Cart/EmptyCart";
import { useNavigate } from "react-router-dom";
import { clear } from "../features/cart/cartSlice";
import { CheckoutCounter } from "../components/Cart/Counter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  ProductsContainer,
  CheckoutCard,
  CheckoutItem,
  CheckoutButton,
  ClearButton,
} from "./CartPage.styles";

export function CartPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);

  const endPurchase = useCallback(() => {
    dispatch(clear());
    navigate("/");
  }, [dispatch, navigate]);

  const handleCheckout = () => {
    toast.success("Compra realizada con éxito!", {
      position: "bottom-center",
      autoClose: 5000,
      onClose: endPurchase,
    });
  };

  const handleTimeout = () => {
    toast.info("El tiempo para completar la compra ha finalizado.", {
      position: "bottom-center",
      autoClose: 3000,
      onClose: endPurchase,
    });
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container>
      <ToastContainer />
      <ProductsContainer>
        <CheckoutCounter onComplete={handleTimeout} />
        <h1>Carrito de Compras</h1>
        {items.map((item, idx) => (
          <ProductInCart key={idx} item={item} />
        ))}
      </ProductsContainer>
      <CheckoutCard>
        <h1>Resumen del Pedido</h1>
        <div>
          <CheckoutItem>
            <p>Subtotal</p>
            <p>S/. {total}</p>
          </CheckoutItem>
          <CheckoutItem>
            <p>Envio</p>
            <p>Gratis</p>
          </CheckoutItem>
          <hr />
          <CheckoutItem>
            <h3>Total</h3>
            <h3 data-testid="total-price">S/. {total}</h3>
          </CheckoutItem>
        </div>
        <CheckoutButton onClick={handleCheckout}>
          Finalizar Compra
        </CheckoutButton>
        <ClearButton onClick={() => dispatch(clear())}>
          Limpiar Carrito
        </ClearButton>
      </CheckoutCard>
    </Container>
  );
}

export default CartPage;
