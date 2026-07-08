// ===== BBLAW Atlas — dados e helpers de render =====

const SERVICES={
internacionalizacao:{nome:"Internacionalização & Offshore",tag:"Estrutura no exterior que resiste a banco, fisco e regulador",
h1:"Internacionalização e offshore com conformidade desde o desenho",
sub:"Holdings, entidades operacionais e veículos de investimento no exterior, desenhados para o cenário pós Lei 14.754/2023, não para o mercado de promessas.",
problema:"A maior parte das estruturas offshore vendidas no Brasil foi desenhada para um regime tributário que não existe mais. Desde 2024, offshore sem substância, sem declaração correta e sem propósito definido não protege: expõe. O trabalho aqui é desenhar, ou redesenhar, a estrutura que cumpre seu objetivo e sobrevive a escrutínio.",
paraquem:["Empresários com receita ou patrimônio internacional","Investidores com ativos no exterior, inclusive cripto","Quem já possui offshore e precisa regularizar ou reestruturar"],
quando:"Quando a receita internacional é recorrente, quando o patrimônio no exterior é relevante, ou quando uma estrutura existente foi montada antes de 2024 e nunca foi revisada.",
riscos:["Tributação automática de lucros no exterior sem planejamento (Lei 14.754/2023)","Bloqueio ou encerramento de contas por falha de compliance bancário","Estrutura desconsiderada em fiscalização por ausência de substância"],
etapas:["Diagnóstico: ativos, fluxos, residência fiscal e objetivos","Comparação de jurisdições e formatos em cenários escritos","Desenho da estrutura e memorando de fundamentos","Constituição, documentos societários e cadastros","Conformidade: declarações, registros e rotina de manutenção"],
decisoes:["Jurisdição e formato da entidade","Regime de tributação dos lucros","Governança: quem controla, quem assina, quem sucede"],
docs:"Documentos pessoais, patrimônio, declarações fiscais",entrega:"Estrutura + memorando + rotina",prazo:"4 a 12 semanas",
faq:[["Offshore ainda vale a pena depois da Lei 14.754/2023?","Depende do objetivo. Para diferimento agressivo, o cenário mudou. Para proteção, sucessão e operação internacional, estruturas bem desenhadas seguem eficientes, desde que declaradas e com propósito claro."],
["Minha estrutura atual está irregular. E agora?","Regularização espontânea normalmente é possível e quase sempre preferível a esperar a fiscalização. O diagnóstico avalia a exposição e o caminho de menor custo."]]},
llc:{nome:"LLC nos Estados Unidos",tag:"A entidade certa para receber do mundo sem criar problema no Brasil",
h1:"LLC nos EUA estruturada para o seu caso, não a do tutorial",
sub:"Constituição, reestruturação e conformidade de LLCs para empresários digitais e operações cripto, com o lado brasileiro resolvido junto.",
problema:"Abrir uma LLC é trivial. Operar uma LLC sem criar contingência fiscal no Brasil, sem travar em banco e sem misturar patrimônio: isso é o trabalho. A maioria dos problemas que atendemos vem de LLCs abertas por vídeo do YouTube, com estado errado, Operating Agreement genérico e zero conformidade dos dois lados.",
paraquem:["Infoprodutores e prestadores com clientes no exterior","Traders e operações cripto que precisam de entidade","Quem já tem LLC e precisa corrigir estrutura ou conformidade"],
quando:"Quando o recebimento internacional se torna recorrente, quando plataformas exigem entidade, ou quando receber como pessoa física deixou de fazer sentido.",
riscos:["Tributação inesperada no Brasil por enquadramento incorreto","Conta encerrada por incompatibilidade entre atividade declarada e fluxo real","Responsabilização pessoal por confusão patrimonial"],
etapas:["Definição de estado, formato e classificação fiscal","Constituição e Operating Agreement desenhado para o caso","Estruturação bancária e de recebimentos","Integração com o lado brasileiro: declaração, remessas, distribuição","Rotina anual: renovações e obrigações"],
decisoes:["Estado de constituição","Classificação fiscal e política de distribuição","Separação patrimonial: contas, contratos, uso da entidade"],
docs:"Documentos pessoais, descrição da operação",entrega:"LLC operante + conformidade BR/EUA",prazo:"2 a 6 semanas",
faq:[["LLC paga imposto no Brasil?","A entidade, não. O sócio brasileiro, sim, conforme o regime aplicável após a Lei 14.754/2023. A estrutura correta define quando e quanto, e é isso que desenhamos antes de constituir."],
["Já tenho LLC aberta por conta própria. Vocês assumem?","Sim. Auditamos a estrutura, corrigimos documentos e conformidade e assumimos a manutenção. É mais comum do que parece."]]},
patrimonial:{nome:"Planejamento Patrimonial & Sucessório",tag:"A sucessão acontece do jeito que você decidir, ou do jeito que a lei decidir",
h1:"Planejamento patrimonial e sucessório para quem construiu patrimônio de verdade",
sub:"Holdings, estruturas internacionais, doações e governança familiar para reduzir custo sucessório e evitar que a família herde um litígio.",
problema:"Sem planejamento, a sucessão é um processo judicial: inventário, tributos, patrimônio travado e decisões tomadas sob luto. Com planejamento, é uma transição organizada, com custo conhecido e regras definidas por quem construiu o patrimônio. A diferença entre os dois cenários se decide agora.",
paraquem:["Famílias empresárias com imóveis, participações e ativos financeiros","Empresários com patrimônio em mais de um país","Quem tem estrutura montada mas nunca formalizou a sucessão"],
quando:"Quando o custo de um inventário passa a ser relevante, quando há herdeiros em cenários diferentes, ou quando parte do patrimônio está no exterior.",
riscos:["Inventário longo com patrimônio bloqueado e tributação máxima","Disputa entre herdeiros por ausência de regras claras","Patrimônio internacional descoberto em sucessão sem tratamento"],
etapas:["Mapeamento patrimonial completo","Cenários comparados: não agir, regularizar, holding nacional, estrutura internacional","Desenho da arquitetura: entidades, doações, cláusulas, testamento","Implementação: constituições, transferências, registros","Governança e revisões periódicas"],
decisoes:["Arquitetura: nacional, internacional ou híbrida","O que doar em vida, com quais cláusulas","Regras de governança e sucessão do controle"],
docs:"Matrículas, contratos sociais, declarações de IR",entrega:"Arquitetura + documentos sucessórios",prazo:"8 a 16 semanas",
faq:[["Holding familiar reduz mesmo os custos da sucessão?","Na maioria dos cenários, sim, de forma relevante. O número exato depende do estado, do tipo de ativo e do desenho. Trabalhamos com cenários calculados, não com percentuais de propaganda."],
["E o patrimônio que está no exterior?","Exige tratamento próprio: conflito de leis, testamentos coordenados e, muitas vezes, estruturas específicas. É uma das nossas frentes centrais."]]},
cripto:{nome:"Cripto & Web3",tag:"Operar cripto com estrutura é a diferença entre patrimônio e passivo",
h1:"Estrutura jurídica e tributária para quem opera cripto de verdade",
sub:"Tributação de ganhos, regularização e estruturas para traders e projetos Web3, sob o Marco Legal e a Lei 14.754/2023.",
problema:"O mercado cripto brasileiro cresceu mais rápido que a conformidade de quem opera nele. Ganhos não declarados e estruturas improvisadas criaram um passivo silencioso, que a Receita, com acesso crescente a dados de exchanges, está cada vez mais equipada para cobrar.",
paraquem:["Traders e investidores com volume relevante","Detentores de ativos em exchanges internacionais e autocustódia","Projetos e empresas Web3"],
quando:"Quando o volume torna a exposição relevante, quando há operação em exchange estrangeira, ou quando chegou notificação.",
riscos:["Autuação com multa qualificada sobre ganhos não declarados","Bloqueio bancário por origem de recursos não demonstrável","Enquadramento regulatório incorreto de projeto ou token"],
etapas:["Reconstituição das operações e cálculo dos ganhos","Regularização espontânea quando aplicável","Estrutura para operação futura: PF, PJ nacional ou internacional","Conformidade recorrente","Para projetos: enquadramento regulatório e documentação"],
decisoes:["Regularizar espontaneamente ou aguardar, com riscos comparados","Veículo de operação e jurisdição de custódia","Política de conformidade recorrente"],
docs:"Extratos de exchanges, carteiras, declarações anteriores",entrega:"Parecer + regularização + estrutura",prazo:"3 a 10 semanas",
faq:[["Nunca declarei nada. É tarde demais?","Enquanto não há fiscalização instaurada, a regularização espontânea afasta a multa punitiva. É quase sempre o melhor cenário disponível, e ele tem prazo de validade."],
["Cripto em exchange estrangeira entra na Lei 14.754?","Ativos no exterior têm tratamento próprio, e a jurisdição de custódia da exchange importa. A análise é feita caso a caso, exchange por exchange."]]},
fintechs:{nome:"Fintechs & Meios de Pagamento",tag:"Entre a ideia e a licença existe uma arquitetura jurídica inteira",
h1:"Estrutura regulatória para fintechs, gateways e meios de pagamento",
sub:"Enquadramento junto ao Banco Central, contratos com adquirentes e liquidantes, PLD/FT e governança para operar, escalar e passar em due diligence.",
problema:"O setor de pagamentos opera sob regulação densa e supervisão ativa. Operar fora do enquadramento correto, ou crescer além dos limites do modelo escolhido, expõe a operação a descredenciamento, bloqueio de fluxo e responsabilização dos sócios.",
paraquem:["Gateways e subadquirentes","Fintechs em constituição ou pivotagem","Operações que cresceram além do enquadramento atual"],
quando:"Antes de operar, antes de escalar, antes da due diligence de um parceiro relevante. Ou imediatamente, se qualquer um desses momentos já passou.",
riscos:["Operação enquadrada como atividade privativa sem autorização","Descredenciamento por falha de PLD/FT","Contratos com liquidantes transferindo risco excessivo"],
etapas:["Diagnóstico regulatório do modelo de negócio","Arquitetura: entidades, licenças, limites e cronograma","Documentação: contratos, políticas, compliance PLD/FT","Implementação societária e regulatória","Acompanhamento de obrigações e mudanças normativas"],
decisoes:["Modelo regulatório e momento de pedir autorização","Arquitetura societária e de capital","Apetite de risco nas políticas de onboarding"],
docs:"Modelo de negócio, fluxo de fundos, contratos",entrega:"Arquitetura + contratos + políticas",prazo:"6 a 16 semanas",
faq:[["Preciso de autorização do Banco Central para operar?","Depende do modelo e do volume. Há caminhos regulares para operar antes da autorização, e limites claros a partir dos quais ela é obrigatória."],
["Vocês negociam com adquirentes e bancos liquidantes?","Sim. Contratos dessa camada definem quem carrega o risco da operação, e são negociáveis em mais pontos do que o mercado assume."]]},
igaming:{nome:"iGaming",tag:"Um mercado legalizado é um mercado fiscalizado",
h1:"Estrutura jurídica e regulatória para operações de iGaming",
sub:"Licenciamento, estrutura internacional, contratos do ecossistema e conformidade no Brasil regulado.",
problema:"A regulamentação do mercado de apostas transformou o setor: o que era zona cinzenta virou mercado licenciado, fiscalizado e caro para quem opera fora das regras. Operadores, fornecedores e afiliados precisam decidir, com estrutura, onde e como existir nesse novo mapa.",
paraquem:["Operadores licenciados ou em licenciamento","Fornecedores de plataforma, conteúdo e pagamentos","Afiliados e operações de tráfego do setor"],
quando:"Antes de estruturar a entrada no mercado regulado, ao redesenhar operação internacional, ou ao contratar com o ecossistema.",
riscos:["Operação irregular sujeita a bloqueio e sanções","Estrutura internacional incompatível com as exigências brasileiras","Passivo contratual e tributário na cadeia de afiliação"],
etapas:["Enquadramento: onde a operação está e onde pode estar","Arquitetura societária compatível com a licença","Contratos do ecossistema: plataforma, pagamentos, afiliados","Conformidade: jogo responsável, publicidade, PLD/FT","Acompanhamento regulatório contínuo"],
decisoes:["Operar licenciado, via estrutura internacional, ou híbrido","Arquitetura de pagamentos e fluxo de fundos","Política de publicidade e afiliação"],
docs:"Estrutura atual, contratos, jurisdições envolvidas",entrega:"Arquitetura + contratos + programa",prazo:"6 a 20 semanas",
faq:[["Afiliado também precisa de estrutura?","Precisa. A exposição publicitária, tributária e contratual dos afiliados cresceu junto com a regulação. Estrutura e contratos corretos são a diferença entre comissão e passivo."],
["Operação internacional ainda é viável?","Depende do mercado-alvo e do desenho. Para o público brasileiro, as regras mudaram de forma decisiva. A análise é sobre o que é sustentável."]]},
societario:{nome:"Societário",tag:"Toda sociedade funciona até o dia do primeiro desacordo",
h1:"Estrutura societária e acordos de sócios que evitam o litígio",
sub:"Constituição e reorganização de sociedades, acordos de sócios, vesting, governança e resolução de conflitos.",
problema:"A maioria das sociedades opera com contrato social de modelo e nenhum acordo de sócios. Funciona até a primeira divergência sobre dinheiro, controle ou saída. O trabalho societário bem feito é escrever as regras enquanto todos ainda concordam.",
paraquem:["Sociedades em constituição ou reorganização","Empresas recebendo sócio, investidor ou executivo com participação","Sócios em divergência que ainda preferem acordo a litígio"],
quando:"Na entrada de qualquer novo sócio, antes de captação, e no primeiro sinal de divergência relevante, quando acordo ainda é barato.",
riscos:["Sociedade travada por impasse sem mecanismo de resolução","Saída de sócio sem regra de avaliação, a disputa mais cara do direito societário","Diluição e controle decididos por lei supletiva, não por escolha"],
etapas:["Diagnóstico da estrutura e dos conflitos potenciais","Desenho: tipos societários, classes, controle","Acordo de sócios: entrada, saída, avaliação, deadlock","Implementação: alterações e registros","Governança recorrente"],
decisoes:["Regras de saída e método de avaliação","Mecanismos de desempate","Vesting e cláusulas de permanência"],
docs:"Contrato social, acordos existentes, cap table",entrega:"Estrutura + acordo de sócios",prazo:"3 a 8 semanas",
faq:[["Já temos contrato social. Não basta?","O contrato social é público e limitado. As regras que evitam litígio vivem no acordo de sócios, que é confidencial e muito mais flexível."],
["Estamos em conflito. Ainda dá para resolver sem processo?","Na maioria dos casos, sim, e quase sempre por menos do que custará o litígio. Estruturamos saídas e reorganizações sob conflito com frequência."]]},
contratos:{nome:"Contratos Empresariais",tag:"O contrato é a versão escrita do pior cenário",
h1:"Contratos desenhados para o dia em que algo dá errado",
sub:"Elaboração, revisão e negociação de contratos estratégicos, incluindo contratos internacionais e de tecnologia.",
problema:"Contrato não existe para o cenário em que tudo funciona. Contratos genéricos transferem risco silenciosamente: responsabilidade ilimitada, propriedade intelectual mal alocada, foro impraticável. O custo aparece anos depois, multiplicado.",
paraquem:["Empresas com contratos recorrentes de valor relevante","Operações internacionais contratando entre jurisdições","Quem está prestes a assinar algo grande demais para errar"],
quando:"Antes de assinar qualquer contrato cujo descumprimento machucaria a empresa, e periodicamente, para revisar os modelos de uso diário.",
riscos:["Responsabilidade e indenização sem limite contratual","Propriedade intelectual e dados alocados contra seu interesse","Cláusulas de rescisão e foro que travam a operação"],
etapas:["Entendimento do negócio e do pior cenário relevante","Elaboração ou revisão com matriz de riscos","Negociação das cláusulas críticas","Fechamento e padronização de modelos","Gestão de renovações e prazos"],
decisoes:["Limites de responsabilidade aceitáveis","Alocação de propriedade intelectual e dados","Foro, lei aplicável e resolução de disputas"],
docs:"Minuta ou contrato vigente, contexto comercial",entrega:"Contrato + matriz de riscos",prazo:"1 a 4 semanas por contrato",
faq:[["Vocês revisam contratos internacionais?","Sim, incluindo lei aplicável, arbitragem, câmbio e a coordenação com estruturas no exterior."],
["Vale advogado para contrato padrão?","Se o contrato é padrão do outro lado, ele foi escrito para proteger o outro lado. A revisão identifica o que é negociável, e quase sempre há mais do que parece."]]},
compliance:{nome:"Compliance & Regulação",tag:"Conformidade barata existe: chama-se antecipação",
h1:"Compliance e estratégia regulatória para operações digitais",
sub:"Programas de conformidade, PLD/FT, LGPD e resposta a exigências e fiscalizações.",
problema:"Para negócios regulados, a pergunta não é se o regulador vai olhar. É quando, e o que vai encontrar. Compliance tratado como burocracia produz papel. Tratado como estratégia, produz licença para operar, acesso a bancos e defesa pronta quando a exigência chega.",
paraquem:["Operações reguladas ou sob supervisão ativa","Empresas notificadas ou sob exigência","Negócios em preparação para due diligence ou captação"],
quando:"Antes do regulador, banco ou investidor pedir. Ou imediatamente após qualquer notificação, exigência ou bloqueio.",
riscos:["Sanções e bloqueios por falha de PLD/FT","Perda de contas e parcerias por reprovação em due diligence","Resposta improvisada a fiscalização agravando a exposição"],
etapas:["Mapeamento de obrigações aplicáveis","Gap analysis: onde a prática diverge da regra","Programa proporcional: políticas, controles, treinamento","Resposta a exigências e representação","Monitoramento normativo contínuo"],
decisoes:["Quais riscos tratar primeiro","Apetite de risco documentado","Governança do programa"],
docs:"Políticas existentes, notificações, descrição da operação",entrega:"Programa + políticas + defesa",prazo:"4 a 12 semanas",
faq:[["Recebi uma notificação. Qual o primeiro passo?","Não responder no impulso. A primeira resposta define o tom de todo o procedimento. Análise antes de qualquer protocolo."],
["Compliance para empresa pequena não é exagero?","Programa desproporcional, sim. Operação regulada sem controles mínimos não é enxuta. É exposta. Desenhamos na medida do risco real."]]},
consultoria:{nome:"Consultoria Jurídica Estratégica",tag:"O jurídico na mesa de decisão, não no fim da fila",
h1:"Assessoria contínua para decisões que não podem esperar parecer",
sub:"Acompanhamento recorrente com a memória do seu caso acumulada: estrutura, risco, contratos e regulação na velocidade da decisão.",
problema:"Empresas em movimento tomam decisões jurídicas toda semana, quase nunca com um advogado presente. Consultar pontualmente resolve o incêndio, não constrói estrutura. A assessoria contínua muda a lógica: o jurídico conhece o negócio e antecipa o risco.",
paraquem:["Empresas em crescimento sem jurídico interno","Operações internacionais e reguladas com demandas constantes","Founders que decidem rápido"],
quando:"Quando as demandas jurídicas deixam de ser eventos e viram rotina.",
riscos:["Decisões estruturais tomadas sem análise e corrigidas caro depois","Conhecimento do caso disperso entre prestadores pontuais","Risco identificado apenas quando vira problema"],
etapas:["Imersão: estrutura, contratos, riscos e prioridades","Definição do formato: frentes, volume, canais","Rotina de demandas com status visível","Revisões estratégicas periódicas","Ajuste contínuo do escopo"],
decisoes:["Frentes prioritárias","Formato e volume da assessoria","Cadência das revisões"],
docs:"Visão da operação, contratos-chave, demandas abertas",entrega:"Assessoria + revisões + memória",prazo:"Contínuo, ciclos trimestrais",
faq:[["Como funciona o modelo de honorários?","Escopo mensal definido por frentes e volume, não por hora aberta. Você sabe o que está incluído e o que aciona escopo adicional, por escrito."],
["Podemos começar por um projeto pontual?","É o caminho mais comum: um escopo fechado primeiro, e a continuidade se fizer sentido para os dois lados."]]},
operacoes:{nome:"Operações Internacionais",tag:"Operar em vários países exige uma estrutura que funcione em todos",
h1:"Estruturação de operações internacionais ponta a ponta",
sub:"Arquitetura de grupos multi-jurisdição, contratos internacionais, fluxos financeiros e residência fiscal de sócios.",
problema:"Quando a operação cruza fronteiras, cada país enxerga só a parte que está nele, e as regras se contradizem. Sem arquitetura coordenada, a empresa paga tributo duplicado e descobre obrigações locais quando viram multa. O trabalho aqui é desenhar o todo, não as partes.",
paraquem:["Grupos com entidades em mais de um país","Empresas brasileiras expandindo para fora, ou o inverso","Sócios em mudança de residência fiscal"],
quando:"Antes de constituir a segunda jurisdição, antes de mover sócios ou fluxos relevantes, ou quando a estrutura cresceu sem desenho.",
riscos:["Dupla tributação por ausência de planejamento com tratados","Contratos intragrupo inexistentes ou incoerentes","Saída fiscal de sócios mal executada gerando contingência"],
etapas:["Mapa da operação: entidades, fluxos, pessoas, obrigações","Arquitetura-alvo com cenários tributários comparados","Reorganização: constituições, transferências, contratos intragrupo","Coordenação da conformidade em cada jurisdição","Revisão periódica conforme a operação muda"],
decisoes:["Jurisdição de comando do grupo","Política de fluxos: dividendos, serviços, royalties","Residência fiscal dos sócios-chave"],
docs:"Organograma societário, fluxos, contratos intragrupo",entrega:"Arquitetura + contratos + calendário",prazo:"8 a 20 semanas",
faq:[["Vocês atuam nos outros países também?","Coordenamos o projeto com correspondentes qualificados em cada jurisdição, com uma única interface e um único responsável: nós."],
["A operação já existe e está bagunçada. Dá para arrumar?","Reorganização é a maior parte do trabalho real. O diagnóstico mapeia o existente e o caminho de menor atrito até a estrutura correta."]]}
};

const HUBS={
internacionalizacao:{nome:"Hub Internacionalização",h1:"Sua operação, além da fronteira",sub:"Entidades no exterior, recebimentos globais e estruturas que resistem a banco, fisco e regulador.",
 tese:"Internacionalizar deixou de ser sofisticação e virou infraestrutura: quem vende, investe ou vive entre países precisa de uma camada jurídica que os bancos aceitem, o fisco reconheça e o regulador não desmonte. O erro do mercado é vender jurisdição antes de entender o fluxo. O nosso método inverte: primeiro o desenho, depois a entidade.",
 mapa:[["Até 2023 · o velho jogo","Diferimento amplo de lucros no exterior e estruturas vendidas em prateleira, com pouca atenção a substância."],["Lei 14.754/2023 · a virada","Tributação anual de lucros de controladas no exterior e novas regras para aplicações financeiras. Estruturas antigas ficaram obsoletas ou perigosas."],["2024 em diante · a era da conformidade","Bancos e adquirentes endurecem compliance. Estrutura sem propósito, substância e declaração correta passa a ser passivo."],["Hoje · oportunidade real","Para proteção, sucessão, operação global e acesso a mercados, estruturas bem desenhadas seguem plenamente eficientes."]],
 faq:[["Ainda vale a pena ter offshore?","Para diferimento agressivo, o jogo mudou. Para proteção, organização, sucessão e operação internacional, vale, desde que a estrutura tenha propósito, substância e declaração correta."],["Preciso morar fora para ter empresa fora?","Não. Residência fiscal e estrutura societária são camadas diferentes. O que muda é o tratamento tributário do sócio brasileiro."],["Qual o maior erro que vocês encontram?","Estrutura montada pelo tutorial: entidade certa no papel, fluxo errado na prática, e zero conformidade no lado brasileiro."]],
 caso:{c:"Empresário digital com receita de USD 40 mil/mês recebida como pessoa física via plataformas.",r:"Tributação máxima no carnê-leão, exposição patrimonial integral e conta sinalizada pelo banco por volume incompatível.",e:"Constituição de LLC com classificação fiscal adequada, fluxo bancário redesenhado e integração declaratória no Brasil.",res:"Recebimentos regularizados, carga tributária reorganizada dentro da lei e patrimônio pessoal separado da operação."},
 guia:{slug:"offshore-14754",desc:"Offshore para brasileiros depois da Lei 14.754/2023: o que mudou e o que fazer com a estrutura que você tem."},
 prods:["llc","holdintl","revisao14754","life"],tool:"internacionalizacao"},
patrimonial:{nome:"Hub Patrimonial",h1:"O que você construiu, protegido e organizado",sub:"Holdings, sucessão planejada e a separação real entre patrimônio e risco.",
 tese:"Patrimônio sem estrutura é patrimônio emprestado ao acaso: qualquer litígio da operação, qualquer sucessão sem plano, qualquer mudança de regra cobra a conta de quem não se organizou. Planejamento patrimonial não é sobre esconder nada. É sobre decidir, em vida e com calma, o que a lei decidiria por você, com pressa e com custo.",
 mapa:[["O padrão brasileiro","Imóveis, participações e investimentos concentrados na pessoa física, respondendo por tudo."],["O custo da inércia","Inventário: meses ou anos de patrimônio travado, ITCMD, custas e honorários que podem superar 10% do total."],["A resposta estrutural","Holding, doações com cláusulas de proteção, testamento e governança: sucessão como transição, não como processo."],["A camada internacional","Ativos fora do Brasil exigem coordenação entre jurisdições, sob pena de dupla incidência e conflito de leis."]],
 faq:[["Holding familiar serve para qualquer patrimônio?","Não. Abaixo de certo porte, o custo supera o benefício. A conta que fazemos compara cenários com números do seu caso."],["Doar em vida não é perder o controle?","Não quando a doação vem com reserva de usufruto e cláusulas de incomunicabilidade, impenhorabilidade e inalienabilidade."],["E se parte do patrimônio for cripto?","Cripto é patrimônio como qualquer outro para fins sucessórios e fiscais, com o desafio adicional da custódia e do acesso. Tratamos as duas camadas."]],
 caso:{c:"Família com patrimônio de oito dígitos entre imóveis, participações e aplicações, integralmente na pessoa física do patriarca.",r:"Sucessão que consumiria anos e percentual relevante do patrimônio, com risco de conflito entre herdeiros em situações distintas.",e:"Quatro cenários comparados por escrito, holding constituída, doações planejadas com cláusulas de proteção e regras de governança familiar.",res:"Sucessão definida pela família, custo conhecido e patrimônio operando sob regras claras ainda em vida."},
 guia:{slug:"protecao-patrimonial",desc:"Proteção patrimonial para empresários: o que funciona, o que é lenda e por que blindagem de última hora não existe."},
 prods:["holdfam","regcripto","holdintl"],tool:"patrimonial"},
life:{nome:"Hub Life",h1:"Liberdade também se estrutura",sub:"Mobilidade pessoal, segundas residências e cidadanias, contas e investimentos fora, saída fiscal bem executada.",
 tese:"Morar fora, ter uma segunda residência ou apenas a opção de sair: liberdade pessoal virou projeto jurídico. A diferença entre um plano e um problema é a ordem das decisões: residência fiscal, estrutura dos ativos, contas e vistos precisam ser sequenciados, porque cada um afeta o custo do outro.",
 mapa:[["O sonho desorganizado","Mudança primeiro, planejamento depois: o roteiro clássico da contingência fiscal permanente."],["Saída fiscal do Brasil","Comunicação e declaração de saída definitiva: feitas a tempo, encerram obrigações; ignoradas, mantêm você tributável aqui."],["A chegada no destino","Cada país tributa a entrada de um jeito. Regimes de residente não habitual e similares podem mudar tudo, se planejados antes."],["Os ativos que ficam","Imóveis, participações e investimentos no Brasil de um não residente têm regras próprias. A estrutura decide o custo."]],
 faq:[["Posso ter conta e investimentos fora sem morar fora?","Pode, com declaração correta no Brasil. A Lei 14.754/2023 trouxe regras novas para aplicações e entidades no exterior."],["Segunda cidadania ajuda em quê, na prática?","Mobilidade de vistos, plano B jurisdicional e, em alguns casos, acesso a mercados e bancos. Não altera, por si, sua tributação."],["Qual o erro mais caro?","Sair do Brasil sem formalizar a saída fiscal. A Receita continua considerando você residente, com todas as obrigações."]],
 caso:{c:"Casal de empresários planejando mudança para a Europa mantendo negócios e imóveis no Brasil.",r:"Dupla tributação potencial, saída fiscal não planejada e estrutura patrimonial incompatível com a condição de não residentes.",e:"Sequenciamento completo: reorganização patrimonial antes da saída, formalização da saída fiscal e regime de chegada no destino.",res:"Mudança executada com custo tributário planejado e ativos brasileiros operando regularmente sob a nova condição."},
 guia:{slug:"residencia-fiscal",desc:"Residência fiscal: o que acontece, passo a passo, quando você muda de país."},
 prods:["life","holdintl","llc"],tool:"life"},
tech:{nome:"Hub Tech",h1:"Tecnologia protegida é ativo. Exposta, é risco",sub:"Marca, software, dados e contratos de tecnologia: os intangíveis tratados como patrimônio.",
 tese:"Em negócios digitais, o patrimônio de verdade raramente está no balanço: está na marca, no código, nos dados e nos contratos. São ativos que valem milhões em due diligence e zero em juízo se não estiverem formalizados. Proteger intangível é barato exatamente até o dia em que deixa de ser.",
 mapa:[["Marca · quem registra, leva","O sistema brasileiro é atributivo: o registro no INPI vale mais que o uso. Operar sem registro é correr risco de virar réu da própria marca."],["Software · o código de quem?","Sem cessão formal de PI, o código pertence a quem escreveu, incluindo freelancers e ex-sócios."],["Dados · LGPD como higiene mínima","Multas, bloqueios e reprovação em due diligence: dados sem governança custam mais que a adequação."],["Contratos · onde tudo se conecta","Licenças, termos de uso e SLAs definem o que o negócio pode prometer e o que pode perder."]],
 faq:[["Registrar marca demora quanto?","O protocolo é rápido; a decisão do INPI leva meses. A proteção retroage à data do depósito, por isso depositar cedo importa."],["Meu dev freelancer assinou recibo. Basta?","Não. Recibo prova pagamento, não transfere propriedade intelectual. É preciso cessão expressa e por escrito."],["LGPD vale para empresa pequena?","Vale. A proporcionalidade está no programa, não na aplicabilidade da lei."]],
 caso:{c:"SaaS em crescimento com marca sem registro, código escrito por freelancers e termos de uso copiados.",r:"Terceiro depositou marca semelhante no INPI e investidor apontou PI difusa como impeditivo na due diligence.",e:"Oposição ao registro de terceiro, depósito da marca em classes corretas, cessões de PI regularizadas e contratos reescritos.",res:"Marca assegurada, propriedade do código consolidada na empresa e rodada destravada."},
 guia:{slug:"pi-negocios-digitais",desc:"Propriedade intelectual para negócios digitais: marca, software e dados como ativos."},
 prods:["marca","software","lgpd","contratos3"],tool:"tech"},
regulatorio:{nome:"Hub Regulatório",h1:"A regra muda. Sua operação precisa chegar antes",sub:"Licenças, adequações e programas de gerenciamento de riscos: NR-1, LGPD, PLD/FT e obrigações setoriais.",
 tese:"Para negócios regulados, a pergunta não é se o regulador vai olhar. É quando, e o que vai encontrar. Compliance tratado como burocracia produz papel; tratado como estratégia, produz licença para operar, acesso a bancos e defesa pronta. Conformidade barata existe: chama-se antecipação.",
 mapa:[["NR-1 · riscos psicossociais","Gerenciamento obrigatório de riscos psicossociais no trabalho, com fiscalização punitiva ativa desde maio de 2026. Empresas de 60 a 200 CLT são o foco atual."],["LGPD · maturidade exigida","Da adequação formal à demonstração efetiva: ANPD fiscalizando e mercado exigindo evidências."],["Setores supervisionados","Pagamentos, cripto e iGaming sob regulamentação em construção contínua: enquadramento é decisão viva, não evento."],["O padrão de resposta","Notificações e exigências respondidas no improviso criam problemas que não existiam. Análise antes de qualquer protocolo."]],
 faq:[["O que a NR-1 exige na prática?","Identificação e avaliação dos riscos psicossociais, plano de ação documentado e integração ao gerenciamento de riscos ocupacionais existente."],["Recebi uma notificação. Respondo logo para mostrar boa-fé?","Não sem análise. A primeira resposta define o tom do procedimento inteiro e frequentemente amplia a exposição."],["Compliance proporcional existe?","Existe e é o único que funciona: programa na medida do risco real, com controles que a operação consegue sustentar."]],
 caso:{c:"Empresa de serviços com 120 CLT sem gerenciamento de riscos psicossociais, notificada em fiscalização de rotina.",r:"Autuação com multa por descumprimento da NR-1 e prazo exíguo para comprovação de conformidade.",e:"Resposta estratégica à notificação, diagnóstico psicossocial estruturado e plano de ação implantado com evidências.",res:"Penalidade contida no mínimo legal e programa vigente protegendo a empresa nas fiscalizações seguintes."},
 guia:{slug:"nr1-guia",desc:"NR-1 e riscos psicossociais: o que a fiscalização cobra e como se adequar sem parar a operação."},
 prods:["nr1","lgpd","resposta","licencas"],tool:"regulatorio"},
empresarial:{nome:"Hub Empresarial",h1:"Sociedade, contratos e captação sem pontas soltas",sub:"Reestruturação, acordo de sócios, remodelagem de negócios e preparação para investimento.",
 tese:"Toda empresa é um feixe de contratos e de acordos entre pessoas. Enquanto tudo cresce, ninguém lê as cláusulas; quando algo trava, elas são a única coisa que importa. O trabalho empresarial bem feito escreve as regras enquanto todos concordam e desenha a estrutura antes que a escala a exija.",
 mapa:[["A sociedade informal","Contrato social de modelo, nenhum acordo de sócios: o padrão brasileiro e a origem dos litígios mais caros."],["O crescimento desestruturado","Faturamento multiplica, estrutura não acompanha: tributos, responsabilidades e riscos escalam em silêncio."],["A prova da due diligence","Captação e venda expõem tudo: cap table, PI, contratos e passivos. O que não foi arrumado, reprecifica."],["A reorganização como ferramenta","Reestruturar e remodelar não é sinal de crise: é o que empresas maduras fazem antes de cada nova fase."]],
 faq:[["Temos contrato social. Precisamos mesmo de acordo de sócios?","O contrato social é público e limitado. Saída, avaliação, deadlock, vesting e não concorrência vivem no acordo de sócios, confidencial e flexível."],["Quando reestruturar a empresa?","Antes da próxima fase: novo sócio, novo mercado, captação, sucessão ou quando o regime tributário deixou de ser o ideal."],["Cliente grande inadimplente: processo é o único caminho?","Quase nunca é o primeiro. Recuperação estruturada de crédito começa por notificação e negociação com lastro documental, com o processo como alavanca, não como plano."]],
 caso:{c:"Empresa de tecnologia faturando R$ 12 mi/ano, três sócios sem acordo, captação prevista para 12 meses.",r:"Due diligence encontraria PI difusa, ausência de vesting e regras societárias inexistentes, reprecificando a rodada.",e:"Acordo de sócios completo, cessões de PI, reorganização societária e data room jurídico preparado.",res:"Rodada concluída sem reprecificação e sócios protegidos por regras que eles mesmos escolheram."},
 guia:{slug:"acordo-socios",desc:"Acordo de sócios: as regras que faltavam quando a sociedade quebrou."},
 prods:["acordo","reestruturacao","captacao","recupcredito"],tool:"empresarial"}};

const ARTICLES=[
{slug:"offshore-14754",cat:"Offshore",t:"Offshore para empresários brasileiros depois da Lei 14.754/2023",d:"O que mudou, o que ainda funciona e como avaliar a estrutura que você já tem.",pilar:1,
body:`<p><strong>A Lei 14.754/2023 reescreveu as regras do jogo para quem tem estruturas e investimentos no exterior.</strong> Desde 2024, lucros de entidades controladas em paraísos fiscais ou com renda passiva relevante passaram a ser tributados anualmente no Brasil, existindo eles distribuídos ou não. O diferimento indefinido, que sustentava boa parte do marketing de offshore no país, acabou para a maioria dos casos.</p>
<h2>O que mudou, em três pontos</h2>
<p>Primeiro, a tributação automática: lucros apurados por controladas enquadradas são tributados a 15% na declaração anual da pessoa física, no regime de competência. Segundo, a opção de transparência: o contribuinte pode optar por declarar os ativos da entidade como se fossem próprios, o que em alguns perfis é mais eficiente. Terceiro, a atualização de valores: a lei abriu janelas de atualização de bens no exterior com alíquota reduzida, que exigiram decisão informada e tempestiva.</p>
<h2>O que continua funcionando</h2>
<p>Proteção patrimonial, organização de ativos, planejamento sucessório internacional, acesso a bancos e mercados e a operação de negócios globais seguem sendo razões legítimas e eficientes para estruturas no exterior. O que a lei eliminou foi a estrutura sem propósito: a entidade de prateleira, sem substância, cuja única função era adiar imposto.</p>
<h2>O teste da sua estrutura</h2>
<p>Três perguntas separam estrutura de passivo. Ela tem propósito demonstrável além do tributário? Está corretamente declarada, com o regime de tributação escolhido de forma consciente? Sobreviveria a uma pergunta do banco ou da Receita sobre substância e beneficiário final? Duas respostas negativas indicam necessidade de revisão imediata; a regularização espontânea, enquanto disponível, é quase sempre o cenário de menor custo.</p>
<p><em>Este guia é informativo e não substitui análise do caso concreto.</em></p>`},
{slug:"llc-guia",cat:"LLC/EUA",t:"LLC nos Estados Unidos: o guia completo para o sócio brasileiro",d:"Estado, classificação fiscal, Operating Agreement, bancos e o lado brasileiro da equação.",pilar:1,
body:`<p><strong>Abrir uma LLC é trivial. Operar uma LLC sem criar problema no Brasil é o trabalho de verdade.</strong> A maioria das dores que atendemos nasce de constituições feitas por tutorial: estado escolhido por moda, Operating Agreement genérico, fluxo bancário improvisado e nenhuma atenção ao tratamento tributário do sócio brasileiro.</p>
<h2>As quatro decisões que importam</h2>
<p>O estado de constituição define custos, privacidade e conveniência, e a resposta certa depende do caso: Wyoming, Delaware, Flórida e New Mexico resolvem perfis diferentes. A classificação fiscal americana (disregarded entity, partnership ou corporation) define como os EUA enxergam a entidade. O Operating Agreement define as regras internas e é o documento que bancos e parceiros pedem primeiro. E o desenho do fluxo (quem fatura, quem recebe, como o dinheiro chega ao Brasil) define se a estrutura funciona ou trava.</p>
<h2>O lado brasileiro</h2>
<p>A LLC em si não paga imposto no Brasil, mas o sócio brasileiro sim. Após a Lei 14.754/2023, os lucros da entidade são, em regra, tributados anualmente a 15% na declaração, com a alternativa do regime de transparência em perfis específicos. A escolha entre os regimes é uma decisão estrutural, tomada com números, antes da constituição.</p>
<h2>Erros que vemos toda semana</h2>
<p>Misturar contas pessoais e da empresa, dissolvendo a separação patrimonial que justificava a LLC. Declarar a entidade de forma errada ou não declarar. Usar a LLC para atividade incompatível com o que o banco conhece, gerando encerramento de conta. E abandonar as obrigações anuais do estado, deixando a entidade cair em bad standing exatamente quando ela era necessária.</p>
<p><em>Este guia é informativo e não substitui análise do caso concreto.</em></p>`},
{slug:"nr1-guia",cat:"Compliance",t:"NR-1 e riscos psicossociais: o que a fiscalização cobra",d:"O gerenciamento obrigatório, o foco da fiscalização punitiva e como se adequar sem parar a operação.",pilar:1,
body:`<p><strong>Desde maio de 2026, a fiscalização da NR-1 sobre riscos psicossociais deixou de ser orientativa e passou a ser punitiva.</strong> O gerenciamento de riscos ocupacionais passou a incluir, expressamente, os riscos psicossociais: sobrecarga, assédio, jornadas, metas e demais fatores organizacionais que afetam a saúde mental no trabalho.</p>
<h2>O que a norma exige</h2>
<p>Identificação e avaliação dos riscos psicossociais presentes na organização, com método defensável. Plano de ação documentado, com medidas, prazos e responsáveis. Integração ao gerenciamento de riscos existente, e evidências de execução: a fiscalização não pergunta se a empresa se importa, pergunta o que ela consegue comprovar.</p>
<h2>Quem está no foco</h2>
<p>Empresas de 60 a 200 empregados CLT concentram a atenção atual da fiscalização: grandes o suficiente para ter obrigações plenas, pequenas o suficiente para raramente ter estrutura interna dedicada. Nesse recorte, a ausência de programa não é lacuna, é autuação anunciada.</p>
<h2>O caminho da adequação</h2>
<p>Diagnóstico estruturado com escuta adequada, priorização dos riscos identificados, plano de ação proporcional e documentação de cada etapa. Feito nessa ordem, o programa cabe na rotina da empresa e resiste à fiscalização. Feito às pressas depois da notificação, custa mais e protege menos.</p>
<p><em>Este guia é informativo e não substitui análise do caso concreto.</em></p>`},
{slug:"protecao-patrimonial",cat:"Patrimonial",t:"Proteção patrimonial: o que funciona e o que é lenda",d:"Separação real entre risco e patrimônio, e por que blindagem de última hora não existe.",pilar:1},
{slug:"residencia-fiscal",cat:"Tributário internacional",t:"Residência fiscal: o que acontece quando você muda de país",d:"Saída fiscal do Brasil, chegada no destino e o tratamento dos ativos que ficam.",pilar:1},
{slug:"pi-negocios-digitais",cat:"Tech",t:"Propriedade intelectual para negócios digitais",d:"Marca, software e dados como ativos: formalizar antes que a due diligence pergunte.",pilar:1},
{slug:"acordo-socios",cat:"Societário",t:"Acordo de sócios: as regras que faltavam quando a sociedade quebrou",d:"Saída, avaliação, deadlock. Escritas enquanto todos ainda concordam.",pilar:1},
{slug:"cripto-mapa",cat:"Cripto/Web3",t:"Regulação cripto no Brasil: o mapa para quem opera de verdade",d:"Marco Legal, tributação e o que a Receita já enxerga das suas operações.",pilar:1},
{slug:"fintech-mvp",cat:"Fintechs",t:"Estrutura jurídica para fintechs: do MVP à autorização",d:"Enquadramento no Banco Central e a arquitetura que sustenta a escala.",pilar:1},
{slug:"igaming-mapa",cat:"iGaming",t:"iGaming e regulação no Brasil: operar, fornecer ou afiliar",d:"O novo mapa do setor e as decisões de estrutura para cada elo da cadeia.",pilar:1}];

/* ============ RENDER institucional ============ */
function areaRows(){return Object.entries(SERVICES).map(([k,s],i)=>
`<a class="arearow" href="#/servico/${k}"><span class="ref">§ ${String(i+1).padStart(2,"0")}</span>
<span><span class="nm">${s.nome}</span><span class="tg">${s.tag}</span></span><span class="go">Ver frente →</span></a>`).join("");}
document.getElementById("home-areas").innerHTML=areaRows();
document.getElementById("services-index").innerHTML=areaRows();
function hubTiles(){return Object.entries(HUBS).map(([k,h])=>
`<a class="card hover" style="text-decoration:none;display:block" href="#/hub/${k}">
<span class="mono" style="color:var(--brass)">${h.nome}</span>
<h3 style="margin:12px 0 8px">${h.h1}</h3><p style="color:var(--muted);font-size:.9rem">${h.sub}</p></a>`).join("");}
document.getElementById("home-hubs").innerHTML=hubTiles();
document.getElementById("hubs-index").innerHTML=hubTiles();

function artRow(a){return `<a class="art-card" href="#/artigo/${a.slug}"><div><span class="cat">${a.cat}</span>${a.pilar?'<div class="pill">Página pilar</div>':''}</div>
<div><h3>${a.t}</h3><p>${a.d}</p></div></a>`}
const catSet=[...new Set(ARTICLES.map(a=>a.cat))];let activeCat=null;
const catsEl=document.getElementById("ins-cats");
function renderCats(){catsEl.innerHTML='<button class="chip'+(activeCat?'':' active')+'" data-c="">Todos</button>'+catSet.map(c=>`<button class="chip${activeCat===c?' active':''}" data-c="${c}">${c}</button>`).join("");}
function renderArts(){const q=(document.getElementById("ins-search").value||"").toLowerCase();
document.getElementById("ins-list").innerHTML=ARTICLES.filter(a=>(!activeCat||a.cat===activeCat)&&(a.t+a.d+a.cat).toLowerCase().includes(q)).map(artRow).join("")||'<p class="lede" style="margin:0 auto;text-align:center">Nenhum artigo para essa busca.</p>';}
catsEl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;activeCat=b.dataset.c||null;renderCats();renderArts();});
document.getElementById("ins-search").addEventListener("input",renderArts);
renderCats();renderArts();

let currentService=null;
function renderService(key){const s=SERVICES[key];if(!s)return false;currentService=key;
const g=id=>document.getElementById(id);
g("sv-crumb").textContent=s.nome;g("sv-h1").textContent=s.h1;g("sv-sub").textContent=s.sub;
g("sv-problema").textContent=s.problema;g("sv-quando").textContent=s.quando;
g("sv-paraquem").innerHTML=s.paraquem.map(x=>`<li>${x}</li>`).join("");
g("sv-riscos").innerHTML=s.riscos.map(x=>`<li>${x}</li>`).join("");
g("sv-etapas").innerHTML=s.etapas.map(x=>`<li>${x}</li>`).join("");
g("sv-decisoes").innerHTML=s.decisoes.map(x=>`<li>${x}</li>`).join("");
g("sv-faq").innerHTML=s.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");
g("sv-docs").textContent=s.docs;g("sv-entrega").textContent=s.entrega;g("sv-prazo").textContent=s.prazo;return true;}
function renderArtigo(slug){const a=ARTICLES.find(x=>x.slug===slug);if(!a)return false;
document.getElementById("ar-cat").textContent=a.cat;
document.getElementById("ar-h1").textContent=a.t;
document.getElementById("ar-sub").textContent=a.d;
document.getElementById("ar-body").innerHTML=a.body||`<p><strong>${a.d}</strong></p><p>Este guia pilar está em edição final pela equipe. Enquanto isso, o assistente do Atlas responde perguntas sobre o tema, e o diagnóstico mostra o que ele significa no seu caso.</p>`;
return true;}

/* ============ ROUTER ============ */
const PAGES=["home","servicos","servico","central","hubs","hub","insights","artigo","sobre","juridico","conta","portal","diagnostico","contato"];
let pendingRoute=null;
function route(){let h=location.hash.replace(/^#\/?/,"")||"home";const [page,param]=h.split("/");
let target=PAGES.includes(page)?page:"home";
if(target==="servico"&&!renderService(param))target="servicos";
if(target==="artigo"&&!renderArtigo(param))target="insights";
if(target==="hub"&&!(window.APP&&APP.renderHub(param)))target="hubs";
if((target==="diagnostico"||target==="portal")&&!(window.APP&&APP.user())){pendingRoute=target;target="conta";}
if(target==="portal"&&window.APP)APP.renderPortal();
PAGES.forEach(p=>document.getElementById("page-"+p).classList.toggle("active",p===target));
document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("active",a.dataset.nav===target||(target==="servico"&&a.dataset.nav==="servicos")||(target==="hub"&&a.dataset.nav==="hubs")||(target==="artigo"&&a.dataset.nav==="insights")));
document.getElementById("navlinks").classList.remove("open");
window.scrollTo({top:0,behavior:"instant"});
requestAnimationFrame(observeReveals);}
window.addEventListener("hashchange",route);

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.14});
function observeReveals(){document.querySelectorAll(".page.active .reveal:not(.in)").forEach(el=>io.observe(el));}
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(reduced)document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in"));

/* ============ HERO · a estrutura se organiza (complexidade -> ordem) ============ */
(function(){
const cv=document.getElementById("hero-canvas"),ctx=cv.getContext("2d");
let W,H,DPR,chaos=[],targets=[],links=[];
const rand=(a,b)=>a+Math.random()*(b-a);
function layout(){DPR=devicePixelRatio||1;W=cv.width=cv.offsetWidth*DPR;H=cv.height=cv.offsetHeight*DPR;
/* posição-alvo: organograma limpo à direita */
const cx=W*0.72,top=H*0.2,gy=H*0.15;
const tiers=[[0],[-1,1],[-1.7,-0.57,0.57,1.7]];
targets=[];tiers.forEach((xs,ti)=>xs.forEach(x=>targets.push({x:cx+x*W*0.085,y:top+ti*gy,tier:ti})));
/* nós do caos: começam espalhados */
chaos=targets.map((t,i)=>({x:rand(W*0.05,W*0.95),y:rand(H*0.05,H*0.95),tx:t.x,ty:t.y,tier:t.tier,ph:rand(0,6.28),i}));
links=[];chaos.forEach((n,i)=>chaos.forEach((m,j)=>{if(m.tier===n.tier+1&&Math.abs(m.tx-n.tx)<W*0.16)links.push([i,j]);}));}
layout();addEventListener("resize",layout);
let t=0,settle=0;
function frame(){t+=0.006;settle=Math.min(1,settle+0.0045); /* converge para a ordem */
const ease=settle<.5?2*settle*settle:1-Math.pow(-2*settle+2,2)/2;
ctx.clearRect(0,0,W,H);
/* graticule sutil de fundo */
ctx.strokeStyle="rgba(44,85,232,0.08)";ctx.lineWidth=1;
for(let i=1;i<6;i++){ctx.beginPath();ctx.moveTo(0,H*i/6);ctx.quadraticCurveTo(W/2,H*i/6+H*.04,W,H*i/6);ctx.stroke();}
/* posição atual interpola caos -> ordem, com respiração leve no fim */
const pos=chaos.map(n=>{const bx=n.x+(n.tx-n.x)*ease,by=n.y+(n.ty-n.y)*ease;
const breathe=ease>.9?Math.sin(t*1.4+n.ph)*3*DPR:0;
return{x:bx,y:by+breathe};});
/* linhas do organograma: aparecem conforme a ordem se forma */
links.forEach(([i,j])=>{const a=pos[i],b=pos[j];
ctx.strokeStyle=`rgba(44,85,232,${0.05+ease*0.28})`;ctx.lineWidth=1.1*DPR;
ctx.beginPath();ctx.moveTo(a.x,a.y);
/* cotovelo de organograma quando organizado */
if(ease>.6){const my=(a.y+b.y)/2;ctx.lineTo(a.x,my);ctx.lineTo(b.x,my);ctx.lineTo(b.x,b.y);}
else ctx.lineTo(b.x,b.y);
ctx.stroke();});
/* nós */
pos.forEach((p,idx)=>{const n=chaos[idx];const g=(Math.sin(t*1.6+n.ph)+1)/2;
const isRoot=n.tier===0;
if(isRoot){ctx.fillStyle=`rgba(255,255,255,${0.7+g*0.3})`;
ctx.beginPath();ctx.arc(p.x,p.y,3.4*DPR,0,7);ctx.fill();
ctx.strokeStyle=`rgba(255,255,255,${0.15+ease*0.2})`;ctx.beginPath();ctx.arc(p.x,p.y,8*DPR,0,7);ctx.stroke();}
else{ctx.fillStyle=`rgba(44,85,232,${0.3+g*0.28+ease*0.15})`;
ctx.beginPath();ctx.arc(p.x,p.y,2.3*DPR,0,7);ctx.fill();}});
if(!reduced)requestAnimationFrame(frame);
else settle=1;}
frame();})();
route();
route();
