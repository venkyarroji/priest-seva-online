import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCallButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="tel:8897319822"
      aria-label="Call Priest Seva"
      className="fixed bottom-20 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <Phone className="h-5 w-5" />
    </a>
  );
};

export default StickyCallButton;
