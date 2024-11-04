import { create } from "zustand";
import { BusinessInfo } from "../helpers/sheet-helper";

interface BusinessState {
  businesses: BusinessInfo | null;
  setBusinesses: (businesses: BusinessInfo | null) => void;
  // addBusiness: (business: Business) => void;
  // removeBusiness: (id: string) => void;
  // updateBusiness: (business: Business) => void;
}

export const useBusinessStore = create<BusinessState>((set) => ({
  businesses: null,
  setBusinesses: (businesses) => set({ businesses }),
  // addBusiness: (business) => set((state) => ({ businesses: [...state.businesses, business] })),
  // removeBusiness: (id) => set((state) => ({ businesses: state.businesses.filter(b => b.id !== id) })),
  // updateBusiness: (updatedBusiness) => set((state) => ({
  //     businesses: state.businesses.map(b => b.id === updatedBusiness.id ? updatedBusiness : b)
  // })),
}));
