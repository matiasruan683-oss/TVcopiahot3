import { Scissors } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section className="bg-noise relative overflow-hidden bg-[#F7F4EF] px-5 pb-16 pt-14 sm:pt-20">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <Reveal>
          <Eyebrow>MÉTODO DAS 3 ALTURAS</Eyebrow>
          <h1 className="font-serif text-[2.4rem] font-bold leading-[1.1] tracking-tight text-[#1F1D1B] sm:text-6xl lg:text-[4rem]">
            O degrau não é falta de jeito. É você começar pelo lugar errado da cabeça.
          </h1>
          <p className="mx-auto mt-6 max-w-[34ch] font-sans text-[1.05rem] italic leading-[1.7] text-[#7A736B]">
            Três pentes, na ordem certa, fazem um degradê sem degrau — mesmo que você nunca tenha
            cortado cabelo na vida.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div
            className="mx-auto mt-10 w-56 rotate-[-2deg] rounded-2xl bg-[#EDE7DE] p-4 shadow-[0_20px_45px_-15px_rgba(31,29,27,0.35)] sm:w-64"
          >
            <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-xl border border-[#1F1D1B]/10 bg-[#F7F4EF] text-[#7A736B]">
              <Scissors size={36} strokeWidth={1.5} />
              <span className="px-4 text-center font-sans text-xs font-semibold uppercase tracking-wide">
                Mockup do e-book
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#oferta"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1F5E5B] px-8 py-4 text-center font-sans text-base font-bold text-[#F7F4EF] shadow-lg shadow-[#1F5E5B]/20"
            >
              QUERO CORTAR EM CASA
            </a>
            <p className="font-sans text-sm text-[#7A736B]">
              Acesso imediato · Garantia de 30 dias
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
