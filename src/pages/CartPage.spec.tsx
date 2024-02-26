import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { MemoryRouter } from "react-router-dom";
import CartPage from "./CartPage";
import { toast } from "react-toastify";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: [
        {
          product: {
            id: "1",
            name: "Test Product 1",
            price: 10,
            image: "image-url",
            category: "Pokemon",
            rarity: "Common",
          },
          quantity: 1,
        },
        {
          product: {
            id: "2",
            name: "Test Product 2",
            price: 20,
            image: "image-url",
            category: "Pokemon",
            rarity: "Common",
          },
          quantity: 2,
        },
      ],
      total: 50,
    },
  },
});

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
  ToastContainer: () => <div>ToastContainer</div>,
}));

describe("CartPage", () => {
  it("renders CartPage with items in the cart", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Carrito de Compras")).toBeInTheDocument();
    const totalPriceElement = screen.getByTestId("total-price");
    expect(totalPriceElement).toHaveTextContent("S/. 50");
    expect(
      screen.getByRole("button", { name: /Finalizar Compra/i })
    ).toBeInTheDocument();
  });

  it("renders EmptyCart when there are no items", () => {
    const emptyCartStore = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [],
          total: 0,
        },
      },
    });

    render(
      <Provider store={emptyCartStore}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Tu carrito está vacío")).toBeInTheDocument();
  });

  it("handles checkout button click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Finalizar Compra/i }));
    expect(toast.success).toHaveBeenCalledWith(
      "Compra realizada con éxito!",
      expect.any(Object)
    );
  });
});
