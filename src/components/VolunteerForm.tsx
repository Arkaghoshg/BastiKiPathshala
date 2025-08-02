import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Heart, Send, User, Mail, Phone, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import volunteerImage from "@/assets/community-volunteers.jpg";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    availability: "",
    experience: "",
    motivation: "",
    skills: [] as string[],
    agreeToTerms: false
  });

  const skillOptions = [
    "Teaching & Education",
    "Community Outreach",
    "Event Organization",
    "Digital Marketing",
    "Photography/Videography",
    "Fundraising",
    "Administrative Support",
    "Language Translation"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }

    console.log("Volunteer Application:", formData);
    
    toast({
      title: "Application Submitted! 🎉",
      description: "Thank you for your interest! We'll contact you within 48 hours.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      availability: "",
      experience: "",
      motivation: "",
      skills: [],
      agreeToTerms: false
    });
  };

  return (
    <section id="volunteer" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Join Our Mission</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Become a Volunteer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our community of passionate volunteers and help us make a real difference 
            in the lives of children. Every contribution matters, no matter how small.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-gentle">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                Volunteer Application
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="16"
                        max="80"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Your age"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="evenings">Evenings (After 6 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible Schedule</SelectItem>
                      <SelectItem value="occasional">Occasional Events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills */}
                <div>
                  <Label>Skills & Interests</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label
                          htmlFor={skill}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="mt-1"
                    placeholder="Tell us about any previous volunteer work or relevant experience..."
                    rows={3}
                  />
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Share your motivation and what drives you to help..."
                    rows={4}
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the terms and conditions and understand that Pathshala Foundation 
                    will contact me regarding volunteer opportunities. I consent to background 
                    verification if required.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Side */}
          <div className="space-y-6">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img
                src={volunteerImage}
                alt="Volunteers working with children in community"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Info Cards */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling based on your availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Training and orientation provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Direct impact on children's education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Minimum age: 16 years</li>
                  <li>• Commitment of at least 3 months</li>
                  <li>• Basic English/Hindi communication</li>
                  <li>• Passion for education and social work</li>
                  <li>• Background verification may be required</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;