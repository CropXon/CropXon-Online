import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  children: React.ReactNode;
  type?: "general" | "farmer" | "youth" | "government" | "investor";
}

const WaitlistDialog = ({ children, type = "general" }: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    userType: type,
    location: "",
    farmSize: "",
    crops: "",
    experience: "",
    interests: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!formData.name || !formData.mobile) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and mobile number",
        variant: "destructive",
      });
      return;
    }

    if (formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Successfully Joined Waitlist!",
        description: "We'll contact you soon with updates about CropXon.",
      });
      setFormData({
        name: "",
        mobile: "",
        email: "",
        userType: type,
        location: "",
        farmSize: "",
        crops: "",
        experience: "",
        interests: "",
      });
    }, 1000);
  };

  const getTitle = () => {
    switch (type) {
      case "farmer": return "Join as a Farmer";
      case "youth": return "Career Opportunities";
      case "government": return "Government Partnership";
      case "investor": return "Investment Opportunity";
      default: return "Join CropXon Waitlist";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "farmer": return "Get early access to AI-powered farming solutions";
      case "youth": return "Explore career opportunities in AgriTech";
      case "government": return "Partner with us for digital agriculture initiatives";
      case "investor": return "Learn about investment opportunities in sustainable agriculture";
      default: return "Be the first to experience the future of farming";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="userType">I am a</Label>
              <Select value={formData.userType} onValueChange={(value: "general" | "farmer" | "youth" | "government" | "investor") => setFormData({ ...formData, userType: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="youth">Youth/Student</SelectItem>
                  <SelectItem value="government">Government Official</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          {formData.userType === "farmer" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="farmSize">Farm Size</Label>
                  <Select value={formData.farmSize} onValueChange={(value) => setFormData({ ...formData, farmSize: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1 acre">Less than 1 acre</SelectItem>
                      <SelectItem value="1-5 acres">1-5 acres</SelectItem>
                      <SelectItem value="5-10 acres">5-10 acres</SelectItem>
                      <SelectItem value="10+ acres">More than 10 acres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crops">Main Crops</Label>
                  <Input
                    id="crops"
                    placeholder="Rice, Wheat, etc."
                    value={formData.crops}
                    onChange={(e) => setFormData({ ...formData, crops: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="interests">
              {formData.userType === "farmer" ? "Challenges you face" : 
               formData.userType === "youth" ? "Areas of interest" :
               formData.userType === "investor" ? "Investment focus" : "Tell us more"}
            </Label>
            <Textarea
              id="interests"
              placeholder={
                formData.userType === "farmer" ? "E.g., crop diseases, market access, financing..." :
                formData.userType === "youth" ? "E.g., AI/ML, mobile development, field operations..." :
                formData.userType === "investor" ? "E.g., AgriTech, sustainability, rural development..." :
                "Tell us about your interest in CropXon..."
              }
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              rows={3}
            />
          </div>

          <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
            {isLoading ? "Joining Waitlist..." : "Join Waitlist"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;