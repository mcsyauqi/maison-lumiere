"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85&auto=format&fit=crop"
          alt="Luxury terrace with morning light"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16 lg:px-20"
      >
        <div
          className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-white/80 uppercase"
        >
          Est. 2024
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Residences", "Lifestyle", "Materials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-white/80 uppercase hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div
          className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-white/80 uppercase"
        >
          Menteng, Jakarta
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,10vw,7rem)] font-light leading-[0.95] text-white tracking-wide">
            Maison
            <br />
            <span className="italic">Lumi&egrave;re</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <div className="w-12 h-px bg-white/50 mx-auto mb-5" />
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.35em] text-white/80 uppercase">
            The Art of Living Well
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center scroll-indicator"
      >
        <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-white/60 uppercase mb-4">
          Discover
        </span>
        <div className="w-px h-10 bg-white/40" />
      </motion.div>
    </section>
  );
}
