import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { Eyebrow } from "../Eyebrow";
import { Lightbox } from "../Lightbox";
import { Reveal } from "../Reveal";

// Placeholders — trocar pelos screenshots reais das páginas do PDF antes de publicar.
const prints = ["PRINT_1", "PRINT_2", "PRINT_3", "PRINT_4", "PRINT_5", "PRINT_6"];

export function Gallery() {
  const [openPrint, setOpenPrint] = useState<string | null>(null);

  return (
    <section className="bg-noise relative bg-[#EDE7DE] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>POR DENTRO DO MATERIAL</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F1D1B] sm:text-4xl">
            Dê uma olhada por dentro
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {prints.map((print, index) => (
            <Reveal key={print} delayMs={index * 60}>
              <button
                type="button"
                onClick={() => setOpenPrint(print)}
                className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl bg-[#F7F4EF] text-[#7A736B] shadow-[0_8px_24px_-14px_rgba(31,29,27,0.3)] transition-transform duration-200 hover:scale-[1.02] motion-reduce:hover:scale-100"
              >
                <ImageIcon size={28} strokeWidth={1.5} />
                <span className="font-sans text-xs font-semibold uppercase tracking-wide">
                  {print}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={prints.length * 60}>
          <p className="mt-8 text-center font-sans text-base font-bold text-[#1F1D1B]">
            São só algumas páginas do material.
          </p>
        </Reveal>
      </div>

      {openPrint && <Lightbox label={openPrint} onClose={() => setOpenPrint(null)} />}
    </section>
  );
}
