"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function ContactCards() {
  const { isRtl } = useLanguage();

  const cards = [
    {
      icon: MessageCircle,
      titleAr: "تحدث معنا عبر واتساب",
      titleEn: "Chat via WhatsApp",
      detailAr: "رد سريع خلال دقائق",
      detailEn: "Quick reply within minutes",
      link: "https://wa.me/201014517018",
      actionAr: "ابدأ المحادثة",
      actionEn: "Start Chat",
      color: "text-green-500",
      bgHover: "group-hover:bg-green-50",
      borderHover: "group-hover:border-green-200"
    },
    {
      icon: Mail,
      titleAr: "راسلنا عبر الإيميل",
      titleEn: "Email Us",
      detailAr: "info@walmnaho.com",
      detailEn: "info@walmnaho.com",
      link: "mailto:info@walmnaho.com",
      actionAr: "أرسل بريداً",
      actionEn: "Send Email",
      color: "text-indigo-500",
      bgHover: "group-hover:bg-indigo-50",
      borderHover: "group-hover:border-indigo-200"
    },
    {
      icon: MapPin,
      titleAr: "موقعنا",
      titleEn: "Our Location",
      detailAr: "أكاديمية تعليم عن بعد - من مصر للعالم",
      detailEn: "Online Academy - From Egypt to the World",
      link: "#",
      actionAr: "تعلم من أي مكان",
      actionEn: "Learn from anywhere",
      color: "text-teal-500",
      bgHover: "group-hover:bg-teal-50",
      borderHover: "group-hover:border-teal-200"
    }
  ];

  return (
    <section className="relative z-20 -mt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.a
              href={card.link}
              target={card.link !== "#" ? "_blank" : undefined}
              rel={card.link !== "#" ? "noreferrer" : undefined}
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer ${card.borderHover}`}
            >
              <div className={`w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 transition-colors duration-300 ${card.bgHover}`}>
                <card.icon className={`w-10 h-10 ${card.color}`} />
              </div>
              
              <h3 className={`text-xl font-bold text-slate-900 mb-3 ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? card.titleAr : card.titleEn}
              </h3>
              
              <p className="text-slate-500 font-medium mb-8 flex-grow">
                {isRtl ? card.detailAr : card.detailEn}
              </p>
              
              <span className={`text-sm font-bold ${card.color} uppercase tracking-wider transition-transform duration-300 group-hover:scale-105`}>
                {isRtl ? card.actionAr : card.actionEn}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
