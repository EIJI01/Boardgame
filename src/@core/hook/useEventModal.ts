import { create } from "zustand";
import { UseModalType } from "./type";

const useEventModal = create<UseModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEventModal;
