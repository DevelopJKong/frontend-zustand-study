import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICounterStore {
  count: number;
  setCount: (count: number) => void;
}
export const useCounterStore = create<ICounterStore>()(
  devtools((set) => ({
    count: 0,
    setCount: (count: number) => set({ count }),
  }))
);
