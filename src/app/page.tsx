import { Hero } from "@/components/home/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { AboutUs } from "@/components/home/AboutUs";
import { CoursesOverview } from "@/components/home/CoursesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ValueProposition />
      <AboutUs />
      <CoursesOverview />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
