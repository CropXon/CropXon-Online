import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Farmer-First Approach",
      description: "Every solution we build puts farmers at the center, addressing real challenges with genuine empathy."
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Leveraging AI and IoT to optimize farming practices and maximize yield while minimizing resource waste."
    },
    {
      icon: Lightbulb,
      title: "Innovation for Impact",
      description: "Combining cutting-edge technology with traditional farming wisdom for sustainable growth."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Touch",
      description: "Connecting local farmers to global markets while preserving regional farming traditions."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                <Heart className="w-4 h-4 mr-2" />
                About CropXon
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Bridging the Gap Between 
                <span className="text-primary"> Tradition & Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Born from a deep understanding of farming challenges, CropXon emerged from a 12+ year 
                journey in technology, transforming from corporate success to social entrepreneurship. 
                Our founder's path from Hyderabad to Bangalore, Qatar to Odisha reflects our commitment 
                to bringing global solutions to local problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that technology should empower, not replace, human expertise. Every farmer 
                suicide prevented, every toxic-free meal served, and every sustainable practice adopted 
                brings us closer to our vision of a thriving agricultural ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Join Our Mission
              </Button>
              <Button variant="outline" size="lg">
                Read Founder Story
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="card-gradient rounded-3xl p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                "Technology is only as powerful as the lives it transforms"
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At CropXon, we're not just building an AgriTech platform – we're cultivating hope, 
                empowering communities, and sowing seeds for a sustainable future where every farmer 
                thrives and every meal nourishes without harm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;