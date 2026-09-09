import { LifeBuoy, ListChecks, MapPinned, PackageCheck } from "lucide-react";
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
    icon: ListChecks,
    title: "Um caminho só",
    text: "Não são 40 vídeos se contradizendo. É uma ordem, do começo ao fim.",
  },
  {
    icon: MapPinned,
    title: "O ponto exato",
    text: "Existe uma linha na cabeça que é igual em todo mundo. Você aprende a achar com a mão.",
  },
  {
    icon: PackageCheck,
    title: "5 cortes prontos",
    text: "Cada um com a combinação de pentes já marcada no mapa.",
  },
  {
    icon: LifeBuoy,
    title: "E quando der errado",
    text: "Tem uma parte inteira sobre consertar — e sobre quando parar de tentar.",
  },
];

export function NotJustTutorial() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>O QUE MUDA</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Não é mais um tutorial
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delayMs={index * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-[#EDE7DE] p-6 shadow-[0_8px_30px_-14px_rgba(31,29,27,0.25)]">
                <card.icon className="text-[#1F5E5B]" size={28} strokeWidth={1.5} />
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
