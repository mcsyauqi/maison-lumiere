"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function PrivateViewing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    alert("Thank you for your interest. Our team will be in touch shortly.");
  };

  return (
    <section id="contact" ref={ref} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left — Atmospheric image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] lg:aspect-auto overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=85&auto=format&fit=crop"
            alt="Atmospheric candlelit interior with warm ambient lighting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

          {/* Overlay text on image */}
          <div className="absolute bottom-10 left-10 right-10">
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.2] text-white italic">
              Experience Maison Lumi&egrave;re
              <br />
              in person
            </p>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center px-8 py-16 md:px-16 lg:px-20"
        >
          <div className="w-full max-w-md">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] text-taupe uppercase">
              Private Viewing
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-text mt-4 mb-3">
              Arrange a <span className="italic">Visit</span>
            </h2>
            <p className="font-[family-name:var(--font-lora)] text-[14px] leading-[1.8] text-text/60 mb-10">
              We invite you to experience our residences, materials, and shared spaces firsthand. Each viewing is private and entirely at your pace.
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
        </motion.div>
      </div>
    </section>
  );
}
