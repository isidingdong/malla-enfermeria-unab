const malla = document.getElementById("malla");

const ramos = [
// PRIMER AÑO
{nombre:"Morfología general",semestre:"1º Semestre",id:"morfologia",prerequisitos:[]},
{nombre:"Química general y orgánica",semestre:"1º Semestre",id:"quimica",prerequisitos:[]},
{nombre:"Biología celular",semestre:"1º Semestre",id:"biologia",prerequisitos:[]},
{nombre:"Razonamiento matemático",semestre:"1º Semestre",id:"matematica",prerequisitos:[]},
{nombre:"Bases teóricas de la enfermería",semestre:"1º Semestre",id:"bases_teoricas",prerequisitos:[]},
{nombre:"Microbiología",semestre:"2º Semestre",id:"microbiologia",prerequisitos:["biologia"]},
{nombre:"Bioquímica",semestre:"2º Semestre",id:"bioquimica",prerequisitos:["biologia","quimica"]},
{nombre:"Psicología evolutiva",semestre:"2º Semestre",id:"psicologia",prerequisitos:[]},
{nombre:"Socioantropología",semestre:"2º Semestre",id:"socioantropologia",prerequisitos:[]},
{nombre:"Bases del cuidado de enfermería",semestre:"2º Semestre",id:"bases_cuidado",prerequisitos:["bases_teoricas","morfologia"]},
{nombre:"Habilidades comunicativas",semestre:"2º Semestre",id:"comunicacion",prerequisitos:[]},

// SEGUNDO AÑO
{nombre:"Fisiología",semestre:"3º Semestre",id:"fisiologia",prerequisitos:["morfologia"]},
{nombre:"Salud pública I",semestre:"3º Semestre",id:"salud1",prerequisitos:["matematica","bases_cuidado"]},
{nombre:"Enfermería en la promoción y prevención en salud",semestre:"3º Semestre",id:"promo_prevencion",prerequisitos:["socioantropologia","bases_teoricas"]},
{nombre:"Cuidados de enfermería en el ciclo vital",semestre:"3º Semestre",id:"ciclo_vital",prerequisitos:["bases_cuidado","psicologia"]},
{nombre:"Inglés I",semestre:"3º Semestre",id:"ingles1",prerequisitos:[]},
{nombre:"Fisiopatología",semestre:"4º Semestre",id:"fisiopato",prerequisitos:["fisiologia"]},
{nombre:"Farmacología general",semestre:"4º Semestre",id:"farmacologia",prerequisitos:["microbiologia","bioquimica"]},
{nombre:"Salud pública II",semestre:"4º Semestre",id:"salud2",prerequisitos:["salud1","promo_prevencion"]},
{nombre:"Bases de enfermería en salud familiar y comunitaria",semestre:"4º Semestre",id:"bases_familiar",prerequisitos:["promo_prevencion"]},
{nombre:"Cuidado de enfermería en el adulto y adulto mayor",semestre:"4º Semestre",id:"adulto_mayor",prerequisitos:["ciclo_vital"],corequisitos:["fisiopato"]},
{nombre:"Inglés II",semestre:"4º Semestre",id:"ingles2",prerequisitos:["ingles1"]},

// TERCER AÑO
{nombre:"Farmacología clínica y farmacovigilancia",semestre:"5º Semestre",id:"farmaco_clinica",prerequisitos:["fisiopato","farmacologia"]},
{nombre:"Cuidados de enfermería en salud familiar",semestre:"5º Semestre",id:"cuidados_familiar",prerequisitos:["salud1","bases_familiar"],corequisitos:["cuidados_nino_adulto"]},
{nombre:"Cuidados de enfermería en el niño y adulto",semestre:"5º Semestre",id:"cuidados_nino_adulto",prerequisitos:["fisiopato","adulto_mayor"],corequisitos:["integrador1"]},
{nombre:"Fundamentos de gestión y liderazgo en enfermería",semestre:"5º Semestre",id:"gestion_liderazgo",prerequisitos:["salud2"]},
{nombre:"Integrador I: Cuidados de enfermería I",semestre:"5º Semestre",id:"integrador1",prerequisitos:["fisiopato","farmacologia","salud2","bases_familiar","adulto_mayor","comunicacion"],corequisitos:["cuidados_nino_adulto"]},
{nombre:"Inglés III",semestre:"5º Semestre",id:"ingles3",prerequisitos:["ingles2"]},
{nombre:"Cuidados de enfermería en salud mental y comunitaria",semestre:"6º Semestre",id:"salud_mental",prerequisitos:["cuidados_familiar","integrador1"]},
{nombre:"Cuidados de enfermería en el adulto y adulto mayor con alteraciones de salud",semestre:"6º Semestre",id:"adulto_alterado",prerequisitos:["farmacologia","integrador1","cuidados_nino_adulto"]},
{nombre:"Métodos de análisis en enfermería",semestre:"6º Semestre",id:"metodos_enf",prerequisitos:["bases_familiar","adulto_mayor","ingles2"]},
{nombre:"Administración en unidades de enfermería",semestre:"6º Semestre",id:"admin_unidades",prerequisitos:["gestion_liderazgo"]},
{nombre:"Razonamiento científico y TICS",semestre:"6º Semestre",id:"tic",prerequisitos:["comunicacion"]},
{nombre:"Inglés IV",semestre:"6º Semestre",id:"ingles4",prerequisitos:["ingles3"]},

// CUARTO AÑO
{nombre:"Ética y legislación en enfermería",semestre:"7º Semestre",id:"etica",prerequisitos:["integrador1"]},
{nombre:"Cuidados de enfermería en salud familiar y comunitaria",semestre:"7º Semestre",id:"familiar_comunitaria",prerequisitos:["salud_mental"]},
{nombre:"Cuidados de enfermería en el niño y adolescente con alteraciones de salud",semestre:"7º Semestre",id:"nino_alterado",prerequisitos:["integrador1","adulto_alterado"]},
{nombre:"Desarrollo de proyectos en enfermería",semestre:"7º Semestre",id:"proyectos",prerequisitos:["admin_unidades"]},
{nombre:"Pensamiento crítico",semestre:"7º Semestre",id:"pensamiento_critico",prerequisitos:["tic"]},
{nombre:"Cuidado integral del niño y el adulto",semestre:"8º Semestre",id:"cuidado_integral",prerequisitos:["etica","adulto_alterado","nino_alterado"],corequisitos:["integrador2"]},
{nombre:"Seminario de investigación en enfermería",semestre:"8º Semestre",id:"seminario",prerequisitos:["metodos_enf","ingles4","etica"]},
{nombre:"Integrador II: Cuidado de enfermería II",semestre:"8º Semestre",id:"integrador2",prerequisitos:["adulto_alterado","familiar_comunitaria","etica","nino_alterado","proyectos"],corequisitos:["cuidado_integral"]},
{nombre:"Responsabilidad social",semestre:"8º Semestre",id:"responsabilidad",prerequisitos:["pensamiento_critico"]},

// QUINTO AÑO
{nombre:"Integrador III: Gestión del cuidado en unidades de enfermería",semestre:"9º Semestre",id:"integrador3",prerequisitos:["cuidado_integral","seminario","integrador2","responsabilidad"]},
{nombre:"Integrador IV: Gestión del cuidado en salud familiar y comunitaria",semestre:"10º Semestre",id:"integrador4",prerequisitos:["cuidado_integral","seminario","integrador2","responsabilidad"]},
];

function getRamoById(id) {
  return ramos.find(r => r.id === id);
}

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function render() {
  malla.innerHTML = "";
  const semestres = [...new Set(ramos.map(r => r.semestre))];
  semestres.forEach(sem => {
    const cont = document.createElement("div");
    cont.className = "semestre";
    cont.innerHTML = `<h2>${sem}</h2>`;
    ramos.filter(r=>r.semestre===sem).forEach(ramo=>{
      const div=document.createElement("div");
      div.className="ramo";div.id=ramo.id;div.textContent=ramo.nombre;

      const cumplePrer=ramo.prerequisitos.every(p=>aprobados.includes(p));
      const tienePrer=ramo.prerequisitos.length>0;
      const tieneCoreq=ramo.corequisitos&&ramo.corequisitos.length>0;
      const coreqDisp=tieneCoreq?ramo.corequisitos.every(co=>{
        const c=getRamoById(co);
        return c.prerequisitos.every(p=>aprobados.includes(p));
      }):true;

      if(!cumplePrer&&tienePrer) div.classList.add("bloqueado");
      else if(aprobados.includes(ramo.id)) div.classList.add("aprobado");
      else if(tieneCoreq&&coreqDisp) div.classList.add("corequisito");

      div.addEventListener("click",()=>{
        if(div.classList.contains("bloqueado"))return;
        const ya=aprobados.includes(ramo.id);
        if(ya){
          aprobados=aprobados.filter(r=>r!==ramo.id);
          if(tieneCoreq) ramo.corequisitos.forEach(co=>{aprobados=aprobados.filter(r=>r!==co);});
        } else {
          aprobados.push(ramo.id);
          if(tieneCoreq) ramo.corequisitos.forEach(co=>{ if(!aprobados.includes(co))aprobados.push(co); });
        }
        localStorage.setItem("aprobados",JSON.stringify(aprobados));
        render();
      });
      cont.appendChild(div);
    });
    malla.appendChild(cont);
  });
}

render();
