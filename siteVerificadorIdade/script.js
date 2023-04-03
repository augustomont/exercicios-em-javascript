function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('erro')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade =  ano - Number(fano.value) 
        let genero = '' 
        if(fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
    }
}







/*function verificar(){
    let ano = document.querySelector('input#ano')
    let homem = document.querySelector('input#homem')
    let mulher = document.querySelector('input#mulher')
    let resultado = document.querySelector('p#resultado')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hoje = data.getFullYear()
if (hoje -= ano > 18){
    window.alert(hoje)
    resultado.innerHTML = 'Homem'
} else{

}
}*/