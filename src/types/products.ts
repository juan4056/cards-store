export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rarity: string;
}

export interface ProductData {
  id: string;
  name: string;
  rarity: string;
  category: string;
  image?: string;
}

export interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  category: string | null;
  search: string;
}
