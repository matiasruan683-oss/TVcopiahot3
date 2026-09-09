import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

interface Step {
  number: number;
  title: string;
  text: string;
  highlight?: boolean;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Marcar a linha",
    text: "Você acha com a mão, antes de ligar a máquina. É onde a curva da cabeça começa.",
  },
  {
    number: 2,
    title: "As três alturas",
    text: "Pente baixo abaixo da linha, médio na linha, alto acima. Nunca mais que três.",
  },
  {
    number: 3,
    title: "Apagar a divisa",
    text: "Duas passadas em diagonal com o pente médio. É isso que dissolve o degrau.",
    highlight: true,
  },
  {
    number: 4,
    title: "O topo por último",
    text: "Sempre. Se inverter, você perde a referência de comprimento.",
  },
];

const desktopOffsets = ["lg:ml-0", "lg:ml-8", "lg:ml-16", "lg:ml-24"];

export function Method() {
  return (
    <section className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>O MÉTODO</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            O Método das 3 Alturas
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 80} className={desktopOffsets[index]}>
              <div
                className={`flex items-start gap-5 rounded-2xl p-6 shadow-[0_10px_35px_-16px_rgba(31,29,27,0.3)] lg:max-w-xl ${
                  step.highlight
                    ? "border-2 border-[#C2703A] bg-[#F7F4EF]"
                    : "border border-[#1F1D1B]/10 bg-[#F7F4EF]"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F5E5B] font-serif text-xl font-bold text-[#F7F4EF]">
                  {step.number}
                </span>
                <div>
                  {step.highlight && (
                    <span className="mb-2 inline-block rounded-full bg-[#C2703A]/10 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wide text-[#C2703A]">
                      O passo que ninguém sabe que existe
                    </span>
                  )}
                  <h3 className="font-serif text-lg font-bold text-[#1F1D1B] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-sans text-[0.98rem] leading-[1.7] text-[#7A736B]">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
