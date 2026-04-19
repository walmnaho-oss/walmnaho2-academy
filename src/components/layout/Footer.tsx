"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BookOpen, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { key: "home", href: "/" },
    { key: "courses", href: "/courses" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ],
  programs: [
    { label: { en: "Quran & Tajweed", ar: "القرآن والتجويد" }, href: "/courses" },
    { label: { en: "Arabic Language", ar: "اللغة العربية" }, href: "/courses" },
    { label: { en: "Islamic Studies", ar: "الدراسات الإسلامية" }, href: "/courses" },
    { label: { en: "Kids Programs", ar: "برامج الأطفال" }, href: "/courses" },
  ],
};

export function Footer() {
  const { t, locale, isRtl } = useLanguage();

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      {/* Top gradient line — wider and brighter */}
      <div className="absolute top-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative group">
              <Image 
                src="/logo.svg" 
                alt="Walamnaho" 
                width={240} 
                height={72} 
                className="object-contain w-auto h-14 md:h-20 opacity-80 group-hover:opacity-100 transition-all duration-500 filter invert" 
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@walamnaho.com"
                aria-label="Email Us"
                title="Email Us"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-300 hover:bg-teal-50 hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                title="WhatsApp Us"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-green-600 hover:border-green-300 hover:bg-green-50 hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-all duration-300 inline-block link-underline hover:translate-x-1"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.programs}
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <BookOpen className="w-3 h-3" />
                    {locale === "ar" ? link.label.ar : link.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="hover:text-slate-900 transition-colors">info@walamnaho.com</p>
              <p className="hover:text-slate-900 transition-colors">+1 234 567 890</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Walamnaho. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
