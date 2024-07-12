
// CALCULADORA PARA EL IMC
// IMC = (peso) / (altura * altura)


// Llamado a elementos del DOM
let pesoInput = document.getElementById('peso')
let estaturaInput = document.getElementById('estatura')
let resultadoInput = document.getElementById('resultado')
let botonCalcular = document.getElementById('calcular')

// Agregar un event listener con un evento click al botón de calcular
botonCalcular.addEventListener('click', () => {
    
    // Obtener valores de peso y altura
    let peso = parseFloat(pesoInput.value)
    let estatura = parseFloat(estaturaInput.value) / 100 // Convertir altura a metros

    // Calcular IMC
    const imc = (peso / Math.pow(estatura, 2)).toFixed(2)

    // Mostrar resultado
    resultadoInput.value = imc

    // Mostrar resultado en la consola
    console.log(imc)
})

