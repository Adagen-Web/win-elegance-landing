import { Building2, Waves, Users, Dumbbell, Baby, Car } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import winRooftop from "../../assets/win-rooftop.jpg";
import winSalao from "../../assets/win-salao.jpg";
import winKids from "../../assets/win-kids.jpg";
import winAcademia from "../../assets/win-academia.jpg";
import winLiving from "../../assets/win-academia.jpg";

export const AmenitiesSection = () => {
  const galleryImages = [
    {
      src: winRooftop,
      title: "Rooftop Premium",
      subtitle: "Vista privilegiada para viver momentos únicos."
    },
    {
      src: winSalao,
      title: "Salão de Festas",
      subtitle: "Estética e praticidade pensadas para receber bem."
    },
    {
      src: winKids,
      title: "Área Kids e Playground",
      subtitle: "Lugar de brincar, explorar e criar memórias."
    },
    {
      src: winAcademia,
      title: "Academia",
      subtitle: "Academia equipada para treinos completos, com ambiente moderno e inspirador."
    },
    {
      src: winLiving,
      title: "Living",
      subtitle: "Detalhes que fazem a diferença."
    },
    {
      src: winLiving,
      title: "Living",
      subtitle: "Detalhes que fazem a diferença."
    },
    {
      src: winLiving,
      title: "Living",
      subtitle: "Detalhes que fazem a diferença."
    },
    {
      src: winLiving,
      title: "Living",
      subtitle: "Detalhes que fazem a diferença."
    },
    {
      src: winLiving,
      title: "Suíte",
      subtitle: "Conforto que se estende por toda a experiência."
    }
  ];

  const amenities = [
    {
      icon: Building2,
      title: "Rooftop",
      description: "Espaço exclusivo com vista panorâmica para momentos únicos de contemplação e convívio."
    },
    {
      icon: Waves,
      title: "Piscina",
      description: "Área aquática premium com design contemporâneo para relaxamento e bem-estar."
    },
    {
      icon: Users,
      title: "Salão de Festas",
      description: "Ambiente sofisticado e versátil para celebrações e eventos memoráveis."
    },
    {
      icon: Dumbbell,
      title: "Academia",
      description: "Espaço fitness completo com equipamentos de última geração."
    },
    {
      icon: Baby,
      title: "Área Kids",
      description: "Espaço lúdico e seguro pensado especialmente para os pequenos."
    },
    {
      icon: Car,
      title: "Garagem",
      description: "Vagas cobertas com segurança e bicicletário integrado."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-4xl md:text-5xl font-light text-primary mb-6">
            Diferenciais & Lazer
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
            Comodidades pensadas para elevar seu padrão de vida e proporcionar momentos inesquecíveis.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="mb-16 animate-scale-in">
          <Carousel className="relative">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-medium">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <h3 className="font-display text-2xl font-light text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="font-inter text-white/90 text-sm">
                        {image.subtitle}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
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
      </div>
    </section>
  );
};