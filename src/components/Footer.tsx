import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8 bg-background border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-6 h-6 gradient-accent rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-medium text-foreground">Psynova Digital</span>
          </motion.div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Psynova Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {[
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" }
            ].map((link) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2, color: "hsl(var(--primary))" }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
