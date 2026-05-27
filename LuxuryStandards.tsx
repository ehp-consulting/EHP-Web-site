"use client";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LuxuryStandards() {
  const { t } = useLanguage();

  const elementsData = t("luxuryStandards.elements") || [];
  const safeElements = Array.isArray(elementsData) ? elementsData : [
    { title: "Análisis de Brechas (Gap Analysis)", desc: "Identificación precisa de las áreas de mejora frente a los requisitos del estándar." },
    { title: "Preparación Operativa", desc: "Alineación de procesos, capacitación del personal y refinamiento del servicio." },
    { title: "Documentación de Evidencias", desc: "Recopilación y estructuración de pruebas para respaldar el cumplimiento." }
  ];

  const icons = [
    <path key={0} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>,
    <path key={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>,
    <path key={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  ];

  const certifications = safeElements.map((el, i) => ({
    name: el.title,
    full: "", // Intentionally blank as the translations don't have this subtitle
    desc: el.desc,
    icon: icons[i] || icons[0]
  }));

  return (
    <section id="certificaciones" className="py-24 lg:py-32 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            {t("luxuryStandards.subtitle")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
          >
            {t("luxuryStandards.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg"
          >
            {t("luxuryStandards.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0A0A0A] border border-white/5 p-10 flex flex-col group hover:border-[#B0A387]/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 bg-[#121212] flex items-center justify-center mb-8 text-[#B0A387] group-hover:scale-110 group-hover:border-[#B0A387]/30 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {cert.icon}
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-[#B0A387] transition-colors">{cert.name}</h3>
              {cert.full && <p className="text-[11px] uppercase tracking-widest text-[#B0A387] mb-6">{cert.full}</p>}
              <p className="text-neutral-400 font-light leading-relaxed text-[15px] flex-grow">
                {cert.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
