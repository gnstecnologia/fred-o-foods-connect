import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-coconut.jpg";
import coconutMilk from "@/assets/coconut-milk.jpg";
import coconutOil from "@/assets/coconut-oil.jpg";
import coconutRalado from "@/assets/coconut-ralado.jpg";
import coconutProduct from "@/assets/coconut-product.jpg";
import redPatternBg from "@/assets/red-pattern-bg.jpg";
const Index = () => {
  const products = [
    { name: "Leite de Coco", image: coconutMilk, description: "Cremoso e natural" },
    { name: "Óleo de Coco", image: coconutOil, description: "Puro e versátil" },
    { name: "Coco Ralado", image: coconutRalado, description: "Fresco e saboroso" },
    { name: "Manteiga de Coco", image: coconutProduct, description: "Sem lactose" },
  ];

  const diferenciais = [
    { icon: Leaf, title: "100% Natural", description: "Produtos sem aditivos artificiais" },
    { icon: Heart, title: "Saudável", description: "Sem lactose, sem caseína" },
    { icon: Users, title: "Para Todos", description: "Preço acessível para todas as classes" },
    { icon: TrendingUp, title: "Qualidade", description: "27 anos de experiência no setor" },
  ];

  const estados = [
    "Pará", "Ceará", "Maranhão", "Pernambuco", "Minas Gerais", "Santa Catarina"
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Produtos Fredão Alimentos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              🥥 Do Pará para o Brasil
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Alimentos naturais, acessíveis e feitos com
              <span className="text-accent"> orgulho brasileiro</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Desde 2020, levando saúde e qualidade para sua mesa com produtos à base de coco, produzidos no coração da Amazônia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-1 text-lg"
              >
                Conheça nossos produtos
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                Nossa história
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem somos</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A história da Fredão Alimentos
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fundada por Frederico Pereira, um empreendedor paraense com mais de 27 anos de experiência no setor alimentício, a Fredão Alimentos nasceu em 2020 com uma missão clara: oferecer alimentos naturais e saudáveis a preços acessíveis.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Com foco na produção de derivados de coco, nossa empresa cresce rapidamente, levando qualidade e sabor do Pará para todo o Brasil.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Saiba mais sobre nós
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={coconutProduct}
                  alt="Coco fresco"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <span className="font-heading text-4xl font-bold">27+</span>
                <p className="text-sm text-primary-foreground/80">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${redPatternBg})` }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Por que escolher</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
              Nossos Diferenciais
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfólio</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Linha de Produtos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Produtos à base de coco, naturais e de alta qualidade para sua alimentação diária.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-0.5"
            >
              Ver todos os produtos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Presença Nacional */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${redPatternBg})` }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Presença em Todo o Brasil
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Líderes de vendas em diversos estados brasileiros, levando qualidade do Norte ao Sul do país.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {estados.map((estado, index) => (
              <span
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-medium border border-primary-foreground/20"
              >
                {estado}
              </span>
            ))}
            <span className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-medium border border-primary-foreground/30">
              + muitos outros
            </span>
          </div>

          <div className="text-center">
            <Link
              to="/representantes"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Quer levar a Fredão para sua região?
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center shadow-lg">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Alimentação saudável começa aqui
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato e descubra como nossos produtos podem fazer parte da sua rotina.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Fale Conosco
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
