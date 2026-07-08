// ===== BBLAW Atlas — engine (produtos, diagnóstico, router) =====

/* ================= ATLAS · engine ================= */
const PRODUCTS=[
{id:"llc",nome:"LLC nos EUA · Completa",preco:8900,prazo:"2 a 6 semanas",esc:"Estado e classificação fiscal definidos para o seu fluxo, constituição, EIN, Operating Agreement sob medida, orientação bancária e integração com o lado brasileiro."},
{id:"regcripto",nome:"Regularização Cripto",preco:6500,apartir:1,prazo:"3 a 8 semanas",esc:"Reconstituição de operações em até 3 exchanges, cálculo de ganhos, parecer técnico e retificações para regularização espontânea."},
{id:"holdintl",nome:"Holding Internacional",preco:24000,apartir:1,prazo:"6 a 12 semanas",esc:"Cenários comparados de jurisdição, memorando de fundamentos, constituição e rotina de conformidade pós Lei 14.754/2023."},
{id:"revisao14754",nome:"Revisão de Estrutura Internacional",preco:6900,prazo:"3 a 5 semanas",esc:"Auditoria da estrutura existente frente à Lei 14.754/2023: regime de tributação, declarações, substância e plano de correção."},
{id:"holdfam",nome:"Holding Familiar Nacional",preco:18000,apartir:1,prazo:"8 a 14 semanas",esc:"Mapeamento patrimonial, quatro cenários comparados, constituição, doações com cláusulas de proteção e documentos sucessórios."},
{id:"acordo",nome:"Acordo de Sócios",preco:7900,prazo:"3 a 5 semanas",esc:"Regras de entrada, saída, avaliação, deadlock, vesting e não concorrência, negociadas e registradas."},
{id:"reestruturacao",nome:"Reestruturação Empresarial",preco:14900,apartir:1,prazo:"6 a 12 semanas",esc:"Reorganização societária e tributária do grupo: tipos, classes, controle e regime fiscal alinhados à próxima fase."},
{id:"remodelagem",nome:"Remodelagem de Negócio",preco:9900,apartir:1,prazo:"4 a 8 semanas",esc:"Redesenho jurídico do modelo: contratos-chave, fluxo de receitas, responsabilidades e enquadramento do novo formato."},
{id:"marca",nome:"Registro de Marca (INPI)",preco:2400,prazo:"Protocolo em 10 dias",esc:"Busca de anterioridade, estratégia de classes, depósito e acompanhamento até a decisão. Taxas oficiais à parte."},
{id:"software",nome:"Proteção de Software",preco:4900,prazo:"3 a 4 semanas",esc:"Registro do programa no INPI, cessões de PI de colaboradores, contratos de licença e termos de uso."},
{id:"contratos3",nome:"Pacote Contratos Essenciais",preco:5900,prazo:"2 a 3 semanas",esc:"Três contratos-modelo da operação desenhados sob medida, com matriz de riscos e playbook de negociação."},
{id:"lgpd",nome:"Adequação LGPD Essencial",preco:8900,prazo:"5 a 8 semanas",esc:"Mapeamento de dados, políticas, contratos com operadores, canal de titulares e treinamento."},
{id:"nr1",nome:"Riscos Psicossociais NR-1",preco:5000,prazo:"4 a 6 semanas",esc:"Diagnóstico psicossocial, plano de ação e documentação exigida pela fiscalização. Versão Completa com programa contínuo: R$ 13.000."},
{id:"resposta",nome:"Resposta Estratégica a Notificações",preco:3900,prazo:"Início em 48h",esc:"Análise da exigência, estratégia de resposta e protocolo, com contenção da exposição antes de qualquer manifestação."},
{id:"captacao",nome:"Preparação para Captação",preco:12900,prazo:"4 a 8 semanas",esc:"Data room jurídico, correção de cap table e PI, acordo de sócios revisado e documentação pronta para due diligence."},
{id:"recupcredito",nome:"Recuperação de Crédito",preco:4900,apartir:1,prazo:"Início em 1 semana",esc:"Notificação e negociação com lastro documental, medidas pré-judiciais e, se necessário, a via judicial ou arbitral. Parcela de êxito conforme o caso."},
{id:"licencas",nome:"Licenças e Enquadramento Setorial",preco:0,prazo:"Sob proposta",esc:"Obtenção de licenças e autorizações específicas: pagamentos, cripto, iGaming e demais setores supervisionados."},
{id:"contencioso",nome:"Contencioso Empresarial Estratégico",preco:0,prazo:"Sob proposta",esc:"Disputas societárias, contratuais e regulatórias conduzidas com estratégia, quando o acordo deixou de ser possível."},
{id:"life",nome:"Mobilidade Internacional",preco:0,prazo:"Sob proposta",esc:"Segunda residência, vistos, contas internacionais e planejamento de saída fiscal, desenhados a partir do diagnóstico."},
// Análises e pareceres (camada intermediária: mais profundo que o gratuito, menos que a execução)
{id:"parecer_sucessorio",nome:"Parecer Sucessório Personalizado",preco:2900,prazo:"7 a 10 dias",kind:"analise",esc:"Análise do seu patrimônio real com cálculo do custo de inventário no seu estado, comparação de cenários (PF, holding, doação) e recomendação fundamentada por escrito. Abatível na contratação da execução."},
{id:"parecer_trabalhista",nome:"Parecer de Passivo Trabalhista",preco:3400,prazo:"10 a 15 dias",kind:"analise",esc:"Quantificação do passivo de encerramento e mapeamento de contingências ocultas (pejotização, horas extras, desvio de função), com plano de mitigação. Abatível na execução."},
{id:"parecer_societario",nome:"Parecer Societário e de Governança",preco:2900,prazo:"7 a 12 dias",kind:"analise",esc:"Diagnóstico dos pontos de ruptura da sociedade: saída, avaliação, morte e incapacidade de sócio, deadlock e governança, com recomendações. Abatível na execução."},
{id:"parecer_tributario",nome:"Parecer Tributário Estratégico",preco:3200,prazo:"10 a 15 dias",kind:"analise",esc:"Análise do regime tributário atual versus alternativas para o seu porte, com estimativa de economia e riscos. Abatível na execução."},
{id:"parecer_cripto",nome:"Parecer Cripto e Tributação",preco:2600,prazo:"7 a 12 dias",kind:"analise",esc:"Análise da sua exposição fiscal em cripto, cenários de regularização e custódia, com recomendação. Abatível na execução."},
{id:"parecer_internacional",nome:"Parecer de Estrutura Internacional",preco:3600,prazo:"10 a 15 dias",kind:"analise",esc:"Avaliação da sua estrutura ou projeto internacional frente à Lei 14.754/2023 e à jurisdição-alvo, com cenários comparados. Abatível na execução."},
{id:"parecer_pi",nome:"Parecer de Ativos Intangíveis",preco:2400,prazo:"7 a 10 dias",kind:"analise",esc:"Mapa de exposição de marca, software e dados do negócio, com plano de proteção priorizado. Abatível na execução."},
{id:"parecer_contratual",nome:"Parecer Contratual e de Risco",preco:2400,prazo:"7 a 10 dias",kind:"analise",esc:"Auditoria dos contratos-chave com matriz de riscos e pontos de renegociação. Abatível na execução."},
{id:"parecer_regulatorio",nome:"Parecer Regulatório Setorial",preco:3800,prazo:"12 a 18 dias",kind:"analise",esc:"Enquadramento da operação no seu setor supervisionado, licenças exigidas e caminho de conformidade. Abatível na execução."},
{id:"auditoria_trabalhista",nome:"Auditoria Trabalhista Completa",preco:8900,apartir:1,prazo:"3 a 6 semanas",esc:"Levantamento completo do passivo trabalhista, quantificação do custo de encerramento, revisão de contratos PJ e plano de regularização e mitigação."},
{id:"auditoria_estrutura",nome:"Auditoria de Estrutura Patrimonial",preco:6900,prazo:"3 a 4 semanas",esc:"Revisão da estrutura existente contra risco de desconsideração: confusão patrimonial, atas, propósito negocial e cláusulas de proteção."},
{id:"reorg_imobiliaria",nome:"Reorganização Imobiliária",preco:14900,apartir:1,prazo:"6 a 10 semanas",esc:"Holding imobiliária, separação de imóveis por finalidade, doação com usufruto e planejamento do ganho de capital."},
{id:"governanca_familiar",nome:"Governança Familiar",preco:16900,apartir:1,prazo:"8 a 12 semanas",esc:"Acordo de sócios da holding, conselho de família, protocolo familiar e regras de entrada de herdeiros."},
{id:"planejamento_completo",nome:"Planejamento Patrimonial 360º",preco:0,prazo:"Sob proposta",esc:"Arquitetura patrimonial completa, nacional e internacional, sucessão, governança e execução coordenada. Desenho sob medida a partir do diagnóstico."}];
const PREDEF_DEMANDS=[
{grupo:"Consultorias e análises",itens:[
 {nome:"Consultoria estratégica pontual",prob:"Preciso de uma reunião de orientação sobre uma decisão específica antes de agir.",orc:"até R$ 3.000"},
 {nome:"Segunda opinião sobre estrutura existente",prob:"Já tenho uma estrutura montada e quero uma avaliação independente sobre riscos e melhorias.",orc:"R$ 3.000 a R$ 8.000"},
 {nome:"Análise de viabilidade de operação internacional",prob:"Quero entender se e como internacionalizar minha operação ou patrimônio.",orc:"R$ 3.000 a R$ 6.000"}]},
{grupo:"Pareceres",itens:[
 {nome:"Parecer jurídico sobre tese específica",prob:"Preciso de uma opinião jurídica fundamentada por escrito sobre uma questão concreta.",orc:"R$ 2.500 a R$ 6.000"},
 {nome:"Parecer tributário sobre operação",prob:"Quero segurança sobre o tratamento fiscal de uma operação antes de executá-la.",orc:"R$ 3.000 a R$ 7.000"},
 {nome:"Parecer sucessório da minha família",prob:"Quero entender o custo e os cenários da sucessão do meu patrimônio.",orc:"R$ 2.500 a R$ 5.000"}]},
{grupo:"Contratos",itens:[
 {nome:"Elaboração de contrato específico",prob:"Preciso de um contrato desenhado sob medida para uma relação importante.",orc:"R$ 2.000 a R$ 6.000"},
 {nome:"Revisão de contrato antes de assinar",prob:"Vou assinar um contrato relevante e quero saber o que estou aceitando e o que negociar.",orc:"R$ 1.500 a R$ 4.000"},
 {nome:"Acordo de sócios",prob:"Quero definir regras de saída, avaliação, sucessão e governança entre os sócios.",orc:"R$ 6.000 a R$ 12.000"}]},
{grupo:"Estruturação e execução",itens:[
 {nome:"Abertura de LLC nos EUA",prob:"Quero receber do exterior com uma entidade adequada e sem criar problema no Brasil.",orc:"R$ 7.000 a R$ 12.000"},
 {nome:"Constituição de holding familiar",prob:"Quero proteger o patrimônio e organizar a sucessão da minha família.",orc:"R$ 15.000 a R$ 25.000"},
 {nome:"Regularização de cripto",prob:"Quero regularizar minhas operações com cripto antes de qualquer fiscalização.",orc:"R$ 5.000 a R$ 10.000"},
 {nome:"Adequação NR-1 e riscos psicossociais",prob:"Quero proteger a empresa de autuações e de ações sobre saúde mental no trabalho.",orc:"R$ 5.000 a R$ 13.000"}]},
{grupo:"Defesa e recuperação",itens:[
 {nome:"Resposta a notificação ou exigência",prob:"Recebi uma notificação e preciso responder com estratégia, sem ampliar minha exposição.",orc:"R$ 3.000 a R$ 8.000"},
 {nome:"Recuperação de crédito",prob:"Tenho valores relevantes a receber e quero recuperá-los com método.",orc:"a combinar + êxito"},
 {nome:"Auditoria de passivo trabalhista",prob:"Quero saber quanto custaria encerrar ou reestruturar a operação e como reduzir esse passivo.",orc:"R$ 8.000 a R$ 15.000"}]}
];

const DIMS=[["liberdade","Liberdade"],["mobilidade","Mobilidade"],["impostos","Eficiência fiscal"],["banking","Banking"],["investimentos","Investimentos"],["protecao","Proteção contra riscos"],["oportunidades","Oportunidades"],["patrimonio","Patrimônio"],["negocios","Negócios"],["ferramentas","Ferramentas"]];
const DIM_DESC={liberdade:"Quantas opções estruturais você tem: jurisdições, veículos e caminhos abertos.",mobilidade:"Sua prontidão para viver, trabalhar ou manter contas fora do Brasil.",impostos:"Quanto do que a lei permite otimizar já está capturado no seu desenho.",banking:"Solidez do seu acesso bancário e de pagamentos, aqui e fora.",investimentos:"Adequação dos veículos pelos quais você investe, no Brasil e no exterior.",protecao:"Quão protegido você está contra riscos ativos: quanto maior, melhor.",oportunidades:"Oportunidades do seu momento que dependem de estrutura para serem capturadas.",patrimonio:"Separação entre patrimônio e risco, e preparo sucessório.",negocios:"Maturidade jurídica dos seus negócios: sociedade, contratos, ativos.",ferramentas:"Uso das ferramentas e estratégias disponíveis para o seu perfil."};
const BANDS=[[0,39,"Crítico","crit"],[40,59,"Em atenção","warn"],[60,79,"Estruturado","str"],[80,100,"Otimizado","opt"]];
const band=v=>BANDS.find(b=>v>=b[0]&&v<=b[1]);
const bandColor=v=>`var(--${band(v)[3]})`;
const bandBg=v=>`var(--${band(v)[3]}-bg)`;
const fmt=n=>"R$ "+n.toLocaleString("pt-BR");
const el=id=>document.getElementById(id);
const store={mem:{},async get(k){try{const r=await window.storage.get(k);return r?JSON.parse(r.value):null}catch(e){return this.mem[k]||null}},async set(k,v){try{await window.storage.set(k,JSON.stringify(v))}catch(e){this.mem[k]=v}}};

/* ================= MODELO DE SCORING EXPLÍCITO =================
   Cada dimensão parte de uma BASE e recebe FATORES nomeados.
   Todo ponto é rastreável: score = base + soma dos fatores aplicados.
   Esta tabela é o artefato que a BBLAW valida juridicamente. */
const SCORE_BASE=50;
const SCORE_MODEL={
 liberdade:[
  {id:"ext_sim",cond:d=>d.ext==="Sim",w:14,txt:"Possui entidade no exterior: mais opções jurisdicionais"},
  {id:"ext_nao",cond:d=>d.ext==="Não",w:-8,txt:"Sem estrutura fora: opções concentradas em uma jurisdição"},
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-10,txt:"Tudo na pessoa física: nenhuma camada de flexibilidade"},
  {id:"estr_trust",cond:d=>d.estr==="Fundação privada ou trust",w:12,txt:"Fundação ou trust: alto grau de opções estruturais"},
  {id:"estr_mista",cond:d=>d.estr==="Estrutura mista"||d.estr==="Holding ou empresa offshore",w:8,txt:"Estrutura internacional ou mista já existente"}],
 mobilidade:[
  {id:"ext_sim",cond:d=>d.ext==="Sim",w:18,txt:"Entidade no exterior facilita mobilidade e banking global"},
  {id:"ext_nao",cond:d=>d.ext==="Não",w:-12,txt:"Sem estrutura fora: mobilidade dependeria de improviso"},
  {id:"obj_mob",cond:d=>d.obj.includes("Mobilidade")&&d.ext!=="Sim",w:-8,txt:"Deseja mobilidade mas ainda sem base para viabilizá-la"},
  {id:"comp_ext",cond:d=>d.pat&&d.pat.prop&&d.pat.prop.Exterior>0,w:6,txt:"Já possui ativos no exterior"}],
 impostos:[
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-14,txt:"Pessoa física: sem instrumentos de eficiência fiscal lícita"},
  {id:"estr_hold",cond:d=>d.estr==="Holding nacional",w:8,txt:"Holding nacional: alguma eficiência capturada"},
  {id:"estr_off",cond:d=>d.estr==="Holding ou empresa offshore"||d.estr==="Estrutura mista",w:10,txt:"Estrutura internacional com potencial de eficiência"},
  {id:"cripto",cond:d=>d.op.includes("Cripto"),w:-8,txt:"Operação cripto: risco de ganhos não apurados"},
  {id:"prop_cripto",cond:d=>d.pat&&d.pat.prop&&d.pat.prop.Cripto>=25,w:-6,txt:"Cripto é parcela relevante do patrimônio: exposição fiscal maior"},
  {id:"obj_imp",cond:d=>d.obj.includes("Reduzir impostos")&&d.estr==="Tudo na pessoa física",w:-6,txt:"Quer reduzir carga mas ainda sem estrutura para isso"}],
 banking:[
  {id:"ext_sim",cond:d=>d.ext==="Sim",w:14,txt:"Acesso bancário internacional via entidade no exterior"},
  {id:"ext_nao",cond:d=>d.ext==="Não",w:-8,txt:"Banking restrito a uma jurisdição"},
  {id:"regulado",cond:d=>d.op.includes("Pagamentos")||d.op.includes("iGaming"),w:-8,txt:"Setor sensível: relacionamento bancário exige compliance robusto"},
  {id:"not",cond:d=>d.not==="Sim",w:-6,txt:"Notificação recebida: risco de restrição bancária"}],
 investimentos:[
  {id:"faixa_alta",cond:d=>d.faixa.includes("20 milhões")||d.faixa.includes("5 a 20"),w:8,txt:"Volume relevante justifica veículos dedicados"},
  {id:"invest_fora_sem",cond:d=>d.obj.includes("Investir fora")&&d.ext!=="Sim",w:-10,txt:"Quer investir fora sem veículo adequado"},
  {id:"ext_sim",cond:d=>d.ext==="Sim",w:8,txt:"Já tem estrutura para investir com organização"},
  {id:"prop_fin",cond:d=>d.pat&&d.pat.prop&&(d.pat.prop.Financeiro>0||d.pat.prop.Exterior>0),w:4,txt:"Possui carteira financeira a otimizar"}],
 protecao:[
  {id:"not",cond:d=>d.not==="Sim",w:-26,txt:"Notificação ou exigência ativa: risco materializado"},
  {id:"prazo",cond:d=>d.prazo==="Sim",w:-12,txt:"Prazo em aberto: janela de exposição"},
  {id:"urg",cond:d=>d.urg.startsWith("Imediata"),w:-8,txt:"Urgência imediata declarada"},
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-14,txt:"Patrimônio na PF responde por qualquer risco"},
  {id:"estr_prot",cond:d=>["Holding nacional","Holding ou empresa offshore","Fundação privada ou trust","Estrutura mista"].includes(d.estr),w:10,txt:"Camada societária oferece alguma separação de risco"},
  {id:"regulado",cond:d=>d.op.includes("iGaming")||d.op.includes("Pagamentos"),w:-8,txt:"Setor regulado sem enquadramento confirmado"}],
 oportunidades:[
  {id:"op_dig",cond:d=>d.op.some(x=>["Cripto","Pagamentos","iGaming"].includes(x)),w:12,txt:"Setor de alto crescimento com oportunidades a capturar"},
  {id:"faixa_alta",cond:d=>d.faixa.includes("20 milhões")||d.faixa.includes("5 a 20"),w:10,txt:"Porte permite movimentos estruturais relevantes"},
  {id:"captar",cond:d=>d.obj.includes("Captar"),w:6,txt:"Captação no horizonte é oportunidade estruturável"},
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-8,txt:"Falta de estrutura impede capturar oportunidades"}],
 patrimonio:[
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-24,txt:"Patrimônio integral na pessoa física: exposição e inventário integral"},
  {id:"estr_hold",cond:d=>d.estr==="Holding nacional",w:14,txt:"Holding nacional: patrimônio parcialmente organizado"},
  {id:"estr_off",cond:d=>d.estr==="Holding ou empresa offshore"||d.estr==="Estrutura mista",w:20,txt:"Estrutura internacional ou mista: boa organização patrimonial"},
  {id:"estr_trust",cond:d=>d.estr==="Fundação privada ou trust",w:32,txt:"Fundação ou trust: arquitetura patrimonial madura"},
  {id:"conc_imovel",cond:d=>d.pat&&d.pat.prop&&d.pat.prop.Imóveis>=60,w:-8,txt:"Alta concentração em imóveis: baixa liquidez sucessória"},
  {id:"conc_cripto",cond:d=>d.pat&&d.pat.prop&&d.pat.prop.Cripto>=40,w:-6,txt:"Alta concentração em cripto: risco de custódia e acesso"},
  {id:"sucessao",cond:d=>d.obj.includes("Proteger patrimônio")&&d.estr==="Tudo na pessoa física",w:-4,txt:"Quer proteger patrimônio mas sem nenhuma camada"}],
 negocios:[
  {id:"faixa_alta",cond:d=>d.faixa.includes("20 milhões")||d.faixa.includes("5 a 20"),w:8,txt:"Porte empresarial relevante"},
  {id:"setor",cond:d=>d.perfil.includes("fintech")||d.perfil.includes("iGaming"),w:6,txt:"Setor que exige maturidade jurídica elevada"},
  {id:"captar",cond:d=>d.obj.includes("Captar"),w:-8,txt:"Captação exige estrutura que ainda pode faltar"},
  {id:"tem_biz",cond:d=>d.hasBiz,w:6,txt:"Negócios cadastrados e analisados no Atlas"}],
 ferramentas:[
  {id:"estr_pf",cond:d=>d.estr==="Tudo na pessoa física",w:-12,txt:"Nenhuma ferramenta estrutural em uso"},
  {id:"estr_hold",cond:d=>d.estr==="Holding nacional",w:6,txt:"Usa holding: primeira ferramenta ativa"},
  {id:"estr_off",cond:d=>d.estr==="Holding ou empresa offshore"||d.estr==="Estrutura mista",w:12,txt:"Ferramentas internacionais em uso"},
  {id:"estr_trust",cond:d=>d.estr==="Fundação privada ou trust",w:14,txt:"Stack estrutural avançado"},
  {id:"membro",cond:d=>d.isMember,w:6,txt:"Plano Membro: acesso a todas as estratégias do Atlas"}]
};
function computeScores(d){const out={};
 for(const[dim,factors]of Object.entries(SCORE_MODEL)){
  let v=SCORE_BASE;const applied=[];
  factors.forEach(f=>{if(f.cond(d)){v+=f.w;applied.push({txt:f.txt,w:f.w});}});
  out[dim]={value:Math.max(8,Math.min(96,Math.round(v))),applied,base:SCORE_BASE};}
 return out;}

let S={user:null,scores:null,scoreDetail:null,diag:{},negocios:[],pat:null,demandas:[],chatUsed:0};
let checkout=null;

window.APP={
user:()=>S.user,
async boot(){const saved=await store.get("bblaw-atlas");if(saved)S=Object.assign(S,saved);this.syncNav();route();},
save(){store.set("bblaw-atlas",{user:S.user,scores:S.scores,diag:S.diag,negocios:S.negocios,pat:S.pat,demandas:S.demandas});},
syncNav(){el("nav-account").textContent=S.user?("Atlas · "+S.user.nome.split(" ")[0]):"Atlas · Entrar";
el("nav-account").href=S.user?"#/portal":"#/conta";
el("nav-main-cta").textContent=S.user?"Meu Atlas":"Iniciar diagnóstico";
el("nav-main-cta").href=S.user?"#/portal":"#/diagnostico";},
signup(){const n=el("au-nome").value.trim(),e=el("au-email").value.trim(),p=el("au-pass").value;
if(!n||!/.+@.+\..+/.test(e)||!p||!el("au-consent").checked){el("au-err").style.display="block";return;}
S.user={nome:n,email:e,plan:"free",cycle:null};this.save();this.syncNav();
location.hash="#/"+(pendingRoute||"diagnostico");pendingRoute=null;},
login(){const e=el("li-email").value.trim();
if(S.user&&S.user.email===e){this.syncNav();location.hash="#/"+(pendingRoute||"portal");pendingRoute=null;}
else el("li-err").style.display="block";},
logout(){S.user=null;this.save();this.syncNav();location.hash="#/home";},
contact(){
  const nome = (el('ct-nome')||{value:''}).value.trim();
  const email = (el('ct-email')||{value:''}).value.trim();
  const msg   = (el('ct-msg')||{value:''}).value.trim();
  const assunto = (el('ct-assunto')||{value:''}).value || 'Contato via site';
  const errEl = el('ct-err');
  const submitBtn = el('ct-submit');

  // Validação
  if (!nome || !email || !msg || !/.+@.+\..+/.test(email)) {
    if (errEl) errEl.style.display = 'block';
    if (!nome) el('ct-nome') && el('ct-nome').focus();
    return;
  }
  if (errEl) errEl.style.display = 'none';

  // Loading state
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando…'; }

  // Salva no banco de dados remotamente (PostgreSQL)
  fetch('/api/contato', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, assunto, mensagem: msg })
  }).catch(err => console.error('Erro ao salvar no banco:', err));

  // Envia via mailto com corpo estruturado
  const corpo = `Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${msg}`;
  const mailtoLink = `mailto:contato@bblaw.com.br?subject=${encodeURIComponent('[Site] ' + assunto + ' — ' + nome)}&body=${encodeURIComponent(corpo)}`;

  // Tenta abrir cliente de e-mail
  window.open(mailtoLink, '_blank');

  // Mostra confirmação na shell
  setTimeout(() => {
    const shell = el('contact-shell');
    if (shell) {
      shell.innerHTML = `<div style="text-align:center;padding:24px 0">
        <span class="mono brand" style="display:block;margin-bottom:16px">Mensagem preparada</span>
        <h2 style="margin-bottom:12px;font-size:1.4rem">Seu cliente de e-mail foi aberto.</h2>
        <p style="color:var(--muted);margin-bottom:22px">Confirme o envio pelo seu e-mail.<br>Ou envie diretamente para <a href="mailto:contato@bblaw.com.br" class="textlink">contato@bblaw.com.br</a></p>
        <a class="btn primary" href="#/diagnostico">Iniciar diagnóstico</a>
      </div>`;
    }
  }, 600);
},

/* ---- diagnóstico → scores ---- */
onDiagnosticComplete(){
  const v=id=>el(id)?el(id).value:"";const rad=n=>{const r=document.querySelector(`input[name="${n}"]:checked`);return r?r.value:"";};
  const chk=n=>[...document.querySelectorAll(`input[name="${n}"]:checked`)].map(x=>x.value);
  const d={tipo:v("d-tipo"),perfil:v("d-perfil"),estr:v("d-estr"),obj:chk("d-obj"),ext:rad("d-ext"),op:chk("d-op"),faixa:v("d-faixa"),urg:v("d-urg"),prazo:rad("d-prazo"),not:rad("d-not"),objetivo:v("d-objetivo"),risco:v("d-risco")};
  S.diag=Object.assign(S.diag||{},d);
  this.recompute();this.save();
  
  const payload = {
    nome: S.user ? S.user.nome : null,
    email: S.user ? S.user.email : null,
    whatsapp: v("d-zap"),
    empresa: v("d-emp"),
    tipo: S.diag.tipo,
    perfil: S.diag.perfil,
    objetivo: S.diag.objetivo,
    faixa: S.diag.faixa,
    estrutura: S.diag.estr,
    objetivos_lista: S.diag.obj,
    exterior: S.diag.ext,
    operacao_envolve: S.diag.op,
    urgencia: S.diag.urg,
    prazo_aberto: S.diag.prazo,
    notificacao: S.diag.not,
    risco: S.diag.risco,
    scores: S.scores
  };
  fetch('/api/diagnostico', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(e => console.error("Erro ao salvar diagnóstico remoto:", e));
},
recompute(){if(!S.diag||!S.diag.tipo)return;const d=Object.assign({},S.diag,{pat:S.pat,hasBiz:S.negocios.length>0,isMember:S.user&&S.user.plan==="member"});
const detail=computeScores(d);S.scoreDetail=detail;
const sc={};for(const k in detail)sc[k]=detail[k].value;S.scores=sc;},

/* ---- achados: matriz risco × catálogo ---- */
findings(){const d=S.diag,f=[];if(!S.scores)return f;
const P=id=>PRODUCTS.find(p=>p.id===id);
if(d.not==="Sim")f.push({sev:"critico",dim:"Proteção contra riscos",titulo:"Exigência ou notificação recebida",
 achado:"Você informou já ter recebido exigência, bloqueio ou notificação de autoridade bancária, fiscal ou regulatória.",
 porque:"A primeira manifestação define o tom de todo o procedimento. Respostas improvisadas frequentemente ampliam a exposição, confessam fatos desnecessários ou perdem defesas disponíveis.",
 janela:"Crítico. Procedimentos dessa natureza correm com prazos próprios, e o silêncio também produz efeitos.",
 fazer:["Não responda nem protocole nada antes de uma análise da exigência","Reúna o documento recebido, o histórico da conta ou operação e as comunicações anteriores","Verifique o prazo formal de resposta: ele define a estratégia disponível"],prod:P("resposta")});
if(d.estr==="Tudo na pessoa física")f.push({sev:"critico",dim:"Patrimônio",titulo:"Patrimônio integral na pessoa física",
 achado:"Imóveis, participações e investimentos concentrados no seu CPF, sem camada societária de organização.",
 porque:"Na pessoa física, todo o patrimônio responde por qualquer risco, pessoal ou empresarial. E a sucessão ocorrerá por inventário integral: patrimônio travado por meses ou anos, com ITCMD, custas e honorários que podem superar 10% do total.",
 janela:"Relevante e crescente. Proteção patrimonial só vale para riscos futuros: depois que o risco se materializa, reorganizar pode configurar fraude.",
 fazer:["Liste seus ativos por natureza e valor aproximado: é o insumo de qualquer desenho","Use a calculadora do Hub Patrimonial para estimar o custo de um inventário no seu estado","Defina objetivos com a família: proteger, suceder, ou ambos"],prod:P("holdfam"),alt:["parecer_sucessorio","planejamento_completo"]});
if(d.ext==="Sim")f.push({sev:"atencao",dim:"Eficiência fiscal",titulo:"Estrutura internacional em regime novo",
 achado:"Você possui entidade no exterior. Desde a Lei 14.754/2023, lucros de controladas passaram a ser tributados anualmente, com regimes opcionais que exigem escolha consciente.",
 porque:"Estruturas desenhadas antes de 2024 podem estar em regime tributário errado, com declarações incompatíveis ou sem a substância que bancos e fisco passaram a exigir. O custo do desalinhamento aparece em autuação ou em conta encerrada.",
 janela:"Em atenção. Cada exercício fiscal em regime inadequado consolida passivo.",
 fazer:["Verifique como a entidade foi informada na sua última declaração de ajuste","Confirme se houve opção formal por regime de transparência ou tributação anual","Liste as contas bancárias da estrutura e a compatibilidade entre atividade declarada e fluxo real"],prod:P("revisao14754"),alt:["parecer_internacional"]});
if(d.op.includes("Cripto"))f.push({sev:"atencao",dim:"Eficiência fiscal",titulo:"Operações cripto e conformidade",
 achado:"Sua operação envolve criptoativos, classe em que a Receita amplia acesso a dados de exchanges a cada ciclo.",
 porque:"Ganhos não apurados geram passivo silencioso com multa qualificada quando identificados de ofício. A regularização espontânea, enquanto disponível, afasta a multa punitiva e é quase sempre o cenário de menor custo.",
 janela:"Em atenção, com prazo de validade: a regularização espontânea só existe antes da fiscalização.",
 fazer:["Exporte o histórico completo das suas exchanges e carteiras","Identifique meses com alienações acima do limite de isenção","Verifique a jurisdição de custódia de cada exchange: ela muda o tratamento"],prod:P("regcripto"),alt:["parecer_cripto"]});
if(d.obj.includes("Mobilidade"))f.push({sev:"oportunidade",dim:"Mobilidade",titulo:"Projeto de vida internacional declarado",
 achado:"Você indicou interesse em morar fora ou ampliar sua mobilidade internacional.",
 porque:"A ordem das decisões define o custo: residência fiscal, estrutura dos ativos, contas e vistos se afetam mutuamente. Sair do Brasil sem formalizar a saída fiscal mantém você tributável aqui, e é o erro mais caro do tema.",
 janela:"Oportunidade. Planejado com 6 a 12 meses de antecedência, o projeto captura regimes de chegada favoráveis.",
 fazer:["Use o checklist de prontidão do Hub Life","Defina o país-alvo e pesquise seu regime para novos residentes","Mapeie o que ficaria no Brasil: imóveis, participações, investimentos"],prod:P("life"),alt:["parecer_internacional"]});
if(d.obj.includes("Investir fora")&&d.ext!=="Sim")f.push({sev:"oportunidade",dim:"Investimentos",titulo:"Investir fora sem veículo adequado",
 achado:"Você quer investir no exterior e ainda não possui entidade fora do Brasil.",
 porque:"Investir direto na pessoa física é legítimo, mas em volumes relevantes um veículo adequado organiza sucessão, simplifica declarações e pode ser mais eficiente no novo regime da Lei 14.754/2023.",
 janela:"Oportunidade. A escolha do veículo antes dos aportes evita reorganização custosa depois.",
 fazer:["Estime o volume a investir nos próximos 24 meses: ele define se o veículo compensa","Compare os cenários no comparador do Hub Internacionalização","Verifique o tratamento sucessório dos ativos no país de custódia"],prod:P("holdintl"),alt:["parecer_internacional"]});
if(d.obj.includes("Captar"))f.push({sev:"oportunidade",dim:"Negócios",titulo:"Captação no horizonte",
 achado:"Você indicou intenção de captar investimento.",
 porque:"Due diligence encontra o que não foi arrumado: PI difusa, cap table informal e ausência de acordo de sócios reprecificam ou travam rodadas. Preparar antes custa uma fração de corrigir durante.",
 janela:"Oportunidade com prazo: a preparação ideal antecede a rodada em 3 a 6 meses.",
 fazer:["Monte a lista de documentos que um investidor pedirá: societário, PI, contratos, passivos","Verifique se todo o código e a marca estão formalmente na empresa","Alinhe entre os sócios as regras de diluição e governança antes de negociar com terceiros"],prod:P("captacao"),alt:["parecer_societario"]});
if(d.op.includes("iGaming")||d.op.includes("Pagamentos"))f.push({sev:"atencao",dim:"Proteção contra riscos",titulo:"Operação em setor supervisionado",
 achado:"Sua operação envolve "+(d.op.includes("iGaming")?"iGaming":"meios de pagamento")+", setor sob regulamentação em construção contínua.",
 porque:"Operar fora do enquadramento correto, ou crescer além dos limites do modelo escolhido, expõe a bloqueios, sanções e responsabilização pessoal dos sócios. Nesses setores, o enquadramento é a licença para existir.",
 janela:"Em atenção permanente: a regra muda mais rápido que a operação.",
 fazer:["Documente seu modelo de negócio e fluxo de fundos ponta a ponta","Identifique qual autorização ou licença seu volume atual exige","Acompanhe as normas do seu setor ou delegue o monitoramento"],prod:P("licencas"),alt:["parecer_regulatorio"]});
if(d.prazo==="Sim"&&d.not!=="Sim")f.push({sev:"atencao",dim:"Proteção contra riscos",titulo:"Prazo em aberto declarado",
 achado:"Há prazo regulatório, bancário, societário ou fiscal correndo no seu cenário.",
 porque:"Prazos perdidos convertem problemas administráveis em contencioso: preclusão, multa e perda de regimes favoráveis.",
 janela:"Crítico se o prazo for inferior a 30 dias; em atenção nos demais casos.",
 fazer:["Anote a data-limite exata e a fonte da obrigação","Reúna desde já os documentos que o cumprimento exigirá","Trate o prazo como projeto com responsável, não como lembrete"],prod:P("resposta")});
const order={critico:0,atencao:1,oportunidade:2};
return f.sort((a,b)=>order[a.sev]-order[b.sev]);},

/* ---- portal ---- */
renderPortal(){if(!S.user)return;el("pn-nome").textContent=S.user.nome;
el("pn-plan").textContent=S.user.plan==="member"?("Membro · "+(S.user.cycle==="anual"?"Anual":"Mensal")):"Plano gratuito";
this.renderScores();this.renderBiz();this.renderPat();this.renderDem();this.renderPlan();this.chatQuota();
if(!this._pnav){this._pnav=1;document.querySelector(".portal-nav").addEventListener("click",e=>{const b=e.target.closest("[data-view]");if(!b)return;this.view(b.dataset.view);});}},
view(v){document.querySelectorAll(".pn-link[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===v));
document.querySelectorAll(".pview").forEach(p=>p.classList.toggle("active",p.id==="pv-"+v));},
gauge(val){const bd=band(val),r=70,cx=90,cy=95,circ=Math.PI*r;
const dash=circ*val/100;
return `<path d="M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}" fill="none" stroke="var(--surface-2)" stroke-width="14" stroke-linecap="round"/>
<path d="M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}" fill="none" stroke="var(--${bd[3]})" stroke-width="14" stroke-linecap="round" stroke-dasharray="${dash} ${circ}"/>
<text x="${cx}" y="${cy-14}" text-anchor="middle" font-family="Newsreader,Georgia,serif" font-size="40" fill="var(--ink)">${val}</text>
<text x="${cx}" y="${cy+6}" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" letter-spacing="2" fill="var(--${bd[3]})">${bd[2].toUpperCase()}</text>`;},
renderConsolidated(personal){
 const bizScores=S.negocios.map(b=>{const sub=this.bizSub(b);const vv=Object.values(sub).map(x=>Math.max(8,Math.min(95,x)));return Math.round(vv.reduce((a,x)=>a+x,0)/vv.length);});
 const bizAvg=bizScores.length?Math.round(bizScores.reduce((a,x)=>a+x,0)/bizScores.length):null;
 let patAvg=null;
 if(S.pat){const sub=this.patSub(S.pat);const vals=Object.values(sub);patAvg=Math.round(vals.reduce((a,x)=>a+x,0)/vals.length);}
 const parts=[["Pessoal e estrutura",personal]];
 if(bizAvg!==null)parts.push(["Negócios",bizAvg]);if(patAvg!==null)parts.push(["Patrimônio",patAvg]);
 const overall=Math.round(parts.reduce((a,x)=>a+x[1],0)/parts.length);
 el("consolidated").innerHTML=`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
 <div><span class="mono brand">Score consolidado</span><p style="color:var(--muted);font-size:.86rem;margin-top:4px">Cruza as três frentes do seu Atlas${bizAvg===null||patAvg===null?". Complete Negócios e Patrimônio para uma leitura completa.":"."}</p></div>
 <div style="text-align:center"><div style="font-family:var(--serif);font-size:2.4rem;line-height:1;color:${bandColor(overall)}">${overall}</div><span style="font-family:var(--mono);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:${bandColor(overall)}">${band(overall)[2]}</span></div></div>
 <div style="display:grid;grid-template-columns:repeat(${parts.length},1fr);gap:12px;margin-top:16px">
 ${parts.map(([l,v])=>`<div style="text-align:center;background:var(--surface-2);border-radius:10px;padding:14px"><div style="font-family:var(--serif);font-size:1.5rem;color:${bandColor(v)}">${v}</div><span class="mono" style="color:var(--faint);font-size:.56rem">${l}</span></div>`).join("")}</div></div>`;},
renderBenchmark(sc){
 const bench={liberdade:58,mobilidade:44,impostos:49,banking:61,investimentos:55,protecao:52,oportunidades:57,patrimonio:47,negocios:56,ferramentas:45};
 const gaps=DIMS.map(([k,l])=>({k,l,me:sc[k],bench:bench[k],diff:sc[k]-bench[k]})).sort((a,b)=>a.diff-b.diff);
 const worst=gaps[0],best=gaps[gaps.length-1];
 el("benchmark").innerHTML=`<div class="card"><span class="mono brand">Comparação com o seu perfil</span>
 <p style="color:var(--muted);font-size:.86rem;margin:8px 0 14px">Referência estimada para empresários de perfil semelhante ao seu. Use como orientação, não como meta.</p>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
 <div style="background:var(--crit-bg);border-radius:10px;padding:16px"><span class="mono" style="color:var(--crit);font-size:.56rem">MAIOR DEFASAGEM</span><p style="font-size:.92rem;margin-top:6px"><b>${worst.l}:</b> você está em ${worst.me}, referência ${worst.bench}. ${worst.diff<0?Math.abs(worst.diff)+" pontos abaixo.":"em linha."}</p></div>
 <div style="background:var(--opt-bg);border-radius:10px;padding:16px"><span class="mono" style="color:var(--opt);font-size:.56rem">SEU DESTAQUE</span><p style="font-size:.92rem;margin-top:6px"><b>${best.l}:</b> você está em ${best.me}, referência ${best.bench}. ${best.diff>0?best.diff+" pontos acima.":"em linha."}</p></div>
 </div></div>`;},
exportPDF(){const sc=S.scores;if(!sc){alert("Gere seu diagnóstico primeiro.");return;}
 const total=Math.round(DIMS.reduce((a,[k])=>a+sc[k],0)/DIMS.length);
 const fs=this.findings();
 const w=window.open("","_blank");if(!w){alert("Permita pop-ups para exportar o PDF.");return;}
 const bandName=v=>band(v)[2];const bandHex={crit:"#b8452f",warn:"#c08a2e",str:"#2e5f8a",opt:"#2f7d54"};
 const rows=DIMS.map(([k,l])=>`<tr><td>${l}</td><td style="text-align:right;color:${bandHex[band(sc[k])[3]]};font-weight:600">${sc[k]} · ${bandName(sc[k])}</td></tr>`).join("");
 const findHtml=fs.slice(0,6).map(f=>`<div class="f"><div class="ft">${f.titulo} <span class="sev">${f.sev==="critico"?"Crítico":f.sev==="atencao"?"Em atenção":"Oportunidade"}</span></div><p><b>Achado.</b> ${f.achado}</p><p><b>Por que importa.</b> ${f.porque}</p>${f.prod?`<p class="pr">Solução BBLAW: ${f.prod.nome}</p>`:""}</div>`).join("");
 w.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Diagnóstico BBLAW · ${S.user.nome}</title>
 <style>@page{margin:2cm}body{font-family:Georgia,serif;color:#22303a;line-height:1.5;max-width:720px;margin:0 auto}
 .mono{font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a6a2e}
 h1{font-size:26px;margin:6px 0}h2{font-size:16px;margin:26px 0 10px;border-bottom:1px solid #ddd;padding-bottom:6px}
 .head{border-bottom:3px solid #1d4e5c;padding-bottom:16px;margin-bottom:20px}
 .tot{font-size:48px;color:#1d4e5c;margin:10px 0}
 table{width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px}
 td{padding:7px 0;border-bottom:1px solid #eee}
 .f{margin:14px 0;padding:14px;background:#f6f7f8;border-radius:8px;border-left:3px solid #1d4e5c;font-family:Arial,sans-serif;font-size:12px}
 .ft{font-family:Georgia,serif;font-size:15px;font-weight:bold;margin-bottom:8px}
 .sev{font-family:monospace;font-size:9px;background:#e5ebee;padding:2px 7px;border-radius:4px;color:#1d4e5c}
 .pr{color:#1d4e5c;font-weight:600;margin-top:8px}
 .foot{margin-top:30px;font-size:10px;color:#888;font-family:Arial}
/* ================= MOBILE RESPONSIVENESS TWEAKS ================= */
@media (max-width: 768px) {
  .hero-content { padding: 100px 0 60px; }
  .section { padding: 60px 0; }
  .feature { gap: 32px; }
  .thesis p { font-size: 1.5rem; margin-top: 16px; }
  .btn-row { flex-direction: column; width: 100%; }
  .btn-row .btn { width: 100%; }
  .row-item { grid-template-columns: 1fr; gap: 12px; padding: 24px; }
  .row-item .num { padding-top: 0; margin-bottom: -4px; }
  .hero h1 { font-size: 2.3rem; margin-top: 12px; }
  .finale h2 { font-size: 2rem; }
  .art-card { padding: 20px; grid-template-columns: 1fr; gap: 12px; }
  .sidepanel { padding: 20px; }
  .shell { padding: 24px 16px; }
  .nav-links { padding: 16px 20px 24px; gap: 12px; }
  .nav-cta, .nav-atlas { width: 100%; text-align: center; margin-top: 8px; }
}
</style></head><body>
 <div class="head"><span class="mono">BBLAW · Atlas · Diagnóstico Estratégico Confidencial</span>
 <h1>${S.user.nome}</h1><span class="mono" style="color:#5a6a76">Emitido em ${new Date().toLocaleDateString("pt-BR")}</span></div>
 <span class="mono">Score geral</span><div class="tot">${total} · ${bandName(total)}</div>
 <h2>Mapa em 10 dimensões</h2><table>${rows}</table>
 <h2>Principais achados</h2>${findHtml}
 <div class="foot">Documento informativo gerado pelo Atlas. Não constitui parecer jurídico nem consulta sobre caso concreto. Publicidade conforme o Provimento 205/2021 da OAB. Dados tratados sob sigilo profissional e LGPD.</div>
 <script>setTimeout(()=>window.print(),400)<\/script></body></html>`);
 w.document.close();},
renderScores(){const has=!!S.scores;el("score-empty").style.display=has?"none":"block";el("score-box").style.display=has?"block":"none";
if(!has)return;const sc=S.scores;
const total=Math.round(DIMS.reduce((a,[k])=>a+sc[k],0)/DIMS.length);
el("gauge").innerHTML=this.gauge(total);
this.renderConsolidated(total);this.renderBenchmark(sc);
const bd=band(total);
el("score-band-label").innerHTML=`Score geral · <span style="color:var(--${bd[3]})">${bd[2]}</span>`;
el("score-read").textContent=total<40?"Há riscos ativos e estrutura básica por construir. Os achados abaixo mostram o que conter primeiro e por quê.":total<60?"Base parcial com lacunas claras. As faixas abaixo mostram onde o próximo passo rende mais.":total<80?"Estrutura sólida. O foco agora é fechar as lacunas apontadas e capturar as oportunidades do seu momento.":"Estrutura madura. Governança, revisão periódica e otimização fina.";
el("score-bars").innerHTML=DIMS.map(([k,l])=>{const v=sc[k],b=band(v);
const det=S.scoreDetail&&S.scoreDetail[k];
const ups=det?det.applied.filter(a=>a.w>0):[];const downs=det?det.applied.filter(a=>a.w<0):[];
const factorHtml=det?`<div class="scoremath">
<div class="mathrow"><span>Base do modelo</span><b>${det.base}</b></div>
${downs.map(a=>`<div class="mathrow neg"><span>${a.txt}</span><b>${a.w}</b></div>`).join("")}
${ups.map(a=>`<div class="mathrow pos"><span>${a.txt}</span><b>+${a.w}</b></div>`).join("")}
<div class="mathrow total"><span>Score da dimensão</span><b style="color:${bandColor(v)}">${v}</b></div>
</div>`:"";
const potential=downs.length?Math.min(96,v-downs.reduce((a,x)=>a+x.w,0)):v;
return `<div class="dim" id="dim-${k}"><button class="dim-head" onclick="this.parentElement.classList.toggle('open')">
<span>${l}</span><span class="bandtag" style="background:${bandBg(v)};color:${bandColor(v)}">${b[2]}</span>
<span class="tr"><span class="fl" style="width:${v}%;background:${bandColor(v)}"></span></span>
<span class="vl">${v}</span></button>
<div class="dim-body"><p><strong style="color:var(--ink)">O que mede:</strong> ${DIM_DESC[k]}</p>
<span class="mono" style="color:var(--faint);display:block;margin:16px 0 8px">Por que este número</span>
${factorHtml}
${potential>v?`<div class="whatif"><span class="mono" style="color:var(--petrol)">Simulação</span> Resolvendo os fatores negativos acima, esta dimensão subiria de <b style="color:${bandColor(v)}">${v}</b> para cerca de <b style="color:${bandColor(potential)}">${potential}</b> (${band(potential)[2]}). As soluções que fazem isso aparecem nos achados abaixo.</div>`:'<p style="color:var(--muted);font-size:.86rem;margin-top:8px">Sem fatores negativos ativos nesta dimensão.</p>'}</div></div>`;}).join("");
const fs=this.findings();const member=S.user.plan==="member";
const show=member?fs:fs.slice(0,3);
el("score-insights").innerHTML=show.map(f=>this.findingCard(f)).join("")+
(!member&&fs.length>3?`<div class="locked"><strong>Mais ${fs.length-3} achados no plano Membro</strong><br>Todas as análises, estratégias e ferramentas, consultas por e-mail e assistente ilimitado.<br><button class="btn primary" style="margin-top:14px" onclick="APP.view('plano')">Conhecer o plano Membro</button></div>`:"")+
(fs.length===0?`<div class="card" style="text-align:center;color:var(--muted)">Nenhum risco ativo identificado nas suas respostas. Complete Negócios e Patrimônio para uma leitura mais profunda.</div>`:"");},
findingCard(f){const desc=(S.user.plan==="member"&&S.user.cycle==="anual")?0.10:0;
const price=p=>p.preco?(p.apartir?"a partir de ":"")+fmt(Math.round(p.preco*(1-desc))):"sob proposta";
// camada de análise paga (parecer): o passo intermediário antes da execução
const analise=(f.alt||[]).map(id=>PRODUCTS.find(p=>p.id===id)).filter(p=>p&&p.kind==="analise")[0];
// execução: produto principal + alternativas de execução
const exec=[f.prod,...(f.alt||[]).map(id=>PRODUCTS.find(p=>p.id===id))].filter(p=>p&&p.kind!=="analise");
const seen=new Set();const execU=exec.filter(p=>p&&!seen.has(p.id)&&seen.add(p.id));
return `<div class="finding"><div class="fhead"><h3 style="font-size:1.1rem">${f.titulo}</h3><span class="sev ${f.sev}">${f.sev==="critico"?"Crítico":f.sev==="atencao"?"Em atenção":"Oportunidade"} · ${f.dim}</span></div>
<div class="fbody">
<div class="flayer"><span class="lk">O achado</span><p>${f.achado}</p></div>
<div class="flayer"><span class="lk">Por que importa</span><p>${f.porque}</p></div>
<div class="flayer"><span class="lk">Gravidade e janela</span><p>${f.janela}</p></div>
<div class="flayer"><span class="lk">O que você já pode fazer sozinho</span><ul>${f.fazer.map(x=>`<li>${x}</li>`).join("")}</ul></div>
<div class="ladder">
${analise?`<div class="rung"><div class="rungtop"><span class="rk">Passo 1 · Aprofundar</span><span class="rp">${price(analise)}</span></div>
<span class="rn">${analise.nome}</span><p class="rd">${analise.esc}</p>
<button class="btn light" onclick="APP.buy('${analise.id}')">Contratar análise</button></div>`:""}
<div class="rung exec"><div class="rungtop"><span class="rk">${analise?"Passo 2 · ":""}Operacionalizar com a BBLAW</span></div>
<p class="rd" style="margin-top:2px">Execução com escopo e preço fechados${analise?". O valor da análise é abatido aqui.":"."}</p>
<div class="execopts">${execU.map(p=>`<div class="execopt"><div><span class="rn">${p.nome}</span><span class="rp2">${price(p)}${p.prazo?" · "+p.prazo:""}</span></div><button class="btn primary" onclick="APP.buy('${p.id}')">${p.preco?"Ver proposta":"Solicitar proposta"}</button></div>`).join("")}</div>
<button class="chip" style="margin-top:12px" onclick="APP.startDemand('${(f.prod&&f.prod.id)||""}','${(f.titulo||"").replace(/'/g,"")}')">Prefiro abrir uma demanda personalizada</button></div>
</div></div></div>`;},

/* ---- negócios ---- */
resetBizForm(){el("bz-idx").value="-1";el("bz-nome").value="";el("bz-setor").selectedIndex=0;el("bz-fat").selectedIndex=0;el("bz-clt").selectedIndex=0;
document.querySelectorAll('input[name="bz-f"],input[name="bz-f2"]').forEach(c=>c.checked=false);
el("bz-nsocios").selectedIndex=0;el("bz-regime").selectedIndex=0;el("bz-refined").style.display="none";
el("bz-formtitle").textContent="Novo negócio · análise essencial";el("bz-submit").textContent="Analisar negócio";},
toggleBizForm(){const f=el("biz-form");const open=f.style.display==="none";if(open)this.resetBizForm();f.style.display=open?"block":"none";},
cancelBiz(){el("biz-form").style.display="none";},
editBiz(i){const b=S.negocios[i];this.resetBizForm();el("biz-form").style.display="block";
el("bz-idx").value=i;el("bz-nome").value=b.nome;el("bz-setor").value=b.setor;el("bz-fat").value=b.fat;el("bz-clt").value=b.clt;
(b.flags||[]).forEach(v=>{const c=document.querySelector(`input[name="bz-f"][value="${v}"]`);if(c)c.checked=true;});
if(b.ref){el("bz-refined").style.display="block";el("bz-nsocios").value=b.ref.nsocios||"Sócio único";el("bz-regime").value=b.ref.regime||"Não sei";
(b.ref.flags2||[]).forEach(v=>{const c=document.querySelector(`input[name="bz-f2"][value="${v}"]`);if(c)c.checked=true;});}
el("bz-formtitle").textContent="Editar · "+b.nome;el("bz-submit").textContent="Salvar alterações";
el("biz-form").scrollIntoView({block:"center"});},
removeBiz(i){if(!confirm("Remover este negócio da análise?"))return;S.negocios.splice(i,1);this.recompute();this.save();this.renderBiz();this.renderScores();},
addBiz(){const nome=el("bz-nome").value.trim();if(!nome){el("bz-nome").focus();return;}
const flags=[...document.querySelectorAll('input[name="bz-f"]:checked')].map(x=>x.value);
const refinedOpen=el("bz-refined").style.display!=="none";
const flags2=[...document.querySelectorAll('input[name="bz-f2"]:checked')].map(x=>x.value);
const obj={nome,setor:el("bz-setor").value,fat:el("bz-fat").value,clt:el("bz-clt").value,flags,
refined:refinedOpen,ref:refinedOpen?{nsocios:el("bz-nsocios").value,regime:el("bz-regime").value,flags2}:null};
const idx=+el("bz-idx").value;
if(idx>=0)S.negocios[idx]=obj;else S.negocios.push(obj);
el("biz-form").style.display="none";this.recompute();this.save();this.renderBiz();this.renderScores();},
bizSub(b){const has=f=>b.flags.includes(f);const has2=f=>b.ref&&b.ref.flags2&&b.ref.flags2.includes(f);
const tech=b.setor.includes("Tec")||b.setor.includes("Digital")||b.setor.includes("Fintech");
const cltMid=["11 a 59","60 a 200","Mais de 200"].includes(b.clt);
let soc=has("socios")?72:28;if(has2("critavaliacao"))soc-=14;if(has2("semvesting"))soc-=8;if(b.ref&&["3 a 4 sócios","5 ou mais"].includes(b.ref.nsocios)&&!has("socios"))soc-=6;
let pes=["Nenhum","1 a 10"].includes(b.clt)?70:(has("riscos")?78:22);if(has2("pj"))pes-=12;if(has2("passivojud"))pes-=10;
let reg=has("regulado")?(has("riscos")?60:34):70;if(has2("dadosclientes")&&!has("contratos"))reg-=8;
let fis=["R$ 5 a 20 mi","Acima de R$ 20 mi"].includes(b.fat)?(has("socios")?58:40):58;
if(b.ref&&b.ref.regime==="Não sei")fis-=6;
return{
"Societário":Math.max(8,soc),
"Contratos":has("contratos")?74:34,
"Ativos e PI":Math.min(95,(has("marca")?45:12)+((has("software")||!tech)?40:10)),
"Regulatório":Math.max(8,reg),
"Pessoas e trabalhista":Math.max(8,pes-(cltMid&&has2("dependencia")?4:0)),
"Fiscal":Math.max(8,fis)};},
bizFindings(b){const P=id=>PRODUCTS.find(p=>p.id===id);const has=f=>b.flags.includes(f);const r=[];
const tech=b.setor.includes("Tec")||b.setor.includes("Digital")||b.setor.includes("Fintech");
const cltN={"Nenhum":0,"1 a 10":6,"11 a 59":35,"60 a 200":120,"Mais de 200":300}[b.clt]||0;
const fmtBR=n=>"R$ "+Math.round(n).toLocaleString("pt-BR");
/* PASSIVO TRABALHISTA OCULTO: o "refém do próprio negócio" */
if(cltN>=6){const custoResc=cltN*(b.fat.includes("20 mi")||b.fat.includes("5 a 20")?18000:9000);
r.push({sev:cltN>=35?"critico":"atencao",dim:"Passivo trabalhista",titulo:"Custo de encerramento não mapeado",
achado:`Com cerca de ${cltN} vínculos CLT, o passivo de desligamento nunca foi quantificado.`,
porque:`A maioria dos empresários não sabe quanto custaria encerrar ou reestruturar a operação, e por isso vira refém dela. Uma estimativa conservadora de verbas rescisórias (aviso, multa de 40% do FGTS, férias e 13º proporcionais, verbas indenizatórias) para esse quadro fica na ordem de ${fmtBR(custoResc)}, sem contar contingências ocultas: horas extras não pagas, desvio de função, verbas de natureza salarial disfarçadas de PJ, e vínculos de "pejotização" que podem ser reconhecidos. Esse passivo não aparece no balanço, mas aparece inteiro no dia em que você precisa vender, captar ou simplesmente sair.`,
janela:"Em atenção permanente: o passivo cresce a cada mês de vínculo e a cada prática informal mantida.",
fazer:["Some as verbas rescisórias do quadro atual: só isso já assusta e orienta","Identifique contratos PJ que, na prática, têm subordinação, habitualidade e pessoalidade","Revise horas extras, sobreaviso e acúmulo de função não formalizados","Mapeie o custo de saída antes de precisar dele: é o que devolve sua liberdade de decidir"],prod:P("auditoria_trabalhista"),alt:["parecer_trabalhista","reestruturacao"]});}
/* SÓCIOS: saída, avaliação, morte/incapacidade, governança */
if(!has("socios")){r.push({sev:"critico",dim:"Societário",titulo:"Sociedade sem regras de saída, avaliação e sucessão",
achado:"O negócio opera sem acordo de sócios vigente.",
porque:"O contrato social padrão não responde às perguntas que quebram sociedades. Como um sócio sai, e por qual valor? Qual o critério objetivo de avaliação do negócio: faturamento, múltiplo de EBITDA, valor patrimonial? Se um sócio falece ou fica incapaz, os herdeiros entram na sociedade (muitas vezes sem preparo ou interesse) ou recebem o valor da quota, e em quantas parcelas, para não quebrar o caixa da empresa? Sem esses critérios definidos em vida e em concordância, cada um desses eventos vira uma disputa cara, com a operação como refém e, frequentemente, com a viúva ou o sócio de saída de um lado e a empresa do outro.",
janela:"Crítico e barato agora: escrever as regras enquanto todos concordam custa uma fração de arbitrá-las sob conflito.",
fazer:["Defina com os sócios o critério objetivo de avaliação do negócio","Estabeleça como se paga a saída: à vista é inviável; defina prazo e parcelas","Decida o que acontece na morte ou incapacidade: herdeiros entram ou são pagos?","Inclua regras de deadlock, não concorrência e vesting se aplicável"],prod:P("acordo"),alt:["parecer_societario","governanca_familiar"]});}
else{r.push({sev:"atencao",dim:"Societário",titulo:"Acordo de sócios a auditar",
achado:"Existe acordo de sócios, mas resta confirmar se ele cobre os cenários críticos.",
porque:"Muitos acordos existem mas são incompletos: têm regra de saída voluntária mas não de morte ou incapacidade; definem que a quota será paga mas não o critério de avaliação nem o prazo; tratam de deadlock mas ignoram herdeiros. A lacuna só aparece quando o evento acontece.",
janela:"Em atenção: auditar agora é trivial; descobrir a lacuna no evento é caro.",
fazer:["Verifique se há critério objetivo de avaliação e prazo de pagamento da saída","Confirme o tratamento de morte e incapacidade de sócio","Cheque cláusulas de não concorrência e de governança do dia a dia"],prod:P("parecer_societario"),alt:["acordo"]});}
/* NR-1: exposição cível/trabalhista, não só multa */
if(cltN>=11&&!has("riscos")){r.push({sev:"critico",dim:"Riscos psicossociais",titulo:"NR-1 sem programa: exposição além da multa",
achado:`Quadro de ${b.clt} CLT sem gerenciamento de riscos psicossociais documentado.`,
porque:"A multa da fiscalização é o menor dos riscos. O risco real é a responsabilização em ações cíveis e trabalhistas por danos à saúde mental, como burnout, assédio, depressão relacionada ao trabalho. Sem um Programa de Gerenciamento de Riscos que comprove que a empresa identificou, avaliou e agiu sobre os fatores psicossociais, ela fica praticamente indefesa: mesmo com nexo causal fraco ou limitado, a ausência de qualquer prova de diligência empurra o juízo para a condenação. Ter o programa funcionando inverte o ônus e é, muitas vezes, a única defesa disponível.",
janela:"Crítico: cada colaborador é uma ação potencial, e o programa precisa preexistir ao pleito para servir de defesa.",
fazer:["Verifique se o PGR atual sequer menciona riscos psicossociais","Não aplique questionários improvisados: método indefensável piora a posição em juízo","Documente cada etapa (identificação, avaliação, plano, execução): a prova é o ativo","Faça o checklist de conformidade do Hub Regulatório"],prod:P("nr1"),alt:["parecer_trabalhista","lgpd"]});}
/* MARCA */
if(!has("marca")){r.push({sev:"critico",dim:"Ativos e PI",titulo:"Marca em uso sem registro",
achado:"A marca do negócio opera publicamente sem depósito no INPI.",
porque:"O sistema brasileiro é atributivo: quem registra primeiro tem o direito, não quem usa há mais tempo. Um terceiro, inclusive um concorrente ou ex-sócio, pode depositar sua marca e forçar você a parar de usá-la, com rebranding que custa clientes, domínio, mídia acumulada e histórico. A proteção retroage à data do depósito, então cada dia sem registrar é risco puro.",
janela:"Crítico: janela aberta para terceiros todos os dias.",
fazer:["Faça a busca prévia gratuita na base do INPI","Liste os sinais em uso: nome, logo, submarcas","Use o teste de registrabilidade do Hub Tech"],prod:P("marca"),alt:["parecer_pi"]});}
if(tech&&!has("software")){r.push({sev:"atencao",dim:"Ativos e PI",titulo:"Software sem propriedade consolidada",
achado:"O código do negócio não tem PI formalmente cedida à empresa.",
porque:"Sem cessão expressa e por escrito, o código pertence a quem o escreveu: freelancers, PJs, ex-CLTs e até ex-sócios. Recibo prova pagamento, não transfere titularidade. Em due diligence, PI difusa reprecifica ou trava a operação; num litígio com ex-colaborador, pode paralisar o produto.",
janela:"Em atenção, crítica se houver captação ou venda no horizonte.",
fazer:["Liste todos que já escreveram código","Verifique cláusula de cessão de PI em cada contrato","Priorize regularizar quem já saiu da empresa"],prod:P("software"),alt:["parecer_pi","contratos3"]});}
if(!has("contratos")){r.push({sev:"atencao",dim:"Contratos",titulo:"Operação sem contratos padronizados",
achado:"As contratações recorrentes não seguem modelos revisados.",
porque:"Contrato improvisado transfere risco em silêncio: responsabilidade sem teto, PI mal alocada, rescisão desprotegida, foro impraticável. O custo aparece anos depois, multiplicado pelo volume assinado no modelo errado.",
janela:"Em atenção: cresce com cada assinatura.",
fazer:["Identifique os três contratos mais assinados no ano","Marque as cláusulas de responsabilidade, PI e rescisão","Some o valor exposto: é o tamanho do risco"],prod:P("contratos3"),alt:["parecer_contratual"]});}
if(has("regulado")&&!has("riscos")){r.push({sev:"atencao",dim:"Regulatório",titulo:"Setor regulado, enquadramento a confirmar",
achado:"O negócio atua em setor que exige licenças ou autorizações específicas.",
porque:"Operar fora do enquadramento, ou além dos limites do modelo atual, expõe a bloqueios, sanções e responsabilização pessoal dos sócios. Nesses setores, o enquadramento é a licença para existir, e a fiscalização costuma chegar depois de a operação já ter escalado.",
janela:"Em atenção permanente: a regra do setor muda mais rápido que a operação.",
fazer:["Documente o modelo e o fluxo de fundos ponta a ponta","Identifique a autorização que o volume atual exige","Defina quem monitora as normas do setor"],prod:P("licencas"),alt:["parecer_regulatorio"]});}
if(has("captacao")){r.push({sev:"oportunidade",dim:"Captação",titulo:"Captação prevista",
achado:"Há rodada de investimento no horizonte deste negócio.",
porque:"Due diligence encontra o que não foi arrumado e reprecifica. Cap table informal, PI difusa, passivo trabalhista oculto e ausência de acordo de sócios são os quatro itens que mais derrubam valuation. Preparar antes custa uma fração de corrigir sob a pressão da rodada.",
janela:"Oportunidade com prazo: preparar 3 a 6 meses antes.",
fazer:["Monte a lista de documentos que o investidor pedirá","Resolva PI e acordo de sócios primeiro: são os que mais travam","Quantifique o passivo trabalhista antes que o investidor o faça"],prod:P("captacao"),alt:["reestruturacao","auditoria_trabalhista"]});}
if(has("inad")){r.push({sev:"atencao",dim:"Crédito",titulo:"Crédito relevante a recuperar",
achado:"O negócio acumula inadimplência relevante.",
porque:"Crédito parado é capital de giro financiando terceiros de graça, enquanto a prescrição corre e a capacidade de pagamento do devedor se deteriora. Recuperação estruturada começa por notificação e negociação com lastro documental; a via judicial é alavanca, não plano.",
janela:"Em atenção: cada mês reduz a chance de recuperação.",
fazer:["Liste os débitos por valor, idade e documentação","Separe contratos, notas e comunicações de cada devedor","Todo acordo novo por escrito, nunca verbal"],prod:P("recupcredito"),alt:["parecer_contratual"]});}
if(["R$ 5 a 20 mi","Acima de R$ 20 mi"].includes(b.fat)){r.push({sev:"oportunidade",dim:"Estrutura fiscal",titulo:"Porte pede reestruturação",
achado:`Faturamento na faixa ${b.fat} com estrutura possivelmente de fase anterior.`,
porque:"Empresas que escalam sem reorganizar pagam em tributos subotimizados, riscos concentrados numa só entidade e decisões travadas por falta de governança. Reestruturar regime tributário e arquitetura societária é o que negócios maduros fazem antes de cada nova fase, não depois da conta chegar.",
janela:"Oportunidade: quanto antes do próximo salto, maior o ganho.",
fazer:["Compare o regime tributário atual com as alternativas para seu porte","Desenhe o organograma societário real, com todas as entidades","Liste decisões que hoje dependem de uma só pessoa"],prod:P("reestruturacao"),alt:["parecer_tributario","remodelagem"]});}
if(has("intl")){r.push({sev:"oportunidade",dim:"Internacional",titulo:"Vendas internacionais sem entidade dedicada",
achado:"O negócio vende para fora do Brasil.",
porque:"Recebimentos internacionais por vias improvisadas custam câmbio, tributo e risco bancário, além de dificultarem acesso a adquirentes e plataformas globais. Uma entidade adequada organiza o fluxo e destrava mercado.",
janela:"Oportunidade proporcional ao volume internacional.",
fazer:["Some o volume mensal recebido do exterior","Compare os cenários no comparador do Hub Internacionalização","Verifique as exigências das plataformas onde vende"],prod:P("llc"),alt:["parecer_internacional","holdintl"]});}
// achados que só aparecem com análise refinada
const has2=f=>b.ref&&b.ref.flags2&&b.ref.flags2.includes(f);
if(b.refined){
if(has2("pj")){r.push({sev:"critico",dim:"Passivo trabalhista",titulo:"Pejotização como passivo latente",
achado:"O negócio usa prestadores PJ de forma relevante.",
porque:"Contrato de PJ que na prática tem subordinação, habitualidade, pessoalidade e onerosidade é vínculo empregatício disfarçado. Reconhecida a relação, a empresa paga retroativamente todos os direitos trabalhistas, mais INSS e FGTS de todo o período, com multa. Um único PJ reclamante costuma abrir precedente para todos os outros. É um dos maiores passivos ocultos das operações digitais e de serviços.",
janela:"Crítico: cada mês de contrato PJ mal estruturado aumenta a base de cálculo do passivo.",
fazer:["Aplique o teste dos requisitos do vínculo a cada PJ recorrente","Ajuste contratos e rotina para afastar subordinação e pessoalidade","Considere regularizar os casos de maior risco antes que virem reclamação"],prod:P("auditoria_trabalhista"),alt:["parecer_trabalhista","reestruturacao"]});}
if(has2("passivojud")){r.push({sev:"atencao",dim:"Passivo trabalhista",titulo:"Ações trabalhistas em curso",
achado:"O negócio já responde a ações trabalhistas.",
porque:"Ações em curso são sintoma e fonte de informação: revelam os pontos que a fiscalização e outros ex-colaboradores atacarão. Tratadas isoladamente, repetem-se; tratadas como diagnóstico, permitem corrigir a causa e reduzir o passivo futuro.",
janela:"Em atenção: cada nova ação sobre a mesma causa multiplica a exposição.",
fazer:["Mapeie o padrão das ações: mesma verba, mesmo setor, mesma causa","Corrija a prática de origem, não só o processo","Provisione o passivo provável para não ser surpreendido"],prod:P("parecer_trabalhista"),alt:["auditoria_trabalhista"]});}
if(has2("critavaliacao")||has2("semvesting")){r.push({sev:"critico",dim:"Societário",titulo:"Critério de avaliação e permanência ausentes",
achado:"Faltam critério objetivo de avaliação da empresa"+(has2("semvesting")?" e regras de vesting/permanência de sócios.":"."),
porque:"Sem critério de avaliação definido (múltiplo de EBITDA, faturamento, valor patrimonial), a saída de um sócio vira batalha de laudos, cada lado contratando o seu. Sem vesting, um sócio pode receber participação integral e sair meses depois levando valor que não ajudou a construir. E na morte ou incapacidade, os herdeiros questionam qualquer número que não tenha sido acordado antes. Definir isso em vida, com todos de acordo, é a diferença entre transição e litígio.",
janela:"Crítico: o critério precisa existir antes do evento que o exige.",
fazer:["Escolha e registre o método de avaliação da empresa","Defina prazo e forma de pagamento da saída para não quebrar o caixa","Estabeleça vesting e o que acontece na morte ou incapacidade de cada sócio"],prod:P("acordo"),alt:["parecer_societario","governanca_familiar"]});}
if(has2("dadosclientes")){r.push({sev:"atencao",dim:"Dados e LGPD",titulo:"Tratamento de dados sem governança",
achado:"O negócio trata dados pessoais de clientes.",
porque:"LGPD não é papel: é exposição a multa da ANPD, a ações de titulares e à reprovação em due diligence. Vazamento sem programa de governança comprovado agrava a responsabilidade. Para negócios digitais, é também requisito de contratos com plataformas e parceiros maiores.",
janela:"Em atenção: cresce com a base de dados e com cada novo canal de coleta.",
fazer:["Mapeie quais dados coleta, por quê e por quanto tempo","Revise política de privacidade e bases legais de cada tratamento","Defina o canal de atendimento a titulares exigido pela lei"],prod:P("lgpd"),alt:["parecer_regulatorio"]});}
if(has2("dependencia")){r.push({sev:"atencao",dim:"Governança",titulo:"Operação dependente de uma pessoa",
achado:"A operação depende de uma única pessoa para funcionar.",
porque:"Dependência de uma pessoa é risco de continuidade: afastamento, doença ou saída paralisam o negócio e derrubam seu valor numa avaliação. Investidores e compradores tratam isso como key person risk e descontam o preço. Governança, documentação de processos e sucessão de comando transformam a empresa em ativo transferível.",
janela:"Em atenção: o risco é invisível até o dia em que a pessoa falta.",
fazer:["Identifique as funções críticas concentradas nessa pessoa","Documente processos e crie redundância nas decisões-chave","Estruture governança e um plano de sucessão de comando"],prod:P("governanca_familiar"),alt:["reestruturacao","parecer_societario"]});}
}
const order={critico:0,atencao:1,oportunidade:2};return r.sort((a,b)=>order[a.sev]-order[b.sev]);},
renderBiz(){el("biz-list").innerHTML=S.negocios.length?S.negocios.map((b,i)=>{
const sub=this.bizSub(b);const vals=Object.values(sub).map(v=>Math.max(8,Math.min(95,v)));
const total=Math.round(vals.reduce((a,v)=>a+v,0)/vals.length);const bd=band(total);
const fs=this.bizFindings(b);const member=S.user.plan==="member";const show=member?fs:fs.slice(0,2);
const crit=fs.filter(f=>f.sev==="critico").length;
return `<div class="demcard">
<div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center">
<div><span class="mono" style="color:var(--faint)">${b.setor} · ${b.fat} · CLT ${b.clt}${b.refined?" · análise refinada":" · análise essencial"}</span><h3 style="margin-top:4px">${b.nome}</h3></div>
<div style="text-align:center"><div style="font-family:var(--serif);font-size:2.6rem;line-height:1;color:${bandColor(total)}">${total}</div><span class="bandtag" style="background:${bandBg(total)};color:${bandColor(total)};font-family:var(--mono);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;border-radius:6px;padding:3px 8px">${bd[2]}</span></div></div>
<div class="btn-row" style="margin-top:12px;gap:8px">
<button class="chip" onclick="APP.editBiz(${i})">Editar informações</button>
${!b.refined?`<button class="chip" onclick="APP.editBiz(${i});el('bz-refined').style.display='block'">+ Análise refinada</button>`:""}
<button class="chip" onclick="APP.removeBiz(${i})">Remover</button></div>
<div class="reporthead"><span class="mono brand">Relatório do negócio</span><p>Índice de estrutura jurídica em 6 dimensões e ${fs.length} ${fs.length===1?"achado fundamentado":"achados fundamentados"}${crit?`, ${crit} ${crit===1?"crítico":"críticos"}`:""}. Quanto maior o índice, mais protegido o negócio.</p></div>
<div class="subscore">${Object.entries(sub).map(([l,v0])=>{const v=Math.max(8,Math.min(95,v0));
return `<div class="dim"><div class="dim-head" style="cursor:default"><span>${l}</span><span class="bandtag" style="background:${bandBg(v)};color:${bandColor(v)}">${band(v)[2]}</span><span class="tr"><span class="fl" style="width:${v}%;background:${bandColor(v)}"></span></span><span class="vl">${v}</span></div></div>`;}).join("")}</div>
<div class="reporthead" style="margin-top:22px"><span class="mono brand">Achados e caminhos</span><p>Cada achado explica o risco, por que importa para além do óbvio, o que você já pode fazer e como operacionalizar.</p></div>
${show.map(f=>APP.findingCard(f)).join("")}
${!member&&fs.length>2?`<div class="locked">Mais ${fs.length-2} achados deste negócio no plano Membro.<br><button class="btn primary" style="margin-top:12px" onclick="APP.view('plano')">Desbloquear</button></div>`:""}
${fs.length===0?'<p style="color:var(--muted);text-align:center">Estrutura em dia para o estágio atual deste negócio.</p>':""}
${!b.refined?`<div class="refinedcta">Esta é a análise essencial. As informações complementares revelam riscos societários, trabalhistas e de dados que o essencial não captura. <button class="chip" onclick="APP.editBiz(${i});el('bz-refined').style.display='block'">Refinar análise deste negócio</button></div>`:""}
</div>`;}).join(""):
'<div class="card" style="text-align:center;padding:44px;color:var(--muted)">Adicione um negócio para receber o score empresarial em 6 dimensões e os achados fundamentados: societário, contratos, ativos e PI, regulatório, pessoas e trabalhista, e fiscal.</div>';},

/* ---- patrimônio ---- */
compCols:{"Imóveis":"#2e5f8a","Participações":"#1d4e5c","Cripto":"#c08a2e","Exterior":"#8a6a2e","Financeiro":"#5a7d8c"},
togglePatForm(){const f=el("pat-form");const open=f.style.display==="none";f.style.display=open?"block":"none";
if(open){if(S.pat&&S.pat.prop){document.querySelectorAll("#pt-sliders .slrow").forEach(r=>{const inp=r.querySelector("input");inp.value=S.pat.prop[r.dataset.comp]||0;});el("pt-estr").value=S.pat.estr;el("pt-faixa").value=S.pat.faixa;
if(S.pat.obj)document.querySelectorAll('input[name="pt-o"]').forEach(c=>c.checked=S.pat.obj.includes(c.value));}
this.slide(null);}},
slide(changed){const rows=[...document.querySelectorAll("#pt-sliders .slrow")];const cols=this.compCols;
if(changed){/* trava em 100: redistribui o excedente proporcionalmente entre os outros */
const others=rows.filter(r=>r!==changed);
const chVal=+changed.querySelector("input").value;
let rest=others.reduce((a,r)=>a+ +r.querySelector("input").value,0);
const need=100-chVal;
if(rest===0){const each=Math.floor(need/others.length);others.forEach((r,i)=>r.querySelector("input").value=i===0?need-each*(others.length-1):each);}
else{let acc=0;others.forEach((r,i)=>{const cur=+r.querySelector("input").value;
let nv=i===others.length-1?need-acc:Math.round(need*cur/rest);nv=Math.max(0,nv);acc+=nv;r.querySelector("input").value=nv;});}}
let tot=rows.reduce((a,r)=>a+ +r.querySelector("input").value,0);
el("pt-preview").innerHTML=rows.map(r=>{const v=+r.querySelector("input").value;const c=r.dataset.comp;
r.querySelector(".slval").textContent=v+"%";
return v>0?`<span style="flex:${v};background:${cols[c]}"></span>`:"";}).join("");
const sum=el("pt-sum");sum.textContent=tot===100?"Total: 100% ✓":"Total: "+tot+"%";
sum.style.color=tot===100?"var(--opt)":"var(--warn)";},
savePat(){const rows=[...document.querySelectorAll("#pt-sliders .slrow")];
let tot=rows.reduce((a,r)=>a+ +r.querySelector("input").value,0);
if(tot!==100){/* normaliza automaticamente */const f=100/tot;let acc=0;
rows.forEach((r,i)=>{const nv=i===rows.length-1?100-acc:Math.round((+r.querySelector("input").value)*f);r.querySelector("input").value=nv;acc+=nv;});}
const prop={};rows.forEach(r=>prop[r.dataset.comp]=+r.querySelector("input").value);
const o=[...document.querySelectorAll('input[name="pt-o"]:checked')].map(x=>x.value);
const comp=Object.keys(prop).filter(k=>prop[k]>0);
S.pat={faixa:el("pt-faixa").value,estr:el("pt-estr").value,comp,prop,obj:o};
el("pat-form").style.display="none";this.recompute();this.save();this.renderPat();this.renderScores();},
patFindings(p){const P=id=>PRODUCTS.find(x=>x.id===id);const r=[];const pr=p.prop||{};
const faixaVal={"Até R$ 1 mi":700000,"R$ 1 a 5 mi":3000000,"R$ 5 a 20 mi":12000000,"Acima de R$ 20 mi":40000000};
const V=faixaVal[p.faixa]||3000000;const fmtBR=n=>"R$ "+Math.round(n).toLocaleString("pt-BR");
const imv=(pr["Imóveis"]||0),part=(pr["Participações"]||0),cri=(pr["Cripto"]||0),ext=(pr["Exterior"]||0);
const naPF=p.estr==="Tudo na pessoa física";
/* ACHADO MESTRE: patrimônio na PF, com números do custo sucessório */
if(naPF){const itcmd=V*0.06;const custas=V*0.02;const adv=V*0.08;const total=itcmd+custas+adv;
r.push({sev:"critico",dim:"Sucessão e exposição",titulo:"Patrimônio integral na pessoa física",
achado:`Todo o patrimônio (faixa ${p.faixa}) está no seu CPF, sem nenhuma camada societária.`,
porque:`São quatro consequências que se somam, não uma. Primeiro, exposição: qualquer risco pessoal, empresarial ou de terceiros alcança tudo. Segundo, custo sucessório: em inventário, estima-se ITCMD de ~${fmtBR(itcmd)}, custas de ~${fmtBR(custas)} e honorários advocatícios que costumam ficar entre 6% e 10% do espólio, ~${fmtBR(adv)}, totalizando algo da ordem de ${fmtBR(total)} apenas para transmitir o que já é seu. Terceiro, tempo: inventários levam de meses a anos, com o patrimônio bloqueado. Quarto, liquidez: se o patrimônio é ilíquido, a família precisa vender bens às pressas, no pior momento, só para pagar o imposto de transmitir a herança.`,
janela:"Crítico e sensível ao tempo: proteção patrimonial só é oponível para riscos futuros. Reorganizar depois que um risco se materializa pode ser anulado como fraude contra credores.",
fazer:["Liste seus bens por natureza, valor e liquidez: é o insumo de qualquer desenho","Use a calculadora do Hub Patrimonial para ver o custo do inventário no seu estado","Levante se a família teria caixa para pagar o ITCMD sem vender bens","Alinhe objetivos: proteger, suceder com economia, ou manter controle em vida"],prod:P("holdfam"),alt:["parecer_sucessorio","planejamento_completo"]});}
/* Imóveis concentrados */
if(imv>=50){const custoInv=V*(imv/100)*0.16;
r.push({sev:naPF?"critico":"atencao",dim:"Liquidez sucessória",titulo:"Concentração imobiliária"+(naPF?" na pessoa física":""),
achado:`Cerca de ${imv}% do patrimônio está em imóveis${naPF?", em nome pessoal":""}.`,
porque:`Imóvel é o pior ativo para atravessar uma sucessão sem planejamento. Não se fraciona para dividir entre herdeiros, não vira caixa rápido para pagar o ITCMD (estimado em ~${fmtBR(custoInv)} sobre a parcela imobiliária, somando imposto e custos), e um único imóvel disputado entre herdeiros costuma travar o inventário inteiro. Fora da sucessão, ainda compromete fluxo de caixa: patrimônio alto e caixa baixo é a armadilha clássica da família que "tem tudo" e não consegue pagar as contas do espólio.`,
janela:"Em atenção crescente: cada valorização aumenta o ITCMD futuro sobre uma base que não gera liquidez.",
fazer:["Separe imóveis de uso, de renda e de reserva: cada um pede tratamento diferente","Estime o ganho de capital latente antes de qualquer venda","Avalie holding imobiliária para a parcela de renda e doação com usufruto para a de reserva"],prod:P("holdfam"),alt:["parecer_sucessorio","reorg_imobiliaria"]});}
/* Cripto */
if(cri>=25){r.push({sev:"atencao",dim:"Custódia e fiscal",titulo:"Cripto como parcela relevante",
achado:`Cerca de ${cri}% do patrimônio está em criptoativos.`,
porque:"Concentração em cripto soma três riscos que raramente são tratados juntos. Fiscal: ganhos não apurados geram passivo com multa qualificada, e a Receita cruza dados de exchanges a cada ciclo. Custódia: perda de chave é perda do ativo, sem seguro e sem recurso. Sucessório: sem um protocolo de acesso documentado, o ativo morre com o titular, e herdeiros que não sabem onde nem como acessar simplesmente perdem o patrimônio.",
janela:"Em atenção nas três camadas ao mesmo tempo.",
fazer:["Documente a custódia de cada parcela: exchange, hardware, multisig","Verifique a apuração e declaração dos últimos cinco anos","Crie um protocolo de acesso lacrado para o planejamento sucessório"],prod:P("regcripto"),alt:["parecer_cripto","planejamento_completo"]});}
/* Exterior */
if(ext>0||p.obj.includes("morarfora")){r.push({sev:"atencao",dim:"Internacional",titulo:"Camada internacional sem coordenação",
achado:ext>0?`Cerca de ${ext}% do patrimônio está no exterior.`:"Você indicou intenção de mudar de país.",
porque:"Ativos fora do Brasil enfrentam conflito de leis na sucessão: o mesmo bem pode ser reivindicado por dois sistemas jurídicos, tributado duas vezes ou travado em procedimentos paralelos que não se conversam. Após a Lei 14.754/2023, ainda há a camada fiscal anual. Sem uma estrutura que coordene as jurisdições, a internacionalização que deveria proteger vira ponto de fragilidade.",
janela:"Em atenção; crítica se houver mudança de residência sem saída fiscal formalizada.",
fazer:["Liste os ativos por país de situação e forma de titularidade","Verifique as declarações brasileiras desses ativos","Sequencie: primeiro a estrutura, depois a mudança, nunca o contrário"],prod:P("holdintl"),alt:["parecer_internacional","planejamento_completo"]});}
/* Sucessão desejada, estrutura existente */
if(p.obj.includes("sucessao")&&!naPF){r.push({sev:"oportunidade",dim:"Sucessão",titulo:"Estrutura existe, sucessão a formalizar",
achado:"Há estrutura constituída e o objetivo declarado de planejar a sucessão.",
porque:"Ter holding não é ter sucessão planejada. Sem doação de quotas com reserva de usufruto, sem cláusulas de incomunicabilidade, impenhorabilidade e inalienabilidade, e sem acordo de sócios da própria holding, a estrutura apenas transfere o litígio de nível, dos bens para as quotas. A sucessão só está resolvida quando os instrumentos estão assinados.",
janela:"Oportunidade: em vida e com calma, cada instrumento custa uma fração do litígio que evita.",
fazer:["Verifique se as quotas já foram ou serão doadas, e com quais cláusulas","Confira se existe acordo de sócios da holding familiar","Mapeie herdeiros e situações particulares antes de definir quinhões"],prod:P("holdfam"),alt:["parecer_sucessorio"]});}
/* Proteção com estrutura existente: auditar */
if(p.obj.includes("proteger")&&!naPF){r.push({sev:"atencao",dim:"Exposição",titulo:"Proteção a auditar",
achado:"Há estrutura e o objetivo de proteger o patrimônio de riscos da operação.",
porque:"Estrutura mal mantida protege menos do que aparenta. Confusão patrimonial (pagar despesa pessoal pela empresa), atas em atraso e ausência de propósito negocial permitem que um juiz desconsidere a personalidade jurídica e alcance o patrimônio que a estrutura deveria blindar, exatamente no momento em que ela é testada.",
janela:"Oportunidade: auditoria preventiva custa uma fração da desconsideração.",
fazer:["Verifique se contas e despesas pessoais e da estrutura estão de fato separadas","Confira atas, livros e obrigações anuais em dia","Revise se as cláusulas de proteção existem nos instrumentos"],prod:P("revisao14754"),alt:["auditoria_estrutura"]});}
const order={critico:0,atencao:1,oportunidade:2};return r.sort((a,b)=>order[a.sev]-order[b.sev]);},
patSub(p){const pr=p.prop||{};const conc=Math.max(...(Object.values(pr).length?Object.values(pr):[0]));
const liquidez=100-((pr["Imóveis"]||0)*0.8+(pr["Participações"]||0)*0.5);
return{"Exposição a riscos":Math.round((p.estr==="Tudo na pessoa física"?24:p.estr==="Holding nacional"?64:76)-(conc>=60?8:0)),
"Sucessão":Math.round((p.obj.includes("sucessao")?(p.estr==="Tudo na pessoa física"?30:58):(p.estr==="Tudo na pessoa física"?36:70))-((pr["Imóveis"]||0)>=60?10:0)-((pr["Cripto"]||0)>=40?8:0)),
"Eficiência fiscal":Math.round((p.estr==="Tudo na pessoa física"?44:66)-((pr["Cripto"]||0)>=25?10:0)),
"Liquidez e diversificação":Math.round(Math.max(12,Math.min(90,liquidez-(conc>=60?12:0)))),
"Internacionalização":Math.round((pr["Exterior"]||0)>0?(p.estr.includes("offshore")||p.estr==="Mista"?72:48)+((pr["Exterior"]||0)>=20?8:0):(p.obj.includes("morarfora")?38:56)),
"Governança familiar":["Fundação privada ou trust","Mista"].includes(p.estr)?78:p.estr==="Holding nacional"?58:32};},
renderPat(){const p=S.pat;if(!p){el("pat-view").innerHTML='<div class="card" style="text-align:center;padding:44px;color:var(--muted)">Informe patrimônio, estrutura, família e objetivos para receber o score patrimonial em 5 dimensões, a composição visual e os achados fundamentados.</div>';return;}
const sub=this.patSub(p);
const vals=Object.values(sub);const total=Math.round(vals.reduce((a,v)=>a+v,0)/vals.length);const bd=band(total);
const cols=this.compCols;const pr2=p.prop||{};
const comp=Object.keys(pr2).filter(k=>pr2[k]>0);
const fs=this.patFindings(p);const member=S.user.plan==="member";const show=member?fs:fs.slice(0,2);
el("pat-view").innerHTML=`<div class="demcard">
<div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center">

<div><span class="mono" style="color:var(--faint)">${p.estr} · ${p.faixa}</span><h3 style="margin-top:4px">Score patrimonial</h3></div>
<div style="text-align:center"><div style="font-family:var(--serif);font-size:2.6rem;line-height:1;color:${bandColor(total)}">${total}</div><span style="background:${bandBg(total)};color:${bandColor(total)};font-family:var(--mono);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;border-radius:6px;padding:3px 8px">${bd[2]}</span></div></div>
<span class="mono" style="color:var(--faint);display:block;margin-top:18px">Composição informada</span>
<div class="compbar">${comp.map(c=>`<span style="flex:${pr2[c]};background:${cols[c]}"></span>`).join("")}</div>
<div class="complegend">${comp.map(c=>`<span><i style="display:inline-block;width:9px;height:9px;border-radius:2px;background:${cols[c]};margin-right:5px"></i>${c} ${pr2[c]}%</span>`).join("")}</div>
<div class="subscore" style="margin-top:18px">${Object.entries(sub).map(([l,v])=>`<div class="dim"><div class="dim-head" style="cursor:default"><span>${l}</span><span class="bandtag" style="background:${bandBg(v)};color:${bandColor(v)}">${band(v)[2]}</span><span class="tr"><span class="fl" style="width:${v}%;background:${bandColor(v)}"></span></span><span class="vl">${v}</span></div></div>`).join("")}</div>
${show.map(f=>APP.findingCard(f)).join("")}
${!member&&fs.length>2?`<div class="locked">Mais ${fs.length-2} achados patrimoniais no plano Membro.<br><button class="btn primary" style="margin-top:12px" onclick="APP.view('plano')">Desbloquear</button></div>`:""}</div>`;},

/* ---- demandas: fases, checklist, documentos, entregáveis ---- */
demTemplate(p){return{nome:p.nome,valor:0,fase:1,data:new Date().toLocaleDateString("pt-BR"),
chk:[{t:"Kick-off com a equipe responsável",done:false},{t:"Questionário de onboarding respondido",done:false},{t:"Procuração assinada",done:false},{t:"Documentos do checklist enviados",done:false}],
docs:[{t:"Documento de identidade dos envolvidos",st:"pend"},{t:"Comprovante de endereço",st:"pend"},{t:"Documentação específica do escopo",st:"pend"}],
ent:["Memorando de fundamentos","Documentos constitutivos ou contratuais","Manual de manutenção e obrigações"]};},
renderDem(){const F=["Diagnóstico","Onboarding e coleta","Execução","Validação","Entrega"];
el("dem-list").innerHTML=S.demandas.length?S.demandas.map((d,i)=>`<div class="demcard">
<div style="display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:center">
<div><span class="mono" style="color:var(--faint)">Demanda · ${d.data} · ${d.custom?"sob orçamento":fmt(d.valor)}</span><h3 style="margin-top:4px">${d.nome}</h3></div>
<span class="sev ${d.fase>=5?"oportunidade":"atencao"}" style="background:${d.fase>=5?"var(--opt-bg)":"var(--str-bg)"};color:${d.fase>=5?"var(--opt)":"var(--str)"}">Fase ${d.fase} de 5 · ${F[d.fase-1]}</span></div>
${d.custom&&d.brief?`<div class="briefbox">
<div class="briefrow"><span class="bk">Orçamento ideal</span><span class="bv">${d.brief.orc||"não informado"}</span></div>
<div class="briefrow"><span class="bk">Prioridade</span><span class="bv">${d.brief.prio||"não informada"}</span></div>
<div class="briefrow"><span class="bk">Problema a resolver</span><span class="bv">${d.brief.prob}</span></div>
${d.brief.obs?`<div class="briefrow"><span class="bk">Comentários</span><span class="bv">${d.brief.obs}</span></div>`:""}
</div>`:""}
<div class="fases">${F.map((f,fi)=>`<span class="${fi<d.fase?"on":""}"></span>`).join("")}</div>
<div class="grid c2" style="margin-top:10px">
<div><span class="mono" style="color:var(--faint)">Checklist</span><ul class="chk">${d.chk.map((c,ci)=>`<li><input type="checkbox" ${c.done?"checked":""} onchange="APP.toggleChk(${i},${ci})"> ${c.t}</li>`).join("")}</ul></div>
<div><span class="mono" style="color:var(--faint)">Documentos</span>${d.docs.map((doc,di)=>`<div class="docrow"><span>${doc.t}</span>${doc.st==="ok"?'<span class="docstat ok">Recebido</span>':`<button class="chip" onclick="APP.sendDoc(${i},${di})">Enviar</button>`}</div>`).join("")}
<span class="mono" style="color:var(--faint);display:block;margin-top:16px">Entregáveis</span>${d.ent.map(e=>`<div class="docrow"><span>${e}</span><span class="docstat ${d.fase>=5?"ok":"pend"}">${d.fase>=5?"Disponível":"Em produção"}</span></div>`).join("")}</div></div>
${d.fase<5?`<div style="text-align:right;margin-top:10px"><button class="chip" onclick="APP.advDem(${i})">Simular avanço de fase</button></div>`:'<div class="ok-note" style="margin-top:12px">Demanda concluída. Entregáveis disponíveis e rotina de manutenção enviada.</div>'}</div>`).join(""):
'<div class="card" style="text-align:center;padding:44px;color:var(--muted)">Nenhuma demanda ativa ainda. Abra uma nova demanda acima ou inicie a partir de uma solução pré-definida.</div>';this.renderPredefGrid();},
toggleChk(i,ci){S.demandas[i].chk[ci].done=!S.demandas[i].chk[ci].done;this.save();this.renderDem();},
sendDoc(i,di){S.demandas[i].docs[di].st="ok";this.save();this.renderDem();},
advDem(i){if(S.demandas[i].fase<5)S.demandas[i].fase++;this.save();this.renderDem();},
/* ---- framework de demandas ---- */
toggleDemandForm(){const f=el("demand-form");const open=f.style.display==="none";f.style.display=open?"block":"none";if(open){this.populatePredefSelect();f.scrollIntoView({block:"center"});}},
populatePredefSelect(){const sel=el("dm-pre");if(sel.options.length>1)return;
PREDEF_DEMANDS.forEach(g=>{const og=document.createElement("optgroup");og.label=g.grupo;
g.itens.forEach(it=>{const o=document.createElement("option");o.value=it.nome;o.textContent=it.nome;og.appendChild(o);});sel.appendChild(og);});},
fillPredef(){const nome=el("dm-pre").value;if(!nome)return;
let found=null;PREDEF_DEMANDS.forEach(g=>g.itens.forEach(it=>{if(it.nome===nome)found=it;}));
if(found){el("dm-nome").value=found.nome;el("dm-prob").value=found.prob||"";el("dm-orc").value=found.orc||"";}},
startDemand(prodId,titulo){this.view("demandas");el("demand-form").style.display="block";this.populatePredefSelect();
const p=PRODUCTS.find(x=>x.id===prodId);
el("dm-nome").value=titulo||(p?p.nome:"");
if(p)el("dm-prob").value=p.esc||"";
el("demand-form").scrollIntoView({block:"center"});},
submitDemand(){const nome=el("dm-nome").value.trim(),prob=el("dm-prob").value.trim();
if(!nome||!prob){alert("Informe ao menos o nome da demanda e o problema que ela resolve.");return;}
const d=this.demTemplate({nome});d.valor=0;d.custom=true;
d.brief={orc:el("dm-orc").value,prio:el("dm-prio").value,prob,obs:el("dm-obs").value};
S.demandas.unshift(d);this.save();
el("demand-form").style.display="none";["dm-nome","dm-orc","dm-prob","dm-obs"].forEach(id=>el(id).value="");el("dm-pre").selectedIndex=0;
this.renderDem();},
renderPredefGrid(){el("predef-head").style.display="block";
const flat=[];PREDEF_DEMANDS.forEach(g=>g.itens.forEach(it=>flat.push(Object.assign({grupo:g.grupo},it))));
el("predef-grid").innerHTML=flat.map(it=>`<div class="card" style="padding:22px"><span class="mono" style="color:var(--brass);font-size:.56rem">${it.grupo}</span><h3 style="font-size:1.05rem;margin:8px 0 6px">${it.nome}</h3><p style="color:var(--muted);font-size:.85rem">${it.prob}</p><button class="chip" style="margin-top:12px" onclick="APP.quickDemand('${it.nome.replace(/'/g,"")}')">Iniciar esta demanda</button></div>`).join("");},
quickDemand(nome){this.toggleDemandForm();if(el("demand-form").style.display==="none")el("demand-form").style.display="block";
el("dm-pre").value=nome;this.fillPredef();el("demand-form").scrollIntoView({block:"center"});},

/* ---- contratação: proposta → aceite → pagamento ---- */
buy(pid){const p=PRODUCTS.find(x=>x.id===pid);if(!p)return;
if(!S.user){pendingRoute="central";location.hash="#/conta";return;}
if(!p.preco){location.hash="#/portal";setTimeout(()=>{el("prop-view").innerHTML=`<div class="demcard paycard"><span class="mono brand">Sob proposta</span><h3 style="margin:10px 0">${p.nome}</h3><p style="color:var(--muted);font-size:.92rem">${p.esc}</p><p style="color:var(--muted);font-size:.92rem;margin-top:10px">Este escopo exige desenho sob medida. Sua solicitação foi registrada e a equipe retorna com a proposta a partir do seu diagnóstico.</p><div class="ok-note" style="margin-top:16px">Solicitação enviada à equipe.</div><button class="btn light" onclick="APP.view('visao')">Voltar ao mapa</button></div>`;this.view("proposta");},30);return;}
const desc=(S.user.plan==="member"&&S.user.cycle==="anual")?0.10:0;
checkout={type:"produto",p,valor:Math.round(p.preco*(1-desc)),desc};
location.hash="#/portal";setTimeout(()=>{this.renderProposta();this.view("proposta");},30);},
renderProposta(){const c=checkout;if(!c)return;
el("prop-view").innerHTML=`<div class="demcard" style="max-width:660px">
<span class="mono brand">Proposta · escopo fechado</span><h3 style="margin:10px 0">${c.p.nome}</h3>
<p style="color:var(--muted);font-size:.92rem">${c.p.esc}</p>
<div class="ficha" style="margin-top:18px">
<div class="frow"><span class="k">Prazo indicativo</span><span class="v">${c.p.prazo}</span></div>
<div class="frow"><span class="k">Fora do escopo</span><span class="v">Taxas oficiais e custos de terceiros</span></div>
${c.desc?`<div class="frow"><span class="k">Desconto Membro anual</span><span class="v">10%</span></div>`:""}
<div class="frow"><span class="k">Investimento</span><span class="v" style="color:var(--petrol);font-size:1.15rem">${c.p.apartir?"a partir de ":""}${fmt(c.valor)}</span></div></div>
<label style="display:flex;gap:10px;align-items:flex-start;margin:20px 0;font-size:.86rem;color:var(--muted)"><input type="checkbox" id="prop-ok" style="accent-color:var(--petrol)"> Li e aceito o escopo, o prazo indicativo e as condições. O que estiver fora do escopo será tratado por aditivo, sempre por escrito. Em produção, este aceite gera o contrato de honorários para assinatura digital.</label>
<div class="btn-row"><button class="btn primary" onclick="if(el('prop-ok').checked){APP.renderPay();APP.view('pagamento')}">Aceitar e pagar</button><button class="btn light" onclick="APP.view('visao')">Voltar</button></div></div>`;},
goUpgrade(cycle){if(!S.user){pendingRoute="central";location.hash="#/conta";return;}
const anual=cycle==="anual";checkout={type:"plano",cycle:anual?"anual":"mensal",valor:anual?1970:197};
location.hash="#/portal";setTimeout(()=>{el("prop-view").innerHTML=`<div class="demcard" style="max-width:600px"><span class="mono brand">Assinatura Atlas</span><h3 style="margin:10px 0">Plano Membro · ${anual?"Anual":"Mensal"}</h3><p style="color:var(--muted);font-size:.92rem">Todos os achados e ferramentas, consultas simples por e-mail, assistente ilimitado${anual?" e 10% de desconto em serviços":""}.</p><div class="ficha" style="margin-top:16px"><div class="frow"><span class="k">Valor</span><span class="v" style="color:var(--petrol)">${fmt(checkout.valor)}${anual?"/ano":"/mês"}</span></div></div><div class="btn-row" style="margin-top:20px"><button class="btn primary" onclick="APP.renderPay();APP.view('pagamento')">Continuar para pagamento</button><button class="btn light" onclick="APP.view('plano')">Voltar</button></div></div>`;this.view("proposta");},30);},
renderPay(){el("pay-view").innerHTML=`<div class="demcard" style="max-width:520px">
<span class="mono brand">Pagamento seguro · simulação</span>
<div class="field" style="margin-top:16px;text-align:left"><label>Nome no cartão</label><input style="text-align:left;max-width:none" value="${S.user.nome}"></div>
<div class="field" style="text-align:left"><label>Número do cartão</label><input style="text-align:left;max-width:none" placeholder="0000 0000 0000 0000"></div>
<div class="f2"><div class="field" style="text-align:left"><label>Validade</label><input style="text-align:left;max-width:none" placeholder="MM/AA"></div><div class="field" style="text-align:left"><label>CVV</label><input style="text-align:left;max-width:none" placeholder="123"></div></div>
<p class="hint">Ambiente de demonstração: nenhum dado é enviado. Em produção: gateway com PIX, cartão e parcelamento.</p>
<div class="btn-row" style="margin-top:14px;justify-content:center"><button class="btn primary" onclick="APP.pay()">Confirmar pagamento · ${fmt(checkout.valor)}</button><button class="btn light" onclick="APP.view('proposta')">Voltar</button></div></div>`;},
pay(){if(checkout.type==="plano"){S.user.plan="member";S.user.cycle=checkout.cycle;this.save();this.renderPortal();this.view("plano");}
else{const d=this.demTemplate(checkout.p);d.valor=checkout.valor;S.demandas.push(d);this.save();this.renderDem();this.renderScores();this.view("demandas");}
checkout=null;},
renderPlan(){const m=S.user.plan==="member";
el("plan-view").innerHTML=`<div class="demcard"><span class="mono brand">${m?"Plano Membro · "+(S.user.cycle==="anual"?"Anual":"Mensal"):"Plano gratuito"}</span>
<p style="margin-top:12px;color:var(--muted)">${m?"Todos os achados e ferramentas desbloqueados, consultas simples por e-mail e assistente ilimitado."+(S.user.cycle==="anual"?" Desconto de 10% ativo em qualquer contratação.":""):"Score completo, achados prioritários e assistente com 5 mensagens por sessão."}</p>
${m?"":`<div class="btn-row" style="margin-top:20px"><button class="btn primary" onclick="APP.goUpgrade('mensal')">Assinar Mensal · R$ 197/mês</button><button class="btn light" onclick="APP.goUpgrade('anual')">Assinar Anual · R$ 1.970/ano</button></div>`}
${m&&S.user.cycle==="mensal"?`<div class="btn-row" style="margin-top:20px"><button class="btn light" onclick="APP.goUpgrade('anual')">Migrar para o Anual e ganhar 10% em serviços</button></div>`:""}</div>`;},

/* ---- assistente ---- */
chatQuota(){const m=S.user&&S.user.plan==="member";el("chat-quota").textContent=m?"Uso ilimitado":`${Math.max(0,5-S.chatUsed)} de 5 mensagens gratuitas`;},
async chatSend(){const inp=el("chat-in"),txt=inp.value.trim();if(!txt)return;
const m=S.user.plan==="member";
if(!m&&S.chatUsed>=5){this.addMsg("ai","Você usou as 5 mensagens gratuitas desta sessão. O plano Membro libera uso ilimitado, ou fale com a equipe pelo diagnóstico.");return;}
this.addMsg("user",txt);inp.value="";S.chatUsed++;this.chatQuota();
const think=this.addMsg("ai","Analisando...");
try{const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,
system:"Você é o assistente Atlas, da BBLAW (Bezerra Borges Advogados), escritório de direito empresarial, internacional, patrimonial e regulatório. Responda em português do Brasil, tom direto e estratégico, máximo 140 palavras. Dê orientação geral e educativa. Nunca dê consulta jurídica sobre caso concreto: quando a pergunta for específica, explique o conceito e recomende o diagnóstico no Atlas ou a solução adequada da Central de Soluções. Não invente leis nem números. Não prometa resultados.",
messages:[{role:"user",content:txt}]})});
const data=await r.json();
think.querySelector("p").textContent=(data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n")||"Não consegui responder agora. Tente novamente.";
}catch(e){think.querySelector("p").textContent="Assistente indisponível neste ambiente. Em produção, ele responde aqui mesmo.";}},
addMsg(who,txt){const d=document.createElement("div");d.className="msg "+(who==="ai"?"ai":"");
d.innerHTML=`<span class="who">${who==="ai"?"Atlas":"Você"}</span><p></p>`;d.querySelector("p").textContent=txt;
el("chatlog").appendChild(d);el("chatlog").scrollTop=1e6;return d;},

/* ---- hubs: render + ferramentas gratuitas ---- */
prodRow(p){const desc=(S.user&&S.user.plan==="member"&&S.user.cycle==="anual")?0.10:0;
const val=p.preco?Math.round(p.preco*(1-desc)):0;
const apartirHtml = p.preco && p.apartir ? `<span class="apartir">a partir de</span>` : "";
const priceHtml = p.preco ? apartirHtml + fmt(val) : "Sob proposta";
const labelHtml = `<span class="pricelabel">${p.preco ? "escopo fechado" : "após diagnóstico"}</span>`;
return `<div class="prod">
<div class="prod-info">
<h3>${p.nome}</h3>
<p class="esc">${p.esc}</p>
<span class="meta">Prazo · ${p.prazo}</span>
</div>
<div class="prod-action">
<div class="price">${priceHtml}${labelHtml}</div>
<button class="btn primary" onclick="APP.buy('${p.id}')">${p.preco?"Contratar":"Solicitar proposta"}</button>
</div>
</div>`;},
renderHub(key){const h=HUBS[key];if(!h)return false;
el("hb-crumb").textContent=h.nome;el("hb-h1").textContent=h.h1;el("hb-sub").textContent=h.sub;
el("hb-tese").textContent=h.tese;
el("hb-mapa").innerHTML=h.mapa.map(([t,d])=>`<li><strong>${t}.</strong> ${d}</li>`).join("");
el("hb-faq").innerHTML=h.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");
el("hb-caso").innerHTML=`<p><strong style="color:var(--ink)">Contexto.</strong> ${h.caso.c}</p><p style="margin-top:8px"><strong style="color:var(--crit)">Risco.</strong> ${h.caso.r}</p><p style="margin-top:8px"><strong style="color:var(--petrol)">Estratégia.</strong> ${h.caso.e}</p><p style="margin-top:8px"><strong style="color:var(--opt)">Resultado.</strong> ${h.caso.res}</p>`;
el("hb-guia-desc").textContent=h.guia.desc;
el("hb-guia-link").href="#/artigo/"+h.guia.slug;
el("hb-produtos").innerHTML=h.prods.map(id=>this.prodRow(PRODUCTS.find(p=>p.id===id))).join("");
el("hb-tool").innerHTML=this.tools[h.tool]();return true;},
toolOut(id,html,v){const o=el(id);o.style.display="block";o.style.background=bandBg(v);o.style.color=bandColor(v);o.innerHTML=html;},
tools:{
patrimonial:()=>`<h3 style="margin:6px 0 4px">Calculadora: inventário vs. holding</h3><p style="font-size:.88rem;color:var(--muted)">Estimativa simplificada do custo sucessório. Não substitui análise.</p>
<div class="toolform"><div class="field"><label>Patrimônio (R$ milhões)</label><input type="number" id="tl-val" value="5" min="0.5" step="0.5"></div>
<div class="field"><label>ITCMD do estado</label><select id="tl-itcmd"><option value="0.04">4%</option><option value="0.06">6%</option><option value="0.08">8%</option></select></div>
<button class="btn primary" onclick="APP.runPatCalc()">Calcular</button></div><div class="toolout" id="tl-out"></div>`,
internacionalizacao:()=>`<h3 style="margin:6px 0 4px">Comparador: receber como PF vs. LLC</h3><p style="font-size:.88rem;color:var(--muted)">Ordem de grandeza da carga sobre receita internacional. Não substitui análise.</p>
<div class="toolform"><div class="field"><label>Receita mensal (USD)</label><input type="number" id="tl-usd" value="15000" min="1000" step="1000"></div>
<button class="btn primary" onclick="APP.runIntlCalc()">Comparar</button></div><div class="toolout" id="tl-out"></div>`,
regulatorio:()=>`<h3 style="margin:6px 0 4px">Checklist NR-1: riscos psicossociais</h3><p style="font-size:.88rem;color:var(--muted)">Marque o que a empresa já possui documentado.</p>
<div class="optrow" style="justify-content:flex-start;margin:14px 0" id="tl-nr1">
${["PGR menciona riscos psicossociais","Riscos psicossociais identificados com método","Avaliação de severidade registrada","Plano de ação com prazos e responsáveis","Medidas em execução com evidências","Canal de escuta ou denúncia ativo","Treinamento de lideranças realizado","Revisão periódica prevista"].map(t=>`<label><input type="checkbox"> ${t}</label>`).join("")}</div>
<button class="btn primary" onclick="APP.runNr1()">Ver conformidade</button><div class="toolout" id="tl-out"></div>`,
tech:()=>`<h3 style="margin:6px 0 4px">Teste rápido: exposição da sua marca</h3>
<div class="optrow" style="justify-content:flex-start;margin:14px 0" id="tl-marca">
${["A marca está registrada no INPI","Fizemos busca de anterioridade","O domínio e as redes estão no CNPJ da empresa","Usamos a marca publicamente há mais de 1 ano","Concorrentes usam nomes parecidos"].map(t=>`<label><input type="checkbox"> ${t}</label>`).join("")}</div>
<button class="btn primary" onclick="APP.runMarca()">Avaliar exposição</button><div class="toolout" id="tl-out"></div>`,
life:()=>`<h3 style="margin:6px 0 4px">Checklist: prontidão para viver fora</h3>
<div class="optrow" style="justify-content:flex-start;margin:14px 0" id="tl-life">
${["Sei qual país e regime de residência quero","Conheço as regras de saída fiscal do Brasil","Meus ativos brasileiros têm plano para a ausência","Tenho conta ou estrutura bancária fora","Minha renda funciona de qualquer lugar","Documentos e vistos mapeados"].map(t=>`<label><input type="checkbox"> ${t}</label>`).join("")}</div>
<button class="btn primary" onclick="APP.runLife()">Ver prontidão</button><div class="toolout" id="tl-out"></div>`,
empresarial:()=>`<h3 style="margin:6px 0 4px">Teste: exposição societária</h3>
<div class="optrow" style="justify-content:flex-start;margin:14px 0" id="tl-soc">
${["Temos acordo de sócios assinado","Regras de saída e avaliação definidas","Vesting formalizado (se aplicável)","Mecanismo de desempate previsto","PI e ativos no nome da empresa","Pró-labore e distribuição documentados","Atas e livros em dia"].map(t=>`<label><input type="checkbox"> ${t}</label>`).join("")}</div>
<button class="btn primary" onclick="APP.runSoc()">Avaliar exposição</button><div class="toolout" id="tl-out"></div>`},
runPatCalc(){const v=(+el("tl-val").value||0)*1e6,i=+el("tl-itcmd").value;
const inv1=v*(i+0.06),inv2=v*(i+0.10);
this.toolOut("tl-out",`<strong>Inventário estimado: ${fmt(Math.round(inv1))} a ${fmt(Math.round(inv2))}</strong> (ITCMD + custas e honorários típicos), com patrimônio travado durante o processo.<br><br>Com holding e doação planejada em vida, o ITCMD ainda incide na doação, mas custas, honorários de inventário e tempo de bloqueio caem de forma relevante, e as regras passam a ser suas. A conta exata depende do estado e dos ativos: é o que o cenário comparado do serviço entrega.`,35);},
runIntlCalc(){const u=+el("tl-usd").value||0,brl=u*5.4*12;
this.toolOut("tl-out",`Sobre aproximadamente ${fmt(Math.round(brl))}/ano:<br><br><strong>Pessoa física (carnê-leão):</strong> até 27,5% de IR, sem dedução de custos da operação, mais exposição patrimonial integral.<br><strong>Via LLC bem estruturada:</strong> lucros tributados, em regra, a 15% na sua declaração anual (Lei 14.754/2023), com separação patrimonial e acesso bancário adequado.<br><br>Os números finais dependem de custos, regime e caso. O comparador mostra a ordem de grandeza; o desenho fino é trabalho do diagnóstico.`,55);},
runNr1(){const n=el("tl-nr1").querySelectorAll("input:checked").length,pct=Math.round(n/8*100);
this.toolOut("tl-out",`<strong>Conformidade estimada: ${pct}% · ${band(pct)[2]}.</strong> ${pct<40?"Em fiscalização, este cenário tende à autuação objetiva. Empresas de 60 a 200 CLT são o foco atual da fiscalização punitiva, ativa desde maio de 2026.":pct<70?"Há base construída, mas as lacunas marcadas são exatamente o que a fiscalização pede para comprovar.":"Programa maduro. Mantenha evidências de execução e a revisão periódica."}`,pct);},
runMarca(){const c=[...el("tl-marca").querySelectorAll("input")].map(x=>x.checked);
let risk=0;if(!c[0])risk+=45;if(!c[1])risk+=15;if(!c[2])risk+=10;if(c[3]&&!c[0])risk+=15;if(c[4])risk+=15;
const v=Math.max(5,100-risk);
this.toolOut("tl-out",`<strong>Proteção da marca: ${v} de 100 · ${band(v)[2]}.</strong> ${v<40?"Marca em uso público sem registro é a exposição clássica: quem deposita primeiro no INPI leva. O depósito protege retroativamente à sua data.":v<70?"Base parcial. Registrar e consolidar domínio e redes no CNPJ fecha as lacunas principais.":"Bem protegida. Monitore depósitos de terceiros em classes vizinhas."}`,v);},
runLife(){const n=el("tl-life").querySelectorAll("input:checked").length,v=Math.round(n/6*100);
this.toolOut("tl-out",`<strong>Prontidão: ${v} de 100 · ${band(v)[2]}.</strong> ${v<40?"O projeto ainda é um desejo, não um plano. Comece pela ordem: destino e regime, depois estrutura dos ativos, depois a saída fiscal.":v<70?"Plano em construção. Os itens não marcados são exatamente os que mais custam quando resolvidos depois da mudança.":"Projeto maduro. O sequenciamento fino da saída fiscal é o que resta desenhar."}`,v);},
runSoc(){const n=el("tl-soc").querySelectorAll("input:checked").length,v=Math.round(n/7*100);
this.toolOut("tl-out",`<strong>Proteção societária: ${v} de 100 · ${band(v)[2]}.</strong> ${v<40?"Sociedade funcionando na confiança: o padrão que gera os litígios mais caros. As regras se escrevem enquanto todos concordam.":v<70?"Base existente com lacunas relevantes. Saída, avaliação e desempate são as que mais importam.":"Sociedade bem regrada. Revisão a cada novo sócio ou captação."}`,v);}
};

/* ============ init ============ */
document.getElementById("products-list").innerHTML=PRODUCTS.map(p=>APP.prodRow(p)).join("");
document.getElementById("tab-signup").addEventListener("click",()=>{el("auth-signup").style.display="block";el("auth-login").style.display="none";el("conta-title").textContent="Acesse o Atlas";document.getElementById("tab-signup").classList.add("active");document.getElementById("tab-login").classList.remove("active");});
document.getElementById("tab-login").addEventListener("click",()=>{el("auth-signup").style.display="none";el("auth-login").style.display="block";el("conta-title").textContent="Entrar no Atlas";document.getElementById("tab-login").classList.add("active");document.getElementById("tab-signup").classList.remove("active");});
el("chat-in").addEventListener("keydown",e=>{if(e.key==="Enter")APP.chatSend();});
/* diagnóstico multi-step */
let step=1;const TOTAL=4;
const labels={1:"Etapa 1 de 4 · Sua demanda",2:"Etapa 2 de 4 · Contexto",3:"Etapa 3 de 4 · Risco e urgência",4:"Etapa 4 de 4 · Contato",5:"Concluído"};
function showStep(){document.querySelectorAll(".fstep").forEach(f=>f.classList.toggle("active",+f.dataset.step===step));
el("diag-step-label").textContent=labels[step];
document.querySelectorAll("#diag-prog span").forEach((s,i)=>s.classList.toggle("on",i<Math.min(step,4)));
el("diag-back").style.visibility=step>1&&step<=TOTAL?"visible":"hidden";
el("diag-nav").style.display=step>TOTAL?"none":"flex";
el("diag-next").textContent=step===TOTAL?"Concluir e gerar meu mapa":"Continuar";
document.querySelectorAll(".err").forEach(e=>e.style.display="none");}
function valid(){if(step===1){const ok=el("d-tipo").value&&el("d-perfil").value;if(!ok)el("err-1").style.display="block";return ok;}
if(step===3){const ok=el("d-urg").value;if(!ok)el("err-3").style.display="block";return ok;}
if(step===4){const ok=el("d-zap").value.trim();if(!ok)el("err-4").style.display="block";return ok;}
return true;}
el("diag-next").addEventListener("click",()=>{if(!valid())return;step++;showStep();
if(step>TOTAL){APP.onDiagnosticComplete();el("diag-shell").scrollIntoView({block:"start"});}});
el("diag-back").addEventListener("click",()=>{if(step>1){step--;showStep();}});
showStep();
APP.boot();
