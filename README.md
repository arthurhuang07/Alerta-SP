# SOS Enchente SP

## Ficha da CitizenTech
| Campo | Preenchimento |
|---|---|
| Nome da CitizenTech | SOS Enchente SP |
| Cidade e bairro | São Paulo, SP — (COMPLETAR: bairro/região escolhido) |
| Cidadão beneficiado | (COMPLETAR: pessoa real que vocês entrevistaram) |
| Problema, em uma frase | Vítimas de enchentes em São Paulo não têm um canal simples para pedir e acompanhar ajuda. |
| Como funciona | A pessoa registra um pedido (tipo, bairro, urgência); voluntários veem os mais urgentes primeiro e atualizam o status. |
| O que cada parte faz | (COMPLETAR com as 7 disciplinas) Front-end/Web: esta aplicação React. |
| Link do repositório | (COMPLETAR) |
| Indicador de impacto | % de pedidos resolvidos (aparece na tela inicial). |
| ODS conectados | 11, 13 e 3 |

## Tecnologias
React 18 + Vite, Tailwind CSS v4, API externa (MockAPI.io).

## Pré-requisitos
Node.js 18 ou superior.

## Como rodar
```bash
npm install
cp .env.example .env   # edite VITE_API_URL com a URL do seu MockAPI
npm run dev
```
Sem `.env`, o app funciona com localStorage (apenas para testes locais).

## Estrutura
- `src/components`: componentes de apresentação (12)
- `src/hooks`: `usePedidos` (CRUD e estado) e `useFiltros` (busca e filtros)
- `src/services`: `pedidosApi.js` (único lugar que acessa a API)
- `src/data`: constantes

## API (MockAPI.io)
Recurso `pedidos` com campos: `tipo`, `bairro`, `descricao`, `urgencia`, `status`, `criadoEm` (todos string).

## Deploy
(COLAR AQUI O LINK DO DEPLOY). Na Vercel, cadastre a variável `VITE_API_URL`.

## Integrantes
(COMPLETAR: nome completo e RM de cada integrante)
