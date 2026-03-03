"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Amenity {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const amenities: Amenity[] = [
  {
    name: "The Orangerie",
    tagline: "Farm-to-table dining",
    description:
      "A glass-walled dining pavilion where seasonal menus celebrate Indonesia\u2019s extraordinary produce, prepared by a rotating roster of guest chefs.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop",
    imageAlt: "Elegant restaurant interior with warm lighting and fine dining setup",
  },
  {
    name: "The Library",
    tagline: "Art & literature",
    description:
      "A curated collection of first editions, design monographs, and contemporary art. Armchairs upholstered in Belgian linen. Silence, encouraged.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=85&auto=format&fit=crop",
    imageAlt: "Luxurious private library with floor-to-ceiling bookshelves",
  },
  {
    name: "The Jardin Spa",
    tagline: "Botanical treatments",
    description:
      "Drawing on Javanese jamu traditions and French botanical science, our spa offers rituals designed to restore both body and spirit amidst living greenery.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&auto=format&fit=crop",
    imageAlt: "Serene spa setting with botanical elements and natural materials",
  },
  {
    name: "The Salon",
    tagline: "Private events",
    description:
      "An intimate gathering space for private dinners, art previews, and cultural salons. Styled in deep greens and burnished bronze, seating up to forty guests.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=85&auto=format&fit=crop",
    imageAlt: "Sophisticated private event space with elegant lighting",
  },
];

export default function Lifestyle() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="lifestyle" className="bg-cream">
      {/* Full-width sunset dinner image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&auto=format&fit=crop"
          alt="Fine dining terrace at sunset with warm golden light"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />

        {/* Overlaid text */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="absolute bottom-16 left-0 right-0 text-center px-6"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-white/80 uppercase">
            Lifestyle & Amenities
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] text-white mt-4">
            The Rituals of
            <br />
            <span className="italic">Beautiful Living</span>
          </h2>
        </motion.div>
      </div>

      {/* 2x2 Amenities Grid */}
      <div ref={gridRef} className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={amenity.image}
                  alt={amenity.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-light text-text">
                    {amenity.name}
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>

                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-bronze uppercase mb-3">
                  {amenity.tagline}
                </p>

                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
