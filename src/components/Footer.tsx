"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-20 md:py-28 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* Logo text */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-text tracking-wide">
          Maison <span className="italic">Lumi&egrave;re</span>
        </h2>

        {/* Address */}
        <p className="font-[family-name:var(--font-lora)] text-[14px] text-text/50 mt-6 leading-relaxed">
          Jl. Imam Bonjol No. 12, Menteng
          <br />
          Jakarta Pusat 10310, Indonesia
        </p>

        {/* Phone */}
        <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-taupe uppercase mt-4">
          +62 21 3145 8900
        </p>

        {/* Bronze divider */}
        <div className="w-16 h-px bg-bronze mx-auto mt-10 mb-10" />

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          {["Residences", "Lifestyle", "Materials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase hover:text-bronze transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.2em] text-taupe/60 uppercase">
          &copy; 2026 Maison Lumi&egrave;re. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
