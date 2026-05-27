"use client";
import { motion } from "motion/react";

export default function Services() {
  const divisions = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
      title: "Hospitality",
      description: "Soluciones estratégicas y operativas para llevar la excelencia, la rentabilidad y la calidad de servicio de su establecimiento al siguiente nivel.",
      list: [
        "Diagnóstico operativo 360° (Auditorías de Rooms, F&B, spa, áreas públicas, experiencia digital, beach service, arrival/departure y back of house, etc. Identificación de ineficiencias, fugas de costes y gaps de servicio, Benchmarking contra estándares de lujo (Forbes, AAA, LHW, 5★))",
        "Diseño de estándares y SOPs (Creación de manuales operativos, protocolos de servicio y estándares de lujo adaptados a la identidad del hotel).",
        "Mystery Guest (Protocolos completos de experiencia huésped)",
        "Pre-opening y apertura (Preparación de equipos, simulaciones, soft opening y organización operativa).",
        "Reposicionamiento y turnaround (Reestructuración operativa, mejora de ingresos, reducción de costes y recuperación del posicionamiento de mercado).",
        "Interim management y gestión transitoria.",
        "Asset management operativo (Elaboracion y seguimiento de KPIs clave para alinear operación, rentabilidad y objetivos de propiedad).",
        "Formación y cultura de servicio (Programas ejecutivos de formación para elevar liderazgo, consistencia y cultura de excelencia. Programas personalizados de formación en servicio 5★ FTG, AAA, LHW)"
      ],
      number: "01"
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: "Medioambiente y Sostenibilidad",
      description: "Desarrollo de estrategias con impacto medioambiental positivo, alineando las operaciones con certificaciones y estándares de sostenibilidad globales.",
      list: [
        "Estudios ambientales (Estudios de impacto ambiental, diagnóstico de ecosistemas y evaluación de riesgos en desarrollos hoteleros)",
        "Estrategia ESG y reporting (Diseño de estrategia ESG, reporting de sostenibilidad y alineación con marcos internacionales)",
        "Eficiencia energética y de recursos (Optimización de consumo de energía, agua y residuos para generar ahorro y disciplina ambiental)",
        "Certificaciones y cumplimiento (Implementación de ISO 14001 y otras normas ambientales, con enfoque práctico y seguimiento). Gestión de riesgos ambientales",
        "Experiencias sostenibles de alto valor (Creación de senderos submarinos, senderos botánicos y experiencias eco-luxury para el huésped)",
        "Restauración ecológica (Restauración de manglares, recuperación de zonas de playa y rehabilitación de ecosistemas naturales)",
        "Formaciones (Introducción a sostenibilidad aplicada a hotelería de lujo, ESG para hoteles y resorts, Estrategias Net Zero y descarbonización, Gobernanza y liderazgo sostenible, Integración de sostenibilidad en experiencia del huésped, Gestión de riesgos climáticos para activos turísticos, Economía circular aplicada a hoteles, Turismo regenerativo, Green luxury: cómo ser sostenible sin sacrificar exclusividad, Diseño de roadmaps de sostenibilidad)"
      ],
      number: "02"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A]" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            Nuestros servicios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            Áreas de Especialización
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg"
          >
            Dividimos nuestras soluciones de consultoría en dos grandes áreas para abordar los retos operativos, de servicio y de impacto ambiental con precisión.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {divisions.map((division, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#121212] p-10 border border-white/5 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(176,163,135,0.1)] hover:border-[#B0A387]/30 transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 font-serif text-8xl font-bold text-white pointer-events-none transition-transform group-hover:scale-110 duration-700 origin-top-right">
                {division.number}
              </div>
              
              <div className="mb-8 p-3 bg-black/50 border border-white/5 rounded-sm inline-flex self-start group-hover:border-[#B0A387]/30 group-hover:scale-110 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0A387] drop-shadow-[0_0_8px_rgba(176,163,135,0.3)]">
                  {division.icon}
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#B0A387] transition-colors">{division.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-8">{division.description}</p>
              
              <ul className="space-y-3 mt-auto">
                {division.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#B0A387] mt-1 text-[10px]">■</span>
                    <span className="text-neutral-500 text-sm font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
