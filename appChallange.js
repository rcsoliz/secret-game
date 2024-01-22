//1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWord(){
    console.log("Hola Mundo!");
    return;
}
//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
addName('Roberto Soliz');
function addName(name){
    console.log(`¡Hola, ${name}!`)
    return;
}

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
doubleNumber(52)
function doubleNumber(numero){
    let result = numero * 2;
    console.log(`Result is: ${result}`);
    return result;
}
//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
getPromedio(10 , 20, 40);
function getPromedio(num1, num2, num3){
    let promedio =Math.floor((num1+num2+num3)/3);
    console.log(`El promedio de sumar ${num1} + ${num2} + ${num3} es: ${promedio}`);
    return promedio;
}
//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
getElNumeroMayor(45, 100)
getElNumeroMayor(451, 250)
getElNumeroMayor(0, 0)
function getElNumeroMayor(num1, num2){
    if(num1>num2){
        console.log(`El numero ${num1} es mayor ${num2}`);
    }else if (num2>num1){
        console.log(`El numero ${num2} es mayor ${num1}`);
    }else{
        console.log(`Los numero ${num1} es igual a ${num2}`);
    }
    return;
}

//6.Crear una función que reciba un número como parámetro y devuelva el resultado 
// de multiplicar ese número por sí mismo.

function getNumberMultiplo(num1){
    let result = num1* num1;
    console.log(`El resultado de multiplicar ${num1} por ${num1}`);
    return;
}
