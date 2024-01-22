// 1. Crea una función que calcule el índice de masa corporal (IMC) 
// de una persona a partir de su altura en metros y peso en kilogramos, 
// que se recibirán como parámetros.

let altura= 1.69
let peso = 80
console.log(getIMC(altura, peso));

function getIMC(altura, peso){
    let resultImc= peso/(altura *altura) ;
    return `El IMC para la altura ${altura} y peso ${peso} es ${resultImc}`;
}
// 2. Crea una función que calcule el valor del factorial de un número 
// pasado como parámetro.

let numeroFactorial = 5;
console.log(`El factorial para el numero ${numeroFactorial} es ${getFactorial(numeroFactorial)}`);
function getFactorial(num){
    let result =0;
    if(num < 0){
        return -1;
    }else if(num ==0){
        return  1;
    }else{
        return (num * getFactorial(num-1));
    }
}
// 3. Crea una función que convierta un valor en dólares, pasado como 
// parámetro, y devuelva el valor equivalente en 
// reales(moneda brasileña,si deseas puedes hacerlo con el 
// valor del dólar en tu país). Para esto, 
// considera la cotización del dólar igual a R$4,80.

console.log(getDollarsAReales(100, 4.80))
function getDollarsAReales(monto, tipoCambio){
    return `Los dolares obtenidos para ${monto}, al tipo de cambio ${tipoCambio} son: ${monto * tipoCambio}`;
}
// 4. Crea una función que muestre en pantalla el área y el perímetro 
// de una sala rectangular, utilizando la altura y la anchura 
// que se proporcionarán como parámetros.

console.log(getArea(30, 20));
console.log(getPerimetro(20,20,30,30));
function getArea(ancho, alto){
    return `El área de la pantalla de ancho ${ancho}, y alto ${alto} es ${ancho * alto}`;
}

function getPerimetro(longitudLadoIzquiedo, longitudLadoDerecho, longitudSuperior, longitudInferior){
    return `El perímetro de la pantalla de lado Izquiedo ${longitudLadoIzquiedo}, lado derecho ${longitudLadoDerecho},
        lado infierior ${longitudInferior}, y lado superior ${longitudSuperior} es ${longitudLadoIzquiedo + longitudLadoDerecho + longitudSuperior+ longitudInferior}`;
}

// 5. Crea una función que muestre en pantalla el área y el perímetro 
// de una sala circular, utilizando su radio que se proporcionará como 
// parámetro. Considera Pi = 3,14.

let pi = 3.14;
let radio = 5
console.log(getPerimetroCirculo(radio));
console.log(getAreaDeUnCirculo(radio));

function getPerimetroCirculo(radio){
    return `El perímetro de una sala circular de radio ${radio} es: ${2 * pi * radio}`;
}
function getAreaDeUnCirculo(radio){
    let radioCuadrado = radio * radio;
    return `El area de una sala circular de radio ${radio} es : ${pi * radioCuadrado}`;
}


// 6. Crea una función que muestre en pantalla la tabla de multiplicar 
// de un número dado como parámetro.

getTablaDeMultiplicar(7);

function getTablaDeMultiplicar(num){
    for(i=1; i<=10; i++){
        console.log(`La tabla de multiplicar para ${num} por ${i} igual : ${num * i}`)
    }

    // let contador =0;
    // while(contador<10){
    //     contador ++
    //     console.log(`La tabla de multiplicar para ${num} por ${contador} igual : ${num * contador}`)
    // }
}