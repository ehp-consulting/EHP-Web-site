"use client";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CaseStudies() {
  const { t } = useLanguage();

  const cases = [
    {
      title: t("cases.c1.title"),
      challenge: t("cases.c1.challenge"),
      impact: t("cases.c1.impact"),
      metric: t("cases.c1.metric")
    },
    {
      title: t("cases.c2.title"),
      challenge: t("cases.c2.challenge"),
      impact: t("cases.c2.impact"),
      metric: t("cases.c2.metric")
    },
    {
      title: t("cases.c3.title"),
      challenge: t("cases.c3.challenge"),
      impact: t("cases.c3.impact"),
      metric: t("cases.c3.metric")
    }
  ];

  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            {t("cases.challenge") || "Práctica demostrable"}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-white"
          >
            {t("nav.cases")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121212] p-8 border border-white/5 flex flex-col group hover:border-[#B0A387]/30 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#B0A387] mb-4">{card.challenge}</span>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#B0A387] transition-colors">{card.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed flex-grow">{card.impact}</p>
              <p className="mt-4 text-[#B0A387] font-serif font-bold text-lg border-t border-white/10 pt-4">{card.metric}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
