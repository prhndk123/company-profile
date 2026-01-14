// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import {
//   ArrowRight,
//   Zap,
//   Gauge,
//   Leaf,
//   Shield,
//   Cog,
//   Award,
//   CheckCircle2,
//   Quote,
// } from "lucide-react";
// import { Button } from "~/components/ui/button";

// const engines = [
//   {
//     name: "1NR Series",
//     tagline: "Compact Efficiency",
//     description:
//       "The NR series represents Toyota's commitment to fuel efficiency without compromising performance. These compact gasoline engines power a wide range of vehicles across the ASEAN market.",
//     specs: [
//       "Cylinder volume: 1329 cc",
//       "Maximum power: 74 kW / 6000 rpm",
//       "Maximum torque: 123 Nm / 4200 rpm",
//       "Minimum fuel consumption idle: 0.09 g/sec @ 600 rpm",
//       "Diameter x Stroke: 72.5 x 80.5 mm",
//       "Oil capacity: 3.9 litre",
//       "Fuel system: EFI (Electronic Fuel Injection)",
//       "Fuel type: Gasoline",
//       "Additional variant: NR-Kai (shared with Daihatsu vehicles)",
//     ],
//     features: [
//       "VVT-i Technology",
//       "Low Friction Design",
//       "Lightweight Aluminum Block",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop",
//   },
//   {
//     name: "GR Series",
//     tagline: "High Performance",
//     description:
//       "Engineered for power enthusiasts, the GR series delivers exceptional performance and reliability. These engines are designed for demanding applications requiring superior power output.",
//     specs: [
//       "1.6L - 2.0L displacement",
//       "Up to 260 HP",
//       "Turbo variants available",
//       "Performance-tuned ECU",
//     ],
//     features: ["Direct Injection", "Turbocharging", "Sport-Tuned Exhaust"],
//     image:
//       "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Hybrid Powertrains",
//     tagline: "Future Ready",
//     description:
//       "Combining the best of electric and gasoline technology, our hybrid powertrains represent the future of automotive propulsion. Engineered for efficiency and environmental responsibility.",
//     specs: [
//       "1.5L - 2.5L hybrid system",
//       "Combined output: 120-180 HP",
//       "Fuel efficiency: 25-35 km/L",
//       "Zero-emission mode capable",
//     ],
//     features: [
//       "Regenerative Braking",
//       "Electric Motor Assist",
//       "Smart Power Management",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
//   },
// ];

// const capabilities = [
//   {
//     icon: Zap,
//     title: "Precision Manufacturing",
//     description:
//       "Micron-level precision in every component, ensuring consistent quality across all engines produced.",
//   },
//   {
//     icon: Shield,
//     title: "Quality Assurance",
//     description:
//       "100% inspection at critical stages with AI-powered defect detection systems.",
//   },
//   {
//     icon: Gauge,
//     title: "Performance Testing",
//     description:
//       "Every engine undergoes rigorous dynamometer testing before leaving our facility.",
//   },
//   {
//     icon: Leaf,
//     title: "Environmental Compliance",
//     description:
//       "All engines meet or exceed international emission standards including Euro 4/5.",
//   },
//   {
//     icon: Cog,
//     title: "Advanced Machining",
//     description:
//       "State-of-the-art CNC machining centers with sub-micron accuracy.",
//   },
//   {
//     icon: Award,
//     title: "Global Certification",
//     description:
//       "ISO 9001, ISO 14001, and IATF 16949 certified manufacturing processes.",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "The engines from Engine Plant #3 consistently meet our stringent quality requirements. Their reliability in the field is unmatched.",
//     author: "Toyota ASEAN Quality Team",
//     role: "Regional Quality Assessment",
//   },
//   {
//     quote:
//       "Precision, efficiency, and innovation define every engine that comes out of Karawang. They're setting the standard for the industry.",
//     author: "Automotive Engineering Journal",
//     role: "Industry Publication",
//   },
// ];

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Services = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative py-24 md:py-32 bg-gradient-hero">
//         <div className="container-wide">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             className="max-w-3xl"
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-12 h-0.5 bg-primary" />
//               <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                 Our Products
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6">
//               Precision-Engineered
//               <span className="block text-primary">Engine Solutions</span>
//             </h1>
//             <p className="text-lg md:text-xl text-background/80 leading-relaxed">
//               Discover the range of world-class engines manufactured at Toyota
//               Motor Manufacturing Indonesia Engine Plant #3 Karawang.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Engine Products */}
//       <section className="section-padding">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto text-center mb-16"
//           >
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <div className="w-8 h-0.5 bg-primary" />
//               <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                 Engine Lineup
//               </span>
//               <div className="w-8 h-0.5 bg-primary" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//               Engines That Power Tomorrow
//             </h2>
//             <p className="text-body">
//               Each engine is crafted with meticulous attention to detail,
//               meeting Toyota's legendary quality standards.
//             </p>
//           </motion.div>

//           <div className="space-y-24">
//             {engines.map((engine, index) => (
//               <motion.div
//                 key={engine.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className={`grid lg:grid-cols-2 gap-12 items-center ${
//                   index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? "lg:order-2" : ""}>
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-8 h-0.5 bg-primary" />
//                     <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                       {engine.tagline}
//                     </span>
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//                     {engine.name}
//                   </h3>
//                   <p className="text-body mb-6 leading-relaxed">
//                     {engine.description}
//                   </p>

//                   <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                     <div>
//                       <h4 className="font-heading font-bold mb-3">
//                         Specifications
//                       </h4>
//                       <ul className="space-y-2">
//                         {engine.specs.map((spec) => (
//                           <li
//                             key={spec}
//                             className="flex items-center gap-2 text-sm text-body"
//                           >
//                             <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
//                             {spec}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-heading font-bold mb-3">
//                         Key Features
//                       </h4>
//                       <ul className="space-y-2">
//                         {engine.features.map((feature) => (
//                           <li
//                             key={feature}
//                             className="flex items-center gap-2 text-sm text-body"
//                           >
//                             <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <Button variant="default" size="lg">
//                     Technical Specifications
//                     <ArrowRight className="w-4 h-4" />
//                   </Button>
//                 </div>

//                 <div
//                   className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}
//                 >
//                   <div className="aspect-4/3 rounded overflow-hidden shadow-xl">
//                     <img
//                       src={engine.image}
//                       alt={engine.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded">
//                     <span className="font-heading font-bold">
//                       {engine.name}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Manufacturing Capabilities */}
//       <section className="section-padding bg-surface-industrial">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto text-center mb-16"
//           >
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <div className="w-8 h-0.5 bg-primary" />
//               <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                 Capabilities
//               </span>
//               <div className="w-8 h-0.5 bg-primary" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//               Manufacturing Excellence
//             </h2>
//             <p className="text-body">
//               World-class facilities and processes that ensure every engine
//               meets Toyota's exacting standards.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {capabilities.map((capability, index) => (
//               <motion.div
//                 key={capability.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-card p-8 rounded shadow-md hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6">
//                   <capability.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-heading font-bold mb-3">
//                   {capability.title}
//                 </h3>
//                 <p className="text-body">{capability.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="section-padding">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto text-center mb-16"
//           >
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <div className="w-8 h-0.5 bg-primary" />
//               <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                 Testimonials
//               </span>
//               <div className="w-8 h-0.5 bg-primary" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-heading font-bold">
//               Industry Recognition
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.author}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-surface-steel p-8 rounded relative"
//               >
//                 <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
//                 <p className="text-lg text-foreground mb-6 italic leading-relaxed">
//                   "{testimonial.quote}"
//                 </p>
//                 <div>
//                   <p className="font-heading font-bold">{testimonial.author}</p>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-hero">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
//               Interested in Learning More?
//             </h2>
//             <p className="text-lg text-background/80 mb-8">
//               Contact our team to learn more about our engine products and
//               manufacturing capabilities.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link to="/about">
//                 <Button variant="default" size="default">
//                   About Our Company
//                   <ArrowRight className="w-5 h-5" />
//                 </Button>
//               </Link>
//               <Link to="/teams">
//                 <Button variant="outline" size="default">
//                   Meet Our Team
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;
