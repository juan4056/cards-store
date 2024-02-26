import { useAppDispatch } from "../../app/hooks";
import { CartItem } from "../../types/cart";
import { BsTrash } from "react-icons/bs";
import { addProduct, removeProduct } from "../../features/cart/cartSlice";
import {
  Card,
  CardSection,
  ImageContainer,
  ProductImage,
  ProductDetails,
  ProductPrice,
  QuantityControls,
  ControlButton,
  TotalPrice,
  TrashIcon,
} from "./ProductInCart.styles";

export function ProductInCart({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardSection>
        <ImageContainer>
          <ProductImage src={item.product.image} alt={item.product.name} />
        </ImageContainer>
        <ProductDetails>
          <div>{item.product.name}</div>
          <ProductPrice>S/. {item.product.price}</ProductPrice>
          <QuantityControls>
            <ControlButton
              data-testid="remove-button"
              onClick={() =>
                dispatch(
                  removeProduct({ product: item.product, removeAll: false })
                )
              }
            >
              -
            </ControlButton>
            {item.quantity}
            <ControlButton
              data-testid="add-button"
              onClick={() => dispatch(addProduct(item.product))}
            >
              +
            </ControlButton>
          </QuantityControls>
        </ProductDetails>
      </CardSection>
      <CardSection>
        <TotalPrice>
          Total: S/. {(item.product.price * item.quantity).toFixed(2)}
        </TotalPrice>
        <TrashIcon
          data-testid="trash-icon"
          onClick={() =>
            dispatch(removeProduct({ product: item.product, removeAll: true }))
          }
        >
          <BsTrash />
        </TrashIcon>
      </CardSection>
    </Card>
  );
}
