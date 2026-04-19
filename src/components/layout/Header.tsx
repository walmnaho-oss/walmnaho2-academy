"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Instagram, Facebook, Twitter, Home, BookOpen, Info, MessageSquare, ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { megaMenuData } from "@/data/megaMenu";

const navLinks = [
  { key: "home", href: "/", icon: Home },
  { key: "courses", href: "/courses", icon: BookOpen },
  { key: "about", href: "/about", icon: Info },
  { key: "contact", href: "/contact", icon: MessageSquare },
];

export function Header() {
  const { t, locale, isRtl, switchLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4 md:px-8 transition-all duration-500 pointer-events-none">
      <div 
        className={`pointer-events-auto relative w-full max-w-6xl transition-all duration-700 rounded-full border ${
          isScrolled 
            ? "py-2.5 px-6 md:px-8 bg-white/85 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,215,159,0.15),inset_0_0_0_1px_rgba(255,255,255,1)] border-slate-200" 
            : "py-3.5 px-6 md:px-8 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,215,159,0.05),inset_0_0_0_1px_rgba(255,255,255,0.7)] border-white/50"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center shrink-0 group">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/logo.svg" 
                alt="Walamnaho" 
                width={200} 
                height={60} 
                className="object-contain w-auto h-10 md:h-12 group-hover:scale-105 transition-all duration-500" 
                priority 
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-2 flex-1 relative">
            {navLinks.map((link) => {
              if (link.key === "courses") {
                return (
                  <div
                    key={link.key}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="relative flex items-center gap-2 px-4 py-2 text-sm md:text-base font-semibold text-slate-700 hover:text-teal-600 transition-all duration-300 rounded-full hover:bg-white/40 overflow-hidden group"
                    >
                      <link.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors duration-300" />
                      {t.nav[link.key as keyof typeof t.nav]}
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-[160%] ${isRtl ? "translate-x-1/4" : "-translate-x-1/4"} w-[800px] z-[200]`}
                        >
                          <div className="bg-slate-100/95 backdrop-blur-3xl border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,215,159,0.2),inset_0_0_0_1px_rgba(255,255,255,1)] rounded-3xl overflow-hidden p-8 relative">
                            {/* Elegant top highlight */}
                            <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
                            
                            <div className="grid grid-cols-2 gap-x-10 gap-y-12 relative z-10">
                              {megaMenuData.map((category) => (
                                <div key={category.id} className="flex flex-col gap-5">
                                  {/* Category Header */}
                                  <div className="flex items-start gap-3">
                                    <div className="p-2.5 rounded-2xl bg-white border border-slate-100 text-teal-600 shadow-sm shrink-0">
                                      <category.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <h4 className={`font-bold text-slate-900 ${isRtl ? 'font-cairo' : ''}`}>
                                        {isRtl ? category.titleAr : category.titleEn}
                                      </h4>
                                      <p className="text-xs text-slate-500 font-medium mt-1">
                                        {isRtl ? category.descriptionAr : category.descriptionEn}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {/* Courses List */}
                                  <div className="flex flex-col gap-1.5 pl-14 rtl:pr-14 rtl:pl-0">
                                    {category.courses.map((course) => (
                                      <Link 
                                        key={course.id} 
                                        href={course.href}
                                        className="group flex flex-col p-2.5 rounded-xl hover:bg-teal-50/60 transition-colors"
                                      >
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">
                                          {isRtl ? course.titleAr : course.titleEn}
                                          <ChevronRight className={`w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isRtl ? "rotate-180 translate-x-2 group-hover:translate-x-0" : ""}`} />
                                        </div>
                                        <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                          {isRtl ? course.descriptionAr : course.descriptionEn}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-8 pt-5 flex justify-between items-center bg-slate-100/50 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl relative z-10 border-t border-slate-200">
                              <div className="text-sm font-semibold text-slate-500">
                                {isRtl ? "هل تبحث عن مسار مخصص؟" : "Looking for a custom path?"}
                              </div>
                              <Link href="/courses" className="text-sm font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 group bg-white px-4 py-2 rounded-full border border-teal-100 shadow-sm hover:shadow-md transition-all">
                                {t.courses.viewAll}
                                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="relative flex items-center gap-2 px-4 py-2 text-sm md:text-base font-semibold text-slate-700 hover:text-teal-600 transition-all duration-300 rounded-full hover:bg-white/40 overflow-hidden group"
                >
                  <link.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors duration-300" />
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Social Links (Ultra Premium Fine) */}
            <div className={`flex items-center gap-1.5 p-1 rounded-full border border-white/20 bg-white/10`}>
                <Link href="#" className="p-1.5 text-slate-600 hover:text-teal-600 hover:bg-white/40 rounded-full transition-all duration-300">
                    <Instagram size={17} />
                </Link>
                <Link href="#" className="p-1.5 text-slate-600 hover:text-teal-600 hover:bg-white/40 rounded-full transition-all duration-300">
                    <Facebook size={17} />
                </Link>
                <Link href="#" className="p-1.5 text-slate-600 hover:text-teal-600 hover:bg-white/40 rounded-full transition-all duration-300">
                    <Twitter size={17} />
                </Link>
            </div>

            <button
              onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors duration-300 rounded-full hover:bg-white/40 border border-white/10"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "العربية" : "EN"}
            </button>
            
            <Link
              href="/contact"
              className="relative px-6 py-2.5 text-[15px] font-bold tracking-wide rounded-full text-white bg-[#00D79F] hover:bg-[#00c28e] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.nav.bookTrial}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 p-2 text-slate-700 hover:text-teal-600 bg-white border border-slate-200 rounded-full transition-all duration-300 hover:bg-slate-50 shadow-sm shrink-0"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100px] left-4 right-4 md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-xl pointer-events-auto z-50"
          >
            <div className="px-4 py-8 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, i) => {
                if (link.key === "courses") {
                  return (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col"
                    >
                      <button
                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                        className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors font-semibold text-lg"
                      >
                        <div className="flex items-center gap-2">
                          <link.icon className="w-5 h-5 text-slate-400" />
                          {t.nav[link.key as keyof typeof t.nav]}
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform ${mobileCoursesOpen ? (isRtl ? '-rotate-90' : 'rotate-90') : (isRtl ? 'rotate-180' : '')}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileCoursesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 p-4 mt-2 mb-2 bg-slate-50/80 rounded-2xl border border-slate-100">
                              {megaMenuData.map((category) => (
                                <div key={category.id} className="flex flex-col gap-2">
                                  <div className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider flex items-center gap-2">
                                    <category.icon className="w-3.5 h-3.5" />
                                    {isRtl ? category.titleAr : category.titleEn}
                                  </div>
                                  <div className="flex flex-col gap-1 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-200 ml-3 rtl:ml-0 rtl:mr-3 pl-2 rtl:pr-2">
                                    {category.courses.map((course) => (
                                      <Link
                                        key={course.id}
                                        href={course.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="px-3 py-2 text-slate-600 hover:text-teal-600 hover:bg-white rounded-lg transition-colors text-sm font-semibold"
                                      >
                                        {isRtl ? course.titleAr : course.titleEn}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <Link
                                href="/courses"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 text-center text-sm font-bold text-teal-600 hover:text-teal-700 py-3 bg-white rounded-xl border border-teal-100 shadow-sm"
                              >
                                {t.courses.viewAll}
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors font-semibold text-lg"
                    >
                      <link.icon className="w-5 h-5 text-slate-400" />
                      {t.nav[link.key as keyof typeof t.nav]}
                    </Link>
                  </motion.div>
                );
              })}
              
              <div className="flex flex-col gap-4 pt-6 border-t border-slate-100 mt-2">
                <button
                  onClick={() => {
                    switchLocale(locale === "en" ? "ar" : "en");
                    setMobileOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-slate-600 hover:text-teal-600 transition-colors rounded-xl bg-slate-50 font-semibold border border-slate-200"
                >
                  <Globe className="w-5 h-5" />
                  {locale === "en" ? "التبديل للعربية" : "Switch to English"}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-center px-4 py-4 font-bold rounded-xl bg-[#00D79F] hover:bg-[#00c28e] text-white shadow-md shadow-teal-500/20"
                >
                  {t.nav.bookTrial}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
