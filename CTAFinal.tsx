"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B0A387]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold border border-[#B0A387]/30 rounded-sm px-3 py-1 bg-[#B0A387]/5">El siguiente paso</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white mb-8 leading-tight"
        >
          Eleve su hotel a un nivel de servicio,<br className="hidden md:block"/>
          control y reputación que el<br className="hidden md:block"/>
          mercado <em className="text-[#B0A387] font-light">reconoce</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg"
        >
          Cada día sin un sistema operativo sólido es un día en que el hotel deja valor sobre la mesa. La conversación no compromete. Empieza aquí.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#B0A387] text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            Agendar diagnóstico
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 text-white text-sm uppercase tracking-widest hover:text-[#B0A387] transition-colors duration-300 w-full sm:w-auto relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-2 after:left-0 after:bg-[#B0A387] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Hablar con EHP
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
