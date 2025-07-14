import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass-effect shadow-soft" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-primary">
            WIN
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="font-primary text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("diferenciais")}
              className="font-primary text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection("ambientes")}
              className="font-primary text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Ambientes
            </button>
            <button 
              onClick={() => scrollToSection("localizacao")}
              className="font-primary text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Localização
            </button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-gold to-gold-dark text-primary font-primary font-semibold hover:shadow-glow transition-all duration-300"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};