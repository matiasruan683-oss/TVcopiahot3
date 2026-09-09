import { Reveal } from "../Reveal";

const paragraphs = [
  "Comprou a máquina. Assistiu dois vídeos. Sentou o menino na cadeira da cozinha.",
  "Foi indo pela lateral, subindo devagar, achando que ia dar certo.",
  "E aí apareceu a linha. Aquele degrau que você tentou disfarçar por dez minutos e só piorou.",
  "No dia seguinte ele foi pra escola de boné.",
];

export function Scene() {
  return (
    <section className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-md">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Você já tentou uma vez, né?
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delayMs={index * 80}>
              <p className="mx-auto max-w-[62ch] font-sans text-[1.05rem] leading-[1.7] text-[#1F1D1B]/80">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={paragraphs.length * 80}>
          <p className="mt-8 text-center font-serif text-xl font-bold leading-snug text-[#1F5E5B] sm:text-2xl">
            O problema não foi sua mão. Foi por onde você começou.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
