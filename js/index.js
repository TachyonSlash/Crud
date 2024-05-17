let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let idTarea = document.getElementById('idTarea');
let videoInput = document.getElementById('videoInput');
let audioInput = document.getElementById('audioInput');
let imageInput = document.getElementById('imageInput');
 
    let tareas = [
    {   
        nombre : "Josafat" ,
        fecha : "2023-12-31",
        descripcion : "Hola mundo"
    },
    {   
        nombre : "Abraham" ,
        fecha : "2024-10-21",
        descripcion : "Hola mundo1"
    } ,
    {
        nombre : "Fer" ,
        fecha : "2025-12-27",
        descripcion : "Hola mundo2"
    }];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class='row'>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
                <div class='col-4 border p-3 d-flex justify-content-center'>
                ${ tarea.video ? `<video width="320" height="240" controls><source src="${ tarea.video }" type="video/mp4"></video>` : '' }
                </div>
                <div class='col-4 border p-3 d-flex justify-content-center'>
                ${ tarea.audio ? `<audio controls><source src="${ tarea.audio }" type="audio/mpeg"></audio>` : '' }
                </div>
                <div class='col-4 border p-3 d-flex justify-content-center'>
                ${ tarea.imagen ? `<img src="${ tarea.imagen }" alt="Imagen" style="width:100%; height:auto; object-fit:contain;">` : '' }
            </div>
            </div>
            `;
        });
    }
    let agregarArchivos = () => {
        let archivos = {
            video: videoInput.files[0],
            audio: audioInput.files[0],
            imagen: imageInput.files[0]
        }
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
    
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            video: videoInput.value,
            audio: audioInput.value,
            imagen: imageInput.value
        }
    
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        formulario.reset();
    });