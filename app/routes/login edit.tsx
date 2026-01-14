// import { useState } from "react";
// import { useNavigate, Navigate, Link } from "react-router";
// import { motion } from "framer-motion";
// import { Mail, Lock, User, ArrowRight } from "lucide-react";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";
// import { Label } from "~/components/ui/label";
// import { useToast } from "~/hooks/use-toast";
// import { useAuth } from "~/contexts/AuthContext";
// import { useAuthStore } from "~/store/auth.store";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema, registerSchema } from "~/schemas/auth.schema";

// const Login = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const { login, register, isAuthenticated, loading } = useAuthStore();

//   const [isLoginMode, setIsLoginMode] = useState(true);

//   // const { isAuthenticated, login, signup } = useAuth();
//   // const { toast } = useToast();
//   // const navigate = useNavigate();

//   // const [isLoginMode, setIsLoginMode] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const form = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   // Redirect if already authenticated
//   if (isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (isLoginMode) {
//         const success = await login(email, password);
//         if (success) {
//           toast({
//             title: "Welcome back!",
//             description: "You have successfully logged in.",
//           });
//           navigate("/");
//         } else {
//           toast({
//             title: "Login failed",
//             description: "Please check your credentials and try again.",
//             variant: "destructive",
//           });
//         }
//       } else {
//         const success = await signup(email, password, name);
//         if (success) {
//           toast({
//             title: "Account created!",
//             description: "Welcome to TMMIN. You are now logged in.",
//           });
//           navigate("/");
//         } else {
//           toast({
//             title: "Signup failed",
//             description: "Please fill in all fields correctly.",
//             variant: "destructive",
//           });
//         }
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="flex-1 flex items-center justify-center p-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-md"
//         >
//           <Link to="/" className="flex items-center gap-2 mb-8">
//             <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
//               <span className="text-primary-foreground font-heading font-bold text-lg">
//                 T
//               </span>
//             </div>
//             <div>
//               <p className="font-heading font-bold text-sm">TOYOTA</p>
//               <p className="text-[10px] text-muted-foreground">
//                 Engine Plant #3
//               </p>
//             </div>
//           </Link>

//           <h1 className="text-3xl font-heading font-bold mb-2">
//             {isLoginMode ? "Welcome Back" : "Create Account"}
//           </h1>
//           <p className="text-muted-foreground mb-8">
//             {isLoginMode
//               ? "Sign in to access your account and create content."
//               : "Join the TMMIN community and start sharing insights."}
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLoginMode && (
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="name"
//                     type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="pl-10"
//                     required={!isLoginMode}
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="pl-10"
//                   required
//                   minLength={6}
//                 />
//               </div>
//               <p className="text-xs text-muted-foreground">
//                 Password must be at least 6 characters.
//               </p>
//             </div>

//             <Button
//               type="submit"
//               size="lg"
//               className="w-full"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 "Processing..."
//               ) : (
//                 <>
//                   {isLoginMode ? "Sign In" : "Create Account"}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </>
//               )}
//             </Button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-muted-foreground">
//               {isLoginMode
//                 ? "Don't have an account? "
//                 : "Already have an account? "}
//               <button
//                 type="button"
//                 onClick={() => setIsLoginMode(!isLoginMode)}
//                 className="text-primary font-medium hover:underline"
//               >
//                 {isLoginMode ? "Sign Up" : "Sign In"}
//               </button>
//             </p>
//           </div>

//           <div className="mt-8 pt-6 border-t border-border">
//             <Link
//               to="/"
//               className="text-sm text-muted-foreground hover:text-primary transition-colors"
//             >
//               ← Back to Homepage
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Right Side - Branding */}
//       <div className="hidden lg:flex flex-1 bg-gradient-hero items-center justify-center p-12">
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//           className="max-w-lg text-center"
//         >
//           <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mx-auto mb-8">
//             <span className="text-primary-foreground font-heading font-bold text-4xl">
//               T
//             </span>
//           </div>
//           <h2 className="text-3xl font-heading font-bold text-background mb-4">
//             Toyota Motor Manufacturing Indonesia
//           </h2>
//           <p className="text-lg text-background/80 mb-8">
//             Engine Plant #3 Karawang
//           </p>
//           <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
//           <p className="text-background/70 italic">
//             "Engineering Excellence, Driving Tomorrow"
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Login;
