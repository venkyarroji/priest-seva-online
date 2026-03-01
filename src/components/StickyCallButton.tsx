import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCallButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="tel:8897319822"
      aria-label="Call Priest Seva"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default StickyCallButton;
