"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Coaches() {
  const coaches = [
    {
      name: "Marcus Steel",
      title: "Strength Coach",
      specialty: "Weightlifting & Power",
      img: "/assests/imgs/coach1.png",
    },
    {
      name: "Elena Rodriguez",
      title: "Cardio Specialist",
      specialty: "HIIT & Endurance",
      img: "/assests/imgs/coach2.png",
    },
    {
      name: "James Wilson",
      title: "Yoga Instructor",
      specialty: "Flexibility & Mindfulness",
      img: "/assests/imgs/coach1.png",
    },
    {
      name: "Sarah Chen",
      title: "Nutrition Expert",
      specialty: "Performance Nutrition",
      img: "/assests/imgs/coach2.png",
    },
  ];

  return (
    <section
      id="trainers"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Background Image with lazy loading */}
      <Image
        src="/assests/imgs/coach1.png"
        alt="Coaches Background"
        fill
        className="absolute inset-0 object-cover bg-cover bg-center"
      />

      {/* Premium Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content Container - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Headline & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-3 tracking-tighter">
            Expert <span className="text-amber-500">Trainers</span>
          </h2>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Our certified trainers are dedicated to helping you achieve your
            fitness goals with personalized training and expert guidance.
          </p>

          {/* CTA Button */}
          <div className="flex  gap-6 justify-center mt-4">
            <button className="btn-primary text-base px-10 py-3 font-bold uppercase tracking-wider">
              Meet Our Team
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
    </section>
  );
}
