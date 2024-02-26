import productsReducer, {
  selectCategory,
  setSearch,
  clearFilters,
} from "./productsSlice";
import { ProductsState } from "../../types/products";

describe("products slice", () => {
  const initialState: ProductsState = {
    products: [],
    status: "idle",
    error: null,
    category: null,
    search: "",
  };

  it("should handle selectCategory", () => {
    const actual = productsReducer(initialState, selectCategory("toys"));
    expect(actual.category).toEqual("toys");
  });

  it("should handle setSearch", () => {
    const actual = productsReducer(initialState, setSearch("pikachu"));
    expect(actual.search).toEqual("pikachu");
  });

  it("should handle clearFilters", () => {
    let actual = productsReducer(initialState, selectCategory("toys"));
    actual = productsReducer(actual, setSearch("pikachu"));
    actual = productsReducer(actual, clearFilters());
    expect(actual.category).toBeNull();
    expect(actual.search).toBe("");
  });
});
