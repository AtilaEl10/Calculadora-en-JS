// Variables de los numeros
let visor = document.getElementById("visor");

const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque2");
const bloque3 = document.getElementById("bloque3");
const bloque4 = document.getElementById("bloque4");
const bloque5 = document.getElementById("bloque5");
const bloque6 = document.getElementById("bloque6");
const bloque7 = document.getElementById("bloque7");
const bloque8 = document.getElementById("bloque8");
const bloque9 = document.getElementById("bloque9");
const bloque0 = document.getElementById("bloque0");

let visorContenido = "";

// Animacion para agregar contenido al visor
bloque1.addEventListener("click", function(){
    visor.textContent += bloque1.textContent;
    max();
})
bloque2.addEventListener("click", function(){
    visor.textContent += bloque2.textContent;
    max();
})
bloque3.addEventListener("click", function(){
    visor.textContent += bloque3.textContent;
    max();
})
bloque4.addEventListener("click", function(){
    visor.textContent += bloque4.textContent;
    max();
})
bloque5.addEventListener("click", function(){
    visor.textContent += bloque5.textContent;
    max();
})
bloque6.addEventListener("click", function(){
    visor.textContent += bloque6.textContent;
    max();
})
bloque7.addEventListener("click", function(){
    visor.textContent += bloque7.textContent;
    max();
})
bloque8.addEventListener("click", function(){
    visor.textContent += bloque8.textContent;
    max();
})
bloque9.addEventListener("click", function(){
    visor.textContent += bloque9.textContent;
    max();
})
bloque0.addEventListener("click", function(){
    visor.textContent += bloque0.textContent;
    max();
})

// Animacion de limpieza
const clear = document.getElementById("clear");

clear.addEventListener("click", function(){
    visor.textContent = "";
})

// Valores de operaciones
let valor1;
let valor2;
let operacion;
const sum = document.getElementById("sum");
const rest = document.getElementById("rest");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const result = document.getElementById("result");

sum.addEventListener("click", function(){
    valor1 = visor.textContent;
    operacion = "+";
    visor.textContent = "";
    
})
rest.addEventListener("click", function(){
    valor1 = visor.textContent;
    operacion = "-";
    visor.textContent = "";
})
mult.addEventListener("click", function(){
    valor1 = visor.textContent;
    operacion = "*";
    visor.textContent = "";
})
div.addEventListener("click", function(){
    valor1 = visor.textContent;
    operacion = "/";
    visor.textContent = "";
})

result.addEventListener("click", function(){
    valor2 = visor.textContent;
    total();
    maxresult();
})

function total() {
    switch(operacion) {
        case "+":
            visor.textContent = +valor1 + +valor2;
        break;

        case "-":
            visor.textContent = +valor1 - +valor2;
        break;

        case "*":
            visor.textContent = +valor1 * +valor2;
        break;

        case "/":
            visor.textContent = +valor1 / +valor2;
        break;    
    }
}

function max() {
    if (visor.textContent.length == 15) {
        alert("CUIDADO, el limite de digitos son 16, si te pasas, la calculadora automaticamente limpiará los datos");
    } else if (visor.textContent.length > 16) {
        alert("Te lo advertimos! sabemos por experiencia, que cualquier número así de largo significa problemas");
        visor.textContent = "";
    }
}
function maxresult() {
    if (visor.textContent.length > 16) {
        alert("Lo sentimos, el resultado total es tan grande que supera e limite de digitos que puedo obtener, pero no es tan grande como el sufrimiento que ella te causo")
        visor.textContent = "echale ganas";
    }
}








/*
// Animaciones de operaciones
const result = document.getElementById("result");

// Sumas
const sum = document.getElementById("sum");

const sumar = function() {
    visorContenido = visor.textContent;
    visor.textContent = "";
}
sum.addEventListener("click", sumar);

// Restas
const res = document.getElementById("rest");

const restar = function() {
    visorContenido = visor.textContent;
    visor.textContent = "";
}
sum.addEventListener("click", sumar);




result.addEventListener("click", resultado);

let resultado = function() {
    let resu = +visorContenido + +visor.textContent;
    visor.textContent = resu;
} 
*/