// import { useState } from 'react';
// import { useNavigate, Navigate, Link } from 'react-router';
// import { motion } from 'framer-motion';
// import { Mail, Lock, ArrowRight } from 'lucide-react';
// import { Button } from '~/components/ui/button';
// import { Input } from '~/components/ui/input';
// import { Label } from '~/components/ui/label';
// import { useToast } from '~/hooks/use-toast';
// import { useAuth } from '~/contexts/AuthContext';

// const Login = () => {
//   const { isAuthenticated, login } = useAuth();
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   if (isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const success = await login(email, password);
//       if (success) {
//         toast({
//           title: 'Welcome back!',
//           description: 'You have successfully logged in.',
//         });
//         navigate('/');
//       } else {
//         toast({
//           title: 'Login failed',
//           description: 'Please check your credentials.',
//           variant: 'destructive',
//         });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-8 bg-transparent">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md"
//       >
//         <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
//         <p className="text-muted-foreground mb-8">
//           Sign in to access your account.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email Address</Label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>

//           <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
//             {isSubmitting ? 'Processing...' : (
//               <>
//                 Sign In <ArrowRight className="w-4 h-4 ml-2" />
//               </>
//             )}
//           </Button>
//         </form>

//         <p className="mt-6 text-center text-muted-foreground">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-primary font-medium hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
