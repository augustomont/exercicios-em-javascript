function contar(){
    let ini = document.getElementById('initxt')
    let fim = document.getElementById('fimtxt')
    let pas = document.getElementById('pastxt')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('preencha')
    } else {
        res.innerHTML = 'Contando......'
    }

    
    /*for(ini;ini<=fim;ini+pas){
    window.alert(ini)
   }*/
}