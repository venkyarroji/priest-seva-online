import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "918897319822";
  const message = encodeURIComponent("Namaste! I would like to book a puja service.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
