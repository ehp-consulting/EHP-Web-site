"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryLinks = [
    { name: t("nav.home"), href: "#home" }
  ];

  const servicesDropdown = [
    { name: t("nav.departments"), href: "/services/departments" },
    { name: t("nav.mysteryGuest"), href: "/services/mystery-guest" },
    { name: t("nav.sustainability"), href: "/services/sustainability" },
    { name: t("nav.environment"), href: "/services/environment" },
    { name: t("nav.interim"), href: "/services/interim" },
    { name: t("nav.lsp"), href: "/services/lsp" },
    { name: t("nav.certifications"), href: "/services/certifications" },
    { name: t("nav.methodology"), href: "/services/methodology" },
  ];

  const secondaryLinks = [
    { name: t("nav.cases"), href: "#experiencia" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "it", label: "IT" },
    { code: "pt", label: "PT" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center z-50"
        >
          <div className="relative w-48 md:w-64 xl:w-80 h-20 md:h-28">
            <Image
              src="/Logo.png"
              alt="EHP | Environmental & Hospitality Partners"
              fill
              className="object-contain object-left scale-150 origin-left"
              priority
            />
          </div>
        </Link>

        {/* Global Nav (Desktop & Mobile on Top Right) */}
        <div className="flex items-center gap-4 z-50">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-haspopup="true"
              aria-controls="lang-menu"
              aria-label="Select Language"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-2 py-1"
            >
              <Globe size={16} aria-hidden="true" />
              {language}
            </button>

            {isLangOpen && (
              <div id="lang-menu" className="absolute top-full right-0 mt-2 py-2 bg-[#121212] border border-white/10 rounded-sm shadow-xl flex flex-col min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    role="menuitem"
                    className={`px-4 py-2 text-xs text-left hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/10 ${language === lang.code ? "text-[#B0A387]" : "text-neutral-400"}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className="flex items-center gap-2 text-white text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm p-2 hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            aria-label="Toggle Menu"
          >
            <span className="hidden sm:inline">Menu</span>
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Unified Dropdown Menu (Desktop & Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-6 w-full max-w-sm bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto rounded-sm mt-2 origin-top-right"
          >
          <div className="flex flex-col gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#B0A387] focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-2 py-3 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col border-b border-white/5">
              <button 
                onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                className="flex items-center justify-between text-sm uppercase tracking-widest text-neutral-300 hover:text-[#B0A387] focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-2 py-3 w-full text-left"
              >
                {t("nav.services")}
               <motion.svg 
                  animate={{ rotate: isServicesOpenMobile ? 180 : 0 }}
                  width="12" height="12" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>
              
              {isServicesOpenMobile && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  className="flex flex-col bg-[#121212]/50 pl-4 py-2 border-l-2 border-[#B0A387]/30 mb-2 overflow-hidden"
                >
                  {servicesDropdown.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#B0A387] focus:outline-none px-2 py-3 border-b border-white/5 last:border-none"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-neutral-300 hover:text-[#B0A387] focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-2 py-3 border-b border-white/5 last:border-none"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center px-5 py-4 bg-[#B0A387] text-black text-xs uppercase tracking-widest font-bold focus:outline-none focus:ring-2 focus:ring-white rounded-sm shadow-[0_0_15px_rgba(176,163,135,0.3)] hover:scale-105 transition-all duration-300"
          >
            {t("nav.contact")}
          </Link>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
