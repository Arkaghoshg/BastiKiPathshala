import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning together in community"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Children Through
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Education & Community
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              We work in underserved urban communities and slums, providing primary education, 
              school admissions support, and basic learning kits to children who need it most.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80">Children Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-white/80">Communities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-white/80">Active Volunteers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                Join as Volunteer
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;