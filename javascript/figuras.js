//######## codigo del cuadrado #############
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// ####### codigo del triangulo ###########
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//######## codigo del circulo ##########
console.group("Circulos");

//radio

//diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//pi
const PI = Math.PI;
console.log("El pi es: " + PI + "cm");

//circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

//area
function areaCirculo(radio) {
    return (radio * radio) * PI;

}
console.groupEnd();

//nos interactuamos con el html

//cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladosCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladosCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const value1 = base.value;
    const value2 = altura.value;

    const area = areaTriangulo(value1, value2);
    alert(area);

}

//circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);

}