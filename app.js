'use strict';
const REFERENCES = [
 {id:'R01',category:'history',authors:'Nichols, D. E.',year:2020,title:'Psilocybin: from ancient magic to modern medicine',journal:'The Journal of Antibiotics 73:679–686',doi:'10.1038/s41429-020-0311-8'},
 {id:'R02',category:'history',authors:'González-Mariscal, J. M. & Sosa-Cortés, P. E.',year:2022,title:'Insights for Modern Applications of Psilocybin Therapy from a Case Study of Traditional Mazatec Medicine',journal:'Anthropology of Consciousness 33:358–384',doi:'10.1111/anoc.12168'},
 {id:'R03',category:'history',authors:'Saar, M.',year:1991,title:'Ethnomycological data from Siberia and North-East Asia on the effect of Amanita muscaria',journal:'Journal of Ethnopharmacology 31:157–173',doi:'10.1016/0378-8741(91)90002-u'},
 {id:'R04',category:'history',authors:'Prakofjewa, J. et al.',year:2024,title:'“But how true that is, I do not know”: the influence of written sources on the medicinal use of fungi across the western borderlands of the former Soviet Union',journal:'IMA Fungus 15:22',doi:'10.1186/s43008-024-00156-7'},
 {id:'R05',category:'pharmacology',authors:'Rivera-Illanes, D. & Recabarren-Gajardo, G.',year:2024,title:'Classics in Chemical Neuroscience: Muscimol',journal:'ACS Chemical Neuroscience 15:3257–3269',doi:'10.1021/acschemneuro.4c00304'},
 {id:'R06',category:'pharmacology',authors:'Stebelska, K.',year:2013,title:'Fungal hallucinogens psilocin, ibotenic acid, and muscimol: analytical methods and biologic activities',journal:'Therapeutic Drug Monitoring 35:420–442',doi:'10.1097/FTD.0b013e31828741a5'},
 {id:'R07',category:'clinical',authors:'Raison, C. L. et al.',year:2023,title:'Single-Dose Psilocybin Treatment for Major Depressive Disorder: A Randomized Clinical Trial',journal:'JAMA 330:843–853',doi:'10.1001/jama.2023.14530'},
 {id:'R08',category:'clinical',authors:'Goodwin, G. M. et al.',year:2022,title:'Single-Dose Psilocybin for a Treatment-Resistant Episode of Major Depression',journal:'New England Journal of Medicine 387:1637–1648',doi:'10.1056/NEJMoa2206443'},
 {id:'R09',category:'clinical',authors:'Daws, R. E. et al.',year:2022,title:'Increased global integration in the brain after psilocybin therapy for depression',journal:'Nature Medicine 28:844–851',doi:'10.1038/s41591-022-01744-z'},
 {id:'R10',category:'circuits',authors:'Balan, P. F. et al.',year:2019,title:'Fast Compensatory Functional Network Changes Caused by Reversible Inactivation of Monkey Parietal Cortex',journal:'Cerebral Cortex 29:2588–2606 (online 2018)',doi:'10.1093/cercor/bhy128'},
 {id:'R11',category:'circuits',authors:'Eradath, M. K., Pinsk, M. A. & Kastner, S.',year:2021,title:'A causal role for the pulvinar in coordinating task-independent cortico-cortical interactions',journal:'Journal of Comparative Neurology 529:3772–3784',doi:'10.1002/cne.25193'},
 {id:'R12',category:'circuits',authors:'Purushothaman, G., Marion, R., Li, K. & Casagrande, V. A.',year:2012,title:'Gating and control of primary visual cortex by pulvinar',journal:'Nature Neuroscience 15:905–912',doi:'10.1038/nn.3106'},
 {id:'R13',category:'circuits',authors:'Zhou, H., Schafer, R. J. & Desimone, R.',year:2016,title:'Pulvinar-Cortex Interactions in Vision and Attention',journal:'Neuron 89:209–220',doi:'10.1016/j.neuron.2015.11.034'},
 {id:'R14',category:'circuits',authors:'Song, Y.-H. et al.',year:2017,title:'A Neural Circuit for Auditory Dominance over Visual Perception',journal:'Neuron 93:940–954.e6',doi:'10.1016/j.neuron.2017.01.006'},
 {id:'R15',category:'circuits',authors:'Ceballo, S., Deneux, T., Siliceo, M. & Bathellier, B.',year:2022,title:'Differential roles of auditory and visual cortex for sensory detection in mice',journal:'Comptes Rendus Biologies 345:75–89',doi:'10.5802/crbiol.72'},
 {id:'R16',category:'circuits',authors:'Turchi, J. et al.',year:2018,title:'The Basal Forebrain Regulates Global Resting-State fMRI Fluctuations',journal:'Neuron 97:940–952.e4',doi:'10.1016/j.neuron.2018.01.032'},
 {id:'R17',category:'circuits',authors:'Kim, J. J., Koo, J. W., Lee, H. J. & Han, J.-S.',year:2005,title:'Amygdalar inactivation blocks stress-induced impairments in hippocampal long-term potentiation and spatial memory',journal:'Journal of Neuroscience 25:1532–1539',doi:'10.1523/JNEUROSCI.4623-04.2005'},
 {id:'R18',category:'circuits',authors:'Green, T. A. et al.',year:2020,title:'Differential effects of GABAA receptor activation in the prelimbic and orbitofrontal cortices on anxiety',journal:'Psychopharmacology 237:3237–3247',doi:'10.1007/s00213-020-05606-9'},
 {id:'R19',category:'circuits',authors:'Muller, J., Corodimas, K. P., Fridel, Z. & LeDoux, J. E.',year:1997,title:'Functional inactivation of the lateral and basal nuclei of the amygdala by muscimol infusion prevents fear conditioning to an explicit conditioned stimulus and to contextual stimuli',journal:'Behavioral Neuroscience 111:683–691',doi:'10.1037//0735-7044.111.4.683'},
 {id:'R20',category:'memory',authors:'Amaral, O. B., Luft, T., Cammarota, M., Izquierdo, I. & Roesler, R.',year:2007,title:'Temporary inactivation of the dorsal hippocampus induces a transient impairment in retrieval of aversive memory',journal:'Behavioural Brain Research 180:113–118',doi:'10.1016/j.bbr.2007.02.031'},
 {id:'R21',category:'memory',authors:'Stackman, R. W., Cohen, S. J., Lora, J. C. & Rios, L. M.',year:2016,title:'Temporary inactivation reveals that the CA1 region of the mouse dorsal hippocampus plays an equivalent role in the retrieval of long-term object memory and spatial memory',journal:'Neurobiology of Learning and Memory 133:118–128',doi:'10.1016/j.nlm.2016.06.016'},
 {id:'R22',category:'memory',authors:'Schmitz, T. W. et al.',year:2017,title:'Hippocampal GABA enables inhibitory control over unwanted thoughts',journal:'Nature Communications 8:1311',doi:'10.1038/s41467-017-00956-z'},
 {id:'R23',category:'memory',authors:'Gagnepain, P., Hulbert, J. & Anderson, M. C.',year:2017,title:'Parallel Regulation of Memory and Emotion Supports the Suppression of Intrusive Memories',journal:'Journal of Neuroscience 37:6423–6441',doi:'10.1523/JNEUROSCI.2732-16.2017'},
 {id:'R24',category:'memory',authors:'Mamat, Z. & Anderson, M. C.',year:2023,title:'Improving mental health by training the suppression of unwanted thoughts',journal:'Science Advances 9:eadh5292',doi:'10.1126/sciadv.adh5292'},
 {id:'R25',category:'memory',authors:'Lin, X. et al.',year:2024,title:'Observing the suppression of individual aversive memories from conscious awareness',journal:'Cerebral Cortex 34:bhae080',doi:'10.1093/cercor/bhae080'},
 {id:'R26',category:'memory',authors:'Park, S. et al.',year:2022,title:'Opto-extinction of a threat memory in mice',journal:'Brain Research Bulletin 191:61–68',doi:'10.1016/j.brainresbull.2022.10.012'},
 {id:'R27',category:'memory',authors:'Koizumi, A. et al.',year:2017,title:'Fear reduction without fear through reinforcement of neural activity that bypasses conscious exposure',journal:'Nature Human Behaviour 1:0006 (published online 2016)',doi:'10.1038/s41562-016-0006'},
 {id:'R28',category:'pharmacology',authors:'U.S. Food and Drug Administration',year:2024,title:'FDA Alerts Industry and Consumers about the Use of Amanita Muscaria or its Constituents in Food',journal:'Regulatory safety advisory · not a scientific journal article',url:'https://www.fda.gov/food/hfp-constituent-updates/fda-alerts-industry-and-consumers-about-use-amanita-muscaria-or-its-constituents-food'}
];
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
/* ───────── Deck engine: a 1600×900 stage scaled between a glass top bar and a progress rail.
   Landscape screens get one slide at a time; portrait / narrow screens get a stacked scroll. ───────── */
const main=$('#main');
const slides=$$('main > section.slide');
const N=slides.length, pad=n=>String(n).padStart(2,'0');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const frame=document.createElement('div');frame.className='frame';main.append(frame);
slides.forEach(s=>frame.append(s));
let current=0, portrait=false;

/* wrap every slide's content so it can be fitted to the stage */
slides.forEach(s=>{
  const inner=document.createElement('div');inner.className='inner';
  while(s.firstChild)inner.append(s.firstChild);
  s.append(inner);
  s.dataset.theme=s.id==='cover'?'cover':(['dark','tan','pale','redtint'].find(c=>s.classList.contains(c))||'paper');
  const number=s.querySelector('.slide-number');
  if(number)number.textContent=`${pad(slides.indexOf(s)+1)} / ${pad(N)}`;
});

/* decorative graphics (aria-hidden, no content) */
const deco=(html,parent,cls)=>{const d=document.createElement('div');d.className=cls;d.setAttribute('aria-hidden','true');d.innerHTML=html;parent.prepend(d);return d;};
(()=>{
  const cover=$('#cover .inner');
  deco('<i class="ring r1"></i><i class="ring r2"></i><i class="ring r3"></i><i class="sat s1"></i><i class="sat s2"></i>',cover,'orbit');
  deco(`<svg viewBox="0 0 220 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M70 60 L110 38 L146 62 L134 104 L88 106 Z"/><path d="M110 38 L110 6"/><path d="M146 62 L184 46"/><path d="M134 104 L160 136"/><path d="M88 106 L64 140 L30 132"/><path d="M70 60 L36 44"/><circle cx="110" cy="6" r="4"/><circle cx="184" cy="46" r="4"/><circle cx="160" cy="136" r="4"/><circle cx="30" cy="132" r="4"/><circle cx="36" cy="44" r="4"/></svg>`,cover,'molecule');
  const ip=$('.intro-photo');if(ip)deco('<i></i><i></i>',ip.parentElement,'photo-orbit');
  // soft corner glow on every content slide
  slides.forEach((s,i)=>{if(s.id!=='cover')deco('<i></i><i></i>',s,'slide-deco d'+(i%4));});
})();

/* stagger indices for entrance animation */
const STAG='.three,.two,.memory-grid,.stack,.pathway,.scenario-nav,.intro-compare,.cover-progress,.compare,.matrix tbody,.data-box,.list,.ref-controls';
slides.forEach(s=>{
  s.querySelectorAll('[data-reveal]').forEach((el,i)=>el.style.setProperty('--t',(0.08+i*0.09).toFixed(2)+'s'));
  s.querySelectorAll(STAG).forEach(g=>{
    g.classList.add('st');
    const host=g.closest('[data-reveal]');const base=host?parseFloat(host.style.getPropertyValue('--t'))||0:0;
    Array.from(g.children).forEach((c,j)=>c.style.setProperty('--t',(base+0.12+j*0.08).toFixed(2)+'s'));
  });
});

/* chapters menu */
const nav=$('#nav-menu');let grp='';
slides.forEach((s,i)=>{
  const g=s.dataset.group||'';
  if(g!==grp){const h=document.createElement('div');h.className='caps grp';h.textContent=g;nav.append(h);grp=g;}
  const b=document.createElement('button');b.type='button';b.className='nav-link';
  b.innerHTML=`<span class="n">${pad(i+1)}</span><span>${s.dataset.label||'Chapter'}</span>`;
  b.addEventListener('click',()=>{go(i);closeMenu();});nav.append(b);
});
const navBtns=$$('#nav-menu .nav-link');
const drawer=$('#mobile-drawer'),openBtn=$('#open-drawer');
function openMenu(){drawer.classList.add('open');openBtn.setAttribute('aria-expanded','true');navBtns[current]?.scrollIntoView({block:'center'});}
function closeMenu(){drawer.classList.remove('open');openBtn.setAttribute('aria-expanded','false');}
openBtn.addEventListener('click',()=>drawer.classList.contains('open')?closeMenu():openMenu());
$('#close-drawer').addEventListener('click',closeMenu);
drawer.addEventListener('click',e=>{if(e.target===drawer)closeMenu();});

/* progress rail with one waypoint per chapter group */
const track=$('#track');const groups=[];
slides.forEach((s,i)=>{if(!groups.length||groups[groups.length-1].name!==s.dataset.group)groups.push({name:s.dataset.group,i});});
groups.forEach((g,k)=>{const w=document.createElement('button');w.type='button';w.className='wp'+(k%2?' up':'');w.tabIndex=-1;
  w.style.left=(g.i/(N-1)*100)+'%';w.innerHTML=`<span>${g.name}</span>`;w.addEventListener('click',()=>go(g.i));track.append(w);g.el=w;});

/* background theme per slide */
const bg=$('#bg');
function setTheme(s){bg.dataset.theme=s.dataset.theme;document.body.classList.toggle('dk',s.dataset.theme==='dark'||s.dataset.theme==='cover');}

function updateUI(){
  const s=slides[current];
  navBtns.forEach((b,i)=>b.classList.toggle('is-active',i===current));
  $('#slide-no').innerHTML=`${pad(current+1)}<i> / ${pad(N)}</i>`;
  $('#chap').innerHTML=`<b>${s.dataset.group}</b><span> · ${s.dataset.label}</span>`;
  const pct=current/(N-1)*100;$('#progress').style.width=pct+'%';$('#blip').style.left=pct+'%';
  groups.forEach(g=>{g.el.classList.toggle('done',g.i<=current);g.el.classList.toggle('cur',g.name===s.dataset.group);});
  setTheme(s);
}

/* fit each slide's content into the 1600×900 stage */
function fit(){
  slides.forEach(s=>{
    const inner=s.querySelector('.inner');inner.style.zoom='';
    if(portrait)return;
    const cs=getComputedStyle(s);const avail=s.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
    let z=1;
    for(let k=0;k<4;k++){const h=inner.scrollHeight*z;if(h<=avail+1)break;z=Math.max(.55,z*avail/h*.995);inner.style.zoom=z;}
  });
}
function scaleStage(){
  const vw=main.clientWidth,vh=main.clientHeight;
  const sc=Math.min(vw/1600,vh/900);
  frame.style.transform=portrait?'':`translate(-50%,-50%) scale(${sc})`;
}
function setMode(){
  const p=innerWidth<900||innerWidth/innerHeight<1.05||innerHeight<500;
  if(p!==portrait||!document.body.classList.contains('ready')){portrait=p;document.body.classList.toggle('portrait',p);document.body.classList.toggle('deck',!p);
    if(!p){slides.forEach((s,i)=>s.classList.toggle('on',i===current));}
    else{slides.forEach(s=>s.classList.remove('off'));}
  }
  scaleStage();fit();
}

let lock=0;
function go(i,instant){
  i=Math.min(N-1,Math.max(0,i));
  if(portrait){current=i;slides[i].scrollIntoView({behavior:reduce||instant?'auto':'smooth',block:'start'});updateUI();return;}
  if(i===current&&slides[i].classList.contains('on')){updateUI();return;}
  const prev=slides[current];const dir=i>current?1:-1;
  prev.classList.remove('on');prev.classList.add('off');prev.style.setProperty('--dir',dir);
  setTimeout(()=>prev.classList.remove('off'),700);
  current=i;const s=slides[i];s.style.setProperty('--dir',dir);s.classList.add('on');
  history.replaceState(null,'','#'+s.id);
  updateUI();
}
const step=d=>{const now=Date.now();if(now<lock)return;lock=now+650;go(current+d);};

$('#back').addEventListener('click',()=>go(current-1));
$('#forward').addEventListener('click',()=>go(current+1));
$('#full').addEventListener('click',()=>{if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{})}else{document.documentElement.requestFullscreen?.().catch(()=>{})}});
$('#mark').addEventListener('click',e=>{e.preventDefault();go(0);});

/* in-page links (#introduction, #references, #map …) move between slides */
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.getElementById(a.getAttribute('href').slice(1));const i=slides.indexOf(t);if(i>-1){e.preventDefault();go(i);}});

addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
  if(e.key==='Escape'){closeMenu();return;}
  if(['ArrowDown','PageDown','ArrowRight',' '].includes(e.key)){e.preventDefault();go(current+1)}
  if(['ArrowUp','PageUp','ArrowLeft'].includes(e.key)){e.preventDefault();go(current-1)}
  if(e.key==='Home'){e.preventDefault();go(0)}
  if(e.key==='End'){e.preventDefault();go(N-1)}
  if(e.key==='f'||e.key==='F')$('#full').click();
});

/* wheel / swipe in deck mode; inner scrollers (bibliography, table) keep their own scroll */
function scroller(t,dy){for(let el=t;el&&el!==document.body;el=el.parentElement){if(el.matches?.('.ref-list,.table-wrap,.drawer-panel')){const can=dy>0?el.scrollTop+el.clientHeight<el.scrollHeight-2:el.scrollTop>0;if(can&&el.scrollHeight>el.clientHeight+2)return true;}}return false;}
let acc=0,accT=0;
addEventListener('wheel',e=>{
  if(portrait||drawer.classList.contains('open'))return;
  if(scroller(e.target,e.deltaY))return;
  e.preventDefault();
  const now=Date.now();if(now-accT>220)acc=0;accT=now;acc+=e.deltaY;
  if(Math.abs(acc)>38){step(acc>0?1:-1);acc=0;}
},{passive:false});
let ty=null;
addEventListener('touchstart',e=>{if(portrait)return;ty=e.target.closest('.ref-list,.table-wrap,input,svg')?null:e.touches[0].clientY;},{passive:true});
addEventListener('touchend',e=>{if(portrait||ty===null)return;const d=ty-e.changedTouches[0].clientY;if(Math.abs(d)>50)step(d>0?1:-1);ty=null;},{passive:true});

/* portrait mode: reveal & track while scrolling */
const io=new IntersectionObserver(es=>{for(const en of es){if(en.isIntersecting&&portrait)en.target.classList.add('on');}},{threshold:.06});
slides.forEach(s=>io.observe(s));
let ticking=false;
addEventListener('scroll',()=>{if(!portrait||ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;let best=0,bd=Infinity;slides.forEach((s,i)=>{const d=Math.abs(s.getBoundingClientRect().top-70);if(d<bd){bd=d;best=i;}});if(best!==current){current=best;updateUI();}});},{passive:true});

/* subtle parallax on the cover */
const coverEl=$('#cover');
coverEl.addEventListener('pointermove',e=>{if(reduce)return;const r=coverEl.getBoundingClientRect();coverEl.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5).toFixed(3));coverEl.style.setProperty('--my',((e.clientY-r.top)/r.height-.5).toFixed(3));});

/* drifting spores in the background */
(()=>{const c=$('#spores');if(!c||reduce)return;const x=c.getContext('2d');let W,H,P=[];
  const size=()=>{const d=Math.min(2,devicePixelRatio||1);W=c.width=innerWidth*d;H=c.height=innerHeight*d;P=Array.from({length:Math.round(innerWidth/28)},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*2.2+.6)*d,v:(Math.random()*.25+.06)*d,p:Math.random()*6.28}));};
  size();addEventListener('resize',size);
  (function f(t){x.clearRect(0,0,W,H);const dk=document.body.classList.contains('dk');x.fillStyle=dk?'rgba(240,200,170,.55)':'rgba(150,110,80,.32)';
    for(const p of P){p.y-=p.v;p.x+=Math.sin(t/2400+p.p)*.25;if(p.y<-10){p.y=H+10;p.x=Math.random()*W;}x.globalAlpha=.4+.6*Math.abs(Math.sin(t/1800+p.p));x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();}
    x.globalAlpha=1;requestAnimationFrame(f);})(0);
})();

const scenarios={
 balan:{title:'LIP inactivation triggered distant compensation',body:'Muscimol in LIP reduced local task-related fMRI signals but altered task responses throughout the attention network, especially increasing FEF activation and changing V4 responses.',measure:'Whole-brain fMRI during covert spatial attention, with behavioral readout',caveat:'BOLD changes and correlation with behavior do not by themselves establish which stimulus information was rerouted.',doi:'10.1093/cercor/bhy128',nodes:['lip','fef','v4'],edges:['lip-fef','lip-v4']},
 eradath:{title:'Pulvinar inactivation reduced LIP–V4 coherence',body:'Reversibly inhibiting dorsal lateral pulvinar in macaques reduced low-frequency (4–15 Hz) phase coherence between LIP and V4 during passive viewing, while tested local firing rates and LFP power were not significantly altered.',measure:'Simultaneous LIP and V4 spikes/local field potentials',caveat:'Synchronization changed; the study did not directly measure transfer of sensory contents.',doi:'10.1002/cne.25193',nodes:['pul','lip','v4'],edges:['pul-lip','pul-v4','lip-v4']},
 purush:{title:'Pulvinar perturbation gated V1 responses',body:'In prosimian primates, matched lateral pulvinar inactivation virtually abolished characteristic visual responses in 156 of 164 sampled V1 neurons in superficial layers. LGN responses were preserved.',measure:'V1 firing responses to visual stimulation and LGN control recordings',caveat:'The manipulation involves a specific pulvinar subregion and V1 layer; broader behavior was not a generic whole-brain test.',doi:'10.1038/nn.3106',nodes:['pul','v1'],edges:['v1-pul']},
 song:{title:'Parietal inhibition changed sensory competition',body:'In audiovisual-conflict experiments in mice, muscimol inactivation of PTLp abolished auditory dominance without eliminating unimodal sensory perception in the tested task.',measure:'Auditory/visual discrimination behavior; recordings and optogenetic tests',caveat:'The result concerns a relative-weighting circuit; it does not demonstrate conversion of auditory input into visual perception.',doi:'10.1016/j.neuron.2017.01.006',nodes:['aud','ptlp','v1'],edges:['aud-ptlp','v1-ptlp']}
};
/* animated signals travelling along the selected pathways + halos around the inactivated nodes */
const SVGNS='http://www.w3.org/2000/svg';
function addSignals(d){const svg=$('#network-svg');if(!svg)return;svg.querySelectorAll('.sig,.halo').forEach(n=>n.remove());
 const layer=svg.querySelector('#nodes');
 d.edges.forEach((id,k)=>{for(let j=0;j<2;j++){const c=document.createElementNS(SVGNS,'circle');c.setAttribute('r','5');c.setAttribute('class','sig');
  const m=document.createElementNS(SVGNS,'animateMotion');m.setAttribute('dur','2.4s');m.setAttribute('repeatCount','indefinite');m.setAttribute('begin',(k*.35+j*1.2)+'s');
  const mp=document.createElementNS(SVGNS,'mpath');mp.setAttribute('href','#e-'+id);m.append(mp);c.append(m);svg.insertBefore(c,layer);}});
 d.nodes.forEach((id,k)=>{const n=svg.querySelector('#n-'+id);if(!n)return;const h=document.createElementNS(SVGNS,'circle');h.setAttribute('class','halo');h.setAttribute('cx',n.getAttribute('cx'));h.setAttribute('cy',n.getAttribute('cy'));h.setAttribute('r',n.getAttribute('r'));h.style.animationDelay=(k*.4)+'s';svg.insertBefore(h,layer);});}
function chooseScenario(key){const d=scenarios[key];if(!d)return;$$('.scenario-btn').forEach(b=>b.classList.toggle('on',b.dataset.scenario===key));$('#scenario-title').textContent=d.title;$('#scenario-body').textContent=d.body;$('#scenario-measure').textContent=d.measure;$('#scenario-caveat').textContent=d.caveat;$('#scenario-source').href='https://doi.org/'+d.doi;$$('#network-svg .node').forEach(n=>n.classList.toggle('active',d.nodes.includes(n.id.slice(2))));$$('#network-svg .edge').forEach(e=>{const selected=d.edges.includes(e.id.slice(2));e.style.stroke=selected?'#f0a982':'#9bb09c';e.style.strokeOpacity=selected?'1':'.19';e.style.strokeWidth=selected?'4':'1.3';e.style.strokeDasharray=selected?'9 7':'none';e.style.animation=selected?'pathsignal 2s linear infinite':'none'});addSignals(d);}
const anim=document.createElement('style');anim.textContent='@keyframes pathsignal{to{stroke-dashoffset:-32}}';document.head.append(anim);
$$('.scenario-btn').forEach(b=>b.addEventListener('click',()=>chooseScenario(b.dataset.scenario)));chooseScenario('balan');
// Reference index is generated from verified DOI metadata embedded in the presentation.
const list=$('#ref-list');let filter='all',query='';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderRefs(){const items=REFERENCES.filter(r=>(filter==='all'||r.category===filter)&&(!query||[r.id,r.title,r.authors,r.year,r.journal,r.doi||''].join(' ').toLowerCase().includes(query)));
 list.innerHTML=items.map(r=>{const link=r.doi?'https://doi.org/'+r.doi:r.url;return `<article class="ref"><div class="meta"><b>${r.id}</b><span>${esc(r.category)}</span><span>${r.year}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.authors)} · ${esc(r.journal)}</p><a href="${esc(link)}" target="_blank" rel="noopener noreferrer">${r.doi?'DOI: '+esc(r.doi):'Open official FDA advisory'} ↗</a></article>`;}).join('');
 if(!items.length)list.innerHTML='<p class="muted">No references match this search. Try another term or category.</p>';
}
$('#ref-search').addEventListener('input',e=>{query=e.target.value.toLowerCase().trim();renderRefs()});
$$('.ref-filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;$$('.ref-filter').forEach(x=>x.classList.toggle('active',x===b));renderRefs()}));renderRefs();
/* start */
(()=>{const h=location.hash.slice(1);const i=slides.findIndex(s=>s.id===h);current=i>-1?i:0;})();
setMode();updateUI();
if(portrait&&current)go(current,true);
requestAnimationFrame(()=>document.body.classList.add('ready'));
addEventListener('resize',()=>{clearTimeout(window.__rz);window.__rz=setTimeout(setMode,80);});
document.fonts?.ready.then(fit);addEventListener('load',fit);
addEventListener('hashchange',()=>{const i=slides.findIndex(s=>s.id===location.hash.slice(1));if(i>-1&&i!==current)go(i);});
