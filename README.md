# Método das 3 Alturas — Landing Page

Landing page de vendas de página única para um infoproduto de corte de cabelo infantil em casa. Estática, sem backend, sem banco de dados, sem login e sem formulário de captura — feita para tráfego de Meta Ads no celular.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- lucide-react
- Sem bibliotecas de animação (CSS puro + IntersectionObserver)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configurar o checkout

Edite `CHECKOUT_URL` em `src/lib/constants.ts`. Enquanto o valor for `"#"`, todos os botões de compra ficam desabilitados. Assim que uma URL real for definida, os botões passam a funcionar automaticamente.
