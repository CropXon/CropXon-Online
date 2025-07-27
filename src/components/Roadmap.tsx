import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, Target, Rocket, Globe } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "MVP Launch (Q1 2025)",
      status: "in-progress",
      description: "Foundation & Core Features",
      items: [
        "AI-powered crop advisory in Odia",
        "Basic weather integration",
        "Farmer onboarding platform",
        "Mobile-first interface",
        "Pilot with 1,000 farmers in Odisha"
      ],
      timeline: "3 months"
    },
    {
      phase: "Phase 2", 
      title: "Market Expansion (Q2 2026)",
      status: "planned",
      description: "Scale & Government Partnerships",
      items: [
        "Government scheme integration",
        "FPO partnership network",
        "Q-commerce platform launch",
        "Microfinance integration",
        "Reach 50,000 farmers"
      ],
      timeline: "6 months"
    },
    {
      phase: "Phase 3",
      title: "State-wide Coverage (Q3 2026)",
      status: "planned", 
      description: "Complete Odisha Penetration",
      items: [
        "All 30 districts coverage",
        "Multi-language support",
        "Advanced AI models",
        "Smart kit distribution",
        "500,000 active farmers"
      ],
      timeline: "9 months"
    },
    {
      phase: "Phase 4",
      title: "National Expansion (Q4 2026)",
      status: "future",
      description: "Pan-India Rollout",
      items: [
        "5 state expansion",
        "B2B SaaS platform",
        "Corporate partnerships", 
        "Data analytics dashboard",
        "5 million farmers"
      ],
      timeline: "18 months"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-primary" />;
      case "planned":
        return <Target className="w-6 h-6 text-tech-blue" />;
      case "future":
        return <Circle className="w-6 h-6 text-muted-foreground" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "in-progress":
        return "border-primary bg-primary/5";
      case "planned":
        return "border-tech-blue bg-tech-blue/5";
      case "future":
        return "border-muted bg-muted/20";
      default:
        return "border-muted bg-muted/20";
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Roadmap
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Journey to Transform Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a ₹900 Cr Odisha opportunity to a ₹24,000 Cr India-wide revolution. 
            Here's how we're building the future of farming.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-tech-blue to-muted h-full hidden lg:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-background p-2 rounded-full border-4 border-primary hidden lg:block z-10">
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Card */}
                <div className="lg:w-5/12 w-full">
                  <Card className={`${getStatusColor(item.status)} border-2 hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.phase}
                        </span>
                        <div className="lg:hidden">
                          {getStatusIcon(item.status)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="font-medium">{item.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {item.items.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-center items-center text-sm text-muted-foreground border-t pt-3">
                        <span>Timeline: <strong className="text-foreground">{item.timeline}</strong></span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Summary */}
        <div className="mt-20">
          <Card className="card-gradient border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Total Market Opportunity
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary">₹900 Cr</p>
                  <p className="text-muted-foreground">Odisha Market (TAM)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-tech-blue">₹24,000 Cr</p>
                  <p className="text-muted-foreground">India Market</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">$600M+</p>
                  <p className="text-muted-foreground">Global Potential</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in building India's largest vernacular AgriTech platform, 
                serving 120 million farmers and creating sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WaitlistDialog type="investor">
                  <Button variant="hero" size="lg">
                    Invest in CropXon
                  </Button>
                </WaitlistDialog>
                <WaitlistDialog>
                  <Button variant="outline" size="lg">
                    Join Our Mission
                  </Button>
                </WaitlistDialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;