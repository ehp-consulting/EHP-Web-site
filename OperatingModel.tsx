"use client";
import { motion } from "motion/react";

export default function OperatingModel() {
  const models = [
    {
      title: "Procesos operativos",
      subtitle: "La esencia del servicio",
      description: "La experiencia del huésped se construye en el momento del servicio. Aquí habitan la calidad, la consistencia y la emoción que hacen a un hotel memorable.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      items: [
        "Experiencia del huésped en cada punto de contacto",
        "Calidad y consistencia del servicio diario",
        "Presentación de instalaciones y producto",
        "Alimentos, bebidas y gastronomía",
        "Limpieza, orden y confort habitacional"
      ],
      number: "01"
    },
    {
      title: "Procesos estratégicos",
      subtitle: "El sistema que sostiene",
      description: "Los procesos estratégicos definen cómo opera el hotel a nivel organizacional: los estándares, los protocolos y los mecanismos de control que garantizan resultados consistentes.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      items: [
        "Estándares, normas y procedimientos",
        "Objetivos, metas y seguimiento",
        "Planificación y control operativo",
        "Gestión de reputación y calidad",
        "Estrategia comercial y de producto"
      ],
      number: "02"
    },
    {
      title: "Procesos de apoyo",
      subtitle: "La continuidad operativa",
      description: "Los procesos de apoyo son los cimientos invisibles que permiten a los demás operar sin fricción: las personas, los materiales, la tecnología y la seguridad.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
      items: [
        "Gestión de recursos humanos y formación",
        "Abastecimiento y control de materiales",
        "Mantenimiento técnico y seguridad",
        "Sistemas digitales y herramientas",
        "Cumplimiento normativo y sostenibilidad"
      ],
      number: "03"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" id="modelo-operativo">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />
      
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
            Los tres planos de un hotel de excelencia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg"
          >
            Toda operación hotelera de alto desempeño funciona en tres capas interdependientes. <strong className="text-white font-medium">EHP trabaja en las tres simultáneamente.</strong>
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
