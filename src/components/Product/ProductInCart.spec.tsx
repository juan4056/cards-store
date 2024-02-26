import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AnyAction, ThunkMiddleware, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice";
import { ProductInCart } from "../Product/ProductInCart";
import { MemoryRouter } from "react-router-dom";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { CartState } from "../../types/cart";

const mockCartItem = {
  product: {
    id: "1",
    name: "Test Product",
    price: 10,
    image: "image-url",
    category: "Pokemon",
    rarity: "Common",
  },
  quantity: 2,
};

describe("ProductInCart", () => {
  let store: ToolkitStore<
    {
      cart: CartState;
    },
    AnyAction,
    [
      ThunkMiddleware<
        {
          cart: CartState;
        },
        AnyAction
      >
    ]
  >;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [mockCartItem],
          total: mockCartItem.product.price * mockCartItem.quantity,
        },
      },
    });
  });

  it("renders ProductInCart with product information", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductInCart item={mockCartItem} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockCartItem.product.name)).toBeInTheDocument();
    expect(
      screen.getByText(`S/. ${mockCartItem.product.price}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockCartItem.quantity.toString())
    ).toBeInTheDocument();
  });

  it("handles removeProduct action on button click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductInCart item={mockCartItem} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("remove-button"));
    // Confirma que la cantidad de producto ha disminuido en el estado
    const state = store.getState().cart;
    expect(
      state.items.find((item) => item.product.id === mockCartItem.product.id)
        ?.quantity ?? 0
    ).toBe(1);
  });

  it("handles addProduct action on button click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductInCart item={mockCartItem} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("add-button"));
    const state = store.getState().cart;
    expect(
      state.items.find((item) => item.product.id === mockCartItem.product.id)
        ?.quantity
    ).toBe(3);
  });

  it("handles removeAll action on trash icon click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductInCart item={mockCartItem} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("trash-icon"));
    const state = store.getState().cart;
    expect(
      state.items.find((item) => item.product.id === mockCartItem.product.id)
    ).toBeUndefined();
  });
});
