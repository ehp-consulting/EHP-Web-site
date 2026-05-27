"use client";

import { motion } from "motion/react";

export default function Credibility() {
  const items = [
    {
      icon: <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>,
      number: "+900",
      label: "Parámetros evaluados"
    },
    {
      icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>,
      number: "+12",
      label: "Departamentos cubiertos"
    },
    {
      icon: <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"/>,
      number: "3",
      label: "Marcos AAA · Forbes · LHW"
    },
    {
      icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.71.71m14.14 14.14.71.71M1 12h2m18 0h2M4.22 19.78l.71-.71M18.36 5.64l.71-.71"/><circle cx="12" cy="12" r="4"/></>,
      number: "70/30",
      label: "Práctica sobre teoría"
    },
    {
      icon: <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>,
      number: "360°",
      label: "Visión integral del hotel"
    }
  ];

  return (
    <section className="bg-[#121212] py-12 border-y border-white/5" aria-label="Datos de experiencia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <svg 
                className="w-6 h-6 text-[#B0A387] mb-3 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span className="font-serif text-3xl text-white font-medium mb-1">{item.number}</span>
              <span className="text-xs uppercase tracking-widest text-neutral-400 max-w-[140px] leading-relaxed">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
