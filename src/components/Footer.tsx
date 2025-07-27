import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail, Phone, MapPin,
  Twitter, Instagram, Facebook
} from "lucide-react";
import cropxonLogo from "@/assets/cropxon-logo-1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Locate Us", href: "/LocateUs" },
    { label: "Partner with Us", href: "#partner" },
    { label: "Ride with CropXon (Pilot) for Q-Commerce", href: "#pilot-qcommerce" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Press Kit", href: "#press" },
    { label: "Careers", href: "#careers" },
    { label: "CropXon APIs", href: "#apis" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/cropxon", label: "CropXon Instagram" },
    { icon: Twitter, href: "https://x.com/CropXon", label: "CropXon X" },
    { icon: Facebook, href: "https://facebook.com/cropxon", label: "CropXon Facebook" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding container-width">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src={cropxonLogo} 
                  alt="CropXon Logo" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="text-2xl font-bold">CropXon</span>
              </div>
              
              <p className="text-primary-foreground/80 max-w-md leading-relaxed">
                From Soil to Soul — Powering Farming with Intelligence. 
                AI-powered AgriTech platform transforming agriculture through 
                smart technologies and sustainable practices.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">hello@cropxon.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">+91 8917549065</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal & Resources</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* API Pricing Section */}
              <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                <h4 className="font-medium text-sm mb-3 text-primary-foreground">CropXon API Pricing</h4>
                <div className="space-y-2 text-xs text-primary-foreground/70">
                  <div className="flex justify-between">
                    <span>Basic Plan:</span>
                    <span>₹2/req (1000 req/day)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro Plan:</span>
                    <span>₹1.5/req (5000 req/day)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise:</span>
                    <span>Custom pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-semibold text-xl mb-2">Stay Updated</h3>
                <p className="text-primary-foreground/80">
                  Get the latest updates on AgriTech innovations and CropXon's journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="accent" className="sm:px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 CropXon. All rights reserved. Building the future of agriculture.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:bg-accent/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
