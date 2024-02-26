import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProducts } from "../../features/products/productsSlice";
import { Loader } from "../Loader";
import { Container, Title, ProductGrid } from "./ProductList.styles";

export function ProductList() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (error) {
    return <div>Error al cargar productos: {error}</div>;
  }
  return (
    <Container>
      <Title>Productos</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
}
