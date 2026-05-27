"use client";
import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Processes() {
  const { language } = useLanguage();

  const content = {
    es: {
      subtitle: "Modelo operativo",
      title: "Los tres planos de un hotel de excelencia",
      desc: "Toda operación hotelera de alto desempeño funciona en tres capas interdependientes. EHP trabaja en las tres simultáneamente.",
      processes: [
        {
          label: "Procesos operativos",
          title: "La esencia del servicio",
          desc: "La experiencia del huésped se construye en el momento del servicio. Aquí habitan la calidad, la consistencia y la emoción que hacen a un hotel memorable.",
          items: ["Experiencia del huésped en cada punto de contacto", "Calidad y consistencia del servicio diario", "Presentación de instalaciones y producto", "Alimentos, bebidas y gastronomía", "Limpieza, orden y confort habitacional"]
        },
        {
          label: "Procesos estratégicos",
          title: "El sistema que sostiene",
          desc: "Los procesos estratégicos definen cómo opera el hotel a nivel organizacional: los estándares, los protocolos y los mecanismos de control que garantizan resultados consistentes.",
          items: ["Estándares, normas y procedimientos", "Objetivos, metas y seguimiento", "Planificación y control operativo", "Gestión de reputación y calidad", "Estrategia comercial y de producto"]
        },
        {
          label: "Procesos de apoyo",
          title: "La continuidad operativa",
          desc: "Los procesos de apoyo son los cimientos invisibles que permiten a los demás operar sin fricción: las personas, los materiales, la tecnología y la seguridad.",
          items: ["Gestión de recursos humanos y formación", "Abastecimiento y control de materiales", "Mantenimiento técnico y seguridad", "Sistemas digitales y herramientas", "Cumplimiento normativo y sostenibilidad"]
        }
      ]
    },
    en: {
      subtitle: "Operating Model",
      title: "The Three Planes of a Hotel of Excellence",
      desc: "Every high-performance hotel operation functions in three interdependent layers. EHP works in all three simultaneously.",
      processes: [
        {
          label: "Operational Processes",
          title: "The Essence of Service",
          desc: "The guest experience is built at the moment of service. Here resides the quality, consistency, and emotion that make a hotel memorable.",
          items: ["Guest experience at every touchpoint", "Quality and consistency of daily service", "Presentation of facilities and product", "Food, beverage, and gastronomy", "Cleanliness, order, and room comfort"]
        },
        {
          label: "Strategic Processes",
          title: "The System that Sustains",
          desc: "Strategic processes define how the hotel operates organizationally: the standards, protocols, and control mechanisms that guarantee consistent results.",
          items: ["Standards, norms, and procedures", "Objectives, goals, and monitoring", "Operational planning and control", "Reputation and quality management", "Commercial and product strategy"]
        },
        {
          label: "Support Processes",
          title: "Operational Continuity",
          desc: "Support processes are the invisible foundations that allow others to operate smoothly: people, materials, technology, and security.",
          items: ["Human resources management and training", "Procurement and materials control", "Technical maintenance and security", "Digital systems and tools", "Regulatory compliance and sustainability"]
        }
      ]
    },
    fr: {
      subtitle: "Modèle Opérationnel",
      title: "Les Trois Plans d'un Hôtel d'Excellence",
      desc: "Toute opération hôtelière de haute performance fonctionne sur trois couches interdépendantes. EHP travaille sur les trois simultanément.",
      processes: [
        {
          label: "Processus Opérationnels",
          title: "L'Essence du Service",
          desc: "L'expérience client se construit au moment du service. C'est ici que résident la qualité, la cohérence et l'émotion qui rendent un hôtel mémorable.",
          items: ["Expérience client à chaque point de contact", "Qualité et cohérence du service quotidien", "Présentation des installations et du produit", "Restauration, boissons et gastronomie", "Propreté, ordre et confort des chambres"]
        },
        {
          label: "Processus Stratégiques",
          title: "Le Système qui Soutient",
          desc: "Les processus stratégiques définissent le fonctionnement organisationnel de l'hôtel : les normes, les protocoles et les mécanismes de contrôle quant garantissent des résultats cohérents.",
          items: ["Normes, règles et procédures", "Objectifs, buts et suivi", "Planification et contrôle opérationnel", "Gestion de la réputation et de la qualité", "Stratégie commerciale et produit"]
        },
        {
          label: "Processus de Soutien",
          title: "La Continuité Opérationnelle",
          desc: "Les processus de soutien sont les fondations invisibles qui permettent aux autres de fonctionner sans friction : les personnes, le matériel, la technologie et la sécurité.",
          items: ["Gestion des ressources humaines et formation", "Approvisionnement et contrôle des stocks", "Maintenance technique et sécurité", "Systèmes numériques et outils", "Conformité réglementaire et durabilité"]
        }
      ]
    },
    it: {
      subtitle: "Modello Operativo",
      title: "I Tre Piani di un Hotel di Eccellenza",
      desc: "Ogni operazione alberghiera ad alte prestazioni funziona su tre livelli interdipendenti. EHP lavora su tutti e tre simultaneamente.",
      processes: [
        {
          label: "Processi Operativi",
          title: "L'Essenza del Servizio",
          desc: "L'esperienza dell'ospite viene costruita al momento del servizio. Qui risiedono la qualità, la coerenza e l'emozione che rendono un hotel memorabile.",
          items: ["Esperienza dell'ospite in ogni punto di contatto", "Qualità e coerenza del servizio quotidiano", "Presentazione delle strutture e del prodotto", "Cibo, bevande e gastronomia", "Pulizia, ordine e comfort delle camere"]
        },
        {
          label: "Processi Strategici",
          title: "Il Sistema che Sostiene",
          desc: "I processi strategici definiscono come opera l'hotel a livello organizzativo: gli standard, i protocolli e i meccanismi di controllo che garantiscono risultati costanti.",
          items: ["Standard, norme e procedure", "Obiettivi, traguardi e monitoraggio", "Pianificazione e controllo operativo", "Gestione della reputazione e della qualità", "Strategia commerciale e di prodotto"]
        },
        {
          label: "Processi di Supporto",
          title: "Continuità Operativa",
          desc: "I processi di supporto sono le fondamenta invisibili che permettono agli altri di operare senza attriti: persone, materiali, tecnologia e sicurezza.",
          items: ["Gestione delle risorse umane e formazione", "Approvvigionamento e controllo dei materiali", "Manutenzione tecnica e sicurezza", "Sistemi digitali e strumenti", "Conformità normativa e sostenibilità"]
        }
      ]
    },
    pt: {
      subtitle: "Modelo Operacional",
      title: "Os Três Planos de um Hotel de Excelência",
      desc: "Toda operação hoteleira de alto desempenho funciona em três camadas interdependentes. A EHP trabalha nas três simultaneamente.",
      processes: [
        {
          label: "Processos Operacionais",
          title: "A Essência do Serviço",
          desc: "A experiência do hóspede é construída no momento do serviço. Aqui residem a qualidade, a consistência e a emoção que tornam um hotel memorável.",
          items: ["Experiência do hóspede em cada ponto de contato", "Qualidade e consistência do serviço diário", "Apresentação de instalações e produto", "Alimentos, bebidas e gastronomia", "Limpeza, ordem e conforto dos quartos"]
        },
        {
          label: "Processos Estratégicos",
          title: "O Sistema que Sustenta",
          desc: "Os processos estratégicos definem como o hotel opera em nível organizacional: os padrões, protocolos e mecanismos de controle que garantem resultados consistentes.",
          items: ["Padrões, normas e procedimentos", "Objetivos, metas e monitoramento", "Planejamento e controle operacional", "Gestão de reputação e qualidade", "Estratégia comercial e de produto"]
        },
        {
          label: "Processos de Apoio",
          title: "Continuidade Operacional",
          desc: "Os processos de apoio são os alicerces invisíveis que permitem que os outros operem sem atrito: pessoas, materiais, tecnologia e segurança.",
          items: ["Gestão de recursos humanos e treinamento", "Aprovisionamento e controle de materiais", "Manutenção técnica e segurança", "Sistemas digitais e ferramentas", "Conformidade regulatória e sustentabilidade"]
        }
      ]
    }
  };

  const currentContent = content[(language as keyof typeof content)] || content.es;

  return (
    <section className="py-24 lg:py-32 bg-[#121212] overflow-hidden" id="procesos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            {currentContent.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
          >
            {currentContent.title.split(/ (un hotel|a Hotel|d'un Hôtel|un Hotel|um Hotel)/).map((part, i) => 
               i === 1 ? <React.Fragment key={i}><br/>{part}</React.Fragment> : <React.Fragment key={i}>{part}</React.Fragment>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light leading-relaxed text-lg"
          >
            {currentContent.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0A0A0A] border border-white/5 p-10 group hover:border-[#B0A387]/30 transition-colors flex flex-col"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#B0A387] inline-block mb-6 px-3 py-1 bg-[#B0A387]/10 border border-[#B0A387]/20 self-start">
                {process.label}
              </span>
              <h3 className="text-white text-2xl font-serif mb-4 group-hover:text-[#B0A387] transition-colors">{process.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-sm mb-8">{process.desc}</p>
              
              <ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
                {process.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#B0A387] mt-1 text-[10px]">■</span>
                    <span className="text-neutral-500 text-sm font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
