// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import type { LoginSchema, RegisterSchema } from "~/schemas/auth.schema";
// import { authService } from "~/services/auth.service";

// interface AuthUser {
//   objectId: string;
//   email: string;
//   name: string;
// }

// interface AuthState {
//   user: AuthUser | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;

//   login: (payload: LoginSchema) => Promise<boolean>;
//   register: (payload: RegisterSchema) => Promise<boolean>;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,
//       isAuthenticated: false,
//       loading: false,
//       error: null,

//       // =====================
//       // LOGIN
//       // =====================
//       login: async (payload) => {
//         try {
//           set({ loading: true, error: null });

//           const data = await authService.login(payload);

//           set({
//             user: {
//               objectId: data.objectId,
//               email: data.email,
//               name: data.name,
//             },
//             token: data["user-token"],
//             isAuthenticated: true,
//             loading: false,
//           });

//           return true;
//         } catch (err: any) {
//           set({
//             error: err?.response?.data?.message || "Login failed",
//             loading: false,
//           });
//           return false;
//         }
//       },

//       // =====================
//       // REGISTER
//       // =====================
//       register: async (payload) => {
//         try {
//           set({ loading: true, error: null });

//           const data = await authService.register(payload);

//           set({
//             user: {
//               objectId: data.objectId,
//               email: data.email,
//               name: data.name,
//             },
//             token: data["user-token"],
//             isAuthenticated: true,
//             loading: false,
//           });

//           return true;
//         } catch (err: any) {
//           set({
//             error: err?.response?.data?.message || "Register failed",
//             loading: false,
//           });
//           return false;
//         }
//       },

//       // =====================
//       // LOGOUT
//       // =====================
//       logout: () => {
//         set({
//           user: null,
//           token: null,
//           isAuthenticated: false,
//           error: null,
//         });
//       },
//     }),
//     {
//       name: "auth-storage", // key di localStorage
//       partialize: (state) => ({
//         user: state.user,
//         token: state.token,
//         isAuthenticated: state.isAuthenticated,
//       }),
//     }
//   )
// );
