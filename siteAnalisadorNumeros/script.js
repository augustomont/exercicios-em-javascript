let numero = document.querySelector('input#numtxt')
let lista = document.querySelector('select#seletor')
let resultado = document.querySelector('div#resultado')

let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adcionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        window.alert(`ok`)
    }else{
        window.alert(`${numero} é um valor inválido`)
    }
}


function analizar(){
   
}