# Alerta Sp

## Ficha da CitizenTech
| Campo | Preenchimento |
|---|---|
| Nome da CitizenTech | Alerta SP |

| Cidade e bairro | São Paulo, SP |

| Problema, em uma frase | Vítimas de enchentes em São Paulo não têm um canal simples para pedir e acompanhar ajuda. 
|
| Como funciona | A pessoa registra um pedido (tipo, bairro, urgência); voluntários veem os mais urgentes primeiro e atualizam o status. |

| Indicador de impacto | % de pedidos resolvidos (aparece na tela inicial). |
| ODS conectados | 11, 13 e 3 |

## Tecnologias
React 18 + Vite, Tailwind CSS v4, API externa (MockAPI.io).

## Pré-requisitos
Node.js 18 ou superior.

## Como rodar
```bash
npm install
cp .env.example .env 
npm run dev
```
Sem `.env`, o app funciona com localStorage (apenas para testes locais).

## Estrutura
- `src/components`: componentes de apresentação (12)
- `src/hooks`: `usePedidos` (CRUD e estado) e `useFiltros` (busca e filtros)
- `src/services`: `pedidosApi.js` (único lugar que acessa a API)
- `src/data`: constante=

## API (MockAPI.io)
Recurso `pedidos` com campos: `tipo`, `bairro`, `descricao`, `urgencia`, `status`, `criadoEm` (todos string).

## Dados do projeto

Os pedidos contêm informações como:

- tipo de ajuda
- bairro
- descrição da situação
- urgência
- status
- data de criação

## Impacto social e alinhamento com ODS

O projeto dialoga diretamente com objetivos de desenvolvimento sustentável, especialmente:

- ODS 3: saúde e bem-estar
- ODS 11: cidades e comunidades sustentáveis
- ODS 13: ação contra a mudança climática

A solução se conecta ao papel de tecnologia cívica ao fazer com que comunidades, voluntários e gestores tenham uma visão mais clara de onde há demanda e quais pedidos precisam de atendimento prioritário.

## Conclusão

O Alerta SP é um projeto de tecnologia cívica com foco em resposta rápida a situações de enchente. Sua proposta combina usabilidade, visibilidade de urgência e organização dos pedidos para fortalecer a atuação de comunidades e voluntários em momentos de crise.

A aplicação representa um exemplo prático de como interfaces bem pensadas podem transformar informação em ação e apoiar a gestão de emergências de forma mais eficiente e humana.


## Deploy
(https://alerta-sp-git-main-vision-tech6.vercel.app/)

## Git Hub Repositório
(https://github.com/arthurhuang07/Alerta-SP)

## Integrantes
(Arthur Huang: 571347 - Danilo Guerra: 570617 Ana Beatriz: 571287 - Gabriel Franch: 569668 - Nataly Martucci: 573390)
