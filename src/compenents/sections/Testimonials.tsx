"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [animatingButtons, setAnimatingButtons] = useState<Set<number>>(new Set());
  const sectionRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });

    setAnimatingButtons((prev) => new Set(prev).add(index));
    setTimeout(() => {
      setAnimatingButtons((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "Hajaar Meftouh",
      avatar: "/assests/imgs/Hajar.png",
      rating: 5,
      text: "Mon expérience dans cette salle de sport est tout simplement excellente ! Les équipements sont au top et l'ambiance est très motivante. Je tiens particulièrement à féliciter Coach Laila. Elle est incroyablement professionnelle et travailleuse. J'aimerais aussi ajouter que toutes les autres membres de l'équipe féminine sont également très aimables et gentilles. Je recommande vivement",
    },
    {
      name: "Nour",
      avatar: "/assests/imgs/Nour.png",
      rating: 5,
      text: "Franchement, j'aime trop cette salle. L'ambiance est chill, les cours collectifs sont un vrai kiff! surtout la danse orientale avec Laila. J'aime aussi son travail pendant mes séances de muscu  elle motive bien et ça fait vraiment la différence. L'équipe de coachs est cool, toujours dispo. Je viens toujours avec envie ! Merci Kech Fitness",
    },
    {
      name: "Hanane Elk",
      avatar: "/assests/imgs/Hanane.png",
      rating: 5,
      text: "Une expérience des plus agréables en matière de sport, surtout grâce à la bienveillance du personnel, en particulier Hafsa, toujours à l écoute et à corriger nos postures, avec une touche d expertise k on remarque également lors des cours collectifs, très diversifiés. La salle est aussi doté de piscine, de vestiaires bien aménagés, et d un SPA !",
    },
    {
      name: "Adil chaquiq",
      avatar: "/assests/imgs/Adil.png",
      rating: 5,
      text: "Je recommande vivement Kesh fitness route de casa pour les gens qui cherchent le vrai terme de bien être , de professionnalisme en terme de tous ce qui est fitness cours collectifs très bonne ambiance sans oublier de mentionner le travail de haut calibre des aimables coaches qui ne cesse pas d'encourager et d'aider les clients à atteindre leurs buts et à réaliser ce qu'on est venu chercher ds ce merveilleux centre sportif de très haut niveau! Bravo l'équipe des coaches chacun avec son nom que ce soi côté hommes ou femmes sans oublier les responsables qui veillent sur la bonne marche du centre sportif et aussi le reste du staff entre autre les gents qui veillent sur la propreté des lieux publique!!!",
    },
    {
      name: "Hakim Boumert",
      avatar: "/assests/imgs/Hakim.png",
      rating: 5,
      text: "Excellent gym  highly recommended! Kech Fitness on Route de Casa is by far one of the best gyms in Marrakech. The atmosphere is motivating, the equipment is well maintained, and the place is always clean and well organized. A special mention goes to Coach Tarik, who does an outstanding job. He is professional, attentive, and truly passionate about what he does. He takes the time to guide, correct, and motivate each member, whatever their level. Thanks to his coaching, you really feel supported and encouraged to push your limits safely and effectively. If you're looking for a serious gym with a great vibe and top-level coaching, Kech Fitness is definitely the right place. Huge respect to Coach Tarik and the whole team for the amazing work they do every day!",
    },
    {
      name: "Jessica Rodriguez",
      avatar: "/assests/imgs/coach2.png",
      rating: 5,
      text: "Transformed my fitness journey completely. The personalized training programs are incredibly effective.",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 342;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1.5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl transition-all duration-300 ${
              i < rating ? "text-yellow-400 drop-shadow-lg" : "text-gray-700"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 px-4 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Join thousands of satisfied members who transformed their fitness
            journey with us
          </p>
        </div>

        {/* Top Bar - Google Logo, Rating, CTA */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-white/8 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-lg hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5">
            {/* Left - Google Logo & Rating */}
            <div className="flex flex-col md:flex-row items-center gap-8 flex-1">
              {/* Google Logo Text */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-3xl font-black">G</span>
                  <span className="text-xl text-gray-500">|</span>
                  <span className="text-base font-semibold tracking-wide">
                    Google
                  </span>
                </div>
                <p className="text-xs text-white/50 font-medium tracking-widest uppercase">
                  Reviews
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-white/10 via-white/30 to-white/10"></div>

              {/* Rating Stats */}
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-black">
                    {averageRating}
                  </span>
                  <div>
                    <div className="text-yellow-400 text-2xl tracking-tight">
                      ★★★★★
                    </div>
                    <p className="text-xs text-white/60 font-medium mt-1">
                      {totalReviews.toLocaleString()} reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA Button */}
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 whitespace-nowrap text-lg tracking-wide">
              Review us on Google
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-96 snap-center group"
              >
                {/* Card */}
                <div
                  className={`bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg hover:border-amber-500/50 transition-all duration-500 h-full flex flex-col hover:from-white/15 hover:to-white/8 group ${
                    expandedCards.has(idx)
                      ? "scale-[1.02] shadow-2xl shadow-amber-500/30 border-amber-500/40"
                      : "scale-100 hover:shadow-2xl hover:shadow-amber-500/20"
                  }`}
                >
                  {/* Stars */}
                  <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text Container */}
                  <div className="relative flex-1 mb-6">
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        expandedCards.has(idx) ? "max-h-none" : "max-h-[180px]"
                      }`}
                    >
                      <p className="text-white/85 text-base leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                        {review.text}
                      </p>
                    </div>

                    {/* Gradient Fade - Only show when collapsed */}
                    {!expandedCards.has(idx) && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-lg"></div>
                    )}
                  </div>

                  {/* Read More / Show Less Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className={`text-blue-400 hover:text-blue-300 text-sm font-semibold mb-6 transition-all duration-300 inline-flex items-center gap-2 group/link text-left ${
                      animatingButtons.has(idx)
                        ? "scale-95 opacity-70"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    {expandedCards.has(idx) ? "Show less" : "Read more →"}
                  </button>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-6"></div>

                  {/* Bottom - Google Logo, Avatar, Name */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Avatar */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-white/20 to-white/10 border border-white/30 shadow-lg group-hover:border-amber-500/50 transition-all duration-300">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                          quality={85}
                        />
                      </div>

                      {/* Name */}
                      <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">
                        {review.name}
                      </span>
                    </div>

                    {/* Google Logo Small */}
                    <div className="text-xs text-white/50 font-bold group-hover:text-amber-500/70 transition-colors duration-300">
                      G
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-xs text-white/40 mt-8 md:hidden font-light tracking-wide">
          Swipe to see more reviews
        </p>
      </div>
    </section>
  );
}
