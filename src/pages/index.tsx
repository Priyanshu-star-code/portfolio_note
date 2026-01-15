import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
    return (
        <div className="min-h-screen bg-background relative">
            <AnimatedBackground />
            <Navigation />
            <main className="pt-16 relative z-10">
                <HeroSection />
                <WorkExperienceSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <ToolsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;