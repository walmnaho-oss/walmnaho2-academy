import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesFeatures } from "@/components/courses/CoursesFeatures";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { TrialBooking } from "@/components/home/TrialBooking";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CoursesHero />
      <CoursesFeatures />
      <CourseGrid />
      
      {/* We reuse the TrialBooking section at the bottom of the courses page */}
      <div className="pb-32 -mt-10">
        <TrialBooking />
      </div>
    </main>
  );
}
