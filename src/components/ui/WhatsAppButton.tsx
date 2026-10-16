"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppButton() {
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#25D366] text-white rounded-full p-4 shadow-lg">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </a>
  );
}
