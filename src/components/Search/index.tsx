import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import {
  fetchProducts,
  setSearch,
} from "../../features/products/productsSlice";
import { SearchContainer, SearchInput, SearchButton } from "./styles";

export function SearchComponent() {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.products.category);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(setSearch(searchTerm));
    dispatch(
      fetchProducts({ category: category ?? undefined, search: searchTerm })
    );
  };

  return (
    <SearchContainer>
      <SearchInput
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSearch();
        }}
        type="text"
        placeholder="Buscar un producto..."
      />
      <SearchButton onClick={handleSearch}>
        <BsSearch />
      </SearchButton>
    </SearchContainer>
  );
}
