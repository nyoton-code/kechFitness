"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Background Image with lazy loading */}
      <Image
        className="absolute inset-0 object-cover"
        src="/assests/imgs/about7.jpg"
        fill
        alt="Premium gym interior"
        priority={false}
        quality={85}
      />

      {/* Premium Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content Container - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Headline & Subheading */}
        <div
          className={`text-center transition-all duration-1000 max-w-5xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-3 tracking-tighter">
            More Than a <span className="text-amber-500">Gym</span>
          </h2>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            At Kech Fitness, we believe in transforming lives through
            dedication, expert guidance, and world-class facilities. Join our
            community and become your best self.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-4">
            <button className="btn-primary text-base px-10 py-3 font-bold uppercase tracking-wider">
              Become a Member
            </button>
          </div>
        </div>
      </div>

      {/* Animated Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
    </section>
  );
}
