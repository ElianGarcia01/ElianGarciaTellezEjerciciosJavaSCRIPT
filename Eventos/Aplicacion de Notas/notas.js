// Array para almacenar las notas

const dataNotas = [
    {
        id: 1,
        titulo:'Sacar la basura',
        texto: 'Mi mama me va a retar sino lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo:'Comida',
        texto: 'Quedo comida de ayer',
        realizada: false
    },
    {
        id: 3,
        titulo:'Estudiar Eventos',
        texto: 'Estoy flojo de papeles y no voy a aprobar la task 1',
        realizada: false
    },
    {
        id: 4,
        titulo:'Tomar agua',
        texto: 'Debo hidratarme bien para no desmayarme',
        realizada: false
    }
]

let idGlobal = dataNotas.id

// e. Crear una función que pinte las notas en forma de tarjetas dentro del div
// contenedor.

    function pintarNotas() {
        
    let containerNotas = document.getElementById('contenedorNotas')

    containerNotas.innerHTML = ''

    dataNotas.forEach(nota => {
        
        let tarjeta = document.createElement('div')

        tarjeta.className = "col mb-2"

        tarjeta.innerHTML = `
            
            <div class="card border border-1 border-dark h-100">
                <div class="card-body mx-auto h-100 d-flex flex-column justify-content-around w-100">
                    <div class="d-flex">
                        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                        <h5 class="card-title text-center"><b>${nota.titulo}</b></h5>
                    </div>
                    <p class="card-text ${nota.realizada ? 'text-line-through' : ''}">${nota.texto}</p>
                    <button type="button" class="btn btn-primary mb-3 bg-danger border-0" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                </div>
            </div>
            `
    containerNotas.appendChild(tarjeta)
        
    })
    }

    pintarNotas()


    // CODIGO DE BOTON GUARDAR

// Funcion para agrega una nota
function agregarNotas(titulo,texto) {

    titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1);
    texto = texto.charAt(0).toUpperCase() + texto.slice(1);


    let nuevaNota = {
        id: idGlobal++,
        titulo,
        texto,
        realizada: false
    }

    dataNotas.push(nuevaNota)
    pintarNotas()
}

// Evento para guardar la nota al hacer click en el boton guardar
document.getElementById('guardar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value
    const texto = document.getElementById('texto').value

    if (titulo && texto) {
        agregarNotas(titulo, texto);
        document.getElementById('titulo').value = ''
        document.getElementById('texto').value = ''
    }
})



    // CODIGO DE BOTON BORRAR

// Función para borrar una nota
function borrarNota(id) {
    let indice = dataNotas.findIndex(nota => nota.id === id)
    if (indice !== -1) {
        dataNotas.splice(indice, 1)
        pintarNotas()
    }
}

// Evento para borrar la nota escrita al hacer click en el boton borrar
document.getElementById('borrar').addEventListener('click', () => {
    document.getElementById('titulo').value = ''
    document.getElementById('texto').value = ''
})


    // CODIGO DE CHECBOX PARA MARCAR UNA NOTA COMO REALIZADA

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    const nota = dataNotas.find(nota => nota.id === id)
    if (nota) {
        nota.realizada = !nota.realizada
        pintarNotas()
    }
}


    // CODIGO PARA FILTRAR NOTAS POR TEXTO

// Función para filtrar notas por texto
function filtrarPorTexto(array, texto) {
    if (!texto) return array

    const textoMinusculas = texto.toLowerCase()

    return array.filter(nota => nota.titulo.toLowerCase().includes(textoMinusculas) || nota.texto.toLowerCase().includes(textoMinusculas)) 
}

document.getElementById('buscarTexto').addEventListener('input', () => {
    const texto = document.getElementById('buscarTexto').value
    const realizadas = document.getElementById('filtroNotas').checked
    let resultado = filtrarPorTexto(dataNotas, texto)
    if (realizadas) {
        resultado = filtrarPorRealizadas(resultado)
    }
    pintarNotasConFiltro(resultado)
})


    // CODIGO PARA FILTRAR NOTAS REALIZADAS

// Función para filtrar notas realizadas
function filtrarPorRealizadas(array) {
    return array.filter(nota => nota.realizada)
}


document.getElementById('filtroNotas').addEventListener('change', () => {
    const texto = document.getElementById('buscarTexto').value;
    const realizadas = document.getElementById('filtroNotas').checked;
    let resultado = filtrarPorTexto(dataNotas, texto)
    if (realizadas) {
        resultado = filtrarPorRealizadas(resultado)
    }
    pintarNotasConFiltro(resultado)
})

function pintarNotasConFiltro(notasFiltradas) {

    const containerNotas = document.getElementById('contenedorNotas')
    
    containerNotas.innerHTML = ''

    notasFiltradas.forEach(nota => {

        let tarjeta = document.createElement('div')

        tarjeta.className = "col mb-2"

        tarjeta.innerHTML = `
            
            <div class="card border border-1 border-dark h-100">
                <div class="card-body mx-auto h-100 d-flex flex-column justify-content-around w-100">
                    <div class="d-flex">
                        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                        <h5 class="card-title text-center"><b>${nota.titulo}</b></h5>
                    </div>
                    <p class="card-text ${nota.realizada ? 'text-line-through' : ''}">${nota.texto}</p>
                    <button type="button" class="btn btn-primary mb-3 bg-danger border-0" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                </div>
            </div>
            `
    containerNotas.appendChild(tarjeta)
    })
}

