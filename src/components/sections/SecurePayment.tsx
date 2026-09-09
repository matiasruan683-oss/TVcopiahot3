import { Lock } from "lucide-react";

export function SecurePayment() {
  return (
    <section className="relative bg-[#EDE7DE] px-5 pb-16 sm:pb-24">
      <div className="mx-auto flex max-w-lg items-center justify-center gap-2 text-center">
        <Lock className="shrink-0 text-[#7A736B]" size={16} />
        <p className="font-sans text-sm text-[#7A736B]">
          Pagamento seguro · Pix e cartão · Acesso imediato por e-mail
        </p>
      </div>
    </section>
  );
}
