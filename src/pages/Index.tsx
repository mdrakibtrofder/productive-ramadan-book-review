import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import AuthorsSection from "@/components/AuthorsSection";
import ContentSections from "@/components/ContentSections";
import GoalsAndRoutine from "@/components/GoalsAndRoutine";
import ReferenceSection from "@/components/ReferenceSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TableOfContents />
      <AuthorsSection />
      <ContentSections />
      <GoalsAndRoutine />
      <ReferenceSection />
      <Footer />
    </div>
  );
};

export default Index;
