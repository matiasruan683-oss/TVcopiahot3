import { AlertTriangle, Frown, MessageCircleWarning, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

interface Card {
  icon: LucideIcon;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    icon: Wallet,
    title: '"R$40 por corte, todo mês"',
    text: "Um filho é R$480 por ano. Dois são R$960. E a máquina já está na gaveta.",
  },
  {
    icon: Frown,
    title: '"Ele odeia a barbearia"',
    text: "O barulho, a espera, o estranho encostando na cabeça. Vira crise toda vez.",
  },
  {
    icon: AlertTriangle,
    title: '"O degrau sempre aparece"',
    text: "Você tenta consertar, corta mais, e o corte vai ficando cada vez mais curto.",
  },
  {
    icon: MessageCircleWarning,
    title: '"Os vídeos se contradizem"',
    text: "Cada um manda começar num lugar. Nenhum explica onde fica a transição.",
  },
];

export function WhyItFails() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>O QUE ESTÁ ACONTECENDO</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Por que dá errado
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delayMs={index * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-[#EDE7DE] p-6 shadow-[0_8px_30px_-14px_rgba(31,29,27,0.25)]">
                <card.icon className="text-[#C2703A]" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">{card.title}</h3>
                <p className="font-sans text-[0.98rem] leading-[1.7] text-[#7A736B]">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
