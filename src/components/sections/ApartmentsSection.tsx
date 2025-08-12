import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import winFachadaLateral from "../../assets/win-fachada-lateral.jpg";

export const ApartmentsSection = () => {
  const apartments = [
    {
      type: "2 Dormitórios",
      area: "80m²",
      features: ["Living integrado", "Churrasqueira", "Banho social", "Esquadrias amplas piso/teto", "1 Suíte",],
      highlight: "Ideal para casais"
    },
    {
      type: "3 Dormitórios",
      area: "100m²",
      features: ["Living integrado", "Churrasqueira", "Banho social", "Esquadrias amplas piso/teto", "2 Suítes",],
      highlight: "Perfeito para famílias"
    },
  ];

  return (
    <section id="ambientes" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-4xl md:text-5xl font-light text-primary mb-6">
            Apartamentos Versáteis
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
            No Win, cada unidade foi projetada para unir
            conforto, modernidade e funcionalidade em espaços
            amplos e iluminados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={winFachadaLateral} 
                alt="Ambiente integrado Win Residence" 
                className="w-full h-[500px] object-cover rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-primary mb-6">
              Integrações Inteligentes
            </h3>
            <p className="font-inter text-lg text-gray-medium mb-8 leading-relaxed">
              Cada apartamento foi projetado com integrações que valorizam a funcionalidade e a estética, criando ambientes fluidos e contemporâneos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-primary mb-2">Living Integrado</h4>
                  <p className="font-inter text-gray-medium">Conceito aberto que une sala, cozinha e varanda em um ambiente único</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-primary mb-2">Iluminação Natural</h4>
                  <p className="font-inter text-gray-medium">Grandes aberturas e layouts que privilegiam a entrada de luz</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-primary mb-2">Acabamentos Premium</h4>
                  <p className="font-inter text-gray-medium">Materiais selecionados e detalhes que fazem a diferença</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {apartments.map((apartment, index) => (
            <Card 
              key={apartment.type} 
              className="hover-lift border-border/50 bg-background animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className="bg-gold-muted text-primary font-primary font-semibold mb-2">
                    {apartment.highlight}
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">
                    {apartment.type}
                  </h3>
                  <p className="font-primary text-lg font-semibold text-gold">
                    {apartment.area} privativos
                  </p>
                </div>

                <div className="space-y-3">
                  {apartment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="font-inter text-gray-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};