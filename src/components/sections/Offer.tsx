import { Check } from "lucide-react";
import { CheckoutButton } from "../CheckoutButton";
import { Reveal } from "../Reveal";
import { whatYouGetItems, bonuses } from "../../lib/content";

const includedItems = [
  ...whatYouGetItems.map((item) => item.title),
  ...bonuses.map((bonus) => bonus.title),
  "Garantia de 30 dias",
  "Acesso vitalício",
];

export function Offer() {
  return (
    <section id="oferta" className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <div className="rounded-3xl border-2 border-[#1F5E5B] bg-[#F7F4EF] p-6 shadow-[0_25px_60px_-20px_rgba(31,94,91,0.35)] sm:p-8">
            <p className="text-center font-sans text-sm font-bold uppercase tracking-wide text-[#1F5E5B]">
              Método das 3 Alturas + 5 cortes + 3 bônus
            </p>

            <div className="mt-4 flex flex-col items-center">
              <span className="font-sans text-lg text-[#7A736B] line-through">De R$67</span>
              <span className="font-serif text-6xl font-bold text-[#1F1D1B] sm:text-7xl">
                R$19,90
              </span>
              <p className="mt-2 text-center font-sans text-sm text-[#7A736B]">
                Pagamento único. Acesso imediato. É seu para sempre.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2.5 border-t border-[#1F1D1B]/10 pt-6">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 shrink-0 text-[#1F5E5B]" size={18} strokeWidth={2.5} />
                  <span className="font-sans text-sm text-[#1F1D1B]">{item}</span>
                </li>
              ))}
            </ul>

            <CheckoutButton className="mt-8 w-full">
              Quero cortar o cabelo dele esse fim de semana — R$19,90
            </CheckoutButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
