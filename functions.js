function parimp(n){
    if(n % 2 == 0){
        return `${n} é par`
    } else{
        return `${n} é impar`
    }
}

let num = parimp(2)
console.log(num)