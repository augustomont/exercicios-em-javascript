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
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `${numero.value}`
        lista.appendChild(item)
    }else{
        window.alert(`${numero} não é um valor inválido`)
    }
    numero.value = ''
    numero.focus()
}


function analizar(){
   resultado.innerHTML = `${valores}`
}

