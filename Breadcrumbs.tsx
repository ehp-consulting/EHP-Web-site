"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="pt-32 pb-4 px-6 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-500">
        <li>
          <Link
            href="/"
            className="hover:text-[#B0A387] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1"
            aria-label={t("nav.home")}
          >
            <Home size={14} />
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          
          // Try to translate the segment, fallback to capitalized segment
          const translationKey = `nav.${segment.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`;
          let label = t(translationKey as any);
          if (label === translationKey) {
             label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
          }

          return (
            <li key={href} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-neutral-700" />
              {isLast ? (
                <span className="text-neutral-300" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-[#B0A387] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0A387] rounded-sm px-1"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
