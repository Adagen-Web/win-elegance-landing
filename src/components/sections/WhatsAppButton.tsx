import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5551981835012?text=Ol%C3%A1!%20"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50
        bottom-6 right-6
        bg-[#965018]
        rounded-full
        p-4
        shadow-xl
        flex items-center justify-center
        hover:scale-105
        hover:bg-[#965018]/90
        transition-all
      "
      aria-label="Fale com a Wolk no WhatsApp"
      style={{
        boxShadow: "0 8px 24px 0 rgba(0,0,0,0.20)",
      }}
    >
      <FaWhatsapp size={32} className="text-white" />
    </a>
  );
}