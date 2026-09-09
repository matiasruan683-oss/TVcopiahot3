import { CheckoutButton } from "../CheckoutButton";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="bg-noise relative bg-[#1F5E5B] px-5 py-16 sm:py-24">
      <Reveal>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#F7F4EF] sm:text-4xl">
            O corte de sábado pode ser o primeiro.
          </h2>
          <p className="font-sans text-[1.05rem] leading-[1.7] text-[#F7F4EF]/85">
            Você não precisa de mais jeito. Precisa da ordem certa.
          </p>
          <CheckoutButton className="mt-2 !bg-[#F7F4EF] !text-[#1F5E5B]">
            Começar agora — R$19,90
          </CheckoutButton>
        </div>
      </Reveal>
    </section>
  );
}
