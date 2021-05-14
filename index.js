
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
const menusb = [];


const cargarTabla = ()=>{
  
  let tbody = document.querySelector("#tabla-tbody")
  tbody.innerHTML ="";
  for (let i=0; i<menusb.length; ++i){
    let p = menusb[i];

    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdHorario = document.createElement("td");
    tdhorario.innerText = p.horario;
    let tdValor = document.createElement("td");
    tdNombre.innerText = p.valor;

    
    let icono = document.createElement("i");

    
    if(p.valor <= 5000 && p.horario == desayuno){
      icono.classList.add("fas","fa-comment-dollar","fa-2x");
    }else if (p.valor <= 15000 && p.horario == Almuerzo){
      icono.classList.add("fas","fa-comment-dollar","fa-2x");   
    }else if (p.valor <= 10000 && p.horario == Once){
      icono.classList.add("fas","fa-comment-dollar","fa-2x");    
    }else if (p.valor <= 20000 && p.horario == Cena){
      icono.classList.add("fas","fa-comment-dollar","fa-2x");    
    }else{
     p.oferta = NO
    }
    tdhorario.appendChild(icono);
    
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML=p.descripcion;
    
    let tdOfertas = document.createElement("td");
    tdDesc.innerHTML=p.oferta;

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdHorario);
    tr.appendChild(tdValor);
    tr.appendChild(tdDesc);
    tr.appendChild(tdOfertas);
    tbody.appendChild(tr);
  }
};
document.querySelector("#registrar-btn").addEventListener("click",()=>{

    let nombre = document.querySelector("#nombre-txt").value;
    let horario = document.querySelector("#horario-txt").value;
    let valor = document.querySelector("#valor-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let oferta = document.querySelector("#oferta").value;
 
    if(valor <= 1000 && valor >= 10000 && p.horario == desayuno){
      let menu = {};   
      menu.nombre = nombre;
      menu.horario = horario;
      menu.valor = valor;
      menu.descripcion = descripcion;
      menu.oferta = oferta;
      menusb.push(menu);
      cargarTabla();
      swal.fire("exito!","El menu se a registardo","success");

    }else if (valor <= 10000 && valor >= 20000 && p.horario == Almuerzo){
      let menu = {};
      menu.nombre = nombre;
      menu.horario = horario;
      menu.valor = valor;
      menu.descripcion = descripcion;
      menu.oferta = oferta;
      menusb.push(menu);
      cargarTabla();
      swal.fire("exito!","El menu se a registardo","success");
    
    }else if (valor <= 5000 && valor >= 15000 && p.horario == Once){
      let menu = {};
      menu.nombre = nombre;
      menu.horario = horario;
      menu.valor = valor;
      menu.descripcion = descripcion;
      menu.oferta = oferta;
      menusb.push(menu);
      cargarTabla();
      swal.fire("exito!","El menu se a registardo","success");
     
    }else if ((valor <= 15000) && (p.horario == Cena)){
      let menu = {};
      menu.nombre = nombre;
      menu.horario = horario;
      menu.valor = valor;
      menu.descripcion = descripcion;
      menu.oferta = oferta;
      menusb.push(menu);
      cargarTabla();
      swal.fire("exito!","El menu se a registardo","success");
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops error en el costo...',
        text: 'Tienes que que elegir un costo que no salga de los limites',
      })
    }
});