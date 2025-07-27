import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocateUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Locate CropXon
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From Soil to Soul — Discover our presence across India and our vision for global expansion
              </p>
            </div>
          </div>
        </section>

        {/* India Expansion Map */}
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">India Expansion Plan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic expansion across India's agricultural heartland
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <img 
                src="/lovable-uploads/f71329bb-d2e8-40da-bc08-d260c590ec02.png"
                alt="CropXon India Expansion Plan"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Global Vision Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Vision</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Empowering farmers worldwide with innovative agricultural technology
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <img 
                src="/lovable-uploads/45f0cc5a-9b63-4376-bac7-ac7459c727df.png"
                alt="CropXon Global Vision"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Headquarters Section */}
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Headquarters</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit us at our innovation center in Bhubaneswar, Odisha
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">CropXon Headquarters</h3>
                  <p className="text-muted-foreground mb-6">
                    Our main operations center and R&D facility where we develop cutting-edge agricultural solutions.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-muted-foreground mb-6">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-background/50 backdrop-blur rounded-2xl p-6 border border-border/50">
                    <h4 className="font-semibold mb-4">Why Bhubaneswar?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Strategic location in India's agricultural belt</li>
                      <li>• Access to top agricultural universities</li>
                      <li>• Government support for agri-tech innovation</li>
                      <li>• Proximity to farming communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in revolutionizing agriculture. Whether you're a farmer, partner, or investor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <Users className="w-5 h-5 mr-2" />
                  Partner with Us
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Office
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocateUs;