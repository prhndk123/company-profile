// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router';
// import { Menu, X } from 'lucide-react';
// import { Button } from '~/components/ui/button';
// import { useAuth } from '~/contexts/AuthContext';
// import { motion, AnimatePresence } from 'framer-motion';
// import toyotaLogo from "~/assets/toyota-logo.png";

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Teams', href: '/teams' },
//   { name: 'Blog', href: '/blog' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { isAuthenticated, user, logout } = useAuth();

//   const [isSticky, setIsSticky] = useState(false);
//   useEffect(() => {
//     function handleScroll() {
//       const triggerPoint = 0;
//       setIsSticky(window.scrollY > triggerPoint);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300
//     ${isSticky
//       ? "bg-black/20 backdrop-blur-md border-white/10"
//       : "bg-transparent border-transparent"}
//   `}>
//       <nav className="container-wide">
//         <div className="flex items-center px-4 justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-30 h-auto flex items-center justify-center">
//                 <img src={toyotaLogo} alt="" className="" />
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-[10px] text-muted-foreground leading-tight">Engine Plant #3 Karawang</p>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navigation.map((item) => (
//               <Button
//                 key={item.name}
//                 variant="link"
//                 className={`relative px-4 text-[16px] font-bold transition-colors duration-300
//   ${isSticky ? "text-white" : "text-black"}
//   ${isActive(item.href) ? "text-primary" : ""}
// `}
//                 asChild
//               >
//                 <Link to={item.href}>
//                   {item.name}
//                   {isActive(item.href) && (
//                     <motion.div
//                       layoutId="navbar-indicator"
//                       className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary"
//                     />
//                   )}
//                 </Link>
//               </Button>
//             ))}
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             {isAuthenticated ? (
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-muted-foreground">
//                   Welcome, <span className="text-foreground font-medium">{user?.name}</span>
//                 </span>
//                 <Button size="sm" asChild>
//                   <Link to="/blog/create">Create Post</Link>
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={logout}>
//                   Logout
//                 </Button>
//               </div>
//             ) : (
//               <Button size="sm" asChild>
//                 <Link to="/login">Login</Link>
//               </Button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-foreground"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden border-t border-border overflow-hidden"
//             >
//               <div className="py-4 space-y-1">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-3 text-sm font-medium transition-colors duration-300
//   ${isSticky ? "text-white" : "text-black"} ${
//                       isActive(item.href)
//                         ? 'text-primary bg-primary/5'
//                         : 'text-foreground hover:text-primary hover:bg-accent'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="px-4 pt-4 border-t border-border mt-4">
//                   {isAuthenticated ? (
//                     <div className="space-y-2">
//                       <p className="text-sm text-muted-foreground">
//                         Logged in as <span className="text-foreground font-medium">{user?.name}</span>
//                       </p>
//                       <Button className="w-full" size="sm" asChild>
//                         <Link to="/blog/create" onClick={() => setIsOpen(false)}>Create Post</Link>
//                       </Button>
//                       <Button variant="outline" className="w-full" size="sm" onClick={() => { logout(); setIsOpen(false); }}>
//                         Logout
//                       </Button>
//                     </div>
//                   ) : (
//                     <Button className="w-full" asChild>
//                       <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
