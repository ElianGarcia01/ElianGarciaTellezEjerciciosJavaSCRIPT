// CONVERTIDOR DE DIVISAS
// 1 DOLAR = 17,71 PESOS MEXICANOS
// X DOLARES = ?


// Obtener los elementos del DOM
const usdInput = document.getElementById('usdInput')
const mxnInput = document.getElementById('mxnInput')

// Tasa de cambio (1 USD = 17.71 mxn)
const tasaCambio = 17.71

// Declarar y guardar la variable mxn la conversion del dolar a pesos mexicanos 
let mxn = usdInput.value * tasaCambio

// Mostrar el valor de la moneda mexicana
mxnInput.value = mxn.toFixed(2)


// Función para actualizar el valor en Pesos mexicanos al cambiar el valor en USD

// Agregar evento al input de dólares para detectar cambios
usdInput.addEventListener('input', () => {

    // Obtener el valor en dólares ingresado por el usuario
    let usd = parseFloat(usdInput.value)
    
    // Calcular el equivalente en pesos mexicanos
    mxn = usd * tasaCambio
    
    // Mostrar resultado en consola
    console.log(mxn)

    // Mostrar el resultado en Pesos mexicanos
    mxnInput.value = mxn.toFixed(2) // Mostrar máximo 2 decimales
})

// Función para actualizar el valor en USD al cambiar el valor en Pesos Mexicanos

mxnInput.addEventListener('input', () => {

    // Obtener el valor en mxn ingresado por el usuario
    let mxn = parseFloat(mxnInput.value)
    
    // Calcular el equivalente en USD
    usd = mxn / tasaCambio
    
    // Mostrar resultado en consola
    console.log(usd)

    // Mostrar el resultado en USD
    usdInput.value = usd.toFixed(2) // Mostrar máximo 2 decimales
})