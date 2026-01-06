import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, MapPin, Award, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import mapa from "@/assets/MAPA.png";
import redPatternBg from "@/assets/red-pattern-bg.jpg";

const Representantes = () => {
  const beneficios = [
    "Produtos de alta qualidade e boa aceitação no mercado",
    "Suporte comercial e materiais de apoio",
    "Margem de lucro atrativa",
    "Marca em crescimento acelerado",
    "Portfólio diversificado de produtos",
    "Flexibilidade de atuação",
  ];

  const estatisticas = [
    { icon: MapPin, value: "6+", label: "Estados atendidos" },
    { icon: Users, value: "27", label: "Anos de experiência" },
    { icon: TrendingUp, value: "2020", label: "Ano de fundação" },
    { icon: Award, value: "8+", label: "Produtos na linha" },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-x" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Seja um Representante
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Leve os produtos Fredão Alimentos para sua região e faça parte do nosso crescimento.
          </p>
          <a
            href="https://wa.me/5591999999999?text=Olá! Gostaria de me tornar um representante Fredão Alimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={20} />
            Quero ser representante
          </a>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-heading text-4xl font-bold text-foreground block">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Parceria</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Como Funciona
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Fredão Alimentos cresce através de uma rede de <strong className="text-foreground">representantes comerciais</strong> comprometidos com a qualidade e o bom atendimento.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nossos representantes são responsáveis por levar os produtos para supermercados, mercearias, restaurantes e outros estabelecimentos em suas regiões de atuação.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Se você tem experiência no setor alimentício, conhece bem sua região e busca uma parceria de sucesso, queremos conhecer você!
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Benefícios de ser representante:
              </h3>
              <ul className="space-y-4">
                {beneficios.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Presença */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onde estamos</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Estados com Presença Fredão
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Já somos líderes de vendas em diversos estados brasileiros. Se sua região ainda não está na lista, essa é sua oportunidade!
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {["Pará", "Ceará", "Maranhão", "Pernambuco", "Minas Gerais", "Santa Catarina"].map((estado, index) => (
                  <span
                    key={index}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium"
                  >
                    {estado}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground text-lg">
                E estamos em constante expansão para novos territórios!
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={mapa}
                  alt="Mapa do Brasil - Presença da Fredão Alimentos"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-y" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para fazer parte do nosso time?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Entre em contato conosco e saiba como se tornar um representante Fredão Alimentos.
          </p>
          <a
            href="https://wa.me/5591999999999?text=Olá! Gostaria de me tornar um representante Fredão Alimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={20} />
            Entrar em Contato pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Representantes;
