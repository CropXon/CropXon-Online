import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, MapPin, FileText, Users, ExternalLink } from "lucide-react";

const GovernmentSchemes = () => {
  const nationalSchemes = [
    {
      name: "PM-KISAN",
      description: "Direct income support to farmers",
      benefit: "₹6,000 per year",
      eligibility: "Small & marginal farmers",
      link: "#"
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme",
      benefit: "Up to 90% premium subsidy",
      eligibility: "All farmers",
      link: "#"
    },
    {
      name: "Digital Agriculture Mission",
      description: "Technology adoption in farming",
      benefit: "Tech solutions & training",
      eligibility: "Progressive farmers",
      link: "#"
    }
  ];

  const odishaSchemes = [
    {
      name: "KALIA Scheme",
      description: "Comprehensive farmer welfare",
      benefit: "₹25,000 per family",
      eligibility: "Small & marginal farmers",
      link: "#"
    },
    {
      name: "Balaram Scheme",
      description: "Agricultural mechanization",
      benefit: "50-80% subsidy on equipment",
      eligibility: "All farmers",
      link: "#"
    },
    {
      name: "Mukhyamantri Krushi Udyog Yojana",
      description: "Agri-entrepreneurship development",
      benefit: "Up to ₹50L loan subsidy",
      eligibility: "Young entrepreneurs",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Government Support
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Access Government Schemes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CropXon helps farmers access and apply for various government schemes and subsidies 
            available at national and state levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* National Schemes */}
          <div>
            <div className="flex items-center mb-8">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">National Schemes</h3>
              <Badge variant="outline" className="ml-3">India</Badge>
            </div>
            
            <div className="space-y-6">
              {nationalSchemes.map((scheme, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{scheme.name}</CardTitle>
                        <CardDescription className="mt-1">{scheme.description}</CardDescription>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <IndianRupee className="w-4 h-4 text-primary mr-2" />
                        <span className="font-medium">Benefit:</span>
                        <span className="ml-2 text-primary font-semibold">{scheme.benefit}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="font-medium">Eligibility:</span>
                        <span className="ml-2">{scheme.eligibility}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        Learn More & Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Odisha Schemes */}
          <div>
            <div className="flex items-center mb-8">
              <MapPin className="w-6 h-6 text-tech-blue mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Odisha State Schemes</h3>
              <Badge variant="secondary" className="ml-3">Odisha</Badge>
            </div>
            
            <div className="space-y-6">
              {odishaSchemes.map((scheme, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{scheme.name}</CardTitle>
                        <CardDescription className="mt-1">{scheme.description}</CardDescription>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <IndianRupee className="w-4 h-4 text-tech-blue mr-2" />
                        <span className="font-medium">Benefit:</span>
                        <span className="ml-2 text-tech-blue font-semibold">{scheme.benefit}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="font-medium">Eligibility:</span>
                        <span className="ml-2">{scheme.eligibility}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        Learn More & Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="card-gradient border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Personalized Scheme Recommendations
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI analyzes your farming profile and recommends the best schemes for your specific needs.
              </p>
              <Button size="lg">
                Get My Scheme Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSchemes;