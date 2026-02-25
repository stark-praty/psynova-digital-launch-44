import { GraduationCap, Award, Shield, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

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

// Duplicate founders to ensure enough items for infinite loop on all viewports
const loopedFounders = [...founders, ...founders, ...founders];

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap() % founders.length);
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

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

        <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {loopedFounders.map((founder, index) => (
              <CarouselItem key={`${founder.name}-${index}`} className="basis-[85%] md:basis-[70%] lg:basis-[65%]">
                <div className="p-8 rounded-2xl glass-panel-strong border-gradient shadow-elevated relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: "hsl(var(--primary) / 0.1)" }} />

                  <div className="flex flex-col gap-6 items-start relative z-10">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-4 md:-left-12" />
          <CarouselNext className="right-2 sm:-right-4 md:-right-12" />

          {/* Bullet pagination with blue-purple gradient */}
          <div className="flex justify-center gap-2 mt-6">
            {founders.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  // Find the nearest instance of this founder and scroll to it
                  const targetIndex = loopedFounders.findIndex((f, idx) => idx % founders.length === i && idx >= (api?.selectedScrollSnap() ?? 0) - founders.length);
                  api?.scrollTo(targetIndex >= 0 ? targetIndex : i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8"
                    : "w-2.5 opacity-30 hover:opacity-50"
                }`}
                style={{
                  background: i === current
                    ? "linear-gradient(135deg, hsl(238 100% 51%), hsl(280 80% 55%))"
                    : "linear-gradient(135deg, hsl(238 100% 51%), hsl(280 80% 55%))",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default About;
