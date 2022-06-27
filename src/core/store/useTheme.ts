import create from "zustand";

interface ThemeState {
    isLight:boolean,
    setLight:(prev:boolean)=>void;
}

export const useTheme = create<ThemeState>((set)=>({
    isLight:true,
    setLight:(prev) => set({isLight:prev})
}));