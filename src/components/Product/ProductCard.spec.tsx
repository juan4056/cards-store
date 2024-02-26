import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice";
import { ProductCard } from "./ProductCard";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard", () => {
  const mockProduct = {
    id: "1",
    name: "Test Product",
    price: 10,
    image: "image-url",
    category: "Pokemon",
    rarity: "Common",
  };

  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  it("renders ProductCard with product info and can add to cart", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`S/. ${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    fireEvent.click(screen.getByText("Add to cart"));

    const updatedState = store.getState().cart;
    expect(updatedState.items).toHaveLength(1);
    expect(updatedState.items[0].product).toEqual(mockProduct);
  });
});
