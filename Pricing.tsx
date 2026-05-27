"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.p1.name"),
      investment: t("pricing.p1.investment"),
      includes: t("pricing.p1.includes"),
      cta: t("pricing.p1.cta"),
      interestValue: "revpar_goppar",
    },
    {
      name: t("pricing.p2.name"),
      investment: t("pricing.p2.investment"),
      includes: t("pricing.p2.includes"),
      cta: t("pricing.p2.cta"),
      highlight: true,
      interestValue: "ultra_luxury_esg",
    },
    {
      name: t("pricing.p3.name"),
      investment: t("pricing.p3.investment"),
      includes: t("pricing.p3.includes"),
      cta: t("pricing.p3.cta"),
      interestValue: "standards_audit",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-2xl mx-auto mb-8">
            {t("pricing.desc")}
          </p>
          <div className="w-24 h-[1px] bg-[#B0A387] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative flex flex-col p-10 border ${plan.highlight ? "border-[#B0A387] bg-[#121212]" : "border-white/10 bg-[#0A0A0A]"} hover:border-[#B0A387]/50 transition-colors duration-500`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B0A387] text-black text-xs uppercase tracking-widest font-bold px-4 py-1">
                  {t("pricing.recommended")}
                </div>
              )}

              <h3 className="font-serif text-2xl text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-[#B0A387] font-mono text-sm mb-8 pb-8 border-b border-white/10">
                {plan.investment}
              </p>

              <p className="text-neutral-400 font-light leading-relaxed flex-grow mb-10">
                {plan.includes}
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className={`text-center px-6 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 ${plan.highlight ? "bg-[#B0A387] text-black hover:bg-white" : "border border-white/20 text-white hover:border-[#B0A387] hover:text-[#B0A387]"}`}
                >
                  {plan.cta}
                </Link>
                <Link
                  href={`/contact?interest=${plan.interestValue}`}
                  className="text-center px-6 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 border border-transparent text-[#B0A387] hover:border-[#B0A387]/30 hover:bg-[#B0A387]/5"
                >
                  {t("pricing.requestQuote")}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
