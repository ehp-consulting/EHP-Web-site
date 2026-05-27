"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function BackButton() {
  const router = useRouter();
  const { language } = useLanguage();
  
  const label = {
    es: "Regresar",
    en: "Go Back",
    fr: "Retour",
    it: "Indietro",
    pt: "Voltar"
  }[language] || "Go Back";

  return (
    <button 
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#B0A387] transition-all mb-8 mt-4 uppercase text-xs tracking-widest font-bold group"
    >
      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
      {label}
    </button>
  );
}
