import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Leaf } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import coconutProduct from "@/assets/coconut-product.jpg";

const Sobre = () => {
  const valores = [
    { icon: Award, title: "Qualidade", description: "Excelência em cada produto que produzimos" },
    { icon: Heart, title: "Transparência", description: "Honestidade em todas as nossas relações" },
    { icon: Users, title: "Acessibilidade", description: "Produtos de qualidade para todas as classes" },
    { icon: Leaf, title: "Naturalidade", description: "Ingredientes naturais e saudáveis" },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBg}
            alt="Natureza brasileira"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Nossa História
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up">
            Conheça a trajetória da Fredão Alimentos e nossa paixão por alimentação saudável
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Desde 2020</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Do Pará para o Brasil
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A Fredão Alimentos nasceu no final de 2020 no estado do Pará, fundada por <strong className="text-foreground">Frederico Pereira</strong>, um empreendedor paraense com uma trajetória inspiradora no setor alimentício.
                </p>
                <p>
                  Com mais de <strong className="text-foreground">27 anos de experiência</strong>, Frederico começou sua jornada como empacotador e, através de muito trabalho e dedicação, construiu seu próprio negócio focado na industrialização do coco.
                </p>
                <p>
                  Hoje, a Fredão Alimentos é referência em produtos derivados de coco, presente em diversos estados brasileiros como Ceará, Maranhão, Pernambuco, Minas Gerais, Santa Catarina e, claro, no Pará.
                </p>
                <p>
                  Nossa estratégia de marca inclui o uso do nome e do rosto do fundador no logo, criando uma <strong className="text-foreground">identificação direta e humanizada</strong> com os consumidores.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={coconutProduct}
                  alt="Fredão Alimentos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-xl shadow-lg hidden md:block">
                <span className="font-heading text-5xl font-bold">2020</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Ano de fundação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="bg-card p-10 rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Oferecer alimentos naturais, saudáveis e de alta qualidade a preços acessíveis, ajudando as pessoas a se alimentar melhor em todas as classes sociais.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-card p-10 rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser a maior empresa do Brasil no segmento de alimentos que proporcionam uma alimentação saudável, levando qualidade e sabor para todas as mesas brasileiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">O que nos guia</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Nossos Valores
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <valor.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {valor.title}
                </h3>
                <p className="text-muted-foreground">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Conheça nossos produtos e descubra o sabor natural do coco brasileiro.
          </p>
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Ver nossos produtos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
