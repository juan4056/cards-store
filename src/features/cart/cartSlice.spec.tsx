// cartSlice.test.js
import { CartState } from "../../types/cart";
import { Product } from "../../types/products";
import cartReducer, { addProduct, removeProduct, clear } from "./cartSlice";

describe("cart reducer", () => {
  const initialState: CartState = {
    items: [],
    total: 0,
  };

  const mockProduct: Product = {
    id: "1",
    name: "Test Product",
    price: 10,
    image: "image.png",
    category: "Pokemon",
    rarity: "Rare",
  };

  it("should handle the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addProduct", () => {
    const actual = cartReducer(initialState, addProduct(mockProduct));
    expect(actual.items.length).toEqual(1);
    expect(actual.total).toEqual(mockProduct.price);
  });

  it("should handle addProduct with existing product in the cart", () => {
    let actual = cartReducer(initialState, addProduct(mockProduct));
    actual = cartReducer(actual, addProduct(mockProduct));
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0].quantity).toEqual(2);
    expect(actual.total).toEqual(mockProduct.price * 2);
  });

  it("should handle removeProduct", () => {
    let actual = cartReducer(initialState, addProduct(mockProduct));
    actual = cartReducer(actual, addProduct(mockProduct));
    actual = cartReducer(
      actual,
      removeProduct({ product: mockProduct, removeAll: false })
    );
    expect(actual.items[0].quantity).toEqual(1);
    expect(actual.total).toEqual(mockProduct.price);
  });

  it("should remove the product completely if removeAll is true", () => {
    let actual = cartReducer(initialState, addProduct(mockProduct));
    actual = cartReducer(actual, addProduct(mockProduct));
    actual = cartReducer(
      actual,
      removeProduct({ product: mockProduct, removeAll: true })
    );
    expect(actual.items.length).toEqual(0);
    expect(actual.total).toEqual(0);
  });

  it("should handle clear", () => {
    let actual = cartReducer(initialState, addProduct(mockProduct));
    actual = cartReducer(actual, addProduct(mockProduct));
    actual = cartReducer(actual, clear());
    expect(actual.items.length).toEqual(0);
    expect(actual.total).toEqual(0);
  });
});
