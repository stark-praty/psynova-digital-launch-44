import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="py-10 bg-background relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-brand)" }} />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <div className="w-6 h-6 gradient-accent rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-medium text-foreground">Psynova Digital</span>
          </motion.div>

          <div className="flex items-center gap-6">
            {[
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projects" },
              { href: "#tech", label: "Technology" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/919220494390" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="mailto:contact@psynova.digital" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Psynova Digital. All rights reserved. &nbsp;|&nbsp; +91 92204 94390
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
