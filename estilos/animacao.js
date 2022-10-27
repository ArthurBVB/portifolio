function carregar(){
    var msg = window.document.getElementById('hora')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    if(hora < 6){
        //madrugada
        msg.innerHTML = `Boa madrugada.`
        
    }else if(hora < 12 ){
        //bom dia
        foto.style.backgroundImage = "url(./Img/fundo-interativo/cafe.jpg)"
        msg.innerHTML = `Bom dia.`
    }else if(hora < 13){
        //almoço
        foto.style.backgroundImage = 'url(./Img/fundo-interativo/almoco.jpg)'
        msg.innerHTML = `Bom almoço.`
    }else if(hora < 18){
        //tarde
        foto.style.backgroundImage = "url(./Img/fundo-interativo/tarde.jpg)"
        msg.innerHTML = `Boa tarde.`
    } else{
        //noite
        foto.style.backgroundImage = 'url(./Img/fundo-interativo/noite.jpg)'
        msg.innerHTML = `Boa noite.`
    } 
}
