function carregar(){
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
}