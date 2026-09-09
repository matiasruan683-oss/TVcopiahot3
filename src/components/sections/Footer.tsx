import { X } from "lucide-react";
import { useState } from "react";

type ModalContent = "terms" | "privacy" | null;

export function Footer() {
  const [openModal, setOpenModal] = useState<ModalContent>(null);

  return (
    <footer className="relative bg-[#1F1D1B] px-5 py-10 text-[#F7F4EF]/70">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
        <p className="font-serif text-lg font-bold text-[#F7F4EF]">Corte em Casa</p>

        <div className="flex gap-6 font-sans text-sm">
          <button type="button" onClick={() => setOpenModal("terms")} className="underline-offset-4 hover:underline">
            Termos de Uso
          </button>
          <button type="button" onClick={() => setOpenModal("privacy")} className="underline-offset-4 hover:underline">
            Política de Privacidade
          </button>
        </div>

        <p className="font-sans text-xs text-[#F7F4EF]/50">
          Material educativo. Resultados variam conforme prática e tipo de cabelo.
        </p>
      </div>

      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1D1B]/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-[#F7F4EF] p-6 text-left text-[#1F1D1B] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 className="font-serif text-xl font-bold">
                {openModal === "terms" ? "Termos de Uso" : "Política de Privacidade"}
              </h2>
              <button
                type="button"
                onClick={() => setOpenModal(null)}
                aria-label="Fechar"
                className="shrink-0 rounded-full p-1 text-[#7A736B] hover:text-[#1F1D1B]"
              >
                <X size={22} />
              </button>
            </div>

            {openModal === "terms" ? <TermsContent /> : <PrivacyContent />}
          </div>
        </div>
      )}
    </footer>
  );
}

function TermsContent() {
  return (
    <div className="flex flex-col gap-3 font-sans text-sm leading-[1.7] text-[#7A736B]">
      <p>
        Ao efetuar a compra do Método das 3 Alturas, você adquire uma licença de uso pessoal e
        intransferível do material digital, para consumo próprio.
      </p>
      <p>
        É proibida a reprodução, distribuição ou revenda do conteúdo sem autorização prévia por
        escrito.
      </p>
      <p>
        O material é de natureza educativa. O uso das técnicas descritas é de responsabilidade do
        comprador.
      </p>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="flex flex-col gap-3 font-sans text-sm leading-[1.7] text-[#7A736B]">
      <p>
        Coletamos apenas os dados necessários para processar sua compra e enviar o material
        adquirido, como nome e e-mail.
      </p>
      <p>
        Seus dados não são vendidos ou compartilhados com terceiros para fins de marketing sem seu
        consentimento.
      </p>
      <p>
        Você pode solicitar a exclusão dos seus dados a qualquer momento entrando em contato
        conosco.
      </p>
    </div>
  );
}
