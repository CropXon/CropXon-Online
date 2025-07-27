import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Star } from "lucide-react";

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="section-padding container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Star className="w-4 h-4 mr-2" />
            Trusted By
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Leaders Choose CropXon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with leading agricultural enterprises to transform farming across India
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-background border-2 hover:shadow-lg transition-all duration-300 max-w-md">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Gocarin Industries Pvt Ltd.
              </h3>
              <Badge variant="secondary" className="mb-3">
                Strategic Partner
              </Badge>
              <p className="text-muted-foreground">
                Leading agricultural solutions provider supporting our mission to revolutionize farming in Odisha
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;