import { GraduationCap, Award, Shield, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    photo: "/images/A11.jpg",
    name: "Pratyush Garg",
    role: "Co-Founder & Principal Engineer",
    bio: "With hands-on experience across automation systems, enterprise platforms, healthcare systems, Zoom integrations, AI-powered bots, and property & mortgage ERP systems, Pratyush leads Psynova Digital with direct architectural involvement from system design to deployment.",
    credentials: [
      { icon: GraduationCap, text: "MSc Advanced Computer Science — Distinction" },
      { icon: Award, text: "University of Hertfordshire" },
      { icon: Shield, text: "Azure Developer Associate" },
    ],
  },
  {
    photo: "/images/A12.jpg",
    name: "Shivam Jain",
    role: "Co-Founder & Technology Lead",
    bio: "Shivam brings deep expertise in full-stack development, cloud architecture, and scalable system design. With a passion for building intelligent solutions, he co-leads Psynova Digital's engineering vision and ensures every product meets the highest technical standards.",
    credentials: [
      { icon: Code, text: "Full-Stack Engineering" },
      { icon: Briefcase, text: "Enterprise Solutions Architect" },
      { icon: Shield, text: "Cloud & DevOps Specialist" },
    ],
  },
];

// Duplicate array for seamless infinite scroll
const marqueeFounders = [...founders, ...founders, ...founders, ...founders];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative noise-overlay overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the Founders
          </h2>
        </motion.div>
      </div>

      {/* Infinite marquee scrolling */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max py-4 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {marqueeFounders.map((founder, i) => (
            <div
              key={`${founder.name}-${i}`}
              className="min-w-[380px] max-w-[420px] p-8 rounded-2xl glass-panel-strong border-gradient shadow-elevated relative overflow-hidden flex-shrink-0"
            >
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: "hsl(var(--primary) / 0.1)" }} />

              <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                <motion.div
                  className="w-24 h-24 flex items-center justify-center flex-shrink-0 glow-primary"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={founder.photo}
                    alt={founder.name}
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{founder.bio}</p>

                  <div className="flex flex-col gap-3">
                    {founder.credentials.map((cred, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <cred.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{cred.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
