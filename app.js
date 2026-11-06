/* CertiMed AI Panamá · Demo sin backend ni IA real */
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const DEMO_KEY="certimed-demo-records-v1";
let records=[];
try{records=JSON.parse(localStorage.getItem(DEMO_KEY)||"[]")}catch{records=[]}
const today=new Date().toISOString().slice(0,10);
$("#demoDate").value=today;
$("#year").textContent=new Date().getFullYear();

function save(){try{localStorage.setItem(DEMO_KEY,JSON.stringify(records))}catch{}}
function renderRecords(){
 const box=$("#records");
 if(!records.length){box.innerHTML='<p class="muted">Todavía no hay registros demo. Crea uno en el formulario.</p>'}
 else{box.innerHTML=records.slice().reverse().map(r=>`<div class="record"><strong>${escapeHTML(r.id)} · Registro ficticio</strong><small>Fecha: ${escapeHTML(r.date)} · Duración: ${escapeHTML(r.days)}</small></div>`).join("")}
 $("#statRecords").textContent=records.length;
}
function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function showPage(name){
 $$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+name));
 $$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
 $("#nav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");
 window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-page]");if(b){e.preventDefault();showPage(b.dataset.page)}
});
$("#menuToggle").addEventListener("click",()=>{const open=$("#nav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open))});
$("#demoForm").addEventListener("submit",e=>{
 e.preventDefault();
 const record={id:"CM-DEMO-"+String(Date.now()).slice(-6),date:$("#demoDate").value,days:$("#demoDays").value};
 records.push(record);save();renderRecords();
 $("#formMessage").textContent="Registro ficticio creado en este navegador. No es un certificado médico.";
 e.target.reset();$("#demoDate").value=today;
});
$("#verifyForm").addEventListener("submit",e=>{
 e.preventDefault();const id=$("#verifyId").value.trim().toUpperCase();const out=$("#verifyResult");
 if(id==="CM-DEMO-001"||records.some(r=>r.id.toUpperCase()===id)){
  out.className="verify-result success";out.innerHTML="<strong>✓ Registro de demostración encontrado</strong><p>Resultado simulado. No confirma autenticidad médica ni validez legal.</p>";
 }else{
  out.className="verify-result error";out.innerHTML="<strong>Registro demo no encontrado</strong><p>Prueba con CM-DEMO-001 o crea un registro ficticio en el Portal médico.</p>";
 }
});
$("#clearDemo").addEventListener("click",()=>{records=[];save();renderRecords();$("#adminMessage").textContent="Registros de prueba borrados de este navegador."});
renderRecords();
