# Defreitas

Repositório da Defreitas Imóveis Próprios.

## Design system

A identidade visual da marca (cores, tipografia, logotipo, tom de voz e
papelaria institucional) está documentada em [`design-system/`](./design-system/README.md).

## Contratos

Contratos emitidos ficam em [`contratos/`](./contratos/), um por pasta. Cada
pasta guarda o `conteudo.json` (texto do contrato em blocos: título,
quadro-resumo, cláusulas, parágrafos, itens e assinaturas) e o PDF e o Word
gerados a partir dele com o mesmo layout da minuta de compra e venda:

```
node contratos/gerar.mjs contratos/<pasta>/conteudo.json
```

Requer Playwright com Chromium. Sem acesso a cdnjs, defina `DF_LIBS` com uma
pasta que contenha os pacotes npm `jspdf@2.5.1` e `jszip@3.10.1`.

| Contrato | Pasta |
|---|---|
| Locação não residencial — galpão da Rua Panamá, 158 — Turano Construtora | [`contratos/locacao-galpao-turano/`](./contratos/locacao-galpao-turano/) |
