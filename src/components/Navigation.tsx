import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleMobileItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-[#965018]" : "bg-[#965018]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Mobile: Logo + Hamburguer */}
        <div className="flex items-center justify-between md:hidden">
          <div className="font-display text-2xl font-light text-primary italic tracking-tight">
            <a href="#hero">
              <img src="/logo.png" alt="Win" className="w-24 h-auto" />
            </a>
          </div>
          <button
            aria-label="Abrir menu"
            onClick={handleMobileMenu}
            className="text-white text-3xl focus:outline-none"
          >
            <HiOutlineMenu />
          </button>
        </div>
        {/* Menu Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <nav
              className="w-64 h-full bg-[#965018] shadow-lg p-6 flex flex-col space-y-6 animate-slide-in"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <img src="/logo.png" alt="Win" className="w-20 h-auto" />
                <button
                  aria-label="Fechar menu"
                  onClick={handleMobileMenu}
                  className="text-white text-3xl focus:outline-none"
                >
                  <HiOutlineX />
                </button>
              </div>
              <button
                onClick={() => handleMobileItemClick('sobre')}
                className="font-primary text-base font-normal text-white hover:text-secondary transition-colors tracking-wide text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => handleMobileItemClick('diferenciais')}
                className="font-primary text-base font-light text-white hover:text-secondary transition-colors tracking-wide text-left"
              >
                Diferenciais
              </button>
              <button
                onClick={() => handleMobileItemClick('ambientes')}
                className="font-primary text-base font-light text-white hover:text-secondary transition-colors tracking-wide text-left"
              >
                Ambientes
              </button>
              <button
                onClick={() => handleMobileItemClick('localizacao')}
                className="font-primary text-base font-light text-white hover:text-secondary transition-colors tracking-wide text-left"
              >
                Localização
              </button>
              <Button
                onClick={() => handleMobileItemClick('contato')}
                className="mt-4 bg-gradient-to-r from-gold to-gold-dark text-primary font-primary font-light hover:shadow-glow transition-all duration-300 tracking-wide w-full"
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
        {/* Desktop: Logo + Menu */}
        <div className="hidden md:flex items-center justify-between">
          <div className="font-display text-2xl font-light text-primary italic tracking-tight">
            <a href="#hero">
              <img src="/logo.png" alt="Win" className="w-24 h-auto" />
            </a>
          </div>
          <div className="flex items-center space-x-8">
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