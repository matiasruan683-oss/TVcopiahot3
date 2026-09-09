import {
  Baby,
  FileStack,
  Gift,
  Map,
  Scissors,
  ScissorsLineDashed,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContentItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const whatYouGetItems: ContentItem[] = [
  {
    icon: Map,
    title: "O Mapa da Cabeça",
    text: "As 4 zonas ilustradas, de lado, de trás e de cima",
  },
  {
    icon: Wrench,
    title: "O Método completo",
    text: "Passo a passo com o ângulo da mão e a ordem de movimento",
  },
  {
    icon: ScissorsLineDashed,
    title: "5 cortes prontos",
    text: "Baixinho fácil, social, degradê médio, topo com franja e cacheado",
  },
  {
    icon: ShieldAlert,
    title: "Deu errado, e agora",
    text: "Degrau, lado torto, corte demais e a regra do salvamento",
  },
  {
    icon: Baby,
    title: "A criança que não fica parada",
    text: "O corte de 4 minutos em duas sessões",
  },
  {
    icon: FileStack,
    title: "Materiais para imprimir",
    text: "Mapa da cabeça, tabela de pentes e ficha de registro",
  },
];

export interface Bonus {
  icon: LucideIcon;
  title: string;
  text: string;
  originalPrice: string;
}

export const bonuses: Bonus[] = [
  {
    icon: Scissors,
    title: "Corte Feminino Simples",
    text: "Franja e aparar pontas em casa",
    originalPrice: "R$37",
  },
  {
    icon: Sparkles,
    title: "Barba do Pai",
    text: "O mesmo método aplicado no adulto",
    originalPrice: "R$27",
  },
  {
    icon: Gift,
    title: "Kit de Sobrevivência",
    text: "Como cortar só com tesoura e pente",
    originalPrice: "R$27",
  },
];
