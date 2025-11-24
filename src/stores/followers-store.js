import { create } from "zustand";

export const useFollowers = create((set) => ({
    followers: [],
    setFollowers: (followers) =>
        set((state) => ({
            followers: followers,
        })),
}));