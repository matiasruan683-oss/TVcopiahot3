import { useEffect, useState } from "react";
import { CheckoutButton } from "./CheckoutButton";

export function StickyBar() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsShown(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#1F1D1B]/10 bg-[#F7F4EF]/90 backdrop-blur-md transition-transform duration-300 ease-out motion-reduce:transition-none sm:hidden ${
        isShown ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="font-serif text-xl font-bold text-[#1F1D1B]">R$19,90</span>
        <CheckoutButton className="!px-6 !py-3 !text-sm">Quero cortar em casa</CheckoutButton>
      </div>
    </div>
  );
}
