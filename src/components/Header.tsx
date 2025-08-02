import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, BookOpen, Users, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Pathshala Foundation</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Empowering Communities Through Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">Volunteer</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              <Heart className="h-4 w-4" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#programs" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Programs</a>
              <a href="#volunteer" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Volunteer</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
              <Button variant="hero" className="w-full mt-4">
                <Heart className="h-4 w-4" />
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;