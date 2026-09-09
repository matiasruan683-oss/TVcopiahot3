import { Accordion } from "../Accordion";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

const faqItems = [
  {
    question: "Vou estragar o cabelo dele.",
    answer:
      "O corte 1 é feito com um pente só, do começo ao fim. Não tem como dar degrau.",
  },
  {
    question: "Não tenho jeito para isso.",
    answer: "Não é jeito, é ordem. O método é justamente a ordem.",
  },
  {
    question: "Meu filho não fica parado.",
    answer:
      "Tem uma parte inteira sobre isso, com o corte dividido em duas sessões curtas.",
  },
  {
    question: "Isso eu acho no YouTube.",
    answer:
      "Acha. E acha quarenta vídeos que se contradizem. Aqui é um caminho só, do começo ao fim.",
  },
  {
    question: "Serve para cabelo cacheado?",
    answer:
      "Serve, e tem uma seção específica sobre o que muda. Cabelo muito crespo tem particularidades que estão explicadas lá.",
  },
  {
    question: "Como eu recebo?",
    answer:
      "Por e-mail, na hora em que o pagamento é confirmado. É um PDF: leia no celular ou imprima.",
  },
  {
    question: "Preciso comprar alguma coisa?",
    answer:
      "Só a máquina, que você provavelmente já tem. O material lista o que é necessário e o que não vale a pena comprar.",
  },
];

export function Faq() {
  return (
    <section className="bg-noise relative bg-[#F7F4EF] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <Eyebrow>DÚVIDAS</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
