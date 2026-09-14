# Defreitas — Design System

Sistema de identidade visual da Defreitas, extraído do documento de
**Posicionamento de Marca** (Claude Design, 2026). Este diretório é a fonte
de verdade para cor, tipografia, logotipo, tom de voz e papelaria
institucional a ser usada em qualquer material — digital ou impresso.

## Posicionamento

> **Patrimônio próprio, gestão direta.**

A Defreitas é proprietária de seu portfólio de imóveis. Administra
diretamente locação, venda, manutenção e obras, com transparência e método.

### Pilares

| # | Pilar | Descrição |
|---|-------|-----------|
| 01 | Propriedade direta | Os imóveis são da Defreitas. Uma só responsável, do contrato à chave. |
| 02 | Transparência | Prestação de contas clara, sem letras miúdas. |
| 03 | Constância | Acompanhamento contínuo, não só em momentos de crise. |
| 04 | Responsabilidade técnica | Manutenção e obras conduzidas internamente, sem intermediários. |

## Cores

Definidas em [`tokens/colors.css`](./tokens/colors.css) (custom properties)
e [`tokens/tokens.json`](./tokens/tokens.json) (formato portável).

| Token | Hex | Uso |
|---|---|---|
| `--df-brown-900` | `#2E2118` | Fundo institucional escuro (capas, destaques fortes) |
| `--df-brown-800` | `#3A2A1F` | Títulos e cabeçalhos sobre fundo claro |
| `--df-brown-700` | `#6B4A34` | Variações de marca |
| `--df-brown-600` | `#8B6449` | Rótulos/labels em mono sobre fundo claro |
| `--df-brown-500-on-dark` | `#C97A3F` | Acento sobre fundo institucional escuro |
| `--df-orange-600` | `#C1622D` | **Acento único** sobre fundo claro: assinatura, destaque, valores |
| `--df-gray-900` | `#2B2723` | Texto principal |
| `--df-gray-700` | `#55504A` | Texto secundário / corpo de cláusulas |
| `--df-gray-500` | `#8B8479` | Texto auxiliar, legendas, rodapés |
| `--df-gray-300` | `#D9D3C8` | Bordas leves, divisores |
| `--df-paper` | `#F4F1EC` | Fundo "papel" / texto sobre institucional escuro |
| `--df-white` | `#FFFFFF` | Fundo padrão de documentos |

**Regra de aplicação:** marrom é a cor institucional (títulos, cabeçalhos,
logotipo). Laranja é usado **só como acento** — assinatura visual, destaque,
campo ativo — nunca como cor dominante. Cinzas conduzem o texto corrido.

## Tipografia

Definida em [`tokens/typography.css`](./tokens/typography.css).

| Família | Pesos | Uso |
|---|---|---|
| **Source Serif 4** | 400, 600, 700 | Títulos, capas, nome da empresa |
| **Work Sans** | 400, 500, 600 | Corpo de texto, contratos, relatórios |
| **IBM Plex Mono** | 400, 500 | Números, datas, campos e códigos |

Fontes carregadas via Google Fonts (ver `@import` em `typography.css`).

## Logotipo

Uso tipográfico simples, sem símbolo: `DEFREITAS` em Source Serif 4 Bold,
com o descritor `IMÓVEIS PRÓPRIOS` em IBM Plex Mono abaixo, letter-spacing
largo (0.28em), maiúsculas.

- **Sobre fundo claro:** `DEFREITAS` em `--df-brown-800`, descritor em `--df-brown-600`.
- **Sobre fundo institucional escuro** (`--df-brown-900`): `DEFREITAS` em `--df-paper`, descritor em `--df-brown-500-on-dark`.
- **Área de respiro** mínima ao redor equivalente à altura do "D".

## Tom de voz

- Direto e sóbrio, sem adjetivos vazios.
- Primeira pessoa institucional ("informamos", "administramos").
- Datas, valores e números sempre explícitos.
- Sem emojis, sem pontos de exclamação.

## Papelaria institucional

Modelos prontos em HTML/CSS (formato A4, para impressão ou exportação em
PDF), em [`templates/`](./templates/). Cada modelo reutiliza os tokens de
cor e tipografia e os padrões de cabeçalho/rodapé definidos em
[`templates/_base.css`](./templates/_base.css).

| Modelo | Arquivo |
|---|---|
| Papel timbrado | [`templates/papel-timbrado.html`](./templates/papel-timbrado.html) |
| Contrato de locação | [`templates/contrato-locacao.html`](./templates/contrato-locacao.html) |
| Contrato de compra e venda | [`templates/contrato-compra-venda.html`](./templates/contrato-compra-venda.html) |
| Relatório de gestão e prestação de contas | [`templates/relatorio-gestao.html`](./templates/relatorio-gestao.html) |
| Proposta de obra e manutenção | [`templates/proposta-obra.html`](./templates/proposta-obra.html) |
| Recibo | [`templates/recibo.html`](./templates/recibo.html) |

Campos entre colchetes (`[_____]`, `[nome completo]` etc.) são placeholders
a preencher por quem emite o documento ou por integração de dados.

O conjunto completo de cláusulas padrão do contrato de compra e venda
(conteúdo jurídico, não layout) está em [`../Cont_venda.md`](../Cont_venda.md),
na raiz do repositório — é o documento-parâmetro para montar qualquer
contrato de venda a partir do modelo `contrato-compra-venda.html`.

### Dados institucionais fixos

Usados em todos os modelos de papelaria:

- **Razão social:** Defreitas Compra, Venda, Incorporação e Locação de Bens Imóveis Próprios Ltda
- **CNPJ:** 11.435.163/0001-13
- **Endereço:** R. Lafeta, 116, Sala 105, Centro, Montes Claros/MG, CEP 39.400-045

## Como usar

- **Cor e tipografia:** importe `tokens/colors.css` e `tokens/typography.css`
  em qualquer projeto (web, e-mail, app interno) e use as custom properties
  (`var(--df-orange-600)` etc.) em vez de valores hexadecimais soltos.
- **Tokens portáveis:** `tokens/tokens.json` expõe os mesmos valores em JSON
  para uso em ferramentas de design ou pipelines que não leem CSS
  diretamente.
- **Documentos:** abra o `.html` correspondente, substitua os placeholders e
  exporte/imprima em A4. Se o material for implementado em outra stack
  (ex. geração de PDF no backend, template de e-mail), recrie o layout
  usando os mesmos tokens — não é necessário reaproveitar a estrutura HTML
  literalmente, apenas o resultado visual.

## Origem

Conteúdo extraído do handoff `Posicionamento de marca Defreitas` (Claude
Design), recebido em formato `.dc.html`. O arquivo original não é versionado
aqui — este diretório é a tradução desse posicionamento em tokens e modelos
reutilizáveis para o repositório.
