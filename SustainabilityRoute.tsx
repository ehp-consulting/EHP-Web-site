"use client";
import { motion } from "motion/react";
import {
  Search,
  PenTool,
  Settings,
  BarChart,
  FileText,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SustainabilityRoute() {
  const { t } = useLanguage();

  const stepsData = t("sustainabilityRoute.steps") || [];
  const safeSteps = Array.isArray(stepsData) ? stepsData : [
    { title: "Diagnóstico inicial", desc: "Evaluación de la operativa actual, infraestructura y brechas frente a los estándares internacionales de sostenibilidad." },
    { title: "Diseño de estrategia ESG", desc: "Definición de objetivos medioambientales, sociales y de gobernanza alineados con la visión de la propiedad." },
    { title: "Integración operativa", desc: "Adaptación de SOPs y políticas para incluir prácticas sostenibles, desde housekeeping hasta alimentos y bebidas." },
    { title: "Métricas de impacto", desc: "Implementación de paneles de control para medir reducción de huella hídrica, carbono y gestión de residuos." },
    { title: "Preparación para certificación", desc: "Ajustes y auditorías internas (simulacros) para preparar el hotel ante estándares como LEED o Green Key." },
    { title: "Excelencia sostenida", desc: "Seguimiento continuo y entrenamiento al personal para que la sostenibilidad sea parte de la cultura, no solo un certificado." },
  ];

  const icons = [
    <Search key={0} className="w-6 h-6 text-[#B0A387]" />,
    <PenTool key={1} className="w-6 h-6 text-[#B0A387]" />,
    <Settings key={2} className="w-6 h-6 text-[#B0A387]" />,
    <BarChart key={3} className="w-6 h-6 text-[#B0A387]" />,
    <FileText key={4} className="w-6 h-6 text-[#B0A387]" />,
    <CheckCircle key={5} className="w-6 h-6 text-[#B0A387]" />,
  ];

  const steps = safeSteps.map((s, i) => ({
    icon: icons[i] || icons[0],
    title: s.title,
    desc: s.desc
  }));

  const esgGoals = [
    { label: typeof t("sustainabilityRoute.esgGoals.carbon") === 'string' ? t("sustainabilityRoute.esgGoals.carbon") : "Reducción de huella de carbono", progress: 85 },
    { label: typeof t("sustainabilityRoute.esgGoals.water") === 'string' ? t("sustainabilityRoute.esgGoals.water") : "Eficiencia hídrica", progress: 70 },
    { label: typeof t("sustainabilityRoute.esgGoals.waste") === 'string' ? t("sustainabilityRoute.esgGoals.waste") : "Gestión de residuos (Circularidad)", progress: 90 },
    { label: typeof t("sustainabilityRoute.esgGoals.energy") === 'string' ? t("sustainabilityRoute.esgGoals.energy") : "Transición a energía renovable", progress: 60 },
  ];

  return (
    <section
      id="sostenibilidad"
      className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            {t("sustainabilityRoute.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#B0A387] text-lg font-medium tracking-wide mb-8"
          >
            {t("sustainabilityRoute.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[1px] bg-white/20 mx-auto mb-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#141414] border border-white/5 p-8 group hover:border-[#B0A387]/30 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 font-serif text-6xl font-bold text-white pointer-events-none">
                0{idx + 1}
              </div>
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-white font-serif text-xl mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl text-white mb-4"
            >
              {typeof t("sustainabilityRoute.esgGoals.title") === 'string' ? t("sustainabilityRoute.esgGoals.title") : "Nuestras Metas ESG"}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-neutral-400 font-light"
            >
              {typeof t("sustainabilityRoute.esgGoals.subtitle") === 'string' ? t("sustainabilityRoute.esgGoals.subtitle") : "Progresando hacia un futuro sostenible"}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {esgGoals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-white font-medium tracking-wide">
                    {goal.label}
                  </span>
                  <span className="text-[#B0A387] font-mono">
                    {goal.progress}%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#B0A387] to-[#D4C4A1]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
