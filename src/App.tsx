import { Bonuses } from "./components/sections/Bonuses";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Footer } from "./components/sections/Footer";
import { ForYou } from "./components/sections/ForYou";
import { Gallery } from "./components/sections/Gallery";
import { Guarantee } from "./components/sections/Guarantee";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Method } from "./components/sections/Method";
import { NotJustTutorial } from "./components/sections/NotJustTutorial";
import { Offer } from "./components/sections/Offer";
import { Scene } from "./components/sections/Scene";
import { SecurePayment } from "./components/sections/SecurePayment";
import { WhatYouGet } from "./components/sections/WhatYouGet";
import { WhyItFails } from "./components/sections/WhyItFails";
import { StickyBar } from "./components/StickyBar";

function App() {
  return (
    <div className="overflow-x-hidden pb-16 sm:pb-0">
      <Hero />
      <Scene />
      <WhyItFails />
      <ForYou />
      <NotJustTutorial />
      <Method />
      <WhatYouGet />
      <Gallery />
      <HowItWorks />
      <Bonuses />
      <Guarantee />
      <Offer />
      <SecurePayment />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyBar />
    </div>
  );
}

export default App;
