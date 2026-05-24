import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [
    { id: 1, name: "Arbind", age: 22, address: "Kathmandu" },
    { id: 2, name: "Sujal", age: 21, address: "Pokhara" },
  ],

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
}));