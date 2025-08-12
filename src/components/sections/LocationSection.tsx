import { MapPin, Car, Waves, ShoppingBag, GraduationCap, Utensils } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const LocationSection = () => {
  const proximities = [
    {
      icon: Waves,
      title: "Praia",
      distance: "500m",
      description: "Acesso rápido ao mar"
    },
    {
      icon: ShoppingBag,
      title: "Shopping",
      distance: "600m",
      description: "Centro comercial completo"
    },
    {
      icon: Car,
      title: "Vias Principais",
      distance: "200m",
      description: "Fácil locomoção urbana"
    },
    {
      icon: GraduationCap,
      title: "Escolas",
      distance: "1,2km",
      description: "Educação de qualidade"
    },
    {
      icon: Utensils,
      title: "Gastronomia",
      distance: "800m",
      description: "Restaurantes renomados"
    }
  ];

  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-4xl md:text-5xl font-light text-primary mb-6">
            A poucos minutos
            de tudo que importa
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
            Seja pra curtir a natureza, resolver o dia a dia ou
            aproveitar as opções de lazer, morar no Win é estar
            perto de tudo o que faz a vida fluir com leveza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="animate-scale-in">
            <div className="relative bg-surface rounded-lg p-8 h-96 flex items-center justify-center shadow-medium">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="font-primary text-xl font-semibold text-primary mb-2">
                  Localização Privilegiada
                </h3>
                <p className="font-inter text-gray-medium mb-4">
                  Mais do que localização: um endereço
                  que valoriza o seu tempo.
                </p>
                <a href="https://www.google.com/maps/place/R.+Leonardo+Truda,+540+-+Centro,+Torres+-+RS,+95560-000/@-29.3334797,-49.7269626,1007m/data=!3m2!1e3!4b1!4m6!3m5!1s0x952269a1f7b460ef:0xf95539799bf0e0b1!8m2!3d-29.3334797!4d-49.7269626!16s%2Fg%2F11c23jkm45?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <div className="bg-gold-muted px-4 py-2 rounded-full inline-block">
                    <span className="font-primary text-sm font-semibold text-primary">
                      R. Leonardo Truda, 540 - Centro - Torres/RS
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Proximities */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-primary mb-8">
              O melhor da cidade ao seu alcance
            </h3>
            
            <div className="space-y-4">
              {proximities.map((proximity, index) => (
                <Card 
                  key={proximity.title} 
                  className="hover-lift border-border/50 bg-surface animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-muted to-gold rounded-full flex items-center justify-center">
                        <proximity.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-primary font-semibold text-primary">
                            {proximity.title}
                          </h4>
                          <span className="font-primary text-sm font-semibold text-gold">
                            {proximity.distance}
                          </span>
                        </div>
                        <p className="font-inter text-sm text-gray-medium">
                          {proximity.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-gold-muted to-nude p-8 rounded-lg">
            <h3 className="font-inter text-2xl font-light text-primary mb-4">
              Conectividade Total
            </h3>
            <p className="font-inter text-lg text-gray-warm max-w-2xl mx-auto leading-relaxed">
              Desfrute da proximidade com tudo o que importa, mantendo a privacidade e exclusividade do seu novo lar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};