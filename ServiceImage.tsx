"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceImage({ id, prompt }: { id: string; prompt: string }) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchImage = async () => {
      try {
        const res = await fetch("/api/visuals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, prompt }),
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.image) {
          setImage(data.image);
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Failed to load image", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchImage();

    return () => {
      controller.abort();
    };
  }, [id, prompt]);

  return (
    <div className="relative w-full h-48 bg-[#1A1A1A] overflow-hidden rounded-sm border border-white/5 group-hover:border-[#B0A387]/30 transition-colors mb-6">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#B0A387]/30 border-t-[#B0A387] rounded-full animate-spin"></div>
        </div>
      ) : image ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={prompt}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>
      )}
    </div>
  );
}
