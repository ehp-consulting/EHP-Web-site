"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MysteryGuest() {
  const params = [
    {
      title: "Reserva y pre-llegada",
      desc: "Motor de reservas, comunicación digital, personalización pre-arrival y primer contacto."
    },
    {
      title: "Llegada y check-in",
      desc: "Protocolo de bienvenida, presentación del hotel, manejo del equipaje y first impression."
    },
    {
      title: "Habitación y estancia",
      desc: "Estado físico de la habitación, housekeeping, amenidades, tecnología y bienestar."
    },
    {
      title: "Restaurante, bar e in-room dining",
      desc: "Servicio F&B, calidad culinaria, tiempos, presentación y consistencia."
    },
    {
      title: "Spa, fitness y áreas comunes",
      desc: "Bienestar, instalaciones, comportamiento del personal y limpieza."
    },
    {
      title: "Gestión de solicitudes",
      desc: "Tiempos de respuesta, resolución de incidencias y recuperación de servicio."
    },
    {
      title: "Salida y post-stay",
      desc: "Check-out, cierre emocional, comunicación posterior y reputación digital."
    }
  ];

  return (
    <section id="mystery-guest" className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-full rounded-sm overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&q=80"
                alt="Evaluador de hotel observando el estándar de servicio de forma anónima"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-6 left-6 lg:-left-6 bg-[#0A0A0A] px-4 py-2 border border-[#B0A387]/30 shadow-2xl"
            >
              <span className="text-xs uppercase tracking-widest text-white font-medium">Confidencial</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-12 right-6 lg:-right-12 bg-[#121212] p-6 border border-white/10 shadow-2xl min-w-[200px]"
            >
              <div className="font-serif text-4xl text-[#B0A387] mb-1">+900</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400">Parámetros auditados</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block">Mystery Guest</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              La verdad del hotel <br/>
              <span className="text-neutral-500 font-light text-3xl md:text-4xl">sin intermediarios</span>
            </h2>

            <div className="w-16 h-px bg-[#B0A387] mb-8"></div>

            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-[15px] mb-10">
              <p>
                El Mystery Guest de EHP es una evaluación profesional, discreta y exhaustiva que replica la experiencia real del huésped en todas sus fases. No se trata de una inspección: es una vivencia completa que revela con precisión lo que el hotel hace excepcionalmente bien y lo que compromete la percepción del cliente.
              </p>
              <p>
                El informe final documenta más de 900 parámetros con evidencia específica, observaciones del evaluador y un plan de acción correctora priorizado por impacto.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-[#B0A387] font-medium mb-6">Recorrido completo del evaluador</p>
              <ul className="space-y-4">
                {params.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#B0A387] mt-1 text-[10px]">■</span>
                    <span className="text-neutral-300 text-sm font-light leading-snug">
                      <strong className="text-white font-medium">{item.title}:</strong>{" "}
                      <span className="text-neutral-500">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
