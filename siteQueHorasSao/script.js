function carregar(){
    let msg = window.document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data =  new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}hs`
    if (hora < 18 && hora > 6){
        img.src = 'imagens/daiane.jpg'
        document.body.style.background = 'pink'
        nome.innerHTML = 'Daiane'
    } else{
        img.src = 'imagens/augusto.jpg'
        document.body.style.background =  'rgba(242, 147, 14, 0.441)'
        nome.innerHTML = 'Augusto'
    }
}