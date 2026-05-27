"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.4, 0.1]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-[-10%] z-0"
      >
        <Image
          src="https://picsum.photos/seed/corporatearchitecture/1920/1080"
          alt="Corporate Architecture"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/80 uppercase tracking-wider backdrop-blur-sm">Auditorías hoteleras</span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/80 uppercase tracking-wider backdrop-blur-sm">Asesorías por departamento</span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/80 uppercase tracking-wider backdrop-blur-sm">Formación ejecutiva</span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/80 uppercase tracking-wider backdrop-blur-sm">Sostenibilidad & lujo</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight"
        >
          Excelencia operativa<br />
          para hoteles que aspiran<br />
          <span className="text-[#B0A387] italic font-light">a estándares internacionales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          EHP acompaña a hoteles, resorts y propiedades exclusivas en su camino hacia una operación impecable, un servicio memorable y una sostenibilidad medible. Precisión, método y resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className="px-10 py-5 bg-[#B0A387] text-black text-sm uppercase tracking-widest font-bold hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(176,163,135,0.4)] transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A] flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(176,163,135,0.2)]"
          >
            Solicitar diagnóstico
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/services"
            className="px-10 py-5 border border-neutral-600 text-white text-sm uppercase tracking-widest font-bold hover:border-[#B0A387] hover:bg-white/5 hover:scale-105 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#B0A387] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
          >
            Explorar servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
