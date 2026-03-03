"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Neighborhood() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=85&auto=format&fit=crop"
          alt="Tree-lined boulevard with European-style cafes and dappled sunlight"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text overlay on semi-transparent cream background */}
      <div ref={ref} className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-cream/90 backdrop-blur-sm px-10 py-14 md:px-16 md:py-20 max-w-3xl text-center"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
            The Neighborhood
          </span>

          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.2] text-text mt-6 mb-6">
            Nestled in <span className="italic">Menteng</span>,
            <br />
            Jakarta&apos;s Most Coveted Address
          </h2>

          <div className="w-12 h-px bg-bronze mx-auto mb-6" />

          <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70 max-w-lg mx-auto mb-6">
            Menteng&apos;s tree-canopied boulevards and Art Deco heritage have long drawn Jakarta&apos;s cultural and diplomatic elite. Here, morning walks lead past colonial-era mansions, independent bookshops, and caf&eacute;s where conversations linger past noon.
          </p>

          <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70 max-w-lg mx-auto">
            Within minutes: the National Gallery, Taman Suropati, and the finest restaurants the city has to offer. This is a neighborhood that rewards the unhurried life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
