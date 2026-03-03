"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Material {
  name: string;
  origin: string;
  image: string;
  imageAlt: string;
}

const materials: Material[] = [
  {
    name: "Italian Marble",
    origin: "Carrara, Tuscany",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Italian Calacatta marble texture with subtle gold veining",
  },
  {
    name: "French Oak",
    origin: "Burgundy, France",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=85&auto=format&fit=crop",
    imageAlt: "French oak herringbone parquet floor in warm honey tones",
  },
  {
    name: "Bronze Fixtures",
    origin: "Atelier Forge, Lyon",
    image:
      "https://images.unsplash.com/photo-1558618047-f4811f1e9a7d?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Burnished bronze hardware and fixtures with patina detail",
  },
  {
    name: "Washi Paper",
    origin: "Echizen, Japan",
    image:
      "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Handmade Japanese washi paper with delicate natural fiber texture",
  },
  {
    name: "Belgian Linen",
    origin: "Courtrai, Belgium",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Belgian linen fabric draped in soft natural folds",
  },
];

export default function Materials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="materials" className="py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
            Material Palette
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4">
            Chosen for <span className="italic">Character</span>
          </h2>
          <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.8] text-text/60 mt-4 max-w-xl">
            Every material in Maison Lumi&egrave;re has been selected not merely for beauty, but for the way it will age, weather, and tell a story over decades.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="materials-scroll overflow-x-auto"
      >
        <div className="flex gap-6 px-6 md:px-12 lg:px-20 pb-4" style={{ minWidth: "max-content" }}>
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={material.image}
                  alt={material.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="320px"
                />
                {/* Subtle bottom gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="mt-5">
                <h3 className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium tracking-[0.25em] text-text uppercase">
                  {material.name}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base italic text-taupe mt-1">
                  {material.origin}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
