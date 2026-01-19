import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  Leaf,
  Quote,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/home";

import engine from "~/assets/engine.webp";
import heroImage from "~/assets/plant.webp";
import { Button } from "~/components/ui/button";
import { CountUp } from "~/components/ui/counter";
// import { Layout } from "~/root";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "TMMIN Engine Plant 3" },
    { name: "description", content: "Welcome to TMMIN Engine Plant 3" },
  ];
}

const stats = [
  { label: "Engines Produced Annually", value: 500, suffix: "K+" },
  { label: "Years of Excellence", value: 9, suffix: "+" },
  { label: "Team Members", value: 1000, suffix: "+" },
  { label: "Quality Rating", value: 99.9, suffix: "%" },
];

const products = [
  {
    title: "NR Conventional Series Engines",
    description:
      "Compact, fuel-efficient gasoline engines powering the next generation of Toyota vehicles across the world.",
    icon: Zap,
  },
  {
    title: "NR-Hybrid Series Engines",
    description:
      "Cutting-edge hybrid systems combining efficiency with environmental responsibility.",
    icon: Leaf,
  },
  {
    title: "TNGA Series Engines",
    description:
      "High-performance multi purpose engines delivering exceptional power and reliability for demanding applications.",
    icon: Shield,
  },
];

const testimonials = [
  {
    quote:
      "Engine Plant #3's commitment to quality is unmatched. Their precision manufacturing consistently exceeds our global standards.",
    author: "Akio Toyoda",
    role: "Former Chairman, Toyota Motor Corporation",
  },
  {
    quote:
      "The Karawang facility represents the pinnacle of Toyota Production System implementation in Southeast Asia.",
    author: "Nandi Juliyanto",
    role: "President Director, TMMIN",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Toyota Engine Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Toyota Motor Manufacturing Indonesia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6"
            >
              Engineering Excellence,
              <span className="block text-primary">Driving Tomorrow</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed"
            >
              At Engine Plant #3 Karawang, we combine precision manufacturing
              with Toyota's legendary quality standards to produce world-class
              engines that power vehicles across the globe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="default" size="default">
                  Explore Our Engines
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="default" size="default">
                  Learn About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-steel px-4">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding px-4">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-widest">
                  About TMMIN
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Powering Toyota's Global Vision from Karawang
              </h2>
              <p className="text-body mb-6 leading-relaxed">
                Toyota Motor Manufacturing Indonesia (TMMIN) Engine Plant #3
                stands at the forefront of automotive engine production in
                Southeast Asia. Located in the strategic Karawang International
                Industrial City (KIIC), our facility integrates advanced
                manufacturing technologies with Toyota's renowned production
                philosophy.
              </p>
              <p className="text-body mb-8 leading-relaxed">
                Since our establishment, we have been committed to producing
                engines that meet the highest global quality standards while
                contributing to Indonesia's economic growth and technological
                advancement.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Discover Our Story
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/3 bg-surface-steel rounded overflow-hidden">
                <img
                  src={engine}
                  alt="Engine assembly line"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded">
                <Factory className="w-8 h-8 mb-2" />
                <p className="font-heading font-bold text-2xl">9+</p>
                <p className="text-sm text-primary-foreground/80">
                  Years of Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="section-padding bg-surface-industrial py-16 px-4">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Our Products
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              World-Class Engine Solutions
            </h2>
            <p className="text-body">
              From fuel-efficient compact engines to high-performance multi
              purpose, we deliver precision-engineered solutions for every
              driving need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card p-8 rounded shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {product.title}
                </h3>
                <p className="text-body mb-6">{product.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Testimonials
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-steel p-8 rounded relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
              Ready to Experience Manufacturing Excellence?
            </h2>
            <p className="text-lg text-background/80 mb-8">
              Discover how Toyota Motor Manufacturing Indonesia Engine Plant #3
              is shaping the future of automotive engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button variant="default" size="default">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/teams">
                <Button variant="default" size="default">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
