let c = 1
let escre = document.querySelector('p#escr')
let writ = document.querySelector('p#write')
function escrever(){
    while (c<6){
        escre.innerHTML = `Olá ${c}`
        c++
    } }


function wri(){
    for (c;c<10;c++){
       writ.innerHTML = `Oi ${c}`
    }
}