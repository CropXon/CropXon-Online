import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Banknote, CreditCard, PiggyBank, TrendingUp, Shield, Clock, CheckCircle, Calculator } from "lucide-react";

const Finance = () => {
  const loanTypes = [
    {
      icon: Banknote,
      name: "Crop Loans",
      description: "Short-term loans for seasonal farming needs",
      interestRate: "7-9%",
      maxAmount: "₹3L",
      tenure: "6-12 months",
      features: ["Quick approval", "Collateral-free up to ₹1.6L", "Flexible repayment"],
      eligibility: "Land ownership documents required"
    },
    {
      icon: TrendingUp,
      name: "Equipment Finance",
      description: "Purchase tractors and farming equipment",
      interestRate: "8-12%",
      maxAmount: "₹25L",
      tenure: "3-7 years",
      features: ["Equipment as collateral", "Up to 85% financing", "Tax benefits"],
      eligibility: "Income proof and land documents"
    },
    {
      icon: PiggyBank,
      name: "Farm Development",
      description: "Long-term loans for farm infrastructure",
      interestRate: "9-13%",
      maxAmount: "₹50L",
      tenure: "5-15 years",
      features: ["Infrastructure development", "Subsidized rates", "Grace period available"],
      eligibility: "Detailed project report required"
    }
  ];

  const services = [
    {
      icon: Calculator,
      title: "Loan Calculator",
      description: "Calculate EMI and loan eligibility instantly",
      action: "Calculate Now"
    },
    {
      icon: CreditCard,
      title: "Digital Payments",
      description: "Secure payment gateway for all transactions",
      action: "Setup Payments"
    },
    {
      icon: Shield,
      title: "Insurance Plans",
      description: "Comprehensive crop and equipment insurance",
      action: "Get Insured"
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get loan approval within 24-48 hours",
      action: "Apply Now"
    }
  ];

  const benefits = [
    "No hidden charges or processing fees",
    "Paperless application process",
    "Competitive interest rates",
    "Flexible repayment options",
    "Government scheme integration",
    "Dedicated relationship manager"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Banknote className="w-4 h-4 mr-2" />
            Financial Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Financing for Smart Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access tailored financial solutions designed specifically for farmers. 
            From crop loans to equipment financing, we've got you covered.
          </p>
        </div>

        {/* Loan Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <loan.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{loan.name}</CardTitle>
                <CardDescription>{loan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="font-bold text-primary">{loan.interestRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Max Amount</p>
                    <p className="font-bold text-primary">{loan.maxAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tenure</p>
                    <p className="font-bold text-primary">{loan.tenure}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Eligibility:</strong> {loan.eligibility}
                  </p>
                  <Button className="w-full">
                    Apply for {loan.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" size="sm">
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Choose CropXon Finance?
            </h3>
            <p className="text-muted-foreground mb-8">
              We understand the unique financial needs of farmers and provide 
              customized solutions that help you grow your agricultural business.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="card-gradient border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Loan Eligibility Calculator
                </h3>
                <p className="text-muted-foreground">
                  Check your loan eligibility and EMI in just 2 minutes
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Annual Income</span>
                  <Badge variant="outline">₹2L - ₹50L</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Land Area</span>
                  <Badge variant="outline">1+ acres</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Age</span>
                  <Badge variant="outline">21-65 years</Badge>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg">
                Check Eligibility
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Government Schemes Integration */}
        <Card className="bg-gradient-to-r from-primary/5 to-tech-blue/5 border-primary/20 mb-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Government Scheme Integration
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access government subsidies and schemes directly through our platform. 
              We help you identify and apply for relevant financial assistance programs.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-bold text-primary">₹6,000</p>
                <p className="text-sm text-muted-foreground">PM-KISAN Annual Benefit</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-bold text-tech-blue">₹25,000</p>
                <p className="text-sm text-muted-foreground">KALIA Scheme Support</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-bold text-accent">80%</p>
                <p className="text-sm text-muted-foreground">Equipment Subsidy</p>
              </div>
            </div>
            <Button size="lg">
              Explore Government Schemes
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Finance Your Farm?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get started with our simple loan application process and transform your farming operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Apply for Loan
                </Button>
                <Button variant="outline" size="lg">
                  Speak to Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Finance;