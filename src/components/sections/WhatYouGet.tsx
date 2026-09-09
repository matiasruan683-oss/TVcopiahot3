import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";
import { whatYouGetItems } from "../../lib/content";

export function WhatYouGet() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>O CONTEÚDO</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            O que você recebe
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatYouGetItems.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 60}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-[#EDE7DE] p-6 shadow-[0_8px_30px_-14px_rgba(31,29,27,0.25)]">
                <item.icon className="text-[#1F5E5B]" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">{item.title}</h3>
                <p className="font-sans text-[0.98rem] leading-[1.7] text-[#7A736B]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
