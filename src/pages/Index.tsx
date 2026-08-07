import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import AuthorsSection from "@/components/AuthorsSection";
import ContentSections from "@/components/ContentSections";
import GoalsAndRoutine from "@/components/GoalsAndRoutine";
import FiveStepsFlow from "@/components/FiveStepsFlow";
import DailyChecklist from "@/components/DailyChecklist";
import DuaSection from "@/components/DuaSection";
import NutritionSection from "@/components/NutritionSection";
import ReferenceSection from "@/components/ReferenceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TableOfContents />
      <AuthorsSection />
      <ContentSections />
      <GoalsAndRoutine />
      <FiveStepsFlow />
      <DailyChecklist />
      <DuaSection />
      <NutritionSection />
      <ReferenceSection />
      <Footer />
    </div>
  );
};

export default Index;
