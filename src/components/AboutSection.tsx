import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Shield } from "lucide-react";
import impactImage from "@/assets/impact-children.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Transparency & Accountability",
      description: "Registered nonprofit under the Indian Societies Act of 1860, ensuring complete transparency in our operations."
    },
    {
      icon: Globe,
      title: "Grassroots Reach",
      description: "Operating in multiple neighborhood locations with targeted interventions and weekly classes."
    },
    {
      icon: Award,
      title: "Proven Impact",
      description: "Direct educational support through stationeries, learning kits, and admission assistance."
    },
    {
      icon: Shield,
      title: "Youth-Led Mission",
      description: "Community-focused organization led by passionate young people creating meaningful change."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">About Our Foundation</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Building Brighter Futures Through Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pathshala Foundation is dedicated to breaking the cycle of poverty through education. 
            We believe every child deserves access to quality learning opportunities, regardless of their circumstances.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img
                src={impactImage}
                alt="Children benefiting from our education programs"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-warm">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years of Impact</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission & Focus</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work tirelessly in underserved urban communities and slums, providing comprehensive 
                educational support that includes primary education, school admission assistance, and 
                essential learning materials to children who need it most.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Primary Education Support</h4>
                    <p className="text-muted-foreground text-sm">Weekly classes for children without access to formal schooling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">School Admission Assistance</h4>
                    <p className="text-muted-foreground text-sm">Helping families navigate enrollment processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Learning Materials</h4>
                    <p className="text-muted-foreground text-sm">Providing essential stationeries and basic learning kits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-gentle hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;