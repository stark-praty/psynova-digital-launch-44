import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About the Founder
            </h2>
          </div>

          {/* Founder card */}
          <div className="p-8 rounded-2xl border-gradient shadow-card">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold text-primary-foreground">PG</span>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Pratyush Garg
                </h3>
                <p className="text-primary font-medium mb-4">
                  Founder & Principal Engineer
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With hands-on experience across automation, enterprise systems, cloud platforms, and applied AI, Pratyush leads Psynova Digital with a focus on practical execution and measurable outcomes. Every engagement is approached as a partnership, with deep technical involvement from architecture to deployment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>MSc Advanced Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Distinction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
