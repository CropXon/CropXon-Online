import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Thermometer, Droplets, Wifi, Battery, Smartphone, CheckCircle, Star } from "lucide-react";

const SmartKits = () => {
  const kits = [
    {
      name: "Starter Kit",
      price: "₹15,000",
      originalPrice: "₹20,000",
      description: "Perfect for small farms and new adopters",
      category: "Essential",
      rating: 4.8,
      features: [
        "Soil moisture sensor",
        "Temperature & humidity monitor", 
        "Mobile app connectivity",
        "Basic weather alerts",
        "6-month support"
      ],
      includes: ["2 sensors", "Mobile app", "Installation guide"],
      idealFor: "1-5 acres",
      warranty: "1 year"
    },
    {
      name: "Professional Kit",
      price: "₹35,000",
      originalPrice: "₹45,000",
      description: "Advanced monitoring for commercial farms",
      category: "Professional",
      rating: 4.9,
      features: [
        "Multi-parameter sensors",
        "Automated irrigation control",
        "Weather station integration",
        "AI-powered analytics",
        "12-month premium support"
      ],
      includes: ["5 sensors", "Control unit", "Mobile + web app"],
      idealFor: "5-20 acres",
      warranty: "2 years",
      popular: true
    },
    {
      name: "Enterprise Kit",
      price: "₹75,000",
      originalPrice: "₹95,000",
      description: "Complete solution for large-scale operations",
      category: "Enterprise",
      rating: 4.9,
      features: [
        "Full IoT sensor network",
        "Drone integration ready",
        "Advanced analytics dashboard",
        "Custom alerts & reports",
        "24/7 dedicated support"
      ],
      includes: ["10+ sensors", "Gateway", "Cloud platform"],
      idealFor: "20+ acres",
      warranty: "3 years"
    }
  ];

  const components = [
    {
      icon: Thermometer,
      name: "Climate Sensors",
      description: "Monitor temperature, humidity, and atmospheric pressure",
      specs: "Range: -40°C to 80°C, ±0.3°C accuracy"
    },
    {
      icon: Droplets,
      name: "Soil Sensors",
      description: "Track soil moisture, pH, and nutrient levels",
      specs: "Depth: 0-30cm, Real-time monitoring"
    },
    {
      icon: Wifi,
      name: "Connectivity Hub",
      description: "LoRaWAN/4G connectivity for remote monitoring",
      specs: "Range: 5km, Battery life: 2 years"
    },
    {
      icon: Battery,
      name: "Solar Power",
      description: "Self-sustaining solar-powered operation",
      specs: "10W panel, 48hr backup battery"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Package className="w-4 h-4 mr-2" />
            Smart Kits
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Smart Farming Kits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready-to-deploy IoT solutions for modern farming. Choose the perfect kit 
            for your farm size and requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {kits.map((kit, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 relative ${kit.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {kit.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{kit.category}</Badge>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{kit.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{kit.name}</CardTitle>
                <CardDescription>{kit.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">{kit.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{kit.originalPrice}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Ideal for {kit.idealFor}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {kit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">What's Included</h4>
                  <div className="flex flex-wrap gap-2">
                    {kit.includes.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground border-t pt-4">
                  <span>Warranty: {kit.warranty}</span>
                  <span>Free shipping</span>
                </div>

                <Button className="w-full" variant={kit.popular ? "default" : "outline"}>
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Components Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Kit Components
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <component.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{component.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                  <p className="text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                    {component.specs}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Installation & Support */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-6 h-6 text-primary mr-3" />
                Easy Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Unbox & Connect</h4>
                    <p className="text-sm text-muted-foreground">Simple plug-and-play setup with mobile app guidance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Place Sensors</h4>
                    <p className="text-sm text-muted-foreground">Strategic placement guide included for optimal coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Start Monitoring</h4>
                    <p className="text-sm text-muted-foreground">Immediate data collection and insights through the app</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Complete Support Package
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Free installation support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>24/7 technical assistance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Regular firmware updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Training & user guides</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Replacement warranty</span>
                </li>
              </ul>
              <Button size="lg" className="w-full">
                Get Support Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-tech-blue/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Upgrade Your Farm?
              </h3>
              <p className="text-muted-foreground mb-6">
                Choose the perfect smart kit for your farming needs and start your journey towards precision agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Browse All Kits
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartKits;