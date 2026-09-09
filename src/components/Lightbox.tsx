import { ImageIcon, X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  label: string;
  onClose: () => void;
}

export function Lightbox({ label, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1D1B]/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-[#F7F4EF] p-2 text-[#1F1D1B]"
        aria-label="Fechar"
      >
        <X size={22} />
      </button>
      <div
        className="flex aspect-square w-full max-w-md flex-col items-center justify-center gap-3 rounded-2xl bg-[#EDE7DE] text-[#7A736B]"
        onClick={(event) => event.stopPropagation()}
      >
        <ImageIcon size={48} strokeWidth={1.5} />
        <span className="font-sans text-sm font-semibold uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
