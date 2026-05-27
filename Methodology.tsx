"use client";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Methodology() {
  const { t } = useLanguage();

  const stepsData = t("methodology.steps") || [];
  const safeSteps = Array.isArray(stepsData) ? stepsData : [
    {
      num: "01",
      title: "Diagnóstico",
      desc: "Evaluación rigurosa de todos los departamentos: Mystery Guest, auditoría operativa, entrevistas con el equipo y análisis de documentación. Entregamos un informe con evidencia específica, no percepciones."
    },
    {
      num: "02",
      title: "Estrategia",
      desc: "Diseño del plan de mejora con prioridades claras: qué impacta más, qué requiere inversión, qué puede hacerse de inmediato. Cada acción tiene un responsable, un plazo y una métrica de éxito."
    },
    {
      num: "03",
      title: "Implementación",
      desc: "Acompañamos la ejecución de forma presencial: formación de equipos, instalación de SOPs, checklists y protocolos. Nos quedamos hasta que los cambios son operativos, no solo planificados."
    },
    {
      num: "04",
      title: "Medición",
      desc: "Seguimiento mediante KPIs operativos, evaluaciones internas de Mystery Guest, simulacros de estándares y revisiones periódicas para garantizar que los resultados se consolidan en el tiempo."
    }
  ];

  return (
    <section id="metodologia" className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            {t("methodology.subtitle")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            {t("methodology.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg max-w-2xl"
          >
            {t("methodology.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safeSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative p-8 border border-white/5 bg-[#121212] group hover:border-[#B0A387]/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="font-serif text-5xl text-[#1A1A1A] group-hover:text-[#B0A387]/20 transition-colors absolute top-6 right-6 pointer-events-none">
                {step.num}
              </div>
              
              <div className="mt-8 mb-4">
                <span className="text-[#B0A387] mr-3 font-serif text-xl">{step.num}.</span>
                <h3 className="text-white text-xl font-serif inline">{step.title}</h3>
              </div>
              
              <div className="w-12 h-px bg-white/10 group-hover:bg-[#B0A387]/50 transition-colors mb-6"></div>
              
              <p className="text-neutral-400 font-light leading-relaxed text-[15px] flex-grow">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
