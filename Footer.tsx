"use client";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-56 md:w-64 xl:w-72 h-20 md:h-24">
          <Image
            src="/Logo.png"
            alt="EHP | Environmental & Hospitality Partners"
            fill
            className="object-contain object-center md:object-left scale-150 md:origin-left"
          />
        </div>

        <div className="flex gap-6 text-xs uppercase tracking-widest text-neutral-500">
          <a href="/environmental-policy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1">
            {t("nav.environmentalPolicy")}
          </a>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1">
            {t("footer.privacy")}
          </a>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1">
            {t("footer.terms")}
          </a>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1">
            LinkedIn
          </a>
        </div>

        <div className="text-xs text-neutral-600 font-light">
          &copy; {new Date().getFullYear()} Environmental & Hospitality
          Partners. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
