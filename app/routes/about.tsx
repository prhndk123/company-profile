import { error } from "console";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Shield,
  Users,
  Lightbulb,
  Heart,
  CheckCircle2,
  Calendar,
  Scale,
  Binoculars,
  HandHeart,
  Handshake,
  HeartHandshake,
  MessageCircle,
  MessageCircleWarning,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Leadership } from "~/schemas/leadership.schema";
import { LeadershipService } from "~/services/leadership.service";
import heroImage from "~/assets/plant.webp";
import { useQuery } from "@tanstack/react-query";

const milestones = [
  {
    year: "1971",
    title: "Foundation",
    description: "Founded as PT. Toyota-Astra Motor",
  },
  {
    year: "1989",
    title: "Merger",
    description:
      "Four companies, namely PT Toyota-Astra Motor, PT Multi Astra, PT Toyota Mobilindo, and PT Toyota Engine Indonesia merged to form PT Toyota-Astra Motor (TAM)",
  },
  {
    year: "1996",
    title: "First Factory at Karawang",
    description: "TMMIN established the Karawang Factory",
  },
  {
    year: "2003",
    title: "Restructuring",
    description:
      "Restructuring of TAM into PT Toyota Motor Manufacturing Indonesia (TMMIN) with TAM now acting as distributor",
  },
  {
    year: "2016",
    title: "Established",
    description: "Introduction of Engine Plant 3 Karawang",
  },
  {
    year: "2018",
    title: "First Achievement",
    description:
      "Toyota Indonesia successfully marked the achievement of more than 1 million whole vehicle exports",
  },
  {
    year: "2022",
    title: "Next Achievement",
    description: "Toyota Indonesia reach an export of 2 million units",
  },
  {
    year: "2025",
    title: "3 Million Journeys, One Shared Future",
    description:
      "Toyota Indonesia Reaches 3 Million Units, Expanding Internationally",
  },
];

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Kami memegang teguh norma, etika, dan komitmen bersama secara konsisten untuk menjaga reputasi perusahaan.",
  },
  {
    icon: Binoculars,
    title: "Visionary",
    description:
      "Kami menghasilkan produk dan layanan berkualitas tinggi yang memuaskan pelanggan, berkontribusi bagi pengembangan industri otomotif Indonesia serta menjaga kesinambungan jangka panjang perusahaan.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    description:
      "Kami menghargai sesama, mengoptimalkan setiap kemampuan dan keberagaman melalui pengembangan individu untuk mendorong pencapaian kinerja terbaik serta terciptanya mutual trust.",
  },
  {
    icon: Handshake,
    title: "Ownership",
    description:
      "Kami bertindak dengan penuh rasa memiliki, mengambil tanggung jawab untuk berupaya semaksimal mungkin mencapai hasil yang terbaik.",
  },
  {
    icon: Lightbulb,
    title: "Innovativeness",
    description:
      "Kami mewujudkan ide-ide breakthrough dan aktivitas unik dalam rangka merealisasikan perubahan dan transformasi demi peningkatan daya saing perusahaan.",
  },
  {
    icon: HeartHandshake,
    title: "Teamwork",
    description:
      "Kami mendukung satu sama lain seraya menjalankan tanggung jawab diri sendiri demi meningkatkan kekuatan tim, membangun sinergi melalui rantai proses yang terintegrasi serta menjalin hubungan yang harmonis dengan stakeholder untuk meraih keberhasilan bersama.",
  },
  {
    icon: MessageCircleWarning,
    title: "Bad News First",
    description:
      "Kami memiliki keteguhan hati untuk mengemukakan permasalahan (bad news) dengan segera disertai fakta dan data yang memadai untuk dapat mengambil langkah penanganan secara cepat dan tepat.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const {
    data: leadership,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["leaderships"],
    queryFn: () => LeadershipService.getAll(),
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/80 to-foreground/40" />

        {/* Content */}
        <div className="relative z-10 container-wide">
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
              From our founding to becoming a cornerstone of Toyota's global
              supply chain, explore the milestones that define our story.
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
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <p className="text-primary font-heading font-bold text-2xl mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-heading font-bold text-xl mb-2">
                      {milestone.title}
                    </h3>
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
              The experienced leaders driving our mission of manufacturing
              excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isPending && (
              <p className="col-span-full text-center">Loading leadership...</p>
            )}

            {isError && (
              <p className="col-span-full text-center text-red-500">
                {(error as Error).message}
              </p>
            )}

            {!isPending &&
              !isError &&
              leadership?.map((leader, index) => (
                <motion.div
                  key={leader.objectId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-3/4 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {leader.role}
                    </p>
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
              Toyota 7 Main Values
            </h2>
            <p className="text-body">
              The principles that guide every decision and action at Engine
              Plant #3.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <h3 className="text-xl font-heading font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-body text-justify">{value.description}</p>
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
                At the heart of our operations lies the Toyota Production System
                (TPS) - a philosophy that emphasizes efficiency, quality, and
                continuous improvement.
              </p>
              <ul className="space-y-4">
                {[
                  "Just-In-Time Manufacturing for Optimal Efficiency",
                  "Jidoka - Stop an Abnormality",
                  "3 Gen - Genba Genchi Genbutsu - Go and See for Yourself",
                  "Continuous Improvement and Respect For People",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-background/80"
                  >
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
