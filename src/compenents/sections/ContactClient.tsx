"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/assests/imgs/cardio4.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Get In <span className="text-amber-500">Touch</span>
          </h1>
        </div>
      </section>

      <section className="relative bg-black py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block text-sm uppercase tracking-[0.35em] text-amber-500">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Ready to start your next fitness chapter?
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Share your goals, ask about training plans, or schedule a free
                consultation with our team. We&apos;re here to guide your
                journey.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/60 uppercase tracking-[0.25em] mb-2">
                    Email
                  </p>
                  <p className="text-base font-semibold">
                    hello@kechfitness.com
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/60 uppercase tracking-[0.25em] mb-2">
                    Phone
                  </p>
                  <p className="text-base font-semibold">+212 669 324 233</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/60 uppercase tracking-[0.25em] mb-2">
                  Location
                </p>
                <a
                  href="https://www.google.com/maps/place/Kech+Fitness+Route+de+Casa/@31.6647203,-8.01572,17z/data=!3m1!4b1!4m6!3m5!1s0xdafeda295cbd2c5:0x8a79930e920f33fa!8m2!3d31.6647203!4d-8.0131451!16s%2Fg%2F11ykkrqtrh!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <p className="text-base font-semibold">
                    à côté de Promark, Casablanca Rd, Marrakesh 40000
                  </p>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="card-premium rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40"
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-500 mb-3">
                  Send a message
                </p>
                <h3 className="text-3xl font-black leading-tight text-white">
                  Let&apos;s talk goals
                </h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Fill in your details and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="grid gap-4">
                <label className="space-y-2 text-sm text-white/80">
                  <span>Name</span>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </label>

                <label className="space-y-2 text-sm text-white/80">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </label>

                <label className="space-y-2 text-sm text-white/80">
                  <span>Subject</span>
                  <input
                    type="text"
                    placeholder="Training plan inquiry"
                    className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </label>

                <label className="space-y-2 text-sm text-white/80">
                  <span>Message</span>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us more about your goals"
                    className="w-full resize-none rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button className="btn-primary text-base px-8 py-4 font-bold uppercase tracking-wider">
                  Send Message
                </button>
                {submitted && (
                  <p className="text-sm text-amber-400">
                    Thanks! We&apos;ll reach out soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
