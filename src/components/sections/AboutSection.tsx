import winHall from "../../assets/win-hall.jpg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="max-w-xl">
              <h2 className="font-inter text-4xl md:text-5xl font-light text-primary mb-6 tracking-tight">
                Espaços que acolhem o seu ritmo
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mb-8"></div>
              
              <p className="font-inter text-lg text-gray-medium mb-6 leading-relaxed font-light">
                Descubra um novo endereço e símbolo de personalidade e praticidade. Bem-vindo ao <strong className="text-primary font-medium">Win</strong>, onde cada detalhe convida a experimentar novos caminhos de viver bem.
              </p>
              
              <p className="font-inter text-lg text-gray-medium mb-8 leading-relaxed font-light">
                Aqui, você encontra o ambiente urbano e natural integrados, com soluções inteligentes pensadas para o seu conforto e bem-estar.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-primary text-gray-warm font-light tracking-wide">Arquitetura contemporânea assinada</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-primary text-gray-warm font-light tracking-wide">Localização privilegiada e estratégica</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-primary text-gray-warm font-light tracking-wide">Lifestyle exclusivo e diferenciado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={winHall} 
                alt="Interior integrado Win Residence" 
                className="w-full h-[600px] object-cover rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in">
            <div className="font-inter text-3xl md:text-4xl font-normal text-primary mb-2">
              Inteligente
            </div>
            <p className="font-inter text-gray-medium">Localização privilegiada</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="font-inter text-3xl md:text-4xl font-normal text-primary mb-2">
              Premium
            </div>
            <p className="font-inter text-gray-medium">Acabamentos de alto padrão</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="font-inter text-3xl md:text-4xl font-normal text-primary mb-2">
              Contemporâneo
            </div>
            <p className="font-inter text-gray-medium">Projeto diferenciado</p>
          </div>
        </div>
      </div>
    </section>
  );
};