import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Smartphone, CloudRain, Sprout, LineChart, Zap, Target, TrendingUp } from "lucide-react";

const SmartFarming = () => {
  const smartFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms for crop optimization",
      features: ["Predictive analytics", "Yield forecasting", "Disease detection"],
      color: "primary"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Hyperlocal weather data and forecasting",
      features: ["Rainfall prediction", "Temperature alerts", "Storm warnings"],
      color: "tech-blue"
    },
    {
      icon: Sprout,
      title: "Crop Management",
      description: "End-to-end crop lifecycle management",
      features: ["Planting schedules", "Growth tracking", "Harvest timing"],
      color: "accent"
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Comprehensive farm performance analytics",
      features: ["Yield analysis", "Cost optimization", "ROI tracking"],
      color: "green-500"
    }
  ];

  const technologies = [
    {
      name: "Precision Agriculture",
      description: "GPS-guided farming for optimal resource usage",
      impact: "30% resource savings"
    },
    {
      name: "Variable Rate Technology",
      description: "Site-specific application of inputs",
      impact: "25% input cost reduction"
    },
    {
      name: "Remote Sensing",
      description: "Satellite and drone monitoring",
      impact: "Early problem detection"
    },
    {
      name: "Automated Systems",
      description: "Smart irrigation and equipment control",
      impact: "40% labor savings"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Smart Agriculture
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent Farming Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of AI, IoT, and data analytics to make farming more efficient, 
            sustainable, and profitable than ever before.
          </p>
        </div>

        {/* Smart Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {smartFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${feature.color}/10 rounded-full flex items-center justify-center group-hover:bg-${feature.color}/20 transition-colors`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Target className={`w-3 h-3 text-${feature.color} mr-2 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Advanced Agricultural Technologies
            </h3>
            <p className="text-muted-foreground mb-8">
              Our platform integrates cutting-edge technologies to provide farmers with 
              the tools they need for modern, efficient agriculture.
            </p>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-foreground">{tech.name}</h4>
                      <Badge variant="secondary">{tech.impact}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="card-gradient border-0 shadow-xl h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Mobile-First Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Access all smart farming features through our intuitive mobile app, 
                    designed specifically for farmers in rural areas.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Offline capability for remote areas</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Voice commands in local languages</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Real-time data synchronization</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Personalized recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-primary mb-2">45%</p>
              <p className="text-sm text-muted-foreground">Average Yield Increase</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-tech-blue mx-auto mb-4" />
              <p className="text-3xl font-bold text-tech-blue mb-2">60%</p>
              <p className="text-sm text-muted-foreground">Resource Optimization</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <LineChart className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-3xl font-bold text-accent mb-2">35%</p>
              <p className="text-sm text-muted-foreground">Cost Reduction</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-tech-blue/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Experience Smart Farming Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Join the agricultural revolution with our comprehensive smart farming platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Smart Farming
                </Button>
                <Button variant="outline" size="lg">
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartFarming;