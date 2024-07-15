
let idGlobal = 0 // Inicializa la variable idGlobal
const dataNotas = [] // Array para almacenar las notas


// e. Crear una función que pinte las notas en forma de tarjetas dentro del div
// contenedor.

    function pintarNotas() {
        
    let containerNotas = document.getElementById('contenedorNotas')

    containerNotas.innerHTML = ''

    dataNotas.forEach(nota => {
        
        let tarjeta = document.createElement('div')

        tarjeta.className = "col"

        tarjeta.innerHTML = `
            
            <div class="card border border-1 border-dark h-100">
                <div class="card-body mx-auto h-100 d-flex flex-column justify-content-around w-100">
                    <h5 class="card-title text-center">${nota.titulo}</h5>
                    <p class="card-text">Texto: ${nota.texto}</p>
                    <button onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                </div>
            </div>
            `
    containerNotas.appendChild(tarjeta)
        
    })
    }

// Funcion para agrega una nota
function agregarNotas(titulo,texto) {
    let nuevaNota = {
        id: idGlobal++,
        titulo,
        texto,
        realizada: false
    }

    dataNotas.push(nuevaNota)
    pintarNotas()
}

// Función para borrar una nota
function borrarNota(id) {
    let borrar = dataNotas.findIndex(nota => nota.id === id)
    if (borrar !== -1) {
        dataNotas.splice(borrar, 1)
        pintarNotas()
    }
}

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    const nota = dataNotas.find(nota => nota.id === id)
    if (nota) {
        nota.realizada = !nota.realizada
        pintarNotas()
    }
}

// Función para filtrar notas por texto
function filtrarPorTexto(array, texto) {
    if (!texto) return array
    return array.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto))
}

// Función para filtrar notas realizadas
function filtrarPorRealizadas(array) {
    return array.filter(nota => nota.realizada)
}


// MANEJO DE EVENTOS
document.getElementById('guardar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo && texto) {
        agregarNotas(titulo, texto);
        document.getElementById('titulo').value = ''
        document.getElementById('texto').value = ''
    }
});

document.getElementById('borrar').addEventListener('click', () => {
    document.getElementById('titulo').value = ''
    document.getElementById('texto').value = ''
});

document.getElementById('buscarTexto').addEventListener('input', () => {
    const texto = document.getElementById('buscarTexto').value;
    const realizadas = document.getElementById('filter-done').checked;
    let resultado = filtrarPorTexto(dataNotas, texto)
    if (realizadas) {
        resultado = filtrarPorRealizadas(resultado)
    }
    pintarNotasConFiltro(resultado)
});

document.getElementById('filter-done').addEventListener('change', () => {
    const texto = document.getElementById('buscarTexto').value;
    const realizadas = document.getElementById('filter-done').checked;
    let resultado = filtrarPorTexto(dataNotas, texto)
    if (realizadas) {
        resultado = filtrarPorRealizadas(resultado)
    }
    pintarNotasConFiltro(resultado)
})


function pintarNotasConFiltro(notasFiltradas) {

    let containerNotas = document.getElementById('contenedorNotas')
    
    contenedor.innerHTML = ''

    notasFiltradas.forEach(nota => {

        let tarjeta = document.createElement('div')

        tarjeta.className = "col"

        tarjeta.innerHTML = `
            
            <div class="card border border-1 border-dark h-100">
                <div class="card-body mx-auto h-100 d-flex flex-column justify-content-around w-100">
                    <h5 class="card-title text-center">${nota.titulo}</h5>
                    <p class="card-text">Texto: ${nota.texto}</p>
                    <button onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                </div>
            </div>
            `
    containerNotas.appendChild(tarjeta)
    })
}

