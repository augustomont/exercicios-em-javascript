let num = [8,3,7]
console.log(num)

num.push(9)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
num[2] = 5
console.log(num)

/*for(pos = 0; pos<num.length;pos++){
    console.log(`O numero que esta na posição ${pos} é o ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}*/

let val = 5
let pos = num.indexOf(val)

if(pos == -1){
    console.log(`elemento nao encontrado`)
} else{
    console.log(`O numero ${val} esta na posição ${pos}`)
    }


