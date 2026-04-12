"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = ["ALL EVENTS", "CARDIO", "SPA", "GYM", "SPACE"];

const images = [
  {
    id: 1,
    src: "/assests/imgs/cardio1.jpg",
    alt: "Cardio Training",
    category: "CARDIO",
  },
  {
    id: 2,
    src: "/assests/imgs/cardio2.jpg",
    alt: "Cardio Workout",
    category: "CARDIO",
  },
  {
    id: 3,
    src: "/assests/imgs/cardio3.jpg",
    alt: "Cardio Session",
    category: "CARDIO",
  },
  {
    id: 4,
    src: "/assests/imgs/gym1.jpg",
    alt: "Gym Floor",
    category: "GYM",
  },
  {
    id: 5,
    src: "/assests/imgs/gym2.jpg",
    alt: "Strength Training",
    category: "GYM",
  },
  {
    id: 6,
    src: "/assests/imgs/space.png",
    alt: "Workout Space",
    category: "SPACE",
  },
  {
    id: 7,
    src: "/assests/imgs/space1.jpg",
    alt: "Fitness Space",
    category: "SPACE",
  },
  {
    id: 8,
    src: "/assests/imgs/space2.jpg",
    alt: "Gym Space",
    category: "SPACE",
  },
  {
    id: 9,
    src: "/assests/imgs/space3.jpg",
    alt: "Training Space",
    category: "SPACE",
  },
  {
    id: 10,
    src: "/assests/imgs/space4.jpg",
    alt: "Fitness Area",
    category: "SPACE",
  },
  {
    id: 11,
    src: "/assests/imgs/club2.jpg",
    alt: "Club Training",
    category: "SPA",
  },
  {
    id: 12,
    src: "/assests/imgs/cardio4.jpg",
    alt: "Cardio Session",
    category: "CARDIO",
  },
  {
    id: 13,
    src: "/assests/imgs/cardio6.jpg",
    alt: "Cardio Session",
    category: "CARDIO",
  },
  {
    id: 14,
    src: "/assests/imgs/boxing1.jpg",
    alt: "Boxing Training",
    category: "CARDIO",
  },
  {
    id: 15,
    src: "/assests/imgs/equipement1.jpg",
    alt: "Gym Equipment",
    category: "GYM",
  },
  {
    id: 16,
    src: "/assests/imgs/club1.jpg",
    alt: "Club Facility",
    category: "SPA",
  },
  {
    id: 17,
    src: "/assests/imgs/club3.jpg",
    alt: "Club Area",
    category: "SPA",
  },
  {
    id: 18,
    src: "/assests/imgs/club4.jpg",
    alt: "Club Space",
    category: "SPA",
  },
  {
    id: 19,
    src: "/assests/imgs/club5.png",
    alt: "Club Image",
    category: "SPA",
  },
  {
    id: 20,
    src: "/assests/imgs/about1.jpg",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 21,
    src: "/assests/imgs/about2.png",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 22,
    src: "/assests/imgs/about3.png",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 23,
    src: "/assests/imgs/about4.png",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 24,
    src: "/assests/imgs/about5.jpg",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 25,
    src: "/assests/imgs/about6.jpg",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 26,
    src: "/assests/imgs/about7.jpg",
    alt: "About Us",
    category: "ALL EVENTS",
  },
  {
    id: 27,
    src: "/assests/imgs/classes.jpg",
    alt: "Fitness Classes",
    category: "ALL EVENTS",
  },
  {
    id: 28,
    src: "/assests/imgs/schedual1.png",
    alt: "Schedule",
    category: "ALL EVENTS",
  },
  // {
  //   id: 29,
  //   src: "/assests/imgs/Adil.png",
  //   alt: "Coach Adil",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 30,
  //   src: "/assests/imgs/Hajar.png",
  //   alt: "Coach Hajar",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 31,
  //   src: "/assests/imgs/Hakim.png",
  //   alt: "Coach Hakim",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 32,
  //   src: "/assests/imgs/Hanane.png",
  //   alt: "Coach Hanane",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 33,
  //   src: "/assests/imgs/Nour.png",
  //   alt: "Coach Nour",
  //   category: "ALL EVENTS",
  // },
  {
    id: 34,
    src: "/assests/imgs/coach1.jpg",
    alt: "Coach",
    category: "ALL EVENTS",
  },
  {
    id: 35,
    src: "/assests/imgs/coach1.png",
    alt: "Coach",
    category: "ALL EVENTS",
  },
  {
    id: 36,
    src: "/assests/imgs/coach2.jpg",
    alt: "Coach",
    category: "ALL EVENTS",
  },
  {
    id: 37,
    src: "/assests/imgs/coach2.png",
    alt: "Coach",
    category: "ALL EVENTS",
  },
  {
    id: 38,
    src: "/assests/imgs/coach3.jpg",
    alt: "Coach",
    category: "ALL EVENTS",
  },
  // {
  //   id: 39,
  //   src: "/assests/imgs/coacheAdil.jpg",
  //   alt: "Coach Adil",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 40,
  //   src: "/assests/imgs/coacheAhmed.jpg",
  //   alt: "Coach Ahmed",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 41,
  //   src: "/assests/imgs/coacheAmal.jpg",
  //   alt: "Coach Amal",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 42,
  //   src: "/assests/imgs/coacheMustapha.jpg",
  //   alt: "Coach Mustapha",
  //   category: "ALL EVENTS",
  // },
  // {
  //   id: 43,
  //   src: "/assests/imgs/coacheSamira.jpg",
  //   alt: "Coach Samira",
  //   category: "ALL EVENTS",
  // },
  {
    id: 44,
    src: "/assests/imgs/coachess.png",
    alt: "Coaches",
    category: "ALL EVENTS",
  },
  {
    id: 45,
    src: "/assests/imgs/coachess3.jpg",
    alt: "Coaches",
    category: "ALL EVENTS",
  },
  {
    id: 46,
    src: "/assests/imgs/coachess4.jpg",
    alt: "Coaches",
    category: "ALL EVENTS",
  },
  {
    id: 47,
    src: "/assests/imgs/coachess5.png",
    alt: "Coaches",
    category: "ALL EVENTS",
  },
  {
    id: 48,
    src: "/assests/imgs/coacheYassine.jpg",
    alt: "Coach Yassine",
    category: "ALL EVENTS",
  },
  {
    id: 49,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847011930464846570_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
  {
    id: 50,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847011990057544172_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
  {
    id: 51,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847012049977369235_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
  {
    id: 52,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847012074706989897_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
  {
    id: 53,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847012137336372495_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
  {
    id: 54,
    src: "/assests/imgs/kechfitness_marrakech_1772819671_3847012154709144782_75760898243.jpg",
    alt: "Instagram Post",
    category: "ALL EVENTS",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL EVENTS");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredImages =
    activeFilter === "ALL EVENTS"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/assests/imgs/club5.png"
          alt="Gallery Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Our <span className="text-amber-500">Gallery</span>
          </h1>
        </div>
      </section>

      {/* Gallery Grid Section */}

      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Filter Bar */}
        <div className="flex justify-center items-center gap-1 mb-12 flex-wrap">
          {sections.map((section, i) => {
            const isActive = activeFilter === section;
            return (
              <div key={section} className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveFilter(section)}
                  className={`font-condensed text-sm font-semibold tracking-widest uppercase px-5 py-2 transition-colors duration-200 relative group cursor-pointer ${isActive ? "text-black dark:text-white" : "text-gray-400 hover:text-gray-900"}`}
                >
                  {section}
                  {/* Active underline — show conditionally */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-0.5 bg-amber-500 transition-transform ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </button>
                {i < sections.length - 1 && (
                  <span className="text-gray-300 text-xs">·</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="relative overflow-hidden rounded-sm aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold tracking-widest uppercase bg-amber-500 px-3 py-1 rounded-sm">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="bg-amber-500 cursor-pointer text-white px-6 py-3 rounded-sm font-semibold tracking-widest uppercase hover:bg-amber-600 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}
