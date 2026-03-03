"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
            Our Philosophy
          </span>
        </motion.div>

        {/* Magazine spread layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Large image — 60% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&auto=format&fit=crop"
              alt="Architectural window with natural light flooding a minimalist interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>

          {/* Text — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Pull quote */}
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.2] text-text mb-8 italic">
              &ldquo;We believe a home should be a sanctuary that reveals itself slowly &mdash; in the quality of light, the warmth of materials, the silence of considered space.&rdquo;
            </blockquote>

            {/* Bronze horizontal rule */}
            <div className="w-16 h-px bg-bronze mb-8" />

            {/* Body text */}
            <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70 mb-6">
              Maison Lumi&egrave;re is born from a singular conviction: that the spaces we inhabit shape who we become. Every threshold, every surface, every play of shadow and light has been composed with the deliberation of a still life painting.
            </p>
            <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
              Here, architecture serves life. Rooms breathe with the seasons. Materials age with grace. This is not a building &mdash; it is an invitation to live with intention, surrounded by beauty that asks nothing but your attention.
            </p>

            {/* Subtle signature */}
            <div className="mt-12">
              <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-bronze">
                Atelier Lumi&egrave;re
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.3em] text-taupe uppercase mt-1">
                Design Studio, Paris
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
