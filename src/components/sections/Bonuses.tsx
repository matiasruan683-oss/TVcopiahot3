import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { bonuses } from "../../lib/content";

export function Bonuses() {
  return (
    <section className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>OS 3 BÔNUS</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            E ainda vão junto, sem custo:
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Reveal key={bonus.title} delayMs={index * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-[#F7F4EF] p-6 text-center shadow-[0_8px_30px_-14px_rgba(31,29,27,0.25)]">
                <bonus.icon className="mx-auto text-[#C2703A]" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">{bonus.title}</h3>
                <p className="font-sans text-[0.95rem] leading-[1.6] text-[#7A736B]">{bonus.text}</p>
                <p className="mt-auto font-sans text-sm">
                  <span className="text-[#7A736B] line-through">{bonus.originalPrice}</span>{" "}
                  <span className="font-bold text-[#1F5E5B]">incluso</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
