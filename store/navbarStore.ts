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

type DisplayHeader = {
  displayHeader: boolean;
  showDisplayHeader: (state?: boolean) => void;
  hideDisplayHeader: (state?: boolean) => void;
};

export const useDisplayHeader = create<DisplayHeader>((set) => ({
  displayHeader: false,
  showDisplayHeader: () =>
    set((state) => ({ displayHeader: (state.displayHeader = true) })),
  hideDisplayHeader: () =>
    set((state) => ({ displayHeader: (state.displayHeader = false) })),
}));
