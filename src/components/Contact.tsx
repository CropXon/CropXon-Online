import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        category: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      value: "hello@cropxon.com",
      link: "mailto:hello@cropxon.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters in Bhubaneswar",
      value: "Startup Odisha, Bhubaneswar, Odisha 751024",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here to help",
      value: "Mon-Sat: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Transform Agriculture Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a farmer, investor, government official, or just curious about our mission, 
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        +91
                      </span>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="10-digit number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief subject of your message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full" variant="hero">
                  {isLoading ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're building the future of agriculture in India. Whether you're a farmer looking for solutions, 
                an investor interested in our mission, or a partner wanting to collaborate, we're excited to connect.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{info.description}</p>
                        {info.link && info.link !== "#" ? (
                          <a href={info.link} className="text-primary hover:underline font-medium">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/5 to-tech-blue/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Why Choose CropXon?</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Opportunity</span>
                    <span className="font-semibold text-primary">₹24,000 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Farmers</span>
                    <span className="font-semibold text-tech-blue">120 Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages Supported</span>
                    <span className="font-semibold text-accent">5+ Regional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold text-foreground">&lt; 24 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;