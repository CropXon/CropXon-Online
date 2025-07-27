import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Smartphone, Satellite, CreditCard, Truck, Shield, Sprout, Users } from "lucide-react";
import aiIcon from "@/assets/ai-farming-icon.jpg";
import iotIcon from "@/assets/iot-sensors.jpg";
import mobileIcon from "@/assets/mobile-app.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Smart Crop Advisory",
      description: "AI-powered recommendations for optimal crop selection, planting schedules, and farming techniques.",
      image: aiIcon,
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Q-Commerce Platform",
      description: "Direct farmer-to-market connection with quick commerce capabilities and fair pricing.",
      image: mobileIcon,
      color: "text-tech-blue"
    },
    {
      icon: Sprout,
      title: "IoT Soil Monitoring",
      description: "Real-time soil health tracking with smart sensors for precision agriculture.",
      image: iotIcon,
      color: "text-accent"
    },
    {
      icon: Satellite,
      title: "Satellite Crop Health",
      description: "Advanced satellite imagery analysis for crop health monitoring and yield prediction.",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Krishi Finance",
      description: "Easy access to agricultural loans and microfinance for small-scale farmers.",
      color: "text-tech-blue"
    },
    {
      icon: Shield,
      title: "Govt Scheme Integration",
      description: "Seamless integration with government agricultural schemes and subsidies.",
      color: "text-accent"
    },
    {
      icon: Truck,
      title: "Logistics & Export",
      description: "End-to-end logistics support connecting local farms to global markets.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Farmer Community App",
      description: "Multi-language platform (Odia-first) for knowledge sharing and community building.",
      color: "text-tech-blue"
    }
  ];

  return (
    <section className="py-24 earth-gradient">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Sprout className="w-4 h-4 mr-2" />
            Our Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive AgriTech Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered crop advisory to Q-commerce marketplace, we provide end-to-end solutions 
            for modern farming challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="group card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                {solution.image ? (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-secondary/50 flex items-center justify-center ${solution.color}`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                )}
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;