
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML=texto;

}



function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m == 1) {
            return x;
        }
    }
    return 1;
}

function encriptar(texto, a, b) {
    const m = 27; // Tamaño del alfabeto español (a, b, ..., z, ñ)
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i).toUpperCase();
        let index = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.indexOf(caracter);
        if (index != -1) {
            let y = (a * index + b) % m;
            resultado += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.charAt(y);
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

function desencriptar(texto, a, b) {
    const m = 27; // Tamaño del alfabeto español (a, b, ..., z, ñ)
    let resultado = '';
    let aInverse = modInverse(a, m);

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i).toUpperCase();
        let index = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.indexOf(caracter);
        if (index != -1) {
            let x = (aInverse * (index - b + m)) % m;
            resultado += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.charAt(x);
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

function transformar() {
    const m = 27; 

    // Obtener todos los elementos <input> de tipo radio con name="tipo"
    var radios = document.getElementsByName('tipo');

    // Iterar sobre los radios para encontrar el seleccionado
    var tipoSeleccionado;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tipoSeleccionado = radios[i].value;
            break;
        }
    }
    let a = parseInt(document.getElementById('numero1').value);
    let b = parseInt(document.getElementById('numero2').value);
    let textoA =document.getElementById("Texto1").value;


    if (gcd(a, m) !== 1) {
        
        asignarTextoElemento('h3','a y m no son coprimos. Por favor, elige otro valor para a.')
    }else{
        asignarTextoElemento('h3','')
        if(tipoSeleccionado==='Encriptar'){
            asignarTextoElemento('.primer_cuadro','Texto a  encriptar');
            asignarTextoElemento('.segundo_cuadro','Texto  encriptado');
            let textoB = encriptar(textoA, a, b);
            document.getElementById("Texto2").value = textoB;
        }else{
            asignarTextoElemento('.primer_cuadro','Texto a desencriptar');
            asignarTextoElemento('.segundo_cuadro','Texto desencriptado');
            let textoB = desencriptar(textoA, a, b);
            document.getElementById("Texto2").value = textoB;
        }
    }
    
    
    

    
    




}
