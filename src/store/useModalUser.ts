import { create } from "zustand";

interface IModal {
  isOpen: boolean;
  onCloseAndOpen: () => void;
}

export const useStoreModalUser = create<IModal>((set) => ({
  isOpen: false,
  onCloseAndOpen() {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));
