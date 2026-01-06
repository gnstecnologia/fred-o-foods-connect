import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Fredão Alimentos" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Alimentos naturais, acessíveis e feitos com orgulho brasileiro. Desde 2020, levando saúde e qualidade para sua mesa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Nossos Produtos
              </Link>
              <Link to="/compromisso" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Nosso Compromisso
              </Link>
              <Link to="/representantes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Seja um Representante
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5521959001194" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Phone size={16} />
                (21) 95900-1194
              </a>
              <a href="mailto:contato@fredaoalimentos.com.br" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Mail size={16} />
                contato@fredaoalimentos.com.br
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Pará, Brasil</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/alimentosfredao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/alimentosfredao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Fredão Alimentos. Todos os direitos reservados.</p>
            <p>CNPJ: 30.163.471/0001-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
