import { Handshake, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    title: "Partnership, Not Vendor",
    description: "We work as an extension of your team, taking ownership of outcomes rather than just delivering features.",
  },
  {
    icon: Target,
    title: "Execution Quality",
    description: "Clean architecture, tested code, and documentation. We build systems that last and scale.",
  },
  {
    icon: Rocket,
    title: "Flexible Engagement",
    description: "Project-based delivery, contract engineering, or fractional leadership — structured for your needs.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A partnership model focused on ownership, quality, and long-term value.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center glow-primary">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-xs font-semibold text-muted-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
