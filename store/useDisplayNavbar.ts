import { create } from "zustand";

type DisplayNavbar = {
  displayNavbar: boolean;
  toggleDisplayNavbar: (state?: boolean) => void;
};

export const useDisplayNavbar = create<DisplayNavbar>((set) => ({
  displayNavbar: false,
  toggleDisplayNavbar: () =>
    set((state) => ({ displayNavbar: !state.displayNavbar })),
}));
