"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 lg:py-44 bg-cream">
      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-bronze mx-auto mb-12"
        />

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,4vw,3rem)] font-light leading-[1.3] text-text italic">
            &ldquo;Maison Lumi&egrave;re is not a residence.
            <br className="hidden md:block" />
            It is a way of life.&rdquo;
          </p>
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <div className="w-8 h-px bg-divider mx-auto mb-6" />
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-taupe uppercase">
            Architectural Digest Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
