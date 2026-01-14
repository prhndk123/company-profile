// import { useState } from 'react';
// import { useNavigate, Navigate, Link } from 'react-router';
// import { motion } from 'framer-motion';
// import { Mail, Lock, User, ArrowRight } from 'lucide-react';
// import { Button } from '~/components/ui/button';
// import { Input } from '~/components/ui/input';
// import { Label } from '~/components/ui/label';
// import { useToast } from '~/hooks/use-toast';
// import { useAuth } from '~/contexts/AuthContext';

// const Register = () => {
    
//   const { isAuthenticated, signup } = useAuth();
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
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
//       const success = await signup(email, password, name);
//       if (success) {
//         toast({
//           title: 'Account created!',
//           description: 'Welcome to TMMIN.',
//         });
//         navigate('/');
//       } else {
//         toast({
//           title: 'Signup failed',
//           description: 'Please fill in all fields correctly.',
//           variant: 'destructive',
//         });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md"
//       >
//         <h1 className="text-3xl font-heading font-bold mb-2">Create Account</h1>
//         <p className="text-muted-foreground mb-8">
//           Join the TMMIN community.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name</Label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>

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
//                 minLength={6}
//               />
//             </div>
//           </div>

//           <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
//             {isSubmitting ? 'Processing...' : (
//               <>
//                 Create Account <ArrowRight className="w-4 h-4 ml-2" />
//               </>
//             )}
//           </Button>
//         </form>

//         <p className="mt-6 text-center text-muted-foreground">
//           Already have an account?{' '}
//           <Link to="/login" className="text-primary font-medium hover:underline">
//             Sign In
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
