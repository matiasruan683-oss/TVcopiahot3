import { CalendarCheck2, MailCheck, ScissorsSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

interface Step {
  icon: LucideIcon;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    icon: MailCheck,
    title: "Compre",
    text: "Acesso imediato por e-mail assim que o pagamento cai.",
  },
  {
    icon: CalendarCheck2,
    title: "Leia em 15 minutos",
    text: "O método inteiro cabe numa sentada.",
  },
  {
    icon: ScissorsSquare,
    title: "Corte no fim de semana",
    text: "Comece pelo corte 1, que é feito com um pente só.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>SIMPLES ASSIM</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Como funciona
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 100}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5E5B]/10">
                  <step.icon className="text-[#1F5E5B]" size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">
                  {index + 1}. {step.title}
                </h3>
                <p className="max-w-[28ch] font-sans text-[0.98rem] leading-[1.7] text-[#7A736B]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
