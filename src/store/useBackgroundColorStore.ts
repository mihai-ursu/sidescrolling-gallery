import create from "zustand";

interface BackgroundColorState {
  color: string;
  setColor: (color: string) => void;
}

const useBackgroundColorStore = create<BackgroundColorState>()((set) => ({
  color: "#49467d",
  setColor: (color) => set(() => ({ color: color })),
}));

export default useBackgroundColorStore;
