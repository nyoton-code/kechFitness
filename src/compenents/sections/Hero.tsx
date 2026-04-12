"use client";

// import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  // const scrollToNext = () => {
  //   const aboutSection = document.getElementById("about");
  //   aboutSection?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Video Background - High Performance */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        src="/assests/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assests/imgs/about7.jpg"
        preload="auto"
      />

      {/* Premium Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Headline & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3 tracking-tigher">
            Build Your <span className="text-amber-500">Tomorrow</span>
          </h1>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Elite coaching, personalized programs, and a community built for
            results.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6  justify-center mt-4">
            <a href="/contact">
              <button className="btn-primary text-base px-10 py-3 font-bold uppercase tracking-wider">
                Start today
              </button>
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <button
          // onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </div>

      {/* Animated Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
    </section>
  );
}
