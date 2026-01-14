import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Teams } from "~/schemas/team.schema";
import { teamService } from "~/services/team.service";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Teams = () => {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [error, setError] = useState<String | null>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await teamService.getTeams();
        setTeams(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load leadership data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

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
                Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6">
              The People Behind
              <span className="block text-primary">
                Manufacturing Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed">
              Meet the dedicated professionals who bring Toyota's vision of
              quality and innovation to life every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
                Our Professionals
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              World-Class Team
            </h2>
            <p className="text-body">
              Over 1,000 skilled professionals working together to deliver
              manufacturing excellence <br /> at Engine Plant #3.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-card rounded overflow-hidden shadow-md animate-pulse"
                >
                  <div className="aspect-square bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teams.map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-card rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-3/4 overflow-hidden relative">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                          aria-label={`Email ${team.name}`}
                        >
                          <Mail className="w-4 h-4 text-background" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                          aria-label={`LinkedIn profile of ${team.name}`}
                        >
                          <Linkedin className="w-4 h-4 text-background" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-1">
                      {team.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {team.position}
                    </p>
                    <p className="text-body text-sm mb-3">{null}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {/* <> className="w-3 h-3" </> */}
                      <span>{null}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-surface-steel">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,000+", label: "Team Members" },
              { value: "99.9%", label: "Quality Rating" },
              { value: "98%", label: "Retention Rate" },
              { value: "100+", label: "Engineers" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
              Join Our World-Class Team
            </h2>
            <p className="text-lg text-background/80 mb-8">
              We're always looking for talented individuals who share our
              passion for manufacturing excellence and continuous improvement.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:bg-primary/90 transition-colors"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Teams;
