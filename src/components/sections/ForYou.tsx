import { CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

const items = [
  "Você tem máquina em casa e ela vive na gaveta",
  "Seu filho tem entre 3 e 12 anos e detesta ir à barbearia",
  "Você já tentou cortar e ficou com degrau",
  "Você quer economizar sem que ninguém perceba que foi corte caseiro",
  "Você tem 20 minutos e uma cadeira de cozinha",
  "Você nunca cortou cabelo na vida e acha que não tem jeito",
];

export function ForYou() {
  return (
    <section className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <Eyebrow>PRA QUEM É ISSO</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            É pra você se...
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4" role="list">
          {items.map((item, index) => (
            <Reveal key={item} delayMs={index * 60}>
              <div
                role="listitem"
                className="flex items-start gap-3 rounded-2xl bg-[#F7F4EF] p-4 shadow-[0_6px_20px_-14px_rgba(31,29,27,0.3)]"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#1F5E5B]" size={22} strokeWidth={2} />
                <span className="font-sans text-[1.02rem] leading-[1.6] text-[#1F1D1B]">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
