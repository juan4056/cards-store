import { CategorySection } from "../components/Category";
import { SearchComponent } from "../components/Search";
import { ProductList } from "../components/Product/ProductList";

export function HomePage() {
  return (
    <>
      <SearchComponent />
      <CategorySection />
      <ProductList />
    </>
  );
}
