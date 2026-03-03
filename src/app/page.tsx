"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. Our team will be in touch shortly.");
  };

  return (
    <main>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury terrace with morning light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16 lg:px-20 animate-fade-down">
          <div className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-white/80 uppercase">
            Est. 2024
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Residences", "Lifestyle", "Materials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-white/80 uppercase hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-white/80 uppercase">
            Menteng, Jakarta
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="animate-fade-up">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,10vw,7rem)] font-light leading-[0.95] text-white tracking-wide">
              Maison
              <br />
              <span className="italic">Lumi&egrave;re</span>
            </h1>
          </div>

          <div className="mt-8 animate-fade-up-delayed">
            <div className="w-12 h-px bg-white/50 mx-auto mb-5" />
            <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.35em] text-white/80 uppercase">
              The Art of Living Well
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center scroll-indicator animate-fade-up-delayed-long">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-white/60 uppercase mb-4">
            Discover
          </span>
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* ================================================================
          PHILOSOPHY - Magazine Spread
          ================================================================ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section label */}
          <div className="mb-16">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
              Our Philosophy
            </span>
          </div>

          {/* Magazine spread layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Large image */}
            <div className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Architectural window with natural light flooding a minimalist interior"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.2] text-text mb-8 italic">
                &ldquo;We believe a home should be a sanctuary that reveals
                itself slowly &mdash; in the quality of light, the warmth of
                materials, the silence of considered space.&rdquo;
              </blockquote>

              <div className="w-16 h-px bg-bronze mb-8" />

              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70 mb-6">
                Maison Lumi&egrave;re is born from a singular conviction: that
                the spaces we inhabit shape who we become. Every threshold,
                every surface, every play of shadow and light has been composed
                with the deliberation of a still life painting.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
                Here, architecture serves life. Rooms breathe with the seasons.
                Materials age with grace. This is not a building &mdash; it is
                an invitation to live with intention, surrounded by beauty that
                asks nothing but your attention.
              </p>

              <div className="mt-12">
                <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-bronze">
                  Atelier Lumi&egrave;re
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.3em] text-taupe uppercase mt-1">
                  Design Studio, Paris
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          RESIDENCES - Three Alternating Blocks
          ================================================================ */}
      <section id="residences" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-20 lg:mb-28">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
              The Residences
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] text-text mt-6">
              Three Ways to
              <br />
              <span className="italic">Call It Home</span>
            </h2>
            <div className="w-12 h-px bg-bronze mx-auto mt-8" />
          </div>

          {/* Residence 01 — La Terrasse (image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 lg:order-1">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
                Residence 01
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4 mb-2">
                La Terrasse
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-bronze mb-6">
                Where mornings begin with jasmine and birdsong
              </p>
              <div className="w-10 h-px bg-bronze mb-6" />
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.2em] text-taupe uppercase mb-6">
                280 m&sup2; &middot; 4 Bedrooms &middot; Private Terrace Garden
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
                The crown of Maison Lumi&egrave;re. La Terrasse unfolds across
                the uppermost floors, where a private rooftop garden extends the
                living space into open sky. Floor-to-ceiling glazing frames the
                city&rsquo;s distant silhouette while French oak floors ground
                each room in warmth. The kitchen, clad in honed Calacatta
                marble, opens to a dining terrace designed for long evenings
                under stars.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-bronze uppercase border-b border-bronze/40 pb-1 hover:border-bronze transition-colors duration-300"
                >
                  Inquire
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2 relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                alt="Luxury penthouse with terrace garden and city views"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Residence 02 — Le Jardin (image left) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-20 lg:mt-32">
            <div className="lg:col-span-7 lg:order-1 relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
                alt="Elegant living room with garden access and natural light"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 lg:order-2">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
                Residence 02
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4 mb-2">
                Le Jardin
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-bronze mb-6">
                A sanctuary of green in the heart of the city
              </p>
              <div className="w-10 h-px bg-bronze mb-6" />
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.2em] text-taupe uppercase mb-6">
                180 m&sup2; &middot; 3 Bedrooms &middot; Garden Access
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
                Le Jardin residences occupy the heart of the building, each with
                direct access to the interior courtyard garden &mdash; a lush,
                curated landscape inspired by the Jardins de Bagatelle. Living
                spaces flow seamlessly between indoors and out, with oversized
                pivoting doors that dissolve the boundary. Natural stone, linen
                curtains, and muted earth tones create rooms that feel at once
                sophisticated and deeply comfortable.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-bronze uppercase border-b border-bronze/40 pb-1 hover:border-bronze transition-colors duration-300"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>

          {/* Residence 03 — L'Atelier (image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-20 lg:mt-32">
            <div className="lg:col-span-5 lg:order-1">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
                Residence 03
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4 mb-2">
                L&rsquo;Atelier
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-bronze mb-6">
                For the creative spirit who values light and space
              </p>
              <div className="w-10 h-px bg-bronze mb-6" />
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.2em] text-taupe uppercase mb-6">
                95 m&sup2; &middot; 1&ndash;2 Bedrooms &middot; Double-Height
                Studio
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70">
                Conceived for artists, thinkers, and those who crave luminous
                solitude. L&rsquo;Atelier features a dramatic double-height
                living space flooded with north light, a mezzanine study, and a
                material palette of exposed concrete, blackened steel, and warm
                timber. Every detail has been distilled to its essence &mdash; a
                residence that is both gallery and refuge.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-bronze uppercase border-b border-bronze/40 pb-1 hover:border-bronze transition-colors duration-300"
                >
                  Inquire
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2 relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern loft-style apartment with double-height studio space"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          LIFESTYLE & AMENITIES
          ================================================================ */}
      <section id="lifestyle" className="bg-cream">
        {/* Full-width atmospheric image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
            alt="Fine dining terrace at sunset with warm golden light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />

          {/* Overlaid text */}
          <div className="absolute bottom-16 left-0 right-0 text-center px-6">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-white/80 uppercase">
              Lifestyle & Amenities
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] text-white mt-4">
              The Rituals of
              <br />
              <span className="italic">Beautiful Living</span>
            </h2>
          </div>
        </div>

        {/* 2x2 Amenities Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Orangerie */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Elegant restaurant interior with warm lighting and fine dining setup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-light text-text">
                    The Orangerie
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-bronze uppercase mb-3">
                  Farm-to-table dining
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60">
                  A glass-walled dining pavilion where seasonal menus celebrate
                  Indonesia&rsquo;s extraordinary produce, prepared by a
                  rotating roster of guest chefs.
                </p>
              </div>
            </div>

            {/* The Library */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Luxurious private library with floor-to-ceiling bookshelves"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-light text-text">
                    The Library
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-bronze uppercase mb-3">
                  Art & literature
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60">
                  A curated collection of first editions, design monographs, and
                  contemporary art. Armchairs upholstered in Belgian linen.
                  Silence, encouraged.
                </p>
              </div>
            </div>

            {/* The Jardin Spa */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                  alt="Serene spa setting with botanical elements and natural materials"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-light text-text">
                    The Jardin Spa
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-bronze uppercase mb-3">
                  Botanical treatments
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60">
                  Drawing on Javanese jamu traditions and French botanical
                  science, our spa offers rituals designed to restore both body
                  and spirit amidst living greenery.
                </p>
              </div>
            </div>

            {/* The Salon */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80"
                  alt="Sophisticated private event space with elegant lighting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-light text-text">
                    The Salon
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-bronze uppercase mb-3">
                  Private events
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60">
                  An intimate gathering space for private dinners, art previews,
                  and cultural salons. Styled in deep greens and burnished
                  bronze, seating up to forty guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          NEIGHBORHOOD
          ================================================================ */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
            alt="Tree-lined boulevard with European-style cafes and dappled sunlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="bg-[#FAF7F2]/90 backdrop-blur-sm px-10 py-14 md:px-16 md:py-20 max-w-3xl text-center">
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
              Menteng&apos;s tree-canopied boulevards and Art Deco heritage have
              long drawn Jakarta&apos;s cultural and diplomatic elite. Here,
              morning walks lead past colonial-era mansions, independent
              bookshops, and caf&eacute;s where conversations linger past noon.
            </p>

            <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.85] text-text/70 max-w-lg mx-auto">
              Within minutes: the National Gallery, Taman Suropati, and the
              finest restaurants the city has to offer. This is a neighborhood
              that rewards the unhurried life.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          MATERIALS - Horizontal Scroll
          ================================================================ */}
      <section id="materials" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
              Material Palette
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-text mt-4">
              Chosen for <span className="italic">Character</span>
            </h2>
            <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.8] text-text/60 mt-4 max-w-xl">
              Every material in Maison Lumi&egrave;re has been selected not
              merely for beauty, but for the way it will age, weather, and tell
              a story over decades.
            </p>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="materials-scroll overflow-x-auto">
          <div
            className="flex gap-6 px-6 md:px-12 lg:px-20 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {[
              {
                name: "Italian Marble",
                origin: "Carrara, Tuscany",
                image:
                  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
                imageAlt:
                  "Italian Calacatta marble texture with subtle gold veining",
              },
              {
                name: "French Oak",
                origin: "Burgundy, France",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
                imageAlt:
                  "French oak herringbone parquet floor in warm honey tones",
              },
              {
                name: "Bronze Fixtures",
                origin: "Atelier Forge, Lyon",
                image:
                  "https://images.unsplash.com/photo-1558618047-f4811f1e9a7d?w=600&q=80",
                imageAlt:
                  "Burnished bronze hardware and fixtures with patina detail",
              },
              {
                name: "Washi Paper",
                origin: "Echizen, Japan",
                image:
                  "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=600&q=80",
                imageAlt:
                  "Handmade Japanese washi paper with delicate natural fiber texture",
              },
              {
                name: "Belgian Linen",
                origin: "Courtrai, Belgium",
                image:
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
                imageAlt:
                  "Belgian linen fabric draped in soft natural folds",
              },
            ].map((material) => (
              <div
                key={material.name}
                className="group flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIAL / QUOTE
          ================================================================ */}
      <section className="py-28 md:py-36 lg:py-44 bg-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-px bg-bronze mx-auto mb-12" />

          <blockquote>
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,4vw,3rem)] font-light leading-[1.3] text-text italic">
              &ldquo;Maison Lumi&egrave;re is not a residence.
              <br className="hidden md:block" />
              It is a way of life.&rdquo;
            </p>
          </blockquote>

          <div className="mt-10">
            <div className="w-8 h-px bg-divider mx-auto mb-6" />
            <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-taupe uppercase">
              Architectural Digest Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRIVATE VIEWING - Contact Form
          ================================================================ */}
      <section id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left - Atmospheric image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
              alt="Atmospheric candlelit interior with warm ambient lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

            <div className="absolute bottom-10 left-10 right-10">
              <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.2] text-white italic">
                Experience Maison Lumi&egrave;re
                <br />
                in person
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex items-center justify-center px-8 py-16 md:px-16 lg:px-20">
            <div className="w-full max-w-md">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
                Private Viewing
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-text mt-4 mb-3">
                Arrange a <span className="italic">Visit</span>
              </h2>
              <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60 mb-10">
                We invite you to experience our residences, materials, and
                shared spaces firsthand. Each viewing is private and entirely at
                your pace.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-text placeholder-taupe/50 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-text placeholder-taupe/50 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase block mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-text placeholder-taupe/50 transition-colors duration-300"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase block mb-2"
                  >
                    Tell us about your ideal home
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-text placeholder-taupe/50 resize-none transition-colors duration-300"
                    placeholder="What matters most to you in a home?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-bronze text-cream py-4 font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] uppercase hover:bg-bronze/90 transition-colors duration-300"
                >
                  Arrange a Private Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
          ================================================================ */}
      <footer className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
            {["Residences", "Lifestyle", "Materials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-taupe uppercase hover:text-bronze transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.2em] text-taupe/60 uppercase">
            &copy; 2026 Maison Lumi&egrave;re. All rights reserved.
          </p>

          {/* Creativism credit */}
          <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.15em] text-taupe/40 mt-4">
            Made with{" "}
            <span className="text-bronze/60">&hearts;</span> by{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe/60 hover:text-bronze transition-colors duration-300 border-b border-taupe/20 hover:border-bronze/40"
            >
              Creativism
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
