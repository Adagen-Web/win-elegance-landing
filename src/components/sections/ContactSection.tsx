import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e telefone.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log("Form data:", formData);
    
    toast({
      title: "Interesse registrado!",
      description: "Entraremos em contato em breve com informações exclusivas.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-4xl md:text-5xl font-light text-primary mb-6">
            Invista em Viver Bem
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
          <p className="font-inter text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário para saber mais sobre o WIN e garanta condições especiais de lançamento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-medium border-border/50">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Fale Conosco
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-primary text-sm font-medium text-primary mb-2 block">
                        Nome *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="bg-background border-border/50 focus:border-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-primary text-sm font-medium text-primary mb-2 block">
                        Telefone *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="bg-background border-border/50 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-primary text-sm font-medium text-primary mb-2 block">
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="bg-background border-border/50 focus:border-gold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-primary text-sm font-medium text-primary mb-2 block">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu interesse no WIN..."
                      className="bg-background border-border/50 focus:border-gold min-h-24"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-gold to-gold-dark text-primary font-primary font-semibold py-3 hover:shadow-glow transition-all duration-300"
                  >
                    Quero Saber Mais
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Informações de Contato
                </h3>
                <p className="font-inter text-lg text-gray-medium leading-relaxed mb-8">
                  Nossa equipe está pronta para apresentar todos os detalhes deste empreendimento exclusivo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-muted to-gold rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold text-primary">Telefone</h4>
                    <p className="font-inter text-gray-medium">(51) 98163-5012</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-muted to-gold rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold text-primary">E-mail</h4>
                    <p className="font-inter text-gray-medium">contato@wolkincorp.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-muted to-gold rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold text-primary">Endereço</h4>
                    <p className="font-inter text-gray-medium">R. Leonardo Truda, 540 - Centro - Torres/RS</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-muted to-gold rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold text-primary">Atendimento</h4>
                    <p className="font-inter text-gray-medium">Segunda a Sábado, 9h às 18h</p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              {/* <div className="bg-gradient-to-r from-gold-muted to-nude p-6 rounded-lg mt-8">
                <h4 className="font-display text-xl font-bold text-primary mb-3">
                  Condições Especiais
                </h4>
                <p className="font-inter text-gray-warm">
                  Aproveite as condições exclusivas de lançamento. Oportunidade limitada para investidores que valorizam qualidade e exclusividade.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};