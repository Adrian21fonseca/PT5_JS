// DESAFIO 

//2 Cambia el contenido de la etiqueta h1 con document.querySelector 
//y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafio"

//3 Crea una función que muestre en la consola el mensaje 
//  "El botón fue clicado" siempre que se presione el botón "Console".

function consola(){
    alert("console")
}

//4 Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//  preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje 
//  concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function cityBrasil(){
    let city = prompt("ingrese una ciudad de brasil")
    alert(`Estuve en ${city} y me acorde de ti.`)
}

//5 Crea una función que muestre una alerta con el mensaje: 
//  "Yo amo JS" siempre que se presione el botón "Alerta".

function love(){
    alert('Yo amo JS')
}

//6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

/*function suma(){

    let numero1 = prompt('ingresa tu numero para ser sumado' );
    let numero2 = prompt('ingresa un segundo numero para ser sumado');
    let resultado = numero1 + numero2;

    alert("la suma es:" + resultado);
} */

function sumar() {
    // Pide al usuario que ingrese dos números
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verifica si ambos valores son números
    if (!isNaN(numero1) && !isNaN(numero2)) {
      // Realiza la suma
    let resultado = numero1 + numero2;
    
      // Muestra el resultado en una alerta
    alert("La suma es: " + resultado);
    } else {
      // Muestra un mensaje de error si los valores no son números
    alert("Por favor, ingrese números válidos.");
    }
}