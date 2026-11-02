'use strict';
// Ateliê · Proposta 2 clara. Protótipo de interface com catálogo baseado no repositório Atelie original.
// Não simula autenticação, certificação, inscrições, pagamentos ou aulas completas.
const COURSES=[
 {slug:'introducao-a-psicanalise',title:'Introdução à Psicanálise',subtitle:'Primeiros conceitos, perguntas e caminhos de leitura',description:'Uma porta de entrada para o pensamento psicanalítico. Duas aulas completas já existem no projeto original; as seis seguintes estão em preparação.',image:'assets/cover-intro.svg',label:'2 aulas disponíveis',type:'published',modules:[
  {title:'O que é psicanálise?',description:'O campo psicanalítico, suas perguntas e diferenças em relação ao senso comum.',lessons:[{id:'o-que-e-psicanalise',title:'O que é psicanálise?',minutes:35}]},
  {title:'Freud e o nascimento da psicanálise',description:'O contexto histórico, a clínica e os problemas das primeiras formulações.',lessons:[{id:'freud-e-o-nascimento-da-psicanalise',title:'Freud e o nascimento da psicanálise',minutes:45}]},
  {title:'A descoberta do inconsciente',description:'O inconsciente como hipótese e suas consequências.',lessons:[]},
  {title:'Sonhos, lapsos e formações do inconsciente',description:'Perguntas sobre sonhos, atos falhos e expressão indireta.',lessons:[]},
  {title:'Conflito, defesa e recalque',description:'Distinções entre conflito psíquico, defesa e recalque.',lessons:[]},
  {title:'Sexualidade, pulsão e desejo',description:'Introdução cuidadosa a conceitos fundamentais.',lessons:[]},
  {title:'Sintoma, repetição e transferência',description:'Questões clínicas sem reduzir pessoas a rótulos.',lessons:[]},
  {title:'A psicanálise como prática de escuta',description:'Singularidade, ética da escuta e interpretação.',lessons:[]}
 ]},
 {slug:'formacao-freudiana',title:'Formação Freudiana',subtitle:'Estudo sistemático da obra de Freud',description:'Percurso de aprofundamento organizado em dez módulos. As aulas e atividades ainda estão em preparação.',image:'assets/cover-freud.svg',label:'Em preparação',type:'planned',modules:[
  {title:'As origens da investigação freudiana',description:'Histeria e nascimento da escuta clínica.',lessons:[]},
  {title:'Da hipnose à associação livre',description:'Transformações da técnica freudiana.',lessons:[]},
  {title:'A interpretação dos sonhos',description:'Trabalho do sonho e desejo.',lessons:[]},
  {title:'Vida cotidiana e formações do inconsciente',description:'Lapsos, esquecimentos e chistes.',lessons:[]},
  {title:'Sexualidade infantil e teoria das pulsões',description:'Leituras dos Três ensaios.',lessons:[]},
  {title:'Metapsicologia: recalque e inconsciente',description:'Formulações de 1915.',lessons:[]},
  {title:'Narcisismo, identificação e constituição do eu',description:'Investimento libidinal e identificação.',lessons:[]},
  {title:'Transferência, resistência e repetição',description:'Técnica e elaboração na clínica.',lessons:[]},
  {title:'Além do princípio do prazer e a segunda tópica',description:'Formulações dos anos 1920.',lessons:[]},
  {title:'Psicanálise, cultura e os textos tardios',description:'Civilização, mal-estar e questões abertas.',lessons:[]}
 ]},
 {slug:'fundamentos-da-psicanalise',title:'Fundamentos da Psicanálise',subtitle:'Conflito, recalque e retorno do recalcado',description:'Três aulas demonstrativas em sequência sobre conflitos psíquicos e mecanismos de defesa. Conteúdo de teste sujeito a revisão.',image:'assets/cover-fundamentos.svg',label:'3 aulas demonstrativas',type:'demo',modules:[
  {title:'Conflito e defesa',description:'Uma progressão de perguntas sobre conflito, recalque e seus efeitos.',lessons:[
   {id:'conflito',title:'O conflito psíquico: uma pergunta inicial',minutes:16},
   {id:'recalque',title:'O recalque em Freud',minutes:18},
   {id:'retorno',title:'O retorno do recalcado',minutes:18}
  ]}
 ]}
];
const LESSONS={
 'o-que-e-psicanalise':{course:0,title:'O que é psicanálise?',minutes:35,prompt:'Por que às vezes repetimos atitudes que nós mesmos gostaríamos de mudar?',intro:'Imagine uma pessoa que deseja se aproximar de alguém, mas se afasta toda vez que a relação começa a ficar importante. Ela diz: “Não sei por que faço isso”. Talvez existam razões que ainda não encontrou palavras para explicar. Só a situação descrita não nos autoriza a concluir nada.',topic:'Uma palavra, três sentidos que se conectam',text:'Em um texto de 1923, Freud apresentou a psicanálise como um modo de investigar processos psíquicos difíceis de conhecer diretamente, como um método de tratamento e como um conjunto de conhecimentos e hipóteses sobre o funcionamento psíquico.'},
 'freud-e-o-nascimento-da-psicanalise':{course:0,title:'Freud e o nascimento da psicanálise',minutes:45,prompt:'Que perguntas clínicas e históricas fizeram surgir a psicanálise?',intro:'O nascimento da psicanálise não foi um acontecimento isolado. Envolveu debates médicos do fim do século XIX e transformações na escuta do sofrimento.',topic:'Da investigação médica à escuta',text:'Charcot, Breuer, o método catártico e a passagem gradual para a associação livre fazem parte desse percurso histórico. É importante observar as mudanças de técnica e os limites dessas formulações iniciais.'},
 'conflito':{course:2,title:'O conflito psíquico: uma pergunta inicial',minutes:16,prompt:'Como pensar desejos e exigências que entram em tensão?',intro:'O conceito de conflito não equivale a uma contradição simples entre duas escolhas. Ele abre perguntas sobre desejos, defesas e experiências subjetivas.',topic:'Conflito e investigação',text:'A perspectiva psicanalítica procura investigar como determinadas tensões são vividas e elaboradas, sem presumir uma explicação universal para cada comportamento.'},
 'recalque':{course:2,title:'O recalque em Freud',minutes:18,prompt:'Todo esquecimento é um recalque?',intro:'Recalque é um conceito teórico e não deve ser confundido com qualquer esquecimento cotidiano.',topic:'Uma hipótese sobre a defesa',text:'A formulação freudiana do recalque se relaciona ao conflito psíquico, à defesa e aos possíveis efeitos de representações afastadas da consciência.'},
 'retorno':{course:2,title:'O retorno do recalcado',minutes:18,prompt:'O que significa dizer que algo recalcado retorna?',intro:'O recalque não equivale a apagar definitivamente uma tensão psíquica.',topic:'Formações e limites da interpretação',text:'O retorno do recalcado convida a investigar certas formações psíquicas. Entretanto, não autoriza interpretações automáticas de sonhos, sintomas ou atos cotidianos.'}
};
const $=(s,root=document)=>root.querySelector(s);
const icon=(name)=>'<svg aria-hidden="true"><use href="#i-'+name+'"></use></svg>';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let saved=[];
try{const raw=JSON.parse(localStorage.getItem('atelierpsi-saved-v1')||'[]');saved=Array.isArray(raw)?raw.filter(x=>COURSES.some(c=>c.slug===x)):[]}catch{}
let courseFilter='all';
function persist(){try{localStorage.setItem('atelierpsi-saved-v1',JSON.stringify(saved))}catch{}}
function updateSavedCounter(){$('#savedCount').textContent=String(saved.length)}
function saveButton(c){const isSaved=saved.includes(c.slug);return '<button class="saved-btn" data-save="'+esc(c.slug)+'" aria-pressed="'+isSaved+'">'+icon(isSaved?'check':'heart')+(isSaved?'Salvo nos meus cursos':'Salvar curso')+'</button>'}
function courseCard(c){
 return '<article class="course-card"><a href="#/curso/'+c.slug+'" class="course-visual" aria-label="Abrir '+esc(c.title)+'"><img alt="" src="'+c.image+'" loading="lazy"><span class="pill">Curso</span></a><div class="course-body"><h3><a href="#/curso/'+c.slug+'">'+esc(c.title)+'</a></h3><p>'+esc(c.description)+'</p><div class="course-meta"><span class="meta-left">'+icon('graduation')+esc(c.label)+'</span><a class="circle-link" href="#/curso/'+c.slug+'" aria-label="Ver curso '+esc(c.title)+'">'+icon('arrow')+'</a></div></div></article>';
}
function heading(kicker,title,subtitle){return '<header class="page-heading"><span class="eyebrow">'+esc(kicker)+'</span><h1>'+esc(title)+'</h1><p>'+esc(subtitle)+'</p></header>'}
function home(){
 return '<section class="hero" aria-labelledby="hero-title"><img class="hero-art" alt="" src="assets/hero-proposta2.webp?v=proposta2-clara-20261102b"><div class="hero-copy"><span class="eyebrow">UM ESPAÇO PARA O PENSAMENTO</span><h1 id="hero-title">Estudo e formação em psicanálise</h1><div class="mini-rule"></div><p>Cursos, leituras e percursos para aprofundar a teoria e a clínica psicanalítica, com tempo para pensar e questionar.</p><div class="hero-buttons"><a class="btn btn-primary" href="#/cursos">'+icon('layers')+' Explorar cursos</a><a class="btn btn-outline" href="#/sobre">'+icon('book')+' Conhecer o Ateliê</a></div></div></section>'+
 '<section aria-labelledby="featured"><div class="section-bar"><h2 id="featured">Cursos em destaque</h2><a class="section-link" href="#/cursos">Ver todos os cursos '+icon('arrow')+'</a></div><div class="course-grid">'+COURSES.map(courseCard).join('')+'</div></section>'+
 '<section class="feature-strip" aria-label="Explore o Ateliê">'+
 '<div class="feature">'+icon('book')+'<a href="#/trilhas"><h3>Trilhas de estudo</h3><p>Organize um percurso entre os cursos disponíveis e planejados.</p></a></div>'+
 '<div class="feature">'+icon('notebook')+'<a href="#/cursos"><h3>Aulas e conteúdos</h3><p>Veja as aulas existentes e o que está em preparação.</p></a></div>'+
 '<div class="feature">'+icon('layers')+'<a href="#/biblioteca"><h3>Biblioteca do Ateliê</h3><p>Encontre sugestões de leitura para orientar sua formação.</p></a></div></section>';
}
function courses(q=''){
 const filtered=COURSES.filter(c=>(courseFilter==='all'||(courseFilter==='with-lessons'&&c.modules.some(m=>m.lessons.length))||(courseFilter==='planned'&&c.type==='planned'))&&[c.title,c.subtitle,c.description,...c.modules.map(m=>m.title)].join(' ').toLocaleLowerCase('pt-BR').includes(q.toLocaleLowerCase('pt-BR')));
 const tabs=[['all','Todos os cursos'],['with-lessons','Com aulas'],['planned','Em preparação']];
 return heading('CATÁLOGO','Cursos e percursos','Conheça o conteúdo real do projeto. A versão atual ainda é um protótipo visual: aulas completas e atividades serão migradas posteriormente.')+
 '<div class="filter-bar" role="group" aria-label="Filtrar catálogo">'+tabs.map(([v,t])=>'<button class="filter" data-filter="'+v+'" aria-pressed="'+(courseFilter===v)+'">'+t+'</button>').join('')+'</div>'+
 (filtered.length?'<div class="course-grid">'+filtered.map(courseCard).join('')+'</div>':'<div class="empty"><h2>Nenhum curso encontrado</h2><p>Tente outra busca ou escolha “Todos os cursos”.</p><a class="btn btn-primary" href="#/cursos">Limpar busca</a></div>');
}
function courseView(slug){
 const c=COURSES.find(c=>c.slug===slug);if(!c)return notFound();
 const available=c.modules.reduce((n,m)=>n+m.lessons.length,0);
 return '<div class="course-heading"><div><a href="#/cursos" class="back-link">← Voltar aos cursos</a><div style="margin-top:25px"><span class="eyebrow">ATELIÊ · CURSO</span></div><h1>'+esc(c.title)+'</h1><p>'+esc(c.description)+'</p><p class="muted-note"><strong>'+c.modules.length+' módulo(s)</strong> · '+available+' aula(s) cadastrada(s) · '+esc(c.label)+'</p><div class="course-actions">'+saveButton(c)+(available?'<a href="#/aula/'+c.modules.find(m=>m.lessons.length).lessons[0].id+'" class="btn btn-primary">'+icon('book')+' Ver primeira aula</a>':'')+'</div></div><img src="'+c.image+'" alt=""></div>'+
 '<div class="section-bar"><h2>Organização do curso</h2></div><div class="modules">'+c.modules.map((m,i)=>'<section class="module"><div class="module-header"><span class="module-no">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+esc(m.title)+'</h3><p>'+esc(m.description)+'</p></div></div>'+
 (m.lessons.length?'<div class="lesson-list">'+m.lessons.map(l=>'<div class="lesson"><div><div class="lesson-title">'+esc(l.title)+'</div><span>Leitura prevista: '+l.minutes+' min · prévia nesta proposta</span></div><a href="#/aula/'+l.id+'">Prévia →</a></div>').join('')+'</div>':'<p class="muted-note" style="padding:11px 0 0 50px">Aulas em preparação</p>')+'</section>').join('')+'</div>'+
 '<p class="notice">Este projeto é a versão experimental do novo visual. As prévias de aula não substituem o conteúdo completo do repositório original.</p>';
}
function lessonView(id){
 const l=LESSONS[id];if(!l)return notFound();const c=COURSES[l.course];
 return '<div class="reading"><a class="back-link" href="#/curso/'+c.slug+'">← Voltar ao curso</a>'+heading('PRÉVIA DE AULA',l.title,c.title+' · duração estimada na versão original: '+l.minutes+' minutos')+
 '<div class="notice">Prévia de leitura com trechos e sínteses do material original. As atividades, referências e o conteúdo integral ainda não foram migrados para esta proposta.</div><article class="reading-panel"><span class="eyebrow">UMA PERGUNTA PARA COMEÇAR</span><h2>'+esc(l.prompt)+'</h2><p>'+esc(l.intro)+'</p><div class="mini-rule"></div><h3>'+esc(l.topic)+'</h3><p>'+esc(l.text)+'</p><a href="#/curso/'+c.slug+'" class="section-link">Voltar ao programa do curso '+icon('arrow')+'</a></article></div>';
}
function trails(){return heading('SEUS PERCURSOS','Trilhas de estudo','Uma proposta de organização do aprendizado, respeitando quais cursos já têm aulas e quais ainda estão sendo preparados.')+
 '<div class="intro-grid"><article class="info-card"><span class="eyebrow">TRILHA 01 · PARA COMEÇAR</span><h2>Primeiras perguntas sobre a psicanálise</h2><p>Comece pelo curso Introdução à Psicanálise, com duas aulas já produzidas no projeto original. Estude as origens do campo, a investigação do inconsciente e a escuta.</p><a class="section-link" href="#/curso/introducao-a-psicanalise">Ver este percurso '+icon('arrow')+'</a></article>'+
 '<article class="info-card"><span class="eyebrow">TRILHA 02 · EXPERIMENTAL</span><h2>Conflito, recalque e retorno</h2><p>Uma sequência de três aulas demonstrativas sobre conceitos freudianos. Material de teste, sujeito a revisão editorial.</p><a class="section-link" href="#/curso/fundamentos-da-psicanalise">Explorar trilha '+icon('arrow')+'</a></article>'+
 '<article class="info-card"><span class="eyebrow">TRILHA 03 · FUTURA</span><h2>Estudos sistemáticos de Freud</h2><p>Dez módulos planejados para acompanhar a transformação dos conceitos ao longo da obra freudiana. Conteúdo em preparação.</p><a class="section-link" href="#/curso/formacao-freudiana">Conhecer o programa '+icon('arrow')+'</a></article></div>';
}
function library(){return heading('LEITURAS','Biblioteca do Ateliê','Uma seleção inicial de referências para orientar o estudo. Por enquanto, esta seção apresenta sugestões bibliográficas e não hospeda cópias integrais.')+
 '<div class="intro-grid">'+[
 ['Sigmund Freud','A interpretação dos sonhos (1900)','Obra fundamental para a investigação dos sonhos, do desejo e do inconsciente.','#/curso/formacao-freudiana'],
 ['Sigmund Freud','O inconsciente (1915)','Texto metapsicológico para aprofundar a formulação do inconsciente.','#/curso/formacao-freudiana'],
 ['Sigmund Freud','Recordar, repetir e elaborar (1914)','Referência para discutir repetição, resistência e trabalho clínico.','#/curso/formacao-freudiana'],
 ['Introdução ao campo','O que é psicanálise?','Uma aula introdutória já presente no projeto, aqui disponível em prévia.','#/aula/o-que-e-psicanalise']
 ].map(([a,t,d,url])=>'<article class="info-card"><span class="eyebrow">'+esc(a)+'</span><h2>'+esc(t)+'</h2><p>'+esc(d)+'</p><a href="'+url+'" class="section-link">Relacionar ao estudo '+icon('arrow')+'</a></article>').join('')+'</div>';
}
function savedView(){const cs=COURSES.filter(c=>saved.includes(c.slug));return heading('MEU ESTUDO','Cursos salvos','Os cursos que você salvar ficarão registrados neste navegador. Este protótipo não utiliza uma conta de usuário ou sincronização na nuvem.')+(cs.length?'<div class="course-grid">'+cs.map(courseCard).join('')+'</div>':'<div class="empty">'+icon('heart')+'<h2>Você ainda não salvou cursos.</h2><p>Acesse o catálogo, abra um curso e selecione “Salvar curso”.</p><a href="#/cursos" class="btn btn-primary">Explorar cursos</a></div>');}
function about(){return heading('NOSSA PROPOSTA','Um lugar para estudar sem pressa','O Ateliê é pensado como espaço de formação, leitura e experimentação em psicanálise.')+
 '<div class="highlight-panel"><span class="eyebrow">PROPOSTA 2 · VERSÃO CLARA</span><h2>Uma interface a serviço do pensamento.</h2><p>Design editorial contemporâneo, navegação simples e leitura confortável. O objetivo é fazer o conteúdo aparecer, e não competir com ele.</p></div>'+
 '<div class="intro-grid"><article class="info-card"><span class="eyebrow">FORMAÇÃO</span><h2>Estudar com profundidade</h2><p>Percursos organizados, apresentações contextuais e espaço para construir perguntas ao longo da formação.</p></article><article class="info-card"><span class="eyebrow">CONSTRUÇÃO</span><h2>Um protótipo em desenvolvimento</h2><p>Esta nova versão explora a identidade gráfica. O conteúdo completo, os exercícios e o motor pedagógico permanecem no projeto Atelie original até a migração.</p><a class="section-link" href="https://github.com/pscfredteixeira/Atelie" target="_blank" rel="noopener noreferrer">Repositório original '+icon('arrow')+'</a></article></div>';}
function notFound(){return '<div class="empty"><h2>Página não encontrada</h2><p>Confira o endereço ou retorne ao início.</p><a class="btn btn-primary" href="#/">Voltar ao início</a></div>'}
function parseRoute(){const hash=decodeURI(location.hash.slice(1)||'/');const [path,query='']=hash.split('?');return {path:path||'/',q:new URLSearchParams(query).get('q')||''}}
function render(){
 const {path,q}=parseRoute();const sections={'/':home,'/cursos':()=>courses(q),'/trilhas':trails,'/biblioteca':library,'/salvos':savedView,'/sobre':about};
 let content=sections[path]?.();
 if(content===undefined){if(path.startsWith('/curso/'))content=courseView(path.split('/')[2]);else if(path.startsWith('/aula/'))content=lessonView(path.split('/')[2]);else content=notFound()}
 $('#main').innerHTML=content;
 document.querySelectorAll('[data-nav]').forEach(a=>{const v=a.dataset.nav;const selected=v===path||(path.startsWith('/curso/')&&v==='/cursos')||(path.startsWith('/aula/')&&v==='/cursos');if(selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 updateSavedCounter();const input=$('#globalSearch');if(document.activeElement!==input)input.value=q;
 closeMenu();scrollTo({top:0,behavior:'instant'});document.title=(path==='/'?'Ateliê':(path.startsWith('/curso/')?'Curso · Ateliê':path.startsWith('/aula/')?'Aula · Ateliê':path.slice(1).replace(/^./,a=>a.toUpperCase())+' · Ateliê'));
}
function closeMenu(){$('#sidebar').classList.remove('is-open');$('#overlay').hidden=true;$('#menuToggle').setAttribute('aria-expanded','false')}
function toggleMenu(){const isOpen=$('#sidebar').classList.toggle('is-open');$('#overlay').hidden=!isOpen;$('#menuToggle').setAttribute('aria-expanded',String(isOpen))}
document.addEventListener('click',event=>{
 const save=event.target.closest('[data-save]');if(save){const slug=save.dataset.save;saved=saved.includes(slug)?saved.filter(x=>x!==slug):[...saved,slug];persist();render();return;}
 const filter=event.target.closest('[data-filter]');if(filter){courseFilter=filter.dataset.filter;render();return;}
});
$('#searchForm').addEventListener('submit',event=>{event.preventDefault();const q=$('#globalSearch').value.trim();courseFilter='all';location.hash='#/cursos'+(q?'?q='+encodeURIComponent(q):'');render()});
$('#menuToggle').addEventListener('click',toggleMenu);$('#overlay').addEventListener('click',closeMenu);
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();if(event.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)&&!event.altKey&&!event.ctrlKey&&!event.metaKey){event.preventDefault();$('#globalSearch').focus()}});
window.addEventListener('hashchange',render);render();