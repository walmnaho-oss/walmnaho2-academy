"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { megaMenuData } from "@/data/megaMenu";
import { ChevronRight, Clock, Star, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CourseGrid() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  // Flatten courses from megaMenu
  const allCourses = megaMenuData.flatMap(cat => 
    cat.courses.map(course => ({
      ...course,
      categoryId: cat.id,
      categoryTitleAr: cat.titleAr,
      categoryTitleEn: cat.titleEn,
      icon: cat.icon
    }))
  );

  const filteredCourses = activeTab === "all" 
    ? allCourses 
    : allCourses.filter(c => c.categoryId === activeTab);

  return (
    <section className="py-20 relative bg-[#F8FAFC]">
      {/* Filters */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === "all" 
                ? "bg-[#0B1120] text-white shadow-xl shadow-slate-900/20" 
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {t.courses.categories.all}
          </button>
          {megaMenuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat.id 
                  ? "bg-[#0B1120] text-white shadow-xl shadow-slate-900/20" 
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <cat.icon className={`w-4 h-4 ${activeTab === cat.id ? "text-teal-400" : ""}`} />
              {isRtl ? cat.titleAr : cat.titleEn}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={course.id}
                className="glass-card p-2 rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Category Badge & Rating */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
                      <course.icon className="w-4 h-4 text-teal-500" />
                      {isRtl ? course.categoryTitleAr : course.categoryTitleEn}
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-amber-700">4.9</span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? course.titleAr : course.titleEn}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {isRtl ? course.descriptionAr : course.descriptionEn}
                  </p>

                  {/* Course Metadata (Hours, Level, etc) */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {isRtl ? "المدة" : "Duration"}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Clock className="w-4 h-4 text-teal-500" />
                        {isRtl ? "مرن" : "Flexible"}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {isRtl ? "الطلاب" : "Students"}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Users className="w-4 h-4 text-indigo-500" />
                        {isRtl ? "فردي 1-1" : "1-on-1"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="p-2 mt-auto">
                  <Link
                    href={course.href}
                    className="flex items-center justify-between w-full p-4 rounded-[2rem] bg-slate-50 text-slate-700 font-bold group-hover:bg-[#0B1120] group-hover:text-white transition-all duration-300"
                  >
                    <span className="pl-2">{t.courses.viewCourse}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-sm">
                      <ArrowRight className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
