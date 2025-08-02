import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VolunteerForm from "@/components/VolunteerForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
