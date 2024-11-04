import { create } from "zustand";
import { MenuItem } from "../helpers/sheet-helper";

export interface MenuItemCart extends MenuItem {
  quantity: number;
}

interface CartState {
  cart: MenuItemCart[];
  addToCart: (item: MenuItemCart) => void;
  deleteFromCart: (item: MenuItemCart) => void;
  increaseQuantity: (item: MenuItemCart) => void;
  decreaseQuantity: (item: MenuItemCart) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // Check if the item is already in the cart
      const index = state.cart.findIndex((i) => i.name === item.name);
      if (index !== -1) {
        // If it is, update the quantity
        const cart = [...state.cart];
        cart[index].quantity += 1;
        return { cart };
      }

      return { cart: [...state.cart, item] };
    }),
  increaseQuantity: (item) =>
    set((state) => {
      // Check if the item is already in the cart
      const index = state.cart.findIndex((i) => i.name === item.name);
      if (index !== -1) {
        // If it is, update the quantity
        const cart = [...state.cart];
        cart[index].quantity += 1;
        return { cart };
      }

      return { cart: [...state.cart, item] };
    }),
  decreaseQuantity: (item) =>
    set((state) => {
      // Check if the item is already in the cart
      const index = state.cart.findIndex((i) => i.name === item.name);
      if (index !== -1) {
        // If it is, update the quantity
        const cart = [...state.cart];
        cart[index].quantity -= 1;
        return { cart };
      }

      return { cart: [...state.cart, item] };
    }),
  deleteFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  clearCart: () => set({ cart: [] }),
}));
