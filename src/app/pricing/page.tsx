"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const pricingPlans = [
  {
    id: "day-pass",
    name: "Day Pass",
    description: "Walk in, no commitment",
    popular: false,
    monthly: 50,
    accent: "green",
    features: [
      "Full gym access for 1 day",
      "Cardio & strength equipment",
      "Functional training zone",
      "Locker room access",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    description: "Best for regular members",
    popular: true,
    monthly: 350,
    accent: "amber",
    features: [
      "Unlimited gym access",
      "Cardio, strength & functional zones",
      "Group classes included",
      "Locker room & showers",
      "Coach guidance on request",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    description: "Best value — save 29%",
    popular: false,
    monthly: 3000,
    accent: "cyan",
    features: [
      "All monthly benefits included",
      "3 free personal training sessions",
      "Spa & hammam access",
      "2 guest passes per month",
      "Dedicated locker",
    ],
  },
];
export default function Pricing() {
  return (
    <>
      <section className="relative w-full h-[70vh] md:h-lvh overflow-hidden">
        <Image
          src="/assests/imgs/coachess5.png"
          alt="Coaches Background"
          fill
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Pricing <span className="text-amber-500">Plans</span>
          </h1>
        </div>
      </section>

      <section className="relative bg-black py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Simple, <span className="text-amber-500">Transparent</span>{" "}
              Pricing
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Choose a plan that fits your gym’s growth.
            </p>

            {/* CARDS */}
            <div className="grid gap-8 md:grid-cols-3 mt-24">
              {pricingPlans.map((plan, index) => {
                const price = plan.monthly;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{
                      opacity: 0,
                      x: index === 1 ? 0 : index === 0 ? -80 : 80,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className={`relative rounded-2xl p-8 backdrop-blur-xl border ${
                      plan.popular
                        ? "border-amber-500/40 bg-white/10 shadow-2xl shadow-amber-500/10 scale-105"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {/* BADGE */}
                    {plan.popular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    )}

                    <h3
                      className={`text-lg font-medium text-${plan.accent}-400`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {plan.description}
                    </p>

                    {/* PRICE */}
                    <div className="mt-8 flex items-end gap-1">
                      {price === 0 ? (
                        <span className="text-5xl font-bold text-white">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl text-white/60">MAD</span>
                          <span className="text-5xl font-bold text-white">
                            {price}
                          </span>
                        </>
                      )}
                    </div>

                    {/* BUTTON */}
                    <button
                      className={`mt-8 w-full rounded-full py-3 font-semibold transition ${
                        plan.popular
                          ? "bg-amber-500 text-black hover:bg-amber-600"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      Get Started
                    </button>

                    {/* FEATURES */}
                    <ul className="mt-8 space-y-4 text-sm text-white/70">
                      {plan.features.map((feature, i) => (
                        <li key={i}>✔ {feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
