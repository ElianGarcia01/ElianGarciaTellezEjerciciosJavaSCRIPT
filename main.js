
// Ejercicio 1
// Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

//  Le pedimos al usuario que ingrese el numero que quiera multiplicar y lo guardamos en la variable numero
let numero = prompt("Ingresa el numero del que deseas saber su tabla de multiplicar")


// Creamos el ciclo for, el cual multiplica el numero ingresado y tiene una condicion con un contador que al ser menor o igual a diez el ciclo continuara
for (let i = 1; i <= 10; i++){
    console.log(numero, " x ", i ," = ", numero * i)
}

let contador = 1
numero = prompt("Ingresa el numero del que deseas saber su tabla de multiplicar")

while (contador <= 10){
    console.log(numero," x ", contador, " = ", numero * contador)
    contador++
}

//  Ejercicio 2
//  Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//  acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

// Declaramos tres variables y en la variable num guardamos el valor numerico que ingrese el usuario
let n = 1
let suma = 0
let num = parseInt(prompt("Ingrese un numero y se acumulara con el siguiente numero nuevo que ingrese, ingrese el numero 0 cuando quiera parar"))


// Creamos un ciclo while con una condicion que mientras el numero que ingrese el usuario no sea igual a cero el bucle se repetira y le pedira que
// ingrese un numero por cada vez que se ejecute el ciclo hasta que el usuario decida parar el ciclo ingresando un cero. Y los valores ingresados
// se acumularan hasta al final mostrar la suma de todos.

while(num != 0){
    num = parseInt(prompt("Ingrese un numero y se acumulara con el siguiente numero nuevo que ingrese, ingrese el numero 0 cuando quiera parar"))
    suma = suma + num
}

console.log("La suma de todos los uumero es: ", suma)


// Ejercicio 3
// Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.


// Mensaje que marca el inicio del programa
console.log("Adivina el número entre 1 y 100.")

// Declarar la constante (el numero secreto a adivinar)
const numeroAdivinar = 68

// Le pedimos al usuario que ingrese su primer intento y lo guardamos en la variable numeroINgresado
let numeroIngresado = parseInt(prompt("Ingresa un numero"))

// Llamamos la variable contador que ya habia sido declarada anteriormente y la iniciamos con un valor de 1
contador = 1

// Inicia el bucle while que verifica que el numeroIngresado sea diferente de numeroAdivinar
while (numeroIngresado != numeroAdivinar){
    // En caso de ser cierta la condicion el bucle while se ejecuta y asignamos un if y un else para saber si el numeroIngresado es mayor o menor
    // que el numeroAdivinar
    if (numeroIngresado < numeroAdivinar){
        console.log("Haz fallado, el numero que ingresaste es menor")
    }else{
        console.log("Haz fallado, el numero que ingresaste es mayor")
    }
    numeroIngresado = parseInt(prompt("Vuelve a intentarlo"))
    contador++
}

// En caso de no ser verdadera la condicion del bucle while, quiere decir que el usuario ha ingreado el numero correcto y mandamos un mensaje
// haciendoselo saber y le indicamos tambien en el numero de intento que ha acertado
console.log("Felicidades. Haz adivinado el numero correcto en el intento: ", contador)

// Ejercicio 4

// Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

numero = parseInt(prompt("Ingresa un numero para saber si es primo"))

if (numero <= 1) {
    console.log(numero + " no es primo.");
} else {
    let esPrimo = true

    for (let i = 2; i <= numero / 2; i++) {
        // Si el número es divisible por algún otro número que no sea 1 o él mismo, no es primo
        if (numero % i === 0) {
            esPrimo = false
            break // Salimos del bucle porque ya sabemos que no es primo
        }
    }
    
    if (esPrimo) {
        console.log(numero + " es primo.")
    } else {
        console.log(numero + " no es primo.")
    } 
}

// Ejercicio 5
// Realizar un programa que permita dado un numero, mostrar todos sus divisores.

numero = parseInt(prompt("Ingresa un numero entero positivo para mostrar sus divisores"))

console.log("Los divisores de ", numero, " son:");

for(let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i)
    }
}


// Ejercicio 6
// Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

let numerosArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

for (let i = 0; i < numerosArray.length; i++) {
    console.log(numerosArray[i])
}

// Ejercicio 7
// Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.


numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log("El doble de cada elemento del array es:")

for (let i = 0; i < numerosArray.length; i++) {
    let doble = numerosArray[i] * 2
    console.log(doble)
}


// Ejercicio 8
// Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", puesto: "Programador" },
    { nombre: "María", edad: 32, relacion: "Madre", puesto: "Enfermera" },
    { nombre: "Pedro", edad: 10, relacion: "Hijo", puesto: "Estudiante" },
    { nombre: "Laura", edad: 8, relacion: "Hija", puesto: "Estudiante" },
    { nombre: "Ana", edad: 70, relacion: "Abuela", puesto: "Retirado" }
]

for (let i = 0; i <= familia.length - 1; i++) {
    let presentacion = ("Hola, soy " + familia[i].nombre + " tengo: " + familia[i].edad + ". En la familia soy " + familia[i].relacion + " y soy: " + familia[i].puesto)
    console.log(presentacion)
}

// Ejercicio 9
// Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares

numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] % 2 != 0) {
        console.log(numerosArray[i] + " es impar")
    }
}

// Ejercicio 10
// Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de datos finaliza cuando
// el usuario ingresa un 0.

// Declaramos tres variables y en la variable num guardamos el valor numerico que ingrese el usuario
 n = 1
let sumaPares = 0
let sumaImpares

num = parseInt(prompt("Ingrese un numero y se acumulara con el siguiente numero nuevo que ingrese, ingrese el numero 0 cuando quiera parar"))

// Creamos un ciclo while con una condicion que mientras el numero que ingrese el usuario no sea igual a cero el bucle se repetira y le pedira que
// ingrese un numero por cada vez que se ejecute el ciclo hasta que el usuario decida parar el ciclo ingresando un cero. Y los valores ingresados
// se acumularan hasta al final mostrar la suma de todos.

do {
    let num = parseInt(prompt("Ingrese un numero y se acumulara con el siguiente numero nuevo que ingrese, ingrese el numero 0 cuando quiera parar"))
    // Aqui se hara la suma de numeros impares
    if (num % 2 != 0) {
        sumaImpares += num
    } else {
    // Aqui se hara la suma de numero pares
        sumaPares += num
    }
} while (num != 0) {
    console.log("La suma de impares es: " + sumaImpares)
    console.log("La suma de pares es: " + sumaPares)
    console.log("Has decidido salir del programa")
}




// Ejercicio 11

/* Ejercicio 13
// Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

let jugador1 = prompt("Ingresa el nombre del jugador 1")
let jugador2 = prompt("Ingresa el nombre del jugador 2")

let ganador = false

while (ganador == false) {
    let juegoJugador1 = prompt("Ingrese la opcion jugador1 (1.- Piedra, 2.- Papel 3.-Tijera)")
    let juegoJugador2 = prompt("Ingrese la opcion jugador2 (1.- Piedra, 2.- Papel 3.-Tijera)")

    if (juegoJugador1 == 1 && juegoJugador2 == 3 || juegoJugador1 == 2 && juegoJugador2 == 1 || juegoJugador1 == 3 && juegoJugador2 == 2) {
        ganador = true
        console.log("Felicitaciones. Gano el jugador 1 " + jugador1)
    } else if (juegoJugador2 == 1 && juegoJugador1 == 3 || juegoJugador2 == 2 && juegoJugador1 == 1 || juegoJugador2 == 3 && juegoJugador1 == 2){
        ganador = true
        console.log("Felicitaciones. Gano el jugador 2 " + jugador2)
    } else {
        console.log("Empataron los jugadores vuelve a intentarlo")
    }
}

// Ejercicio 12
// Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chiqmchabtesyu-es4gkt statuS

// Definir el array de 10 números
numeros = [45, 23, 67, 12, 89, 34, 56, 9, 72, 19]




// Ejercicio 13
// Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.






// Ejercicio 14
// Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.


let asterisco = "* "

for (let i = 1; i <= 5; i++) {
    console.log(asterisco)
    asterisco += "* "
}

// Ejercicio 15
// Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

let asterisco2 = "* "

for (let i = 5; i >= 1; i--) {
    console.log(asterisco2.repeat(i))
}

// Ejercicio 16
// Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)*/


