import { create } from "zustand";
import { initialElectronicItems } from "./initialDataMock";

export type Item = {
  id: number;
  name: string;
  price: number;
};

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

// States e Dispatch
export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialElectronicItems,
    addToCart: (item: Item) =>
      set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id: number) => {
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
    },
  };
});
