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
          HERO - Full-bleed editorial hero with serif overlay
          ================================================================ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Grand luxury residence facade bathed in golden hour light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 animate-fade-down">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-8">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.35em] text-white/70 uppercase">
              Est. 2024
            </span>
            <div className="hidden md:flex items-center gap-10">
              {["Residences", "Philosophy", "Amenities", "Gallery", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-white/70 uppercase hover:text-white transition-colors duration-500"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.35em] text-white/70 uppercase">
              Menteng, Jakarta
            </span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-32 md:pb-40 text-center px-6">
          <div className="animate-fade-up">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.9] text-white tracking-[0.02em]">
              Maison
              <br />
              <span className="italic font-normal">Lumi&egrave;re</span>
            </h1>
          </div>

          <div className="mt-10 animate-fade-up-delayed">
            <div className="w-20 h-px bg-[#8B6F47]/80 mx-auto mb-6" />
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1rem,2vw,1.35rem)] font-light tracking-[0.15em] text-white/80 italic">
              Where Architecture Meets the Art of Living
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center scroll-indicator animate-fade-up-delayed-long">
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.4em] text-white/50 uppercase mb-3">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ================================================================
          EDITORIAL INTRODUCTION - Magazine-style text with drop cap
          ================================================================ */}
      <section className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section eyebrow */}
          <div className="text-center mb-6">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
              An Introduction
            </span>
          </div>

          {/* Thin bronze rule */}
          <div className="w-16 h-px bg-[#8B6F47] mx-auto mb-16" />

          {/* Two-column editorial layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column - Main editorial text */}
            <div className="lg:col-span-7">
              <p className="font-[family-name:var(--font-lora)] text-[16px] lg:text-[17px] leading-[2] text-[#2C2C2C]/75 first-letter:text-[4rem] first-letter:font-[family-name:var(--font-cormorant)] first-letter:font-light first-letter:text-[#1A1A1A] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                There exists a particular quality of light in Menteng &mdash; soft,
                filtered through decades-old canopies, landing on surfaces with the
                quietness of a held breath. It was this light that inspired Maison
                Lumi&egrave;re: not merely a residence, but a meditation on how
                space, material, and time can converge to create something that
                transcends architecture.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[16px] lg:text-[17px] leading-[2] text-[#2C2C2C]/75 mt-8">
                Every threshold has been considered. Every proportion deliberated
                upon. The result is a collection of residences that do not demand
                attention but rather reward it &mdash; homes that reveal their
                beauty slowly, across seasons and years, like a poem read many
                times over.
              </p>
            </div>

            {/* Right column - Pull quote */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="border-l-2 border-[#8B6F47]/40 pl-8 lg:pl-10">
                <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.35] text-[#1A1A1A] italic">
                  &ldquo;A home should be a sanctuary that reveals itself slowly
                  &mdash; in the quality of light, the warmth of materials, the
                  silence of considered space.&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#8B6F47]">
                    Atelier Lumi&egrave;re
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.3em] text-[#A39B8B] uppercase mt-1">
                    Design Studio, Paris &amp; Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-[#D4C5B0]/60" />
      </div>

      {/* ================================================================
          THE RESIDENCES - Editorial showcase
          ================================================================ */}
      <section id="residences" className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-20 lg:mb-28">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
              The Residences
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-[#1A1A1A] mt-6">
              Three Expressions of
              <br />
              <span className="italic">Refined Living</span>
            </h2>
            <div className="w-20 h-px bg-[#8B6F47] mx-auto mt-10" />
          </div>

          {/* Residence 01 - La Terrasse (large image left, text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                  alt="Sunlit luxury living room with floor-to-ceiling windows and natural materials"
                  className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Editorial caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.4em] text-white/70 uppercase">
                    Residence 01 of 03
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center lg:py-12">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-[#A39B8B] uppercase">
                Penthouse Collection
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.05] text-[#1A1A1A] mt-3 mb-2">
                La Terrasse
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#8B6F47] mb-8">
                Where mornings begin with jasmine and open sky
              </p>
              <div className="w-12 h-px bg-[#8B6F47] mb-8" />
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase mb-6">
                280 m&sup2; &middot; 4 Bedrooms &middot; Private Rooftop Garden
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70">
                The crown of Maison Lumi&egrave;re. La Terrasse occupies the
                uppermost floors, where a private rooftop garden extends the living
                space into open sky. Floor-to-ceiling glazing frames the city&rsquo;s
                distant silhouette while French oak floors ground each room in warmth.
                The kitchen, clad in honed Calacatta marble, opens to a dining
                terrace designed for long evenings beneath the stars.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-[#8B6F47] uppercase border-b border-[#8B6F47]/40 pb-1.5 hover:border-[#8B6F47] transition-colors duration-500"
                >
                  Arrange a Viewing
                </a>
              </div>
            </div>
          </div>

          {/* Residence 02 - Le Jardin (text left, large image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-24 lg:mt-36">
            <div className="lg:col-span-5 flex flex-col justify-center lg:py-12 lg:order-1">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-[#A39B8B] uppercase">
                Garden Residences
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.05] text-[#1A1A1A] mt-3 mb-2">
                Le Jardin
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#8B6F47] mb-8">
                A sanctuary of green in the heart of the city
              </p>
              <div className="w-12 h-px bg-[#8B6F47] mb-8" />
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase mb-6">
                180 m&sup2; &middot; 3 Bedrooms &middot; Courtyard Access
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70">
                Le Jardin residences occupy the building&rsquo;s heart, each with
                direct access to the interior courtyard &mdash; a curated landscape
                inspired by the Jardins de Bagatelle. Living spaces flow between
                indoors and out through oversized pivoting doors. Natural stone, linen
                curtains, and muted earth tones compose rooms that feel at once
                sophisticated and deeply comfortable.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-[#8B6F47] uppercase border-b border-[#8B6F47]/40 pb-1.5 hover:border-[#8B6F47] transition-colors duration-500"
                >
                  Arrange a Viewing
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                  alt="Elegant living room with garden access and abundant natural light"
                  className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.4em] text-white/70 uppercase">
                    Residence 02 of 03
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Residence 03 - L'Atelier (full-width editorial) */}
          <div className="mt-24 lg:mt-36">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80"
                alt="Contemporary architectural residence with dramatic double-height spaces"
                className="w-full aspect-[16/9] lg:aspect-[21/9] object-cover hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14">
                <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.4em] text-white/70 uppercase">
                  Residence 03 of 03
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.05] text-white mt-3">
                  L&rsquo;Atelier
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-lg lg:text-xl italic text-white/80 mt-2">
                  For the creative spirit who values light and space
                </p>
              </div>
            </div>
            {/* Text below the full-width image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
              <div className="lg:col-span-4">
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase">
                  95 m&sup2; &middot; 1&ndash;2 Bedrooms &middot; Double-Height Studio
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70">
                  Conceived for artists, thinkers, and those who crave luminous
                  solitude. L&rsquo;Atelier features a dramatic double-height living
                  space flooded with north light, a mezzanine study, and a material
                  palette of exposed concrete, blackened steel, and warm timber. Every
                  detail distilled to its essence &mdash; a residence that is both
                  gallery and refuge.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                <a
                  href="#contact"
                  className="inline-block font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] text-[#8B6F47] uppercase border-b border-[#8B6F47]/40 pb-1.5 hover:border-[#8B6F47] transition-colors duration-500"
                >
                  Arrange a Viewing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          DESIGN PHILOSOPHY - Craftsmanship, Materials, Light
          ================================================================ */}
      <section id="philosophy" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-20 lg:mb-28">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
              Design Philosophy
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-[#1A1A1A] mt-6">
              The Measure of
              <br />
              <span className="italic">Beautiful Things</span>
            </h2>
            <div className="w-20 h-px bg-[#8B6F47] mx-auto mt-10" />
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Craftsmanship */}
            <div className="text-center group">
              <div className="relative overflow-hidden aspect-[3/4] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
                  alt="Artisan hands working with natural marble and stone materials"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="w-8 h-px bg-[#8B6F47] mx-auto mb-6" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[#1A1A1A] italic mb-4">
                Craftsmanship
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.9] text-[#2C2C2C]/65 max-w-sm mx-auto">
                Every joint, every edge, every surface has been shaped by hands that
                understand materials intimately. We collaborate with artisans from
                Tuscany to Kyoto, each bringing generations of knowledge to a single
                detail.
              </p>
            </div>

            {/* Materials */}
            <div className="text-center group">
              <div className="relative overflow-hidden aspect-[3/4] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                  alt="Luxurious natural linen and timber materials in warm tones"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="w-8 h-px bg-[#8B6F47] mx-auto mb-6" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[#1A1A1A] italic mb-4">
                Materials
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.9] text-[#2C2C2C]/65 max-w-sm mx-auto">
                Selected not merely for beauty, but for character. Calacatta marble
                from Carrara. French oak from Burgundy. Belgian linen from Courtrai.
                Materials that age with grace and tell a story over decades.
              </p>
            </div>

            {/* Light */}
            <div className="text-center group">
              <div className="relative overflow-hidden aspect-[3/4] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Architectural interior bathed in soft natural light through tall windows"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="w-8 h-px bg-[#8B6F47] mx-auto mb-6" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[#1A1A1A] italic mb-4">
                Light
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.9] text-[#2C2C2C]/65 max-w-sm mx-auto">
                Architecture is, at its essence, the choreography of light. Each
                residence has been oriented and composed so that sunlight moves
                through the rooms like music &mdash; changing the atmosphere from
                hour to hour, season to season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-[#D4C5B0]/60" />
        </div>
      </div>

      {/* ================================================================
          AMENITIES - Elegant minimal cards
          ================================================================ */}
      <section id="amenities" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-6">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
                  Amenities
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-[#1A1A1A] mt-6">
                  The Rituals of
                  <br />
                  <span className="italic">Beautiful Living</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70">
                  Beyond the private residence, Maison Lumi&egrave;re offers a
                  constellation of shared spaces &mdash; each conceived as a
                  destination in itself, each an extension of the life we believe
                  you deserve.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-[#D4C5B0]/60 mt-12" />
          </div>

          {/* Amenities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-20">
            {[
              {
                name: "The Orangerie",
                category: "Farm-to-table dining",
                description:
                  "A glass-walled dining pavilion where seasonal menus celebrate Indonesia\u2019s extraordinary produce, prepared by a rotating roster of guest chefs from around the world.",
              },
              {
                name: "The Library",
                category: "Art & literature",
                description:
                  "A curated collection of first editions, design monographs, and contemporary art. Armchairs upholstered in Belgian linen. Silence, encouraged.",
              },
              {
                name: "The Jardin Spa",
                category: "Botanical treatments",
                description:
                  "Drawing on Javanese jamu traditions and French botanical science, our spa offers rituals designed to restore both body and spirit amidst living greenery.",
              },
              {
                name: "The Salon",
                category: "Private events",
                description:
                  "An intimate gathering space for private dinners, art previews, and cultural salons. Styled in deep greens and burnished bronze, seating up to forty guests.",
              },
              {
                name: "The Courtyard",
                category: "Contemplative garden",
                description:
                  "A walled garden at the building\u2019s heart, landscaped with tropical ferns, water features, and seating alcoves \u2014 the kind of urban oasis that makes a city feel like countryside.",
              },
              {
                name: "The Cellar",
                category: "Wine & conversation",
                description:
                  "A temperature-controlled wine room and tasting lounge, hosting monthly tastings and pairing evenings. The collection spans Old World estates and Indonesian vineyards.",
              },
            ].map((amenity, index) => (
              <div key={amenity.name} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-[family-name:var(--font-cormorant)] text-[2.5rem] font-light text-[#D4C5B0]/80 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-[#D4C5B0]/40 translate-y-[-4px]" />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[#1A1A1A] mb-1">
                  {amenity.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-[#8B6F47] uppercase mb-4">
                  {amenity.category}
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.85] text-[#2C2C2C]/60">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          EDITORIAL QUOTE - Full-width interlude
          ================================================================ */}
      <section className="relative py-28 md:py-36 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80"
            alt="Minimalist luxury interior with warm golden light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-px bg-[#8B6F47] mx-auto mb-12" />
          <blockquote>
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,4.5vw,3.5rem)] font-light leading-[1.25] text-white italic">
              &ldquo;Maison Lumi&egrave;re is not a place
              <br className="hidden md:block" />
              you arrive at. It is a way
              <br className="hidden md:block" />
              of life you step into.&rdquo;
            </p>
          </blockquote>
          <div className="mt-10">
            <div className="w-8 h-px bg-white/30 mx-auto mb-5" />
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.35em] text-white/60 uppercase">
              Architectural Digest Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          GALLERY - Editorial asymmetric grid
          ================================================================ */}
      <section id="gallery" className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-24">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
              Gallery
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-[#1A1A1A] mt-6">
              A Visual <span className="italic">Journal</span>
            </h2>
            <div className="w-20 h-px bg-[#8B6F47] mx-auto mt-10" />
          </div>

          {/* Row 1: 7/5 split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            <div className="lg:col-span-7 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                alt="Maison Lumiere grand facade with landscaped entrance"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  The Arrival
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Interior living space with warm natural light"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  Living Spaces
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 4/4/4 equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mt-4 lg:mt-5">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                alt="Modern residence exterior with clean architectural lines"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  Architecture
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80"
                alt="Marble and natural material details in the residence"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  Material Detail
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                alt="Curated interior furnishing with linen textiles"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  Textile & Form
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: 5/7 split (reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 mt-4 lg:mt-5">
            <div className="lg:col-span-5 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                alt="Light-filled corridor with architectural shadows"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  Light & Shadow
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
                alt="Contemporary luxury residence with pool and landscaping"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.3em] text-white/80 uppercase">
                  The Grounds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACT / INQUIRY - Private Viewing
          ================================================================ */}
      <section id="contact" className="bg-[#FAF7F2]">
        {/* Thin divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-[#D4C5B0]/60" />
        </div>

        <div className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left - Editorial text */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.5em] text-[#8B6F47] uppercase">
                  Private Viewing
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-[#1A1A1A] mt-6 mb-4">
                  Experience It
                  <br />
                  <span className="italic">In Person</span>
                </h2>
                <div className="w-12 h-px bg-[#8B6F47] mb-8" />
                <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70 mb-6">
                  We believe that a home of this nature must be felt, not merely
                  seen. The way light falls across the marble at noon. The scent of
                  the courtyard garden after rain. The particular silence of rooms
                  built with care.
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[15px] leading-[1.9] text-[#2C2C2C]/70">
                  Each viewing is private, unhurried, and entirely at your pace. We
                  invite you to discover Maison Lumi&egrave;re on your own terms.
                </p>

                {/* Contact details */}
                <div className="mt-12 pt-8 border-t border-[#D4C5B0]/40">
                  <div className="space-y-3">
                    <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase">
                      Jl. Imam Bonjol No. 12, Menteng
                    </p>
                    <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase">
                      Jakarta Pusat 10310, Indonesia
                    </p>
                    <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.25em] text-[#A39B8B] uppercase">
                      +62 21 3145 8900
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="bg-white p-8 md:p-12 lg:p-14">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-[#A39B8B] uppercase block mb-3"
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
                        className="w-full border-b border-[#D4C5B0] bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-[#2C2C2C] placeholder-[#A39B8B]/50 transition-colors duration-300 focus:outline-none focus:border-[#8B6F47]"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-[#A39B8B] uppercase block mb-3"
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
                        className="w-full border-b border-[#D4C5B0] bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-[#2C2C2C] placeholder-[#A39B8B]/50 transition-colors duration-300 focus:outline-none focus:border-[#8B6F47]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-[#A39B8B] uppercase block mb-3"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-[#D4C5B0] bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-[#2C2C2C] placeholder-[#A39B8B]/50 transition-colors duration-300 focus:outline-none focus:border-[#8B6F47]"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-[#A39B8B] uppercase block mb-3"
                      >
                        Tell us about your ideal home
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border-b border-[#D4C5B0] bg-transparent py-3 font-[family-name:var(--font-lora)] text-[15px] text-[#2C2C2C] placeholder-[#A39B8B]/50 resize-none transition-colors duration-300 focus:outline-none focus:border-[#8B6F47]"
                        placeholder="What matters most to you in a home?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full bg-[#8B6F47] text-[#FAF7F2] py-4 font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.3em] uppercase hover:bg-[#7A6240] transition-colors duration-500"
                    >
                      Arrange a Private Viewing
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
          ================================================================ */}
      <footer className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            {/* Logo */}
            <div className="md:col-span-4">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-white tracking-wide">
                Maison <span className="italic">Lumi&egrave;re</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#8B6F47] mt-3">
                The Art of Living Well
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-4 md:text-center">
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-white/30 uppercase mb-5">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {["Residences", "Philosophy", "Amenities", "Gallery", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="font-[family-name:var(--font-montserrat)] text-[11px] font-light tracking-[0.25em] text-white/50 uppercase hover:text-[#8B6F47] transition-colors duration-500"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4 md:text-right">
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.3em] text-white/30 uppercase mb-5">
                Contact
              </p>
              <div className="space-y-2">
                <p className="font-[family-name:var(--font-lora)] text-[13px] text-white/50">
                  Jl. Imam Bonjol No. 12, Menteng
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[13px] text-white/50">
                  Jakarta Pusat 10310, Indonesia
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[13px] text-white/50 mt-4">
                  +62 21 3145 8900
                </p>
                <p className="font-[family-name:var(--font-lora)] text-[13px] text-white/50">
                  info@maisonlumiere.id
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-10" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.2em] text-white/25 uppercase">
              &copy; 2026 Maison Lumi&egrave;re. All rights reserved.
            </p>

            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.15em] text-white/25">
              Made with{" "}
              <span className="text-[#8B6F47]/70">&hearts;</span> by{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#8B6F47] transition-colors duration-500 border-b border-white/10 hover:border-[#8B6F47]/40"
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
