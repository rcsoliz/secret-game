// permite acceder a cada uno de los elementos de la page
let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); // un puente entre javascrit y html
    elementoHtml.innerHTML =texto;        
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ==1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        clearText();
        intentos ++;        
    } 
    return;
}

function clearText(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo) +1;
    // si el numeroGenerado esta incluido en la lista hacemos una operacion o hacemos otra.
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    // si ya sorteamos todos los numeros.
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        // si el numero generado está incluido en la lista
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function conditionsInitials(){
    asignarTextoElemento('h1', 'Juego del número secreto'); //solo a elementos
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    clearText();
    
    //Inidicar mensaje intervalo de numeros
    //Generar el numero aletorio
    //Inicializar el número de intetos
    conditionsInitials();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

conditionsInitials();

