import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import coconutMilk from "@/assets/coconut-milk.jpg";
import coconutOil from "@/assets/coconut-oil.jpg";
import coconutRalado from "@/assets/coconut-ralado.jpg";
import coconutProduct from "@/assets/coconut-product.jpg";
import heroCoconut from "@/assets/hero-coconut.jpg";

const Produtos = () => {
  const produtos = [
    {
      name: "Leite de Coco",
      image: coconutMilk,
      description: "Cremoso e natural, ideal para receitas doces e salgadas.",
      benefits: ["Sem lactose", "Sem glúten", "100% natural"],
    },
    {
      name: "Óleo de Coco",
      image: coconutOil,
      description: "Puro e versátil, perfeito para culinária e cuidados pessoais.",
      benefits: ["Extra virgem", "Prensado a frio", "Multiuso"],
    },
    {
      name: "Coco Ralado",
      image: coconutRalado,
      description: "Fresco e saboroso, essencial para confeitaria.",
      benefits: ["Sem conservantes", "Textura perfeita", "Alto rendimento"],
    },
    {
      name: "Manteiga de Coco",
      image: coconutProduct,
      description: "Alternativa saudável à manteiga tradicional.",
      benefits: ["Sem lactose", "Sem caseína", "Vegano"],
    },
    {
      name: "Shoyu",
      image: heroCoconut,
      description: "Molho de soja de alta qualidade para suas receitas.",
      benefits: ["Sabor autêntico", "Fermentação natural", "Versátil"],
    },
    {
      name: "Palmito",
      image: heroCoconut,
      description: "Palmito de primeira qualidade, macio e saboroso.",
      benefits: ["Origem controlada", "Sustentável", "Premium"],
    },
    {
      name: "Farinha de Tapioca",
      image: coconutRalado,
      description: "Farinha versátil para receitas tradicionais brasileiras.",
      benefits: ["Sem glúten", "Natural", "Alta qualidade"],
    },
    {
      name: "Goma de Tapioca",
      image: coconutRalado,
      description: "Perfeita para tapiocas e receitas especiais.",
      benefits: ["Textura ideal", "Sem aditivos", "Pronta para uso"],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nosso Portfólio</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Linha de Produtos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Produtos naturais à base de coco e outros alimentos saudáveis, desenvolvidos com qualidade e carinho para sua mesa.
          </p>
        </div>
      </section>

      {/* Produtos Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {produto.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {produto.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {produto.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Quer nossos produtos na sua região?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Entre em contato conosco ou torne-se um representante Fredão Alimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Fale Conosco
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/representantes"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Seja um Representante
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Produtos;
