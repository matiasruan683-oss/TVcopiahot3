import { Plus } from "lucide-react";
import { useId, useState } from "react";

interface AccordionItemData {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-[#1F1D1B]/10 bg-[#F7F4EF] shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-serif text-base font-semibold sm:text-lg">{item.question}</span>
        <Plus
          className="shrink-0 text-[#1F5E5B] transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          size={22}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[#7A736B] leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
