import { Product } from "../../types/products";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../features/cart/cartSlice";
import {
  ProductInfo,
  Category,
  TitleLink,
  BottomSection,
  AddToCartButton,
  Card,
  ProductImage,
  ImageContainer,
  ProductPrice,
} from "./ProductCard.styles";

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ImageContainer>
      <ProductInfo>
        <Category>{product.category}</Category>
        <TitleLink to={`/products/${product.id}`}>{product.name}</TitleLink>
        <div>{product.rarity}</div>
      </ProductInfo>
      <BottomSection>
        <ProductPrice>S/. {product.price}</ProductPrice>
        <AddToCartButton onClick={() => dispatch(addProduct(product))}>
          <span>Add to cart</span>
        </AddToCartButton>
      </BottomSection>
    </Card>
  );
}
