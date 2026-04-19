"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Instagram, Facebook, Twitter, Home, BookOpen, Info, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

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
            ? "py-3 px-6 md:px-8 bg-white/70 backdrop-blur-2xl shadow-[0_12px_40px_-12px_rgba(0,215,159,0.3)] border-white/20" 
            : "py-4 px-6 md:px-8 bg-white/70 backdrop-blur-xl border-white/30 shadow-[0_8px_30px_-10px_rgba(0,215,159,0.1)]"
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
          <nav className="hidden md:flex items-center justify-center gap-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="relative flex items-center gap-2 px-4 py-2 text-sm md:text-base font-semibold text-slate-700 hover:text-teal-600 transition-all duration-300 rounded-full hover:bg-white/40 overflow-hidden group"
              >
                <link.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors duration-300" />
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            ))}
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
            className="absolute top-[88px] left-4 right-4 md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-xl pointer-events-auto z-50"
          >
            <div className="px-4 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors font-semibold text-lg"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </motion.div>
              ))}
              
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
