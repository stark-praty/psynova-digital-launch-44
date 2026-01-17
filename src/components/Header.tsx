import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Technology" },
    { href: "#about", label: "About" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Psynova Digital</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button variant="hero" size="sm" onClick={scrollToContact}>
            Get a Consultation
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
