"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function InterimManagement() {
  const scenarios = [
    {
      title: "Cambios de marca o bandera",
      desc: "Transición operativa entre propietarios, franquiciadores o posicionamiento de marca."
    },
    {
      title: "Crisis de gestión",
      desc: "Vacíos directivos urgentes, conflictos internos o deterioro acelerado del servicio."
    },
    {
      title: "Opening y apertura",
      desc: "Puesta en marcha completa desde cero: estándares, equipo, procesos y primera experiencia del huésped."
    },
    {
      title: "Relanzamiento",
      desc: "Reestructuración de posicionamiento, producto o cultura operativa tras un período de deterioro."
    }
  ];

  return (
    <section id="interim" className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block">Interim Management</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Cuando el hotel necesita <br/>
              <span className="text-neutral-500 font-light text-3xl md:text-4xl">liderazgo en el presente</span>
            </h2>

            <div className="w-16 h-px bg-[#B0A387] mb-8"></div>

            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-[15px] mb-12">
              <p>
                En determinados momentos —cambios de marca, crisis operativas, procesos de apertura o reestructuración— un hotel necesita capacidad de gestión inmediata, no un plan que empieza en tres meses. EHP puede asumir temporalmente la dirección operativa con la discreción y la efectividad que cada situación requiere.
              </p>
              <p>
                El interim manager de EHP toma las riendas con pleno conocimiento del negocio hotelero, estabiliza la operación, eleva los estándares y transfiere el control cuando el equipo interno está preparado para sostenerlos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {scenarios.map((scenario, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-[#B0A387] mt-1 text-[10px]">■</span>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">{scenario.title}</h4>
                    {scenario.desc && <p className="text-neutral-500 text-sm font-light leading-relaxed">{scenario.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-l-2 border-[#B0A387]/50 pl-6 py-2">
              <p className="text-neutral-300 font-serif italic text-lg leading-relaxed mb-4">
                "La diferencia entre un hotel gestionado y un hotel excepcional no está en sus instalaciones; está en quién toma las decisiones correctas cada día."
              </p>
              <p className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold">
                Filosofía de gestión transitoria — EHP
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Director de hotel en reunión estratégica de interim management"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/20 mix-blend-multiply"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
