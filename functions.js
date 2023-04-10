function parimp(n){
    if(n % 2 == 0){
        return `${n} é par`
    } else{
        return `${n} é impar`
    }
}

let num = parimp(2)
console.log(num)

function fatorial(nu){
    let fat = 1
    for(c = nu;c>1;c--){
        fat *= c
    }
    return fat
}

let nu = 5

console.log(fatorial(nu))