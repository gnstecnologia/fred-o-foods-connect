import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Shield, Recycle, Users, Check } from "lucide-react";

const Compromisso = () => {
  const compromissos = [
    {
      icon: Leaf,
      title: "Produtos 100% Naturais",
      description: "Todos os nossos produtos são feitos com ingredientes naturais, sem aditivos artificiais ou conservantes prejudiciais à saúde.",
    },
    {
      icon: Heart,
      title: "Alimentação Saudável",
      description: "Nosso foco é proporcionar uma alimentação mais saudável para você e sua família, com produtos nutritivos e saborosos.",
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Rigoroso controle de qualidade em todas as etapas de produção, desde a matéria-prima até o produto final.",
    },
    {
      icon: Users,
      title: "Acessibilidade para Todos",
      description: "Acreditamos que alimentação de qualidade deve ser acessível para todas as classes sociais, do A ao E.",
    },
    {
      icon: Recycle,
      title: "Sustentabilidade",
      description: "Comprometidos com práticas sustentáveis na produção e industrialização do coco no Pará.",
    },
  ];

  const dietasEspeciais = [
    "Sem lactose",
    "Sem caseína",
    "Opções veganas",
    "Sem glúten (maioria dos produtos)",
    "Sem conservantes artificiais",
    "Sem corantes artificiais",
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Nosso Compromisso
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Mais do que uma empresa de alimentos, somos uma marca comprometida com a saúde e o bem-estar de todos os brasileiros.
          </p>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Pilares</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              O que nos move
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compromissos.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietas Especiais */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Inclusão Alimentar</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Respeito às Dietas Restritivas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Entendemos que muitas pessoas possuem necessidades alimentares específicas. Por isso, desenvolvemos produtos que atendem diversos públicos, garantindo que todos possam desfrutar de uma alimentação saudável e saborosa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa manteiga de coco, por exemplo, é uma alternativa perfeita para quem tem intolerância à lactose ou segue uma dieta vegana.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Nossos produtos são:
              </h3>
              <ul className="space-y-4">
                {dietasEspeciais.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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

      {/* Propósito */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Nosso Propósito
          </h2>
          <p className="text-secondary-foreground/80 text-xl max-w-3xl mx-auto leading-relaxed">
            "Ajudar as pessoas a se alimentar de forma saudável, com produtos naturais e de qualidade, a um preço acessível para todas as classes sociais."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça nossos produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Descubra toda a nossa linha de produtos naturais e saudáveis.
          </p>
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-0.5"
          >
            Ver Produtos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Compromisso;
