"use client";
import { motion } from "motion/react";

export default function TransformationPillars() {
  const models = [
    {
      title: "Auditorías",
      subtitle: "",
      description: "Evaluación rigurosa de todos los departamentos, procesos operativos, experiencia del huésped y estándares documentales. Identificamos brechas, proyectamos su impacto y entregamos un plan de acción priorizado con métricas de seguimiento.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      items: [
        "Auditoría operativa hotelera integral",
        "Auditoría comercial y de rentabilidad",
        "Mystery Guest con +900 parámetros",
        "Auditoría de experiencia del huésped",
        "Auditoría de estándares de servicio",
        "Auditoría documental y digital",
        "Auditoría de sostenibilidad"
      ],
      number: "01"
    },
    {
      title: "Asesorías",
      subtitle: "",
      description: "Apoyo estratégico y operativo para el management hotelero en las etapas más críticas: desde la puesta en marcha hasta la reestructuración. Diseñamos estructuras, definimos estándares y optimizamos cada área con enfoque en rentabilidad y servicio.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
      items: [
        "Acompañamiento al management ejecutivo",
        "Opening y puesta en marcha",
        "Reorganización de operaciones",
        "Diseño de estándares y SOPs",
        "Mejora de reputación y servicio",
        "Interim management y gestión transitoria",
        "Análisis de rentabilidad por área"
      ],
      number: "02"
    },
    {
      title: "Formaciones",
      subtitle: "",
      description: "Programas de formación práctica y ejecutiva para líderes y equipos hoteleros. Elevamos la cultura de servicio con metodología 70% práctica y 30% teórica, adaptada a cada propiedad, con evaluaciones de impacto medibles.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />,
      items: [
        "Luxury Service Partnership (LSP)",
        "Entrenamiento de líderes y directores",
        "Formación in situ por departamento",
        "Formación continua mensual",
        "Liderazgo, protocolo y mayordomía",
        "Bienestar, comunicación y cultura de servicio",
        "Pre y post evaluación de impacto"
      ],
      number: "03"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" id="pilares">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B0A387]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-[#B0A387] w-10 mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            Tres pilares de transformación hotelera
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg"
          >
            Cada pilar responde a una necesidad distinta del ciclo de madurez operativa de un hotel de lujo. Pueden contratarse de forma independiente o como un programa integrado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] p-10 border border-white/5 hover:border-[#B0A387]/30 transition-all duration-300 group flex flex-col relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 font-serif text-8xl font-bold text-white pointer-events-none transition-transform group-hover:scale-110 duration-700 origin-top-right">
                {model.number}
              </div>
              
              <div className="mb-6 flex flex-col">
                <div className="mb-4 p-3 bg-black/50 border border-white/5 rounded-sm inline-flex self-start group-hover:border-[#B0A387]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#B0A387]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {model.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white group-hover:text-[#B0A387] transition-colors">{model.title}</h3>
                {model.subtitle && <span className="text-[#B0A387] text-sm uppercase tracking-wider font-semibold mt-1 block">{model.subtitle}</span>}
              </div>
              
              <p className="text-neutral-400 font-light leading-relaxed mb-8">{model.description}</p>
              
              <ul className="space-y-4 mt-auto">
                {model.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#B0A387] mt-1 text-[10px]">■</span>
                    <span className="text-neutral-300 text-sm font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B0A387] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
