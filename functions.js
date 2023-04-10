function parimp(n){
    if(n % 2 == 0){
        return `${n} é par`
    } else{
        return `${n} é impar`
    }
}
let num = parimp(2)
console.log(num)

/*função para saber o fatorial de um numero*/
function fatorial(nu){
    let fat = 1
    for(c = nu;c>1;c--){
        fat *= c
    }
    return fat
}
let nu = 5
console.log(fatorial(nu))

/*Tambem podemos fazer de forma recursiva*/

function fator(a){
    if(a<=1){
        return 1
    } else{
      return  a * fator(a-1)
    }

}
console.log(fator(6))