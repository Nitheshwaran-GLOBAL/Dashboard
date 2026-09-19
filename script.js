const tools = [
  ['📊','Power BI','Dashboards & reporting'],['📗','Microsoft Excel','Analysis & trackers'],['📅','Primavera P6','Planning & scheduling'],['🏗️','Project Controls','Progress & productivity'],
  ['📐','AutoCAD','Drawing coordination'],['🧩','BIM / Coordination','Model & interface review'],['🔌','ELV Systems','Technology coordination'],['📡','Structured Cabling','Data & connectivity'],
  ['🧮','Data Analysis','KPIs & trends'],['📈','S-Curve','Progress forecasting'],['👥','Manpower Planning','Team allocation'],['🗂️','Document Control','Logs & reporting']
];
const projects = [
  {type:'PROJECT CONTROLS',title:'Planning & Manpower Dashboard',desc:'Weekly resource demand, team movement, room production and schedule visibility for multi-level construction activities.',tags:['Excel','P6','Power BI']},
  {type:'DIGITAL REPORTING',title:'Construction Management Dashboard',desc:'A single management view for procurement, engineering logs, construction progress, manpower and duration across multiple sites.',tags:['Power BI','KPI','Data']},
  {type:'ELV / TECHNOLOGY',title:'Technology Package Tracking',desc:'Package-level tracking for ELV systems, field devices, installation status, documentation and handover readiness.',tags:['ELV','Tracking','Reporting']},
  {type:'SCHEDULING',title:'Team Movement & Gantt System',desc:'Room-by-room sequencing model that shows where each team moves after completing an activity.',tags:['Excel','Gantt','Planning']},
  {type:'ANALYTICS',title:'S-Curve & Progress Analytics',desc:'Non-linear cumulative progress curves for planned, actual and forecast performance.',tags:['S-Curve','Forecast','Analytics']},
  {type:'AUTOMATION',title:'Portfolio Reporting System',desc:'A reusable structure for turning project data into clear weekly reports and executive dashboards.',tags:['Templates','Automation','KPIs']}
];

document.getElementById('toolGrid').innerHTML = tools.map((t,i)=>`<article class="tool-card reveal"><span class="tool-no">${String(i+1).padStart(2,'0')}</span><div class="tool-icon">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p></article>`).join('');
document.getElementById('projectGrid').innerHTML = projects.map((p,i)=>`<article class="project-card reveal"><div><span class="project-type">${p.type}</span><h3>${p.title}</h3><p>${p.desc}</p></div><div class="project-tools">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('');

const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const modal=document.getElementById('imageModal'),modalImg=document.getElementById('modalImage');
document.querySelectorAll('.campus-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.classList.contains('view-btn')||e.currentTarget===card){modalImg.src=card.dataset.image;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}}));
document.getElementById('modalClose').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
