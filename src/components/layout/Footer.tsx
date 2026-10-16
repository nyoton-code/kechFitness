"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="container-max py-20">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 py-10">
          {/* Brand */}
          <div className="">
            <div className="flex items-center gap-2 mb-6 ">
              <FontAwesomeIcon icon={faDumbbell} className="text-amber-500" />
              <span className="text-2xl font-black">
                Kech <span className="text-amber-500">Fitness</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Transform your body and mind with premium fitness training, expert
              coaching, and a supportive community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Trainers", href: "#trainers" },
                { label: "Classes", href: "#classes" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Pricing Plans", href: "#pricing" },
                { label: "Facilities", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/60 mb-4">
              Subscribe to get updates about new classes and fitness tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Kech Fitness. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Accessibility
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                text: "f",
                label: "Facebook",
                link: "https://www.facebook.com/kechfitness",
              },
              {
                text: "i",
                label: "Instagram",
                link: "https://www.instagram.com/kechfitness_marrakech",
              },
              { text: "x", label: "Twitter" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all font-bold text-sm"
                title={social.label}
              >
                {social.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
