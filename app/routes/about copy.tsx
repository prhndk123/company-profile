import { motion } from 'framer-motion';
import { Award, Target, Shield, Users, Lightbulb, Heart, CheckCircle2, Calendar } from 'lucide-react';
import { useEffect } from 'react';


const milestones = [
  { year: '1998', title: 'Foundation', description: 'Toyota Motor Manufacturing Indonesia established in Karawang' },
  { year: '2003', title: 'Engine Plant #3', description: 'Construction of Engine Plant #3 begins in KIIC' },
  { year: '2005', title: 'First Production', description: 'First engine rolls off the production line' },
  { year: '2010', title: 'Export Milestone', description: 'Engines exported to 15+ countries worldwide' },
  { year: '2015', title: 'Hybrid Technology', description: 'Introduction of hybrid powertrain production' },
  { year: '2020', title: 'Industry 4.0', description: 'Full implementation of smart manufacturing systems' },
  { year: '2024', title: 'Carbon Neutral Goal', description: 'Roadmap to carbon neutrality by 2035 announced' },
];

const leadership = [
  {
    name: 'Warih Andang Tjahjono',
    role: 'President Director',
    bio: '30+ years of automotive manufacturing experience, leading TMMIN\'s strategic vision.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
  },
  {
    name: 'Hiroshi Nakamura',
    role: 'Plant Director',
    bio: 'Toyota veteran with expertise in TPS implementation and quality management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
  },
  {
    name: 'Dewi Kartika',
    role: 'Quality Director',
    bio: 'Passionate about zero-defect manufacturing and continuous improvement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
  },
  {
    name: 'Budi Santoso',
    role: 'Production Manager',
    bio: 'Expert in lean manufacturing and production optimization.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
  },
];

const values = [
  {
    icon: Target,
    title: 'Kaizen',
    description: 'Continuous improvement in everything we do, every single day.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Uncompromising commitment to delivering zero-defect products.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Protecting our team members and creating a secure workplace.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaboration and respect drive our collective success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies to lead the industry forward.',
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'Valuing every individual and fostering inclusive growth.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6">
              Building the Future of
              <span className="block text-primary">Automotive Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed">
              Learn about our journey, our people, and the values that drive 
              Toyota Motor Manufacturing Indonesia Engine Plant #3.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Our Journey
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-body">
              From our founding to becoming a cornerstone of Toyota's global supply chain, 
              explore the milestones that define our story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-primary font-heading font-bold text-2xl mb-1">{milestone.year}</p>
                    <h3 className="font-heading font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-body">{milestone.description}</p>
                  </div>
                  
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 z-10">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-surface-industrial">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Leadership
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-body">
              The experienced leaders driving our mission of manufacturing excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-1">{leader.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{leader.role}</p>
                  <p className="text-body text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Our Culture
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Toyota Production System Values
            </h2>
            <p className="text-body">
              The principles that guide every decision and action at Engine Plant #3.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-border rounded hover:border-primary transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TPS Overview */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
                The Toyota Production System
              </h2>
              <p className="text-lg text-background/80 mb-6 leading-relaxed">
                At the heart of our operations lies the Toyota Production System (TPS) - 
                a philosophy that emphasizes efficiency, quality, and continuous improvement.
              </p>
              <ul className="space-y-4">
                {[
                  'Just-In-Time manufacturing for optimal efficiency',
                  'Jidoka - automation with a human touch',
                  'Genchi Genbutsu - go and see for yourself',
                  'Respect for people and continuous learning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-background/80">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-background/10 rounded overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop"
                alt="Toyota Production System in action"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
