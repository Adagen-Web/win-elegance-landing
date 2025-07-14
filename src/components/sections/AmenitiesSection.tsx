import { Building2, Waves, Users, Dumbbell, Baby, Car } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import rooftopPool from "../../assets/rooftop-pool.jpg";

export const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Building2,
      title: "Rooftop",
      description: "Espaço exclusivo com vista panorâmica para momentos únicos de contemplação e convívio"
    },
    {
      icon: Waves,
      title: "Piscina",
      description: "Área aquática premium com design contemporâneo para relaxamento e bem-estar"
    },
    {
      icon: Users,
      title: "Salão de Festas",
      description: "Ambiente sofisticado e versátil para celebrações e eventos memoráveis"
    },
    {
      icon: Dumbbell,
      title: "Academia",
      description: "Espaço fitness completo com equipamentos de última geração"
    },
    {
      icon: Baby,
      title: "Área Kids",
      description: "Espaço lúdico e seguro pensado especialmente para os pequenos"
    },
    {
      icon: Car,
      title: "Garagem",
      description: "Vagas cobertas com segurança e praticidade para seu conforto"
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Diferenciais & Lazer
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
            Comodidades pensadas para elevar seu padrão de vida e proporcionar momentos inesquecíveis
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 animate-scale-in">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-medium">
            <img 
              src={rooftopPool} 
              alt="Rooftop com piscina do WIN" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Rooftop Premium
              </h3>
              <p className="font-inter text-white/90">
                O ponto mais alto do seu novo lifestyle
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card 
              key={amenity.title} 
              className="hover-lift border-border/50 bg-surface animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-muted to-gold rounded-full mb-6">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-primary text-xl font-semibold text-primary mb-4">
                  {amenity.title}
                </h3>
                <p className="font-inter text-gray-medium leading-relaxed">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="font-inter text-lg text-gray-medium mb-6">
            Cada detalhe pensado para sua satisfação e bem-estar
          </p>
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-gold to-gold-dark"></div>
        </div>
      </div>
    </section>
  );
};