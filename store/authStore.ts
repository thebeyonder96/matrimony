import { BASE_URL } from "@/configs/constants";
import { create } from "zustand";

type User = {
  name: string;
  email: string;
  picture?: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/user`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        set({ user: data });
      } else {
        set({ user: null });
      }
    } catch (error) {
      console.error("Fetch user failed:", error);
      set({ user: null });
    }
  },
}));
