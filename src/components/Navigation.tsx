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
      isScrolled ? "bg-[#965018]" : "bg-[#965018]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-light text-primary italic tracking-tight">
            <a href="#hero">
              <img src="/logo.png" alt="Win" className="w-24 h-auto" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="font-primary text-sm font-normal text-white hover:text-secondary transition-colors tracking-wide"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("diferenciais")}
              className="font-primary text-sm font-light text-white hover:text-secondary transition-colors tracking-wide"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection("ambientes")}
              className="font-primary text-sm font-light text-white hover:text-secondary transition-colors tracking-wide"
            >
              Ambientes
            </button>
            <button 
              onClick={() => scrollToSection("localizacao")}
              className="font-primary text-sm font-light text-white hover:text-secondary transition-colors tracking-wide"
            >
              Localização
            </button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-gold to-gold-dark text-primary font-primary font-light hover:shadow-glow transition-all duration-300 tracking-wide"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};