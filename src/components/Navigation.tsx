import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sprout } from "lucide-react";
import LoginDialog from "./LoginDialog";
import WaitlistDialog from "./WaitlistDialog";
import cropxonLogo from "@/assets/cropxon-logo-1.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Government Schemes", href: "#government-schemes" },
    { label: "CropXon Loans", href: "#finance" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="section-padding container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <div className="relative">
              <img 
                src={cropxonLogo} 
                alt="CropXon Logo" 
                className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 object-cover"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                CropXon
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                From Soil to Soul
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <LoginDialog>
              <Button variant="ghost" size="sm" className="font-medium">
                Login
              </Button>
            </LoginDialog>
            <WaitlistDialog>
              <Button variant="hero" size="sm" className="font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Join Waitlist
              </Button>
            </WaitlistDialog>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="py-6 space-y-1 border-t border-border/50 bg-background/95 backdrop-blur-xl rounded-b-2xl shadow-xl">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-6 px-2">
                <LoginDialog>
                  <Button variant="ghost" size="sm" className="justify-start">
                    Login
                  </Button>
                </LoginDialog>
                <WaitlistDialog>
                  <Button variant="hero" size="sm" className="justify-start">
                    Join Waitlist
                  </Button>
                </WaitlistDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;