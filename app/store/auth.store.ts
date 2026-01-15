import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "~/services/auth.service";
import type { LoginSchema, RegisterSchema } from "~/schemas/auth.schema";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (payload: LoginSchema) => Promise<void>;
  register: (payload: RegisterSchema) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      async login(payload) {
        const data = await authService.login(payload);

        set({
          user: {
            id: data.objectId,
            name: data.name,
            email: data.email,
          },
          token: data.userToken,
          isAuthenticated: true,
        });
      },

      async register(payload) {
        const data = await authService.register(payload);

        set({
          user: data.user,
          token: data.token,
          isAuthenticated: true,
        });
      },

      logout() {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
