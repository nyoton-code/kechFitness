"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const datacoaches = [
  {
    id: 1,
    name: "Ahmed El Mansouri",
    role: "Coach de musculation",
    image: "/assests/imgs/coacheAhmed.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 2,
    name: "Youssef El Fassi",
    role: "Instructrice de fitness",
    image: "/assests/imgs/coacheMustapha.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 3,
    name: "Sara Benjelloun",
    role: "Coach de musculation",
    image: "/assests/imgs/coacheAmal.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 4,
    name: "Laila Amrani",
    role: "Instructrice de yoga",
    image: "/assests/imgs/coacheAdil.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 5,
    name: "Laila Amrani",
    role: "Instructrice de yoga",
    image: "/assests/imgs/coacheSamira.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 6,
    name: "Laila Amrani",
    role: "Instructrice de yoga",
    image: "/assests/imgs/coacheYassine.jpg",
    "social media": {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
];
export default function Coaches() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/assests/imgs/coachess.png"
          // src="/assests/imgs/coach1.jpg"
          alt="Coaches Background"
          fill
          quality={75}
          // className="object-cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Our <span className="text-amber-500">Coaches</span>
          </h1>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-center my-20 text-2xl md:text-4xl uppercase">
            {" "}
            Meet Our Expert Coaches
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
            Our certified coaches are dedicated to helping you build strength,
            improve performance, and achieve real results through personalized
            training and professional guidance.
          </p>

          <div className="mt-6 mx-auto h-1 w-20 bg-amber-500 rounded-full" />
        </div>
        {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.18 }}
        >
          {datacoaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              variants={cardVariants}
              custom={index % 2 === 0 ? "left" : "right"}
              className="group relative bg-[#0b0b0b] rounded-xl overflow-hidden shadow-lg
               transition-transform duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-[420px]">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  quality={70}
                  className="object-cover object-top transition-transform duration-300
                 group-hover:scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* SOCIAL ICONS (HOVER) */}
                <ul
                  className="absolute top-4 right-4 flex flex-col gap-3
                 opacity-0 translate-x-3
                 group-hover:opacity-100 group-hover:translate-x-0
                 transition-all duration-300"
                >
                  <li>
                    <a
                      href={coach["social media"].facebook}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-black/70
                     flex items-center justify-center
                     text-white hover:bg-amber-500 transition"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>

                  <li>
                    <a
                      href={coach["social media"].twitter}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-black/70
                     flex items-center justify-center
                     text-white hover:bg-amber-500 transition"
                    >
                      <FontAwesomeIcon icon={faX} />
                    </a>
                  </li>

                  <li>
                    <a
                      href={coach["social media"].instagram}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-black/70
                     flex items-center justify-center
                     text-white hover:bg-amber-500 transition"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>

              {/* INFO */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Coach
                </p>

                <h3 className="text-xl font-bold text-white leading-tight">
                  {coach.name}
                </h3>

                <p className="text-sm text-white/70 mt-1">{coach.role}</p>

                {/* ACCENT BAR */}
                <div className="mt-4 h-1 w-14 bg-amber-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
