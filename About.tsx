"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Award, TrendingUp, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: <Award className="w-6 h-6 text-[#B0A387]" />,
      text: t("about.metric1"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B0A387]" />,
      text: t("about.metric2"),
    },
    {
      icon: <Globe className="w-6 h-6 text-[#B0A387]" />,
      text: t("about.metric3"),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=900&q=80"
                alt="Equipo consultor EHP"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-6 -bottom-6 bg-[#0A0A0A] p-6 border border-[#B0A387]/30 shadow-2xl flex flex-col items-center justify-center min-w-[160px]"
            >
              <span className="font-serif text-3xl text-[#B0A387] mb-1">360°</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 text-center">Visión operativa<br/>integrada</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
            >
              Quiénes somos
            </motion.span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Un socio estratégico,<br />
              <span className="italic font-light">no un consultor externo</span>
            </h2>

            <div className="w-16 h-px bg-[#B0A387] mb-8"></div>

            <div className="space-y-5 text-neutral-400 font-light leading-relaxed text-[15px] mb-12">
              <p className="text-lg text-neutral-500">
                Environmental & Hospitality Partners es una firma de consultoría especializada en hoteles, villas, resorts y propiedades exclusivas que operan —o aspiran a operar— en el segmento de lujo internacional.
              </p>
              <p>
                Nuestro enfoque combina análisis riguroso con implementación real sobre el terreno. No entregamos informes y nos marchamos: permanecemos junto al equipo directivo hasta que los cambios son operativos, medibles y sostenibles en el tiempo.
              </p>
              <p>
                Trabajamos con la misma metodología que utilizan los evaluadores de Forbes Travel Guide, AAA y Leading Hotels of the World —combinando perspectiva operativa, visión comercial y exigencia de producto— para transformar diagnósticos en acción.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0A387] shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Precisión documental</h4>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed">Cada diagnóstico está respaldado por evidencia verificable, no por percepciones subjetivas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0A387] shrink-0"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Impacto en resultados</h4>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">Medimos el avance en KPIs operativos, de reputación y de rentabilidad en cada ciclo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0A387] shrink-0"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Equipo y cultura</h4>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">Los sistemas son esenciales, pero son las personas quienes los ejecutan. Formamos equipos de alto desempeño.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0A387] shrink-0"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Visión sostenible</h4>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">La rentabilidad y la sostenibilidad no se contradicen. Las integramos en cada recomendación.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
