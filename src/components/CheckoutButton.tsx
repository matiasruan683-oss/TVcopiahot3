import type { ReactNode } from "react";
import { CHECKOUT_URL } from "../lib/constants";

const isCheckoutReady = CHECKOUT_URL !== "#";

interface CheckoutButtonProps {
  children: ReactNode;
  className?: string;
}

/** Botão de compra: aponta para CHECKOUT_URL na mesma aba. Fica desabilitado enquanto CHECKOUT_URL === "#". */
export function CheckoutButton({ children, className = "" }: CheckoutButtonProps) {
  const base =
    "btn-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1F5E5B] px-8 py-4 text-center font-sans text-base font-bold text-[#F7F4EF] shadow-lg shadow-[#1F5E5B]/20";

  if (!isCheckoutReady) {
    return (
      <button type="button" disabled className={`${base} ${className}`} aria-disabled="true">
        {children}
      </button>
    );
  }

  return (
    <a href={CHECKOUT_URL} className={`${base} ${className}`}>
      {children}
    </a>
  );
}
