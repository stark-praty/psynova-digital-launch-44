import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Build?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss your project requirements and explore how we can help you build scalable, reliable software systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hello@psynova.digital">
                <Mail className="w-5 h-5" />
                Get a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Or email directly at{" "}
            <a href="mailto:hello@psynova.digital" className="text-primary hover:underline">
              hello@psynova.digital
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
