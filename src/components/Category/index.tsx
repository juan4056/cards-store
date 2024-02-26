import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  selectCategory,
} from "../../features/products/productsSlice";
import { Container, Item, Title } from "./styles";

const data = [
  {
    label: "Pokemon",
    value: "Pokemon",
  },
  {
    label: "Entrenador",
    value: "Trainer",
  },
  {
    label: "Energia",
    value: "Energy",
  },
];

export function CategorySection() {
  const categorySelected = useAppSelector((state) => state.products.category);
  const currentSearch = useAppSelector((state) => state.products.search);
  const dispatch = useAppDispatch();

  const handleCategoryChange = (category: string) => {
    dispatch(selectCategory(category));
    dispatch(fetchProducts({ category, search: currentSearch }));
  };

  return (
    <Container>
      {data.map(({ label, value }, index) => (
        <Item
          key={index}
          onClick={() => handleCategoryChange(value)}
          active={categorySelected === value}
        >
          <div>
            <Title>{label}</Title>
          </div>
        </Item>
      ))}
    </Container>
  );
}
