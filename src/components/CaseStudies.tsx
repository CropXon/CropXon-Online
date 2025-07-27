import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, Crop, IndianRupee, Quote } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      farmer: "Ramesh Patel",
      location: "Cuttack District, Odisha",
      crop: "Rice & Vegetables",
      challenge: "Low yield and pest management issues",
      solution: "AI-powered crop advisory and precision farming",
      results: {
        yieldIncrease: "40%",
        incomeIncrease: "₹1.2L annually",
        costReduction: "30%"
      },
      testimonial: "CropXon transformed my farming. The AI recommendations in Odia language made it easy to understand and implement advanced farming techniques.",
      timeframe: "6 months",
      badge: "Featured Success"
    },
    {
      farmer: "Sunita Behera",
      location: "Bhubaneswar, Odisha", 
      crop: "Organic Vegetables",
      challenge: "Market access and organic certification",
      solution: "FPO partnership and organic farming guidance",
      results: {
        yieldIncrease: "25%",
        incomeIncrease: "₹80K annually", 
        costReduction: "20%"
      },
      testimonial: "The platform connected me with organic buyers and helped me get proper certification. My vegetables now sell at premium prices.",
      timeframe: "8 months",
      badge: "Organic Success"
    },
    {
      farmer: "Bijay Kumar Das",
      location: "Kendrapara, Odisha",
      crop: "Coconut & Cashew",
      challenge: "Water management and irrigation efficiency",
      solution: "Smart irrigation system and weather integration",
      results: {
        yieldIncrease: "35%",
        incomeIncrease: "₹1.5L annually",
        costReduction: "45%"
      },
      testimonial: "Smart irrigation saved both water and money. The weather alerts helped me protect my crops from unexpected storms.",
      timeframe: "1 year",
      badge: "Water Smart"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Farmers, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CropXon is transforming lives and livelihoods of farmers across Odisha 
            with technology-driven agricultural solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary">{study.badge}</Badge>
                  <span className="text-sm text-muted-foreground">{study.timeframe}</span>
                </div>
                <CardTitle className="text-xl">{study.farmer}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {study.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Crop className="w-4 h-4 text-primary mr-2" />
                    <span className="font-medium text-sm">Crops:</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{study.crop}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">CropXon Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Results Achieved</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Yield Increase:</span>
                      <span className="font-bold text-primary">{study.results.yieldIncrease}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Income Boost:</span>
                      <span className="font-bold text-primary">{study.results.incomeIncrease}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cost Reduction:</span>
                      <span className="font-bold text-primary">{study.results.costReduction}</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <Quote className="w-4 h-4 text-primary mb-2" />
                  <p className="text-sm italic text-muted-foreground">
                    "{study.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="card-gradient border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of farmers who have transformed their agricultural practices with CropXon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  View More Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;