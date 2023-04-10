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
   if(valores.length == 0){
    window.alert(`Preencha os dados`)
   } else{
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos]>maior){
            maior = valores[pos]
        } else if(valores[pos] < menor){
            menor = valores[pos]
        }
    }

    resultado.innerHTML = `<p>Sua lista tem ${valores.length} itens</p>
                            <p>O maior valor é ${maior}</p>
                            <p>O menor valor é ${menor}</p>
                            <p>A soma dos elementos é ${soma}`
   }
}