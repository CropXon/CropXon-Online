import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI-powered agriculture" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-tech-blue/60"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative section-padding container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-sm font-medium backdrop-blur-sm opacity-0 ${isLoaded ? 'animate-fade-in-up animate-stagger-1' : ''}`}>
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                AI + Q-Commerce + Sustainability = CropXon
              </div>
              
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight opacity-0 ${isLoaded ? 'animate-fade-in-left animate-stagger-2' : ''}`}>
                From Soil to
                <span className="text-accent block animate-glow">Soul</span>
              </h1>
              
              <p className={`text-xl lg:text-2xl font-light opacity-90 opacity-0 ${isLoaded ? 'animate-fade-in-right animate-stagger-3' : ''}`}>
                Powering Farming with Intelligence
              </p>
              
              <p className={`text-lg opacity-80 max-w-lg opacity-0 ${isLoaded ? 'animate-fade-in-up animate-stagger-4' : ''}`}>
                AI-powered AgriTech platform solving real-world farming challenges through smart technologies, connecting farmers with global markets and sustainable practices.
              </p>
            </div>
            
            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 opacity-0 ${isLoaded ? 'animate-scale-in animate-stagger-5' : ''}`}>
              <Button variant="hero" size="lg" className="group animate-glow">
                Start Your Crop Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Vision
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className={`flex items-center space-x-6 pt-8 opacity-0 ${isLoaded ? 'animate-fade-in-up animate-stagger-5' : ''}`}>
              <span className="text-sm opacity-70">Trusted by</span>
              <div className="flex items-center space-x-4 opacity-60">
                <div className="h-8 w-16 bg-primary-foreground/20 rounded animate-pulse"></div>
                <div className="h-8 w-16 bg-primary-foreground/20 rounded animate-pulse"></div>
                <div className="h-8 w-16 bg-primary-foreground/20 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className={`card-gradient rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-primary-foreground/10 opacity-0 ${isLoaded ? 'animate-scale-in animate-stagger-3' : ''}`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold text-primary opacity-0 ${isLoaded ? 'animate-number-count animate-stagger-1' : ''}`}>10K+</div>
                  <div className="text-sm text-muted-foreground">Farmers Connected</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold text-tech-blue opacity-0 ${isLoaded ? 'animate-number-count animate-stagger-2' : ''}`}>500+</div>
                  <div className="text-sm text-muted-foreground">Villages Covered</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold text-accent opacity-0 ${isLoaded ? 'animate-number-count animate-stagger-3' : ''}`}>25%</div>
                  <div className="text-sm text-muted-foreground">Yield Increase</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold text-primary opacity-0 ${isLoaded ? 'animate-number-count animate-stagger-4' : ''}`}>₹50L</div>
                  <div className="text-sm text-muted-foreground">Farmer Income</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;