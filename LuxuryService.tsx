"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function LuxuryService() {
  return (
    <section id="luxury-service" className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80')" }} 
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_transparent_20%,_#0A0A0A_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[540px]"
          >
            <span className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block">
              Luxury Service Partnership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Formación continua para hoteles<br/>
              <span className="text-neutral-500 font-light text-3xl md:text-4xl">que nunca dejan de </span><em className="text-white font-serif not-italic">crecer</em>
            </h2>

            <div className="w-12 h-px bg-gradient-to-r from-[#B0A387] to-transparent mb-7"></div>

            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-[15px] mb-8">
              <p>
                El Luxury Service Partnership es el programa insignia de EHP: una formación continua y presencial diseñada para hoteles, villas y resorts que desean mantener y elevar su cultura de servicio sin necesidad de crear un departamento de formación propio.
              </p>
              <p>
                Cada sesión es adaptada a la realidad específica de la propiedad —su posicionamiento, su equipo, sus fortalezas y sus brechas— con enfoque 70% práctico y evaluación de impacto en cada ciclo.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-sm hover:border-[#B0A387]/30 hover:bg-[#B0A387] hover:bg-opacity-5 transition-colors duration-300">
                <div className="shrink-0 text-[#B0A387] opacity-90 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-neutral-200 mb-1">Sesiones mensuales presenciales</div>
                  <div className="text-[13px] text-neutral-400 leading-relaxed">Entrenamientos regulares in situ, adaptados al calendario y la dinámica operativa de la propiedad.</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-sm hover:border-[#B0A387]/30 hover:bg-[#B0A387] hover:bg-opacity-5 transition-colors duration-300">
                <div className="shrink-0 text-[#B0A387] opacity-90 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-neutral-200 mb-1">Módulos por departamento</div>
                  <div className="text-[13px] text-neutral-400 leading-relaxed">Contenido específico para recepción, F&B, housekeeping, spa, reservas y management.</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-sm hover:border-[#B0A387]/30 hover:bg-[#B0A387] hover:bg-opacity-5 transition-colors duration-300">
                <div className="shrink-0 text-[#B0A387] opacity-90 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-neutral-200 mb-1">Evaluaciones de impacto</div>
                  <div className="text-[13px] text-neutral-400 leading-relaxed">Medición antes y después de cada ciclo para demostrar el avance real del equipo.</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#121212] border border-[#B0A387]/20 rounded-md p-8 md:p-10"
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B0A387] mb-6">Beneficios del programa</p>
            
            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Equipos más profesionales y seguros en cada interacción",
                "Estándares de servicio consistentes, no dependientes de individuos",
                "Mayor fidelización y recomendación del huésped",
                "Mejor posicionamiento en OTAs y reputación online",
                "Cultura de anticipación y no solo de reacción",
                "Menor rotación de personal gracias al crecimiento interno",
                "Preparación sostenida hacia estándares Forbes, AAA y LHW"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#B0A387] shrink-0 mt-0.5"><path d="M5 13l4 4L19 7"/></svg>
                  <span className="text-neutral-400 font-light text-[14px] leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-px bg-[#B0A387]/30 border border-[#B0A387]/30 rounded-sm overflow-hidden mt-8 mb-6">
              <div className="bg-[#1A1A1A] p-5 text-center">
                <span className="block font-serif text-[28px] font-light text-[#B0A387] leading-none mb-1.5">70%</span>
                <span className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-neutral-400">Práctica</span>
              </div>
              <div className="bg-[#1A1A1A] p-5 text-center">
                <span className="block font-serif text-[28px] font-light text-[#B0A387] leading-none mb-1.5">12</span>
                <span className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-neutral-400">Sesiones / año</span>
              </div>
              <div className="bg-[#1A1A1A] p-5 text-center">
                <span className="block font-serif text-[28px] font-light text-[#B0A387] leading-none mb-1.5">360°</span>
                <span className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-neutral-400">Evaluación</span>
              </div>
            </div>

            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#B0A387] text-black text-[12px] uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 focus:outline-none shadow-[0_0_15px_rgba(176,163,135,0.3)] mt-2"
            >
              Conocer el programa LSP
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
