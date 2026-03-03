"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Residence {
  name: string;
  tagline: string;
  specs: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

const residences: Residence[] = [
  {
    name: "La Terrasse",
    tagline: "Where sky meets garden",
    specs: "280 m\u00B2  \u00B7  4 Bedrooms  \u00B7  Terrace Garden",
    description:
      "The crown of Maison Lumi\u00E8re. La Terrasse unfolds across the uppermost floors, where a private rooftop garden extends the living space into open sky. Floor-to-ceiling glazing frames the city\u2019s distant silhouette while French oak floors ground each room in warmth. The kitchen, clad in honed Calacatta marble, opens to a dining terrace designed for long evenings under stars.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Luxury penthouse with terrace garden and city views",
    imagePosition: "right",
  },
  {
    name: "Le Jardin",
    tagline: "A private world within the world",
    specs: "180 m\u00B2  \u00B7  3 Bedrooms  \u00B7  Garden Access",
    description:
      "Le Jardin residences occupy the heart of the building, each with direct access to the interior courtyard garden \u2014 a lush, curated landscape inspired by the Jardins de Bagatelle. Living spaces flow seamlessly between indoors and out, with oversized pivoting doors that dissolve the boundary. Natural stone, linen curtains, and muted earth tones create rooms that feel at once sophisticated and deeply comfortable.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Elegant living room with garden access and natural light",
    imagePosition: "left",
  },
  {
    name: "L\u2019Atelier",
    tagline: "For the contemplative spirit",
    specs: "95 m\u00B2  \u00B7  1\u20132 Bedrooms  \u00B7  Double-Height Studio",
    description:
      "Conceived for artists, thinkers, and those who crave luminous solitude. L\u2019Atelier features a dramatic double-height living space flooded with north light, a mezzanine study, and a material palette of exposed concrete, blackened steel, and warm timber. Every detail has been distilled to its essence \u2014 a residence that is both gallery and refuge.",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Modern loft-style apartment with double-height studio space",
    imagePosition: "right",
  },
];

function ResidenceBlock({ residence, index }: { residence: Residence; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isImageLeft = residence.imagePosition === "left";

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index > 0 ? "mt-20 lg:mt-32" : ""}`}>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className={`lg:col-span-7 relative aspect-[4/3] overflow-hidden ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image
          src={residence.image}
          alt={residence.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`lg:col-span-5 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
          Residence {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4 mb-2">
          {residence.name}
        </h3>

        <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-bronze mb-6">
          {residence.tagline}
        </p>

        <div className="w-10 h-px bg-bronze mb-6" />

        <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.2em] text-taupe uppercase mb-6">
          {residence.specs}
        </p>

        <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
          {residence.description}
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-bronze uppercase border-b border-bronze/40 pb-1 hover:border-bronze transition-colors duration-300"
          >
            Inquire
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Residences() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="residences" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
            The Residences
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] text-text mt-6">
            Three Ways to
            <br />
            <span className="italic">Call It Home</span>
          </h2>
          <div className="w-12 h-px bg-bronze mx-auto mt-8" />
        </motion.div>

        {/* Residence blocks */}
        {residences.map((residence, i) => (
          <ResidenceBlock key={residence.name} residence={residence} index={i} />
        ))}
      </div>
    </section>
  );
}
