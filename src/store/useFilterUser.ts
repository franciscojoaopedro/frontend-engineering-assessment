import { create } from "zustand";


interface FilterStore {
    genderFilter: string;
    setGenderFilter: (filter: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    genderFilter: "all",  
    setGenderFilter: (filter) => set({ genderFilter: filter }),
}));

