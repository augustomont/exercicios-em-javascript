function calcular(){
    let numero = document.querySelector('input#numtxt')
    let tabuada = document.querySelector('select#seltab')

    if(numero.value.length == 0){
        window.alert('[ERRO] digite um número valido')
    } else{
        let num = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${num}  x  ${c}  =  ${num*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}