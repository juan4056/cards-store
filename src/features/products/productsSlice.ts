import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductData, ProductsState } from "../../types/products";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

export const DEFAULT_IMAGE =
  "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg";

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
  category: null,
  search: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: { category?: string; search?: string }) => {
    try {
      const query = gql`
        query GetProductos($category: String, $search: String) {
          cards(
            filters: { category: $category, name: $search }
            pagination: { page: 1, itemsPerPage: 24 }
          ) {
            category
            name
            image
            id
            rarity
          }
        }
      `;

      const { data } = await client.query<{ cards: ProductData[] }>({
        query,
        variables: {
          category: params.category,
          search: params.search,
        },
      });

      return data.cards.map((card) => {
        return {
          id: card.id,
          name: card.name,
          price: card.name.charCodeAt(0),
          image: card.image ? `${card.image}/high.webp` : DEFAULT_IMAGE,
          category: card.category,
          rarity: card.rarity,
        } as Product;
      });
    } catch (error) {
      return error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearFilters: (state) => {
      state.category = null;
      state.search = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload as Product[];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectCategory, setSearch, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
