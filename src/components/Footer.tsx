import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pathshala Foundation</h3>
                <p className="text-sm text-background/70">Empowering Communities Through Education</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Registered under the Indian Societies Act of 1860, we work tirelessly 
              to provide quality education and support to children in underserved communities.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-sm">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-secondary transition-colors">Programs</a></li>
              <li><a href="#volunteer" className="hover:text-secondary transition-colors">Volunteer</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Community Center, Urban Area<br />
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">info@pathshalafoundation.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="text-background/60 hover:text-secondary hover:bg-background/10 p-2">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background/60 hover:text-secondary hover:bg-background/10 p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background/60 hover:text-secondary hover:bg-background/10 p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background/60 hover:text-secondary hover:bg-background/10 p-2">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>© 2024 Pathshala Foundation. All rights reserved.</p>
          <p>Registered under Indian Societies Act of 1860 | CIN: [Registration Number]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;