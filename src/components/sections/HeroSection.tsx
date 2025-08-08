import { Button } from "../ui/button";
import winBuildingFacade from "../../assets/bg-hero-fachada.webp";
import logoWin from "../../assets/logo-win.png";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={winBuildingFacade} 
          alt="WIN Residence - Empreendimento Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-14 leading-tight italic tracking-tight">
              <img
                src={logoWin}
                alt="WIN Residence - Empreendimento Premium"
                className="w-auto h-52 object-contain"
              />
            </h1>
            <p className="font-primary text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
              Reinvente o seu cotidiano
            </p>
            <p className="font-inter text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-extralight">
              Aqui, cada dia convida a experimentar novos caminhos de viver bem.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-dark text-primary font-primary font-light text-lg px-8 py-4 hover:shadow-glow hover:scale-105 transition-all duration-300 tracking-wide"
            >
              Descubra o WIN
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};