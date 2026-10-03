# Cont_locacao — Contrato padrão de locação de imóvel

> Documento-parâmetro do repositório Defreitas. É a partir daqui que se monta
> qualquer contrato de locação de imóvel da Defreitas: a estrutura completa,
> as cláusulas padrão e os campos que mudam a cada locação — sempre marcados
> entre colchetes (`[_____]`).

## Como usar

1. Copie o texto das cláusulas abaixo para o modelo visual em
   [`design-system/templates/contrato-locacao.html`](./design-system/templates/contrato-locacao.html),
   preenchendo cada campo entre colchetes com os dados da locação.
2. Este documento é a referência de **conteúdo jurídico**; o HTML é a
   referência de **layout** (cores, tipografia, cabeçalho e rodapé — ver
   [`design-system/README.md`](./design-system/README.md)).
3. Cláusulas e parágrafos marcados "quando aplicável" só entram na versão
   final se a condição descrita valer para o imóvel ou a locação (ex.:
   condomínio, locação não residencial, prazo igual ou superior a 30 meses).
4. Na Cláusula 7ª (garantia), escolha **uma única** modalidade e apague as
   demais. A Lei nº 8.245/1991 proíbe exigir mais de uma garantia no mesmo
   contrato (art. 37, parágrafo único).
5. Siga o tom de voz da marca: direto e sóbrio, primeira pessoa
   institucional, datas e valores sempre explícitos, sem adjetivos vazios,
   sem emojis, sem pontos de exclamação.
6. Toda minuta preenchida deve passar por revisão jurídica antes da
   assinatura — este modelo é ponto de partida, não substitui análise caso a
   caso.

## Origem

Estrutura adaptada a partir de um contrato de aluguel residencial já usado
em Montes Claros/MG (casa, prazo de 12 meses, vencimento no dia 10, sem
fiador). Do contrato de origem foram mantidos os elementos operacionais que
funcionaram na prática:

- quadro de dados do imóvel, do locador e do locatário no início do
  contrato;
- prazo de 12 meses, vencimento fixo no mês e cobrança proporcional
  (*pro rata*) do primeiro período, quando a entrada no imóvel não coincide
  com o dia do vencimento;
- IPTU, taxa de lixo, água, energia e telefone por conta do locatário, com
  possibilidade de reembolso do IPTU e da taxa de lixo em valor fechado;
- devolução do imóvel com pintura de cor e padrão definidos no contrato;
- assinatura com duas testemunhas.

E foram removidos ou corrigidos:

- **Cláusulas de administração imobiliária.** A maior parte do contrato de
  origem (comissão mensal, corpo de advogados da administradora, divisão de
  multas entre proprietário e imobiliária, isenção de responsabilidade da
  administradora, rescisão do contrato de administração) regula a relação
  entre um proprietário e uma imobiliária, não a locação. A Defreitas é
  proprietária e administra diretamente seus imóveis, então nada disso se
  aplica: o contrato é entre a LOCADORA e o(a) LOCATÁRIO(A), sem terceiros.
- **Antecipação de aluguéis cumulada com caução.** O contrato de origem
  cobrava dois meses antecipados "a título de caução" por falta de fiador.
  A lei só permite cobrar aluguel antecipado quando a locação não tem
  nenhuma garantia (art. 20 c/c art. 42), e a caução em dinheiro, quando
  escolhida, é limitada a 3 aluguéis e deve ser depositada em poupança, com
  os rendimentos revertidos ao locatário (art. 38, §2º). Exigir as duas
  coisas, ou exigir antecipação fora das hipóteses legais, é vedado (art.
  37, parágrafo único, e art. 43, III). O modelo separa as duas situações
  em opções excludentes na Cláusula 7ª.
- **Prorrogação "por igual período".** Em locação residencial com prazo
  inferior a 30 meses, findo o prazo a locação se prorroga por prazo
  indeterminado e a retomada pelo locador só é possível nas hipóteses do
  art. 47. A Cláusula 2ª segue a regra legal em vez de prometer uma
  retomada que a lei não garante.
- Referências cruzadas entre cláusulas que não batiam e datas
  inconsistentes ao longo do texto.

---

## Dados institucionais fixos (LOCADORA)

Usar em toda cláusula de qualificação das partes:

- **Razão social:** Defreitas Compra, Venda, Incorporação e Locação de Bens Imóveis Próprios Ltda
- **CNPJ:** 11.435.163/0001-13
- **Endereço:** R. Lafeta, 116, Sala 105, Centro, Montes Claros/MG, CEP 39.400-045
- **Representante(s):** [nome completo, nacionalidade, estado civil, profissão, CPF, RG, cargo/poderes de representação]

---

## Modelo de contrato

**CONTRATO DE LOCAÇÃO DE IMÓVEL [RESIDENCIAL / NÃO RESIDENCIAL]**
Nº [000/2026]

### Quadro-resumo

| Campo | Preenchimento |
|---|---|
| Imóvel | [tipo: casa / apartamento / sala / loja / galpão] |
| Endereço completo | [logradouro, nº, complemento, bairro, cidade/UF, CEP] |
| Matrícula | [nº da matrícula] — [ofício / comarca] |
| Inscrição imobiliária (IPTU) | [nº] |
| Finalidade | [residencial / não residencial: atividade de _____] |
| Locatário(s) | [nome completo] |
| E-mail e telefone do(a) locatário(a) | [e-mail] — [telefone] |
| Prazo | [12 (doze)] meses — de [dd/mm/aaaa] a [dd/mm/aaaa] |
| Aluguel mensal | R$ [valor] ([valor por extenso]) |
| Vencimento | Todo dia [10] de cada mês |
| Primeiro aluguel (proporcional) | R$ [valor], referente a [nº] dias, de [dd/mm/aaaa] a [dd/mm/aaaa], vencimento em [dd/mm/aaaa] |
| Forma de pagamento | [PIX / transferência / boleto] — [banco, agência, conta, chave PIX] |
| Reajuste | Anual, pelo [IGP-M / IPCA], a cada [mês de aniversário] |
| Garantia | [caução em dinheiro / fiança / seguro-fiança / sem garantia — pagamento antecipado] |
| IPTU e taxa de lixo | Por conta do(a) locatário(a) — [pagamento direto das guias / reembolso de R$ [valor] em [parcela única / nº parcelas]] |
| Condomínio (se houver) | Despesas ordinárias por conta do(a) locatário(a) — valor atual R$ [valor] |
| Pintura de devolução | Paredes em [cor], tetos em [cor], tinta [marca / linha] ou de qualidade equivalente |
| Multa por devolução antecipada | [3 (três)] aluguéis, proporcional ao tempo restante do contrato |

### Identificação das partes

**LOCADORA:** DEFREITAS COMPRA, VENDA, INCORPORAÇÃO E LOCAÇÃO DE BENS IMÓVEIS PRÓPRIOS LTDA, CNPJ 11.435.163/0001-13, com sede na R. Lafeta, 116, Sala 105, Centro, Montes Claros/MG, CEP 39.400-045, neste ato representada na forma de seu contrato social por [nome, nacionalidade, estado civil, profissão, CPF, RG], doravante denominada LOCADORA, proprietária do imóvel abaixo identificado.

**LOCATÁRIO(A):** [nome completo], [nacionalidade], [estado civil], [profissão], inscrito(a) no CPF sob nº [_____], portador(a) do RG nº [_____], residente e domiciliado(a) em [endereço completo], e-mail [_____], telefone [_____], doravante denominado(a) LOCATÁRIO(A).

**FIADOR(A) (somente se a garantia escolhida for fiança):** [nome completo], [nacionalidade], [estado civil], [profissão], inscrito(a) no CPF sob nº [_____], portador(a) do RG nº [_____], residente e domiciliado(a) em [endereço completo], [e cônjuge, se casado(a): nome, CPF, RG], doravante denominado(a) FIADOR(A).

Pelo presente instrumento particular, as partes acima identificadas têm entre si justo e contratado o presente **Contrato de Locação de Imóvel**, que se regerá pelas cláusulas seguintes e pela Lei nº 8.245/1991 (Lei do Inquilinato) e, subsidiariamente, pelo Código Civil.

---

**CLÁUSULA 1ª — DO OBJETO E DA FINALIDADE**

O objeto do presente contrato é a locação do imóvel [descrição: tipo, endereço completo, área, número de cômodos, vaga(s) de garagem, dependências], registrado sob a matrícula nº [_____] do [_____]º Ofício de Registro de Imóveis de [cidade/UF], de propriedade da LOCADORA.

*Parágrafo primeiro* — O imóvel destina-se exclusivamente a fins [residenciais, para moradia do(a) LOCATÁRIO(A) e de sua família / não residenciais, para o exercício da atividade de _____], sendo vedada a alteração de sua finalidade sem consentimento prévio e por escrito da LOCADORA.

*Parágrafo segundo (quando não residencial)* — Cabe ao(à) LOCATÁRIO(A) obter, às suas expensas, os alvarás, licenças e autorizações necessários ao exercício de sua atividade, respondendo por multas e interdições decorrentes da falta deles.

**CLÁUSULA 2ª — DO PRAZO**

A locação vigorará pelo prazo de [12 (doze)] meses, com início em [dd/mm/aaaa] e término em [dd/mm/aaaa], data em que o(a) LOCATÁRIO(A) se obriga a restituir o imóvel livre e desocupado, nas condições previstas na Cláusula 11ª, salvo prorrogação.

*Parágrafo primeiro* — Findo o prazo ajustado, se o(a) LOCATÁRIO(A) permanecer no imóvel por mais de 30 (trinta) dias sem oposição da LOCADORA, a locação prorroga-se por prazo indeterminado, mantidas as demais cláusulas deste contrato.

*Parágrafo segundo (prazo inferior a 30 meses, locação residencial)* — Prorrogada a locação, a LOCADORA somente poderá retomar o imóvel nas hipóteses do art. 47 da Lei nº 8.245/1991.

*Parágrafo segundo (prazo igual ou superior a 30 meses, locação residencial)* — Prorrogada a locação, a LOCADORA poderá denunciá-la a qualquer tempo, concedido o prazo de 30 (trinta) dias para desocupação, nos termos do art. 46, §2º, da Lei nº 8.245/1991.

*Parágrafo terceiro* — Durante a prorrogação por prazo indeterminado, o(a) LOCATÁRIO(A) poderá denunciar a locação mediante aviso por escrito com antecedência mínima de 30 (trinta) dias, sob pena de pagar a quantia correspondente a um mês de aluguel e encargos (art. 6º da Lei nº 8.245/1991).

**CLÁUSULA 3ª — DO ALUGUEL, DO VENCIMENTO E DA FORMA DE PAGAMENTO**

O aluguel mensal é de R$ [valor] ([valor por extenso]), vencendo todo dia [10] de cada mês, a ser pago pelo(a) LOCATÁRIO(A) à LOCADORA mediante [PIX / transferência bancária / boleto], conforme dados: [banco, agência, conta, chave PIX, titular].

*Parágrafo primeiro* — O primeiro aluguel será cobrado de forma proporcional aos dias de ocupação, no valor de R$ [valor] ([valor por extenso]), referente ao período de [dd/mm/aaaa] a [dd/mm/aaaa], com vencimento em [dd/mm/aaaa]. Os aluguéis seguintes vencem a partir de [dd/mm/aaaa], sempre no dia [10] de cada mês.

*Parágrafo segundo* — O aluguel é pago [no mês vencido, referente ao mês anterior de ocupação / antecipadamente, até o 6º (sexto) dia útil do mês a que se refere, exclusivamente na hipótese da Cláusula 7ª, opção D].

*Parágrafo terceiro* — O comprovante de pagamento emitido pela instituição financeira vale como recibo. A LOCADORA fornecerá recibo discriminado das importâncias pagas sempre que solicitado (art. 22, VI, da Lei nº 8.245/1991).

**CLÁUSULA 4ª — DO REAJUSTE**

O aluguel será reajustado a cada período de 12 (doze) meses, contado da data de início da locação, pela variação acumulada do [IGP-M/FGV / IPCA/IBGE] no período. Em caso de extinção do índice, será adotado o que oficialmente o substituir ou, na falta deste, o [IPCA/IBGE / INPC/IBGE].

*Parágrafo único* — Se o índice acumulado for negativo, o aluguel será mantido sem alteração no período.

**CLÁUSULA 5ª — DO ATRASO NO PAGAMENTO**

O pagamento do aluguel ou de qualquer encargo após o vencimento sujeita o(a) LOCATÁRIO(A), de pleno direito e independentemente de notificação, a: multa de [10% (dez por cento)] sobre o valor em atraso; juros de mora de 1% (um por cento) ao mês, calculados *pro rata die*; e correção monetária pelo índice da Cláusula 4ª, até a data do efetivo pagamento.

*Parágrafo primeiro* — Havendo necessidade de cobrança por meio de advogado(a), o(a) LOCATÁRIO(A) responderá também por honorários advocatícios de [10% (dez por cento)] sobre o débito, na cobrança extrajudicial, ou no percentual fixado pelo juízo, na cobrança judicial.

*Parágrafo segundo* — O recebimento de valores em atraso, ou fora da forma ajustada, é mera tolerância da LOCADORA e não altera as cláusulas deste contrato nem constitui novação.

*Parágrafo terceiro* — A falta de pagamento do aluguel e encargos autoriza a LOCADORA a propor ação de despejo, nos termos dos arts. 9º, III, e 62 da Lei nº 8.245/1991, sem prejuízo da cobrança do débito.

**CLÁUSULA 6ª — DOS ENCARGOS, TRIBUTOS E CONSUMO**

Além do aluguel, correm por conta do(a) LOCATÁRIO(A), a partir da data de início da locação até a efetiva devolução das chaves:

a) consumo de água e esgoto, energia elétrica, gás e telefone/internet;
b) Imposto Predial e Territorial Urbano (IPTU) e taxa de coleta de lixo incidentes sobre o imóvel, [pagos diretamente pelo(a) LOCATÁRIO(A) nas guias emitidas pela Prefeitura, com envio do comprovante à LOCADORA em até 5 (cinco) dias do pagamento / reembolsados à LOCADORA no valor de R$ [valor] ([valor por extenso]), referente ao exercício de [aaaa], em [parcela única com vencimento em dd/mm/aaaa / nº parcelas mensais junto com o aluguel]];
c) (quando aplicável) despesas ordinárias de condomínio, assim entendidas as do art. 23, §1º, da Lei nº 8.245/1991;
d) (quando aplicável) prêmio de seguro contra incêndio do imóvel, nos termos da Cláusula 14ª.

*Parágrafo primeiro* — O(A) LOCATÁRIO(A) obriga-se a transferir para seu nome, em até [30 (trinta)] dias do início da locação, as contas de energia elétrica e de água e esgoto, e a devolvê-las ao nome da LOCADORA, ou a solicitar seu desligamento, ao final da locação.

*Parágrafo segundo* — Correm por conta da LOCADORA as despesas extraordinárias de condomínio (art. 22, X, e parágrafo único, da Lei nº 8.245/1991).

*Parágrafo terceiro* — Encargo pago pela LOCADORA em lugar do(a) LOCATÁRIO(A) será reembolsado junto com o aluguel do mês seguinte, com os acréscimos da Cláusula 5ª contados da data em que a LOCADORA efetuou o pagamento.

**CLÁUSULA 7ª — DA GARANTIA**

*(Escolher uma única opção e apagar as demais.)*

**Opção A — Caução em dinheiro.** Em garantia das obrigações deste contrato, o(a) LOCATÁRIO(A) entrega à LOCADORA, na assinatura, a quantia de R$ [valor] ([valor por extenso]), correspondente a [nº, até 3 (três)] aluguéis, que será depositada em caderneta de poupança em nome da LOCADORA, revertendo em favor do(a) LOCATÁRIO(A) os rendimentos do período (art. 38, §2º, da Lei nº 8.245/1991). Ao final da locação, a caução, com os rendimentos, será devolvida em até [30 (trinta)] dias após a vistoria final e a quitação de todos os aluguéis, encargos e reparos, autorizada a compensação de valores devidos à LOCADORA, com demonstrativo por escrito.

**Opção B — Fiança.** O(A) FIADOR(A) qualificado(a) no preâmbulo responde solidariamente com o(a) LOCATÁRIO(A), como principal pagador(a), por todas as obrigações deste contrato até a efetiva devolução das chaves, inclusive na prorrogação por prazo indeterminado, renunciando ao benefício de ordem previsto no art. 827 do Código Civil. Em caso de morte, incapacidade, falência, insolvência ou mudança de domicílio do(a) FIADOR(A) sem comunicação, ou de exoneração na forma do art. 40, X, da Lei nº 8.245/1991, o(a) LOCATÁRIO(A) apresentará nova garantia em até 30 (trinta) dias da notificação da LOCADORA, sob pena de rescisão (art. 40, parágrafo único).

**Opção C — Seguro-fiança.** O(A) LOCATÁRIO(A) contrata, às suas expensas, seguro de fiança locatícia junto a [seguradora], apólice nº [_____], tendo a LOCADORA como beneficiária, com cobertura de [aluguéis, encargos, danos ao imóvel e multa contratual], obrigando-se a mantê-lo vigente e renovado durante toda a locação e suas prorrogações.

**Opção D — Sem garantia, com pagamento antecipado.** A locação não é garantida por nenhuma das modalidades do art. 37 da Lei nº 8.245/1991. Por isso, nos termos do art. 42 da mesma lei, o aluguel e os encargos de cada mês serão pagos antecipadamente, até o 6º (sexto) dia útil do mês a que se referem.

**CLÁUSULA 8ª — DA VISTORIA E DO ESTADO DO IMÓVEL**

O imóvel é entregue ao(à) LOCATÁRIO(A) nas condições descritas no Laudo de Vistoria de Entrada, com registro fotográfico, que integra este contrato como Anexo I e é assinado pelas partes na entrega das chaves.

*Parágrafo único* — O(A) LOCATÁRIO(A) terá [10 (dez)] dias, contados da entrega das chaves, para comunicar por escrito divergências não registradas no laudo. Sem comunicação nesse prazo, o laudo vale como retrato fiel do estado do imóvel.

**CLÁUSULA 9ª — DO USO, DA CONSERVAÇÃO E DOS REPAROS**

O(A) LOCATÁRIO(A) obriga-se a usar o imóvel com o cuidado de quem cuida do que é seu, conforme a finalidade ajustada, e a:

a) realizar, às suas expensas, os reparos de danos causados por si, por seus dependentes, visitantes ou prepostos, e os de pequena manutenção decorrentes do uso (torneiras, registros, tomadas, interruptores, lâmpadas, fechaduras, vidros, sifões, descargas e similares);
b) comunicar por escrito à LOCADORA, assim que identificar, qualquer dano ou defeito cuja reparação caiba a ela, bem como eventuais turbações de terceiros;
c) permitir a vistoria do imóvel pela LOCADORA, mediante combinação prévia de dia e hora, e a visita de interessados em caso de venda, na forma da Cláusula 13ª;
d) cumprir a convenção e o regimento interno do condomínio, quando houver, e as posturas municipais;
e) não ceder, sublocar ou emprestar o imóvel, no todo ou em parte, sem consentimento prévio e por escrito da LOCADORA (art. 13 da Lei nº 8.245/1991).

*Parágrafo único* — Cabem à LOCADORA os reparos estruturais e os necessários à manutenção do imóvel em condições de uso que não decorram de culpa ou uso do(a) LOCATÁRIO(A), como infiltrações de origem estrutural, telhado, redes hidráulica e elétrica embutidas e fundações (art. 22 da Lei nº 8.245/1991). Por ser proprietária e responsável direta pela manutenção, a LOCADORA executa esses reparos com equipe própria ou contratada por ela, em prazo compatível com a urgência do problema.

**CLÁUSULA 10ª — DAS BENFEITORIAS E MODIFICAÇÕES**

O(A) LOCATÁRIO(A) não poderá fazer modificações ou benfeitorias no imóvel sem consentimento prévio e por escrito da LOCADORA.

*Parágrafo único* — As benfeitorias úteis ou voluptuárias autorizadas incorporam-se ao imóvel sem direito a indenização ou retenção, salvo ajuste escrito em contrário, podendo as voluptuárias ser retiradas ao final da locação desde que sem dano ao imóvel. As benfeitorias necessárias de caráter urgente, comunicadas à LOCADORA, serão indenizadas mediante comprovação da despesa (arts. 35 e 36 da Lei nº 8.245/1991).

**CLÁUSULA 11ª — DA DEVOLUÇÃO DO IMÓVEL**

Ao final da locação, o(a) LOCATÁRIO(A) restituirá o imóvel no estado em que o recebeu, conforme o Laudo de Vistoria de Entrada, salvo as deteriorações decorrentes do seu uso normal, com:

a) pintura nova, com paredes em [cor, ex.: branco gelo] e tetos em [cor, ex.: branco neve], em tinta [marca / linha] ou de qualidade equivalente, [interna e externa / somente interna];
b) instalações elétricas e hidráulicas, louças, metais, portas, janelas, vidros e fechaduras em funcionamento, com todas as chaves entregues;
c) contas de consumo e encargos quitados até a data da entrega das chaves, com apresentação dos comprovantes.

*Parágrafo primeiro* — A devolução será formalizada por Termo de Entrega de Chaves e Laudo de Vistoria de Saída, assinados pelas partes. Até essa data correm por conta do(a) LOCATÁRIO(A) o aluguel e os encargos.

*Parágrafo segundo* — Constatados na vistoria de saída reparos de responsabilidade do(a) LOCATÁRIO(A), as partes poderão ajustar que (a) o(a) próprio(a) LOCATÁRIO(A) os execute em até [10 (dez)] dias, período em que o aluguel continua devido, ou (b) a LOCADORA os execute, mediante reembolso pelo(a) LOCATÁRIO(A) do valor orçado, com apresentação do orçamento.

**CLÁUSULA 12ª — DA DEVOLUÇÃO ANTECIPADA E DA RESCISÃO**

Se o(a) LOCATÁRIO(A) devolver o imóvel antes do término do prazo da Cláusula 2ª, pagará multa compensatória equivalente a [3 (três)] aluguéis vigentes, reduzida proporcionalmente ao tempo de contrato já cumprido (art. 4º da Lei nº 8.245/1991), mediante aviso por escrito com antecedência mínima de 30 (trinta) dias.

*Parágrafo primeiro* — Fica dispensado(a) da multa o(a) LOCATÁRIO(A) que devolver o imóvel em razão de transferência, pelo seu empregador, para prestar serviços em localidade diversa, desde que notifique a LOCADORA por escrito com antecedência mínima de 30 (trinta) dias (art. 4º, parágrafo único).

*Parágrafo segundo* — A infração de qualquer cláusula deste contrato, não sanada em até [15 (quinze)] dias da notificação por escrito, autoriza a parte prejudicada a rescindi-lo, sem prejuízo do art. 9º da Lei nº 8.245/1991 e da cobrança das perdas e danos comprovadas.

**CLÁUSULA 13ª — DA VENDA DO IMÓVEL E DO DIREITO DE PREFERÊNCIA**

Em caso de venda, promessa de venda ou dação em pagamento do imóvel, o(a) LOCATÁRIO(A) tem preferência para adquiri-lo em igualdade de condições com terceiros, devendo a LOCADORA dar-lhe conhecimento do negócio por escrito, com preço, forma de pagamento e demais condições. O direito de preferência caduca se não manifestada, de forma inequívoca, a aceitação integral da proposta em 30 (trinta) dias (arts. 27 e 28 da Lei nº 8.245/1991).

*Parágrafo primeiro* — Colocado o imóvel à venda, o(a) LOCATÁRIO(A) permitirá a visita de interessados, em dia e horário previamente combinados, ao menos [1 (uma)] vez por semana.

*Parágrafo segundo (quando aplicável)* — Para que a locação seja respeitada por eventual adquirente, este contrato poderá ser averbado na matrícula do imóvel, a pedido de qualquer das partes e às expensas do(a) solicitante (art. 8º da Lei nº 8.245/1991).

**CLÁUSULA 14ª — DO SEGURO CONTRA INCÊNDIO (QUANDO APLICÁVEL)**

O(A) LOCATÁRIO(A) contratará, às suas expensas e em até [30 (trinta)] dias do início da locação, seguro contra incêndio, raio e explosão do imóvel, com valor de cobertura de no mínimo R$ [valor], tendo a LOCADORA como beneficiária, e o manterá vigente durante toda a locação, apresentando a apólice sempre que solicitado.

**CLÁUSULA 15ª — DAS COMUNICAÇÕES E DOS DADOS PESSOAIS**

Toda comunicação entre as partes relativa a este contrato será feita por escrito, admitido o e-mail ou aplicativo de mensagem para os endereços e números indicados no Quadro-Resumo, cabendo a cada parte informar à outra qualquer alteração desses dados.

*Parágrafo único* — A LOCADORA trata os dados pessoais do(a) LOCATÁRIO(A) [e do(a) FIADOR(A)] exclusivamente para a execução deste contrato, a cobrança de valores e o cumprimento de obrigações legais, nos termos da Lei nº 13.709/2018 (LGPD), e os conserva pelo prazo necessário a essas finalidades.

**CLÁUSULA 16ª — DAS DISPOSIÇÕES GERAIS**

A tolerância de qualquer das partes quanto ao descumprimento de cláusula deste contrato não constitui novação nem renúncia ao direito de exigi-la.

*Parágrafo primeiro* — Integram este contrato: Anexo I — Laudo de Vistoria de Entrada, com registro fotográfico; [Anexo II — apólice de seguro-fiança / comprovante de depósito da caução]; [Anexo III — convenção e regimento interno do condomínio].

*Parágrafo segundo* — O(A) LOCATÁRIO(A) declara ter recebido a minuta deste contrato previamente à assinatura, com liberdade para se assessorar por advogado(a) de sua confiança, e ter pleno conhecimento de todas as suas cláusulas.

*Parágrafo terceiro* — As partes admitem a assinatura deste contrato e de seus anexos por meio eletrônico, com validade equivalente à assinatura física (art. 10, §2º, da MP nº 2.200-2/2001).

**CLÁUSULA 17ª — DO FORO**

Fica eleito o foro da comarca de Montes Claros/MG para dirimir quaisquer questões oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.

---

E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em [2 (duas) / 3 (três), quando houver fiador] vias de igual teor e forma, na presença das testemunhas abaixo.

[Cidade], [dd] de [mês] de [aaaa].

LOCADORA: ______________________________________
DEFREITAS COMPRA, VENDA, INCORPORAÇÃO E LOCAÇÃO DE BENS IMÓVEIS PRÓPRIOS LTDA

LOCATÁRIO(A): ______________________________________
[nome completo]

FIADOR(A) (se houver): ______________________________________
[nome completo] — [cônjuge, se casado(a)]

TESTEMUNHA 1: ______________________________________
[nome] — CPF: [_____]

TESTEMUNHA 2: ______________________________________
[nome] — CPF: [_____]

---

DEFREITAS IMÓVEIS PRÓPRIOS · PÁGINA [N] · MODELO PADRÃO
