//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica= [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
// con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = [];
lenguagesDeProgramacion.push('JavaScript');
lenguagesDeProgramacion.push('C');
lenguagesDeProgramacion.push('C++');
lenguagesDeProgramacion.push('Kotlin');
lenguagesDeProgramacion.push('Python');
//console.log(lenguagesDeProgramacion)

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
//console.log(lenguagesDeProgramacion);

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function getLenguagesDeProgramacion(){
    console.log(lenguagesDeProgramacion);
}
getLenguagesDeProgramacion();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function getLenguagesDeProgramacionInverse(){
    console.log(lenguagesDeProgramacion.reverse());
}
getLenguagesDeProgramacionInverse();
//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros =[];
listaNumeros.push(3);
listaNumeros.push(7);
listaNumeros.push(5);
console.log(listaNumeros);
function getListPromedio(){
    let sumDatosPromedio = 0;
    let contador =0;
    while(contador< listaNumeros.length-1){
       // console.log(sumDatosPromedio[contador]);
        sumDatosPromedio += listaNumeros[contador];
        contador ++;
    }
    console.log(sumDatosPromedio);
    // for(i=0; listNum.length-1; i++){
    //     sumDatosPromedio +=listNum[i];
    //     console.log(sumDatosPromedio);
    // }
    return `El promedio de lista es ${sumDatosPromedio/(listaNumeros.length-1)}`;
}
getListPromedio();

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//8. Crea una función que devuelva la suma de todos los elementos en una lista.
//9. Crea una función que devuelva la posición en la lista donde se encuentra 
// un elemento pasado como parámetro, o -1 si no existe en la lista.
//10. Crea una función que reciba dos listas de números del mismo tamaño 
// y devuelva una nueva lista con la suma de los elementos uno a uno.
//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.