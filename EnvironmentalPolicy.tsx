"use client";
import { motion } from "motion/react";
import { Leaf, Droplets, Wind, Recycle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function EnvironmentalPolicy() {
  const { t } = useLanguage();

  return (
    <section id="medioambiente" className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t("environmentalPolicy.title")}
          </h1>
          <p className="text-[#B0A387] text-lg font-medium tracking-wide mb-8">
            {t("environmentalPolicy.subtitle")}
          </p>
          <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-neutral-500 font-light leading-relaxed text-lg mb-12 text-center">
            {t("environmentalPolicy.content")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-[#141414] border border-white/5 p-8 hover:border-[#B0A387]/30 transition-colors duration-500">
              <Leaf className="w-8 h-8 text-[#B0A387] mb-6" />
              <h3 className="text-white font-serif text-xl mb-4">
                {t("sustainabilityRoute.esgGoals.carbon")}
              </h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                {typeof t("sustainabilityRoute.esgGoals.carbonDesc") === 'string' && t("sustainabilityRoute.esgGoals.carbonDesc") !== "sustainabilityRoute.esgGoals.carbonDesc" 
                 ? t("sustainabilityRoute.esgGoals.carbonDesc") 
                 : "Estamos dedicados a reducir la huella de carbono mediante operaciones de eficiencia energética y el apoyo a nuestros clientes para alcanzar metas Net Zero."}
              </p>
            </div>
            
            <div className="bg-[#141414] border border-white/5 p-8 hover:border-[#B0A387]/30 transition-colors duration-500">
              <Droplets className="w-8 h-8 text-[#B0A387] mb-6" />
              <h3 className="text-white font-serif text-xl mb-4">
                {t("sustainabilityRoute.esgGoals.water")}
              </h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                {typeof t("sustainabilityRoute.esgGoals.waterDesc") === 'string' && t("sustainabilityRoute.esgGoals.waterDesc") !== "sustainabilityRoute.esgGoals.waterDesc" 
                 ? t("sustainabilityRoute.esgGoals.waterDesc") 
                 : "Implementamos estrategias avanzadas de conservación de agua para minimizar el uso y proteger este recurso vital en todas las propiedades."}
              </p>
            </div>

            <div className="bg-[#141414] border border-white/5 p-8 hover:border-[#B0A387]/30 transition-colors duration-500">
              <Recycle className="w-8 h-8 text-[#B0A387] mb-6" />
              <h3 className="text-white font-serif text-xl mb-4">
                {t("sustainabilityRoute.esgGoals.waste")}
              </h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                {typeof t("sustainabilityRoute.esgGoals.wasteDesc") === 'string' && t("sustainabilityRoute.esgGoals.wasteDesc") !== "sustainabilityRoute.esgGoals.wasteDesc" 
                 ? t("sustainabilityRoute.esgGoals.wasteDesc") 
                 : "Promovemos principios de economía circular para reducir drásticamente la generación de residuos y mejorar los programas de reciclaje."}
              </p>
            </div>

            <div className="bg-[#141414] border border-white/5 p-8 hover:border-[#B0A387]/30 transition-colors duration-500">
              <Wind className="w-8 h-8 text-[#B0A387] mb-6" />
              <h3 className="text-white font-serif text-xl mb-4">
                {t("sustainabilityRoute.esgGoals.energy")}
              </h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                {typeof t("sustainabilityRoute.esgGoals.energyDesc") === 'string' && t("sustainabilityRoute.esgGoals.energyDesc") !== "sustainabilityRoute.esgGoals.energyDesc" 
                 ? t("sustainabilityRoute.esgGoals.energyDesc") 
                 : "Facilitamos la transición hacia fuentes de energía renovable y optimizamos el consumo para garantizar operaciones verdaderamente sostenibles."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
