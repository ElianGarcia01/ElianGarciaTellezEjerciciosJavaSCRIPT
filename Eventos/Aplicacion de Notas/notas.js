
//  CREAR UNA APLICACION DE NOTAS

// a. Crear un array donde vamos a guardar las notas
// b. Agregar un par de notas de prueba 

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

// c. Crear una variable idGlobal e inicializala en el mismo valor del ultimo id que
// creaste manualmente, usaremos esto como control de las notas



// OPERADOR TERNARIO QUE FUNCIONA COMO UN IF


// Si el array dataNotas tiene elementos, el valor de idGlobal será el siguiente id disponible
// dataNotas[dataNotas.length - 1] obtiene el último elemento del array.
// .id accede al id de ese último elemento.
// Se suma 1 al id del último elemento del array para obtener el siguiente id disponible.

let idGlobal = dataNotas.length > 0 ? dataNotas[dataNotas.length - 1].id + 1 : 1 

// Si el array dataNotas está vacío, el valor de idGlobal se inicializa a 1, ya que no hay ids anteriores.




// d. Crear un div que va a ser el contenedor de las notas.
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
                        <input class="me-2" onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
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


    // f. Sobre el div contenedor, crear una pequeña interfaz para crear nuevas notas:
    // Un input de texto para el titulo, un textarea para el texto y 2 botones, uno para
    // guardar la nota nueva y otro para limpiar los campos.


    // g. Crear una función agregarNota la cual necesitara 2 parametros: titulo y texto. La
    // cual deberá crear un objeto de tipo nota como en el punto b y agregarlo al array
    // de notas.


// CODIGO DE BOTON GUARDAR

// Funcion para agrega una nota
function agregarNotas(titulo,texto) {

    titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1)
    texto = texto.charAt(0).toUpperCase() + texto.slice(1)


    let nuevaNota = {
        id: idGlobal++,
        titulo,
        texto,
        realizada: false
    }

    dataNotas.push(nuevaNota)
}


// h. Al presionar el botón guardar deberá guardar en variables los valores de los inputs
// y verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregara
// la nueva nota y paso seguido volver a pintar las notas en la pantalla.

// Evento para guardar la nota al hacer click en el boton guardar
document.getElementById('guardar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value
    const texto = document.getElementById('texto').value

    if (titulo && texto) {
        agregarNotas(titulo, texto)
        document.getElementById('titulo').value = ''
        document.getElementById('texto').value = ''
    }
    
    pintarNotas()
})


// j. Crearemos la función borrarNota la cual necesitara el parámetro id. La misma
// deberá eliminar el elemento cuyo id sea igual al recibido por parámetro y volver a
// pintar las notas para ver reflejado el cambio.

// CODIGO DE BOTON BORRAR

// Función para borrar una nota
function borrarNota(id) {
    let indice = dataNotas.findIndex(nota => nota.id === id)
    if (indice !== -1) {
        dataNotas.splice(indice, 1)
        pintarNotas()
    }
}


// l. Al hacer click en el botón borrar que esta junto con el botón guardar se deberán
// limpiar los campos de titulo y de texto.

// Evento para borrar la nota escrita al hacer click en el boton borrar
document.getElementById('borrar').addEventListener('click', () => {
    document.getElementById('titulo').value = ''
    document.getElementById('texto').value = ''
})


// n. Crear la función marcarRealizada la cual recibirá como parámetro un id y deberá
// buscar el elemento dentro del array y cambiar la propiedad realizada por el valor
// contrario al que ya posee y volver a pintar los elementos en pantalla para verlo
// reflejado.

// CODIGO DE CHECBOX PARA MARCAR UNA NOTA COMO REALIZADA

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    const nota = dataNotas.find(nota => nota.id === id)
    if (nota.realizada) {
        nota.realizada = false
        
    } else {
        nota.realizada = true
    }
    pintarNotas()
}


// o. Crear un par de inputs para realizar filtro por texto y por notas realizadas.


// r. Al cambiar el texto del input de búsqueda o cambiar el valor del checkbox se
// deberá ver reflejado en pantalla el resultado de los filtros antes mencionados. En
// ambos casos se deben contemplar los estados de los 2 filtros para poder tener un
// resultado coherente con lo que se ve en pantalla. Si filtro por texto deberá
// contemplar si el checkbox de realizadas esta o no checkeado, y si filtro por
// realizadas se deberá contemplar el texto que posea el input de búsqueda.


// p. Crear una función que filtre por el estado realizada, la función deberá recibir como
// parámetro 1 array y devolver lo mismo pero filtrado por los elementos que tengan
// true en la propiedad realizada.


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


// q. Crear una función que filtre por texto, la cual recibirá como parámetro un array de
// notas y un texto. La misma deberá devolver un array filtrado por los elementos
// que incluyan el texto ingresado en el titulo o el texto de la nota. De no recibir texto
// deberá retornar el array recibido.

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

// i. Agregar en el template de la tarjeta en la función que pinta un botón con texto
// “borrar nota” para borrar la nota, para este caso usaremos la propiedad onClick de
// la etiqueta button y dentro de ella llamaremos a una función que crearemos
// llamada borrarNota() que recibirá como parámetro el id de la misma.
// borrarNota(${elemento.id}).


// k. Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar
// un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR
// en caso de no haber elementos en el array.

// m. Agregar en el template que pinta las tarjetas un checkbox de la siguiente manera:
// `<input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada?
// "checked": ""}>`. El signo de pregunta representa un operador ternario que
// funciona como un if, el cual devolverá checked al input y lo colocara como marcado
// si la propiedad realizada es true y caso contrario no lo hará.

function pintarNotasConFiltro(notasFiltradas) {

    const containerNotas = document.getElementById('contenedorNotas')
    
    containerNotas.innerHTML = ''

    if (notasFiltradas.length === 0) {
        const mensaje = document.createElement('div')
        mensaje.id = 'no-notes'
        mensaje.innerText = 'NO HAY NOTAS PARA MOSTRAR'
        containerNotas.appendChild(mensaje)
        return
    }

    notasFiltradas.forEach(nota => {

        let tarjeta = document.createElement('div')

        tarjeta.className = "col mb-2"

        tarjeta.innerHTML = `
            
            <div class="card border border-1 border-dark h-100">
                <div class="card-body mx-auto h-100 d-flex flex-column justify-content-around w-100">
                    <div class="d-flex">
                        <input class="me-2" onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
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

