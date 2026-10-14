/**
 * Gera PDF e Word de um contrato a partir de um conteudo.json, usando os
 * mesmos renderizadores da minuta de compra e venda
 * (design-system/ferramentas/minuta-compra-venda.html). Assim todo contrato
 * sai com o mesmo cabeçalho, quadro-resumo, cláusulas, assinaturas e rodapé.
 *
 * Uso: node contratos/gerar.mjs contratos/<pasta>/conteudo.json
 * Saída: <arquivo>.pdf e <arquivo>.docx na mesma pasta do conteudo.json.
 *
 * Requer Playwright com Chromium e acesso a cdnjs (jsPDF e JSZip).
 */
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); }
catch { playwright = require(join(process.execPath, '../../lib/node_modules/playwright')); }

const entrada = resolve(process.argv[2] || '');
const conteudo = JSON.parse(readFileSync(entrada, 'utf8'));
const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ferramenta = join(raiz, 'design-system/ferramentas/minuta-compra-venda.html');

const browser = await playwright.chromium.launch();
try {
  const page = await browser.newPage();
  /* Sem acesso a cdnjs, aponte DF_LIBS para uma pasta com jspdf/ e jszip/
     (pacotes npm jspdf@2.5.1 e jszip@3.10.1) e as bibliotecas saem dela. */
  if (process.env.DF_LIBS) {
    const locais = {
      'jspdf.umd.min.js': join(process.env.DF_LIBS, 'jspdf/dist/jspdf.umd.min.js'),
      'jszip.min.js': join(process.env.DF_LIBS, 'jszip/dist/jszip.min.js'),
    };
    await page.route('https://cdnjs.cloudflare.com/**', (route) => {
      const nome = route.request().url().split('/').pop();
      return locais[nome]
        ? route.fulfill({ contentType: 'application/javascript', body: readFileSync(locais[nome], 'utf8') })
        : route.abort();
    });
  }
  await page.goto(pathToFileURL(ferramenta).href, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.jspdf && window.JSZip);
  const saida = await page.evaluate(async ({ num, blocos }) => {
    const b64 = async (blob) => {
      const buf = new Uint8Array(await blob.arrayBuffer());
      let s = '';
      for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
      return btoa(s);
    };
    const d = { num };
    return { pdf: await b64(gerarPDF(d, blocos)), docx: await b64(await gerarDOCX(d, blocos)) };
  }, conteudo);
  const base = join(dirname(entrada), conteudo.arquivo);
  writeFileSync(base + '.pdf', Buffer.from(saida.pdf, 'base64'));
  writeFileSync(base + '.docx', Buffer.from(saida.docx, 'base64'));
  console.log('Gerados:\n  ' + base + '.pdf\n  ' + base + '.docx');
} finally {
  await browser.close();
}
