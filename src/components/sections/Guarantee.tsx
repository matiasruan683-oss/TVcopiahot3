import { GuaranteeSeal } from "../GuaranteeSeal";
import { Reveal } from "../Reveal";

export function Guarantee() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <GuaranteeSeal />
          <div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#1F1D1B] sm:text-3xl">
              Teste sem risco por 30 dias
            </h2>
            <p className="mt-3 font-sans text-[1.05rem] leading-[1.7] text-[#7A736B]">
              Faça o primeiro corte. Se não funcionar na sua mão, me manda uma mensagem e eu
              devolvo o valor integral. Sem pergunta e sem burocracia.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
