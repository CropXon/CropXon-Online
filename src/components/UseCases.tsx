import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Users, Building, TrendingUp, ArrowRight } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const UseCases = () => {
  const useCases = [
    {
      icon: Tractor,
      title: "For Farmers",
      subtitle: "Smart Agriculture Solutions",
      benefits: [
        "AI-powered crop planning and advisory",
        "Direct market access with fair pricing",
        "Instant access to microfinance",
        "Real-time soil and weather monitoring"
      ],
      cta: "Start Smart Farming",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Users,
      title: "For Youth",
      subtitle: "Career in AgriTech",
      benefits: [
        "Jobs in AI and Q-commerce platforms",
        "Field technology opportunities",
        "Digital farming education",
        "Entrepreneurship in agriculture"
      ],
      cta: "Join Our Team",
      color: "tech-blue",
      bgGradient: "from-tech-blue/10 to-tech-blue/5"
    },
    {
      icon: Building,
      title: "For Government",
      subtitle: "Digital Agriculture Management",
      benefits: [
        "Automated scheme management",
        "Real-time crop monitoring",
        "Subsidy distribution automation",
        "Agricultural data analytics"
      ],
      cta: "Partner with Us",
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5"
    },
    {
      icon: TrendingUp,
      title: "For Investors",
      subtitle: "Sustainable Returns",
      benefits: [
        "ROI through crop network expansion",
        "Smart procurement opportunities",
        "ESG-compliant investments",
        "Scalable AgriTech platform"
      ],
      cta: "Invest in Future",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-tech-blue/10 rounded-full text-sm font-medium text-tech-blue mb-4">
            <Users className="w-4 h-4 mr-2" />
            Use Cases
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for Every Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual farmers to large institutions, CropXon provides tailored solutions 
            that create value across the agricultural ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br ${useCase.bgGradient}`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-${useCase.color}/10 flex items-center justify-center text-${useCase.color} group-hover:bg-${useCase.color} group-hover:text-${useCase.color === 'accent' ? 'accent-foreground' : `${useCase.color}-foreground`} transition-all duration-300`}>
                  <useCase.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {useCase.title}
                </CardTitle>
                <CardDescription className="font-medium">
                  {useCase.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <div className={`w-2 h-2 rounded-full bg-${useCase.color} mr-3 mt-2 flex-shrink-0`}></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <WaitlistDialog type={
                  (useCase.title.toLowerCase().includes('farmer') ? 'farmer' : 
                   useCase.title.toLowerCase().includes('youth') ? 'youth' :
                   useCase.title.toLowerCase().includes('government') ? 'government' :
                   useCase.title.toLowerCase().includes('investor') ? 'investor' : 'general') as "general" | "farmer" | "youth" | "government" | "investor"
                }>
                  <Button 
                    variant={useCase.color === 'primary' ? 'hero' : useCase.color === 'tech-blue' ? 'tech-blue' : 'accent'} 
                    className="w-full group/btn"
                    size="sm"
                  >
                    {useCase.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </WaitlistDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-gradient rounded-3xl p-12 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Agriculture Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a farmer looking to increase yield, a youth seeking career opportunities, 
              or an investor interested in sustainable returns, we have a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistDialog>
                <Button variant="hero" size="lg">
                  Get Started Today
                </Button>
              </WaitlistDialog>
              <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;