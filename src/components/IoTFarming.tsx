import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Satellite, Thermometer, Droplets, Wind, Zap, Activity, Wifi } from "lucide-react";

const IoTFarming = () => {
  const iotFeatures = [
    {
      icon: Plane,
      title: "Smart Drones",
      description: "Autonomous crop monitoring and precision spraying",
      benefits: ["Real-time crop health mapping", "Precision pesticide application", "Automated field surveillance"],
      status: "Active"
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Advanced satellite imagery for crop analysis",
      benefits: ["Weather pattern analysis", "Crop growth tracking", "Yield prediction models"],
      status: "Active"
    },
    {
      icon: Thermometer,
      title: "Climate Sensors",
      description: "IoT sensors for environmental monitoring",
      benefits: ["Temperature monitoring", "Humidity tracking", "Soil condition analysis"],
      status: "Active"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated water management systems",
      benefits: ["Water usage optimization", "Automated scheduling", "Moisture level control"],
      status: "Coming Soon"
    }
  ];

  const droneCapabilities = [
    "Crop health assessment using multispectral imaging",
    "Precision application of fertilizers and pesticides",
    "Early pest and disease detection",
    "Field mapping and boundary analysis",
    "Real-time monitoring and alerts"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-tech-blue rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="section-padding container-width relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Plane className="w-4 h-4 mr-2 animate-bounce" />
            IoT & Drone Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Future of Farming with IoT & Drones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience precision agriculture with our cutting-edge IoT sensors and autonomous drone technology 
            for smarter, more efficient farming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* IoT Features */}
          <div className="space-y-6">
            {iotFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={feature.status === "Active" ? "default" : "secondary"}>
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Activity className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Animated Drone Section */}
          <div className="relative">
            <Card className="card-gradient border-0 shadow-xl h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-4 bg-primary/40 rounded-full animate-ping delay-1000"></div>
                    <div className="absolute inset-8 bg-primary rounded-full flex items-center justify-center">
                      <Plane className="w-12 h-12 text-white animate-bounce" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Autonomous Agricultural Drones
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI-powered drones provide comprehensive field monitoring and precision agriculture services.
                  </p>
                </div>

                <div className="space-y-3">
                  {droneCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Wifi className="w-4 h-4 text-primary mr-2" />
                      <span>Real-time connectivity</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-600">Live monitoring</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Active Drones</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Satellite className="w-8 h-8 text-tech-blue" />
            </div>
            <p className="text-3xl font-bold text-tech-blue">1000+</p>
            <p className="text-sm text-muted-foreground">Hectares Monitored</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Thermometer className="w-8 h-8 text-accent" />
            </div>
            <p className="text-3xl font-bold text-accent">500+</p>
            <p className="text-sm text-muted-foreground">IoT Sensors</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-500">24/7</p>
            <p className="text-sm text-muted-foreground">Monitoring</p>
          </div>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-tech-blue/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready for Smart Farming?
              </h3>
              <p className="text-muted-foreground mb-6">
                Transform your fields with our IoT and drone technology. Get started with a pilot program today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Schedule Demo Flight
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IoTFarming;