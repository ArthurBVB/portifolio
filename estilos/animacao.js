function carregar(){
    var degrade = window.document.getElementById('degrade')
    var msg = window.document.getElementById('hora')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    if(hora < 6){
        //madrugada
        msg.innerHTML = `Agora são ${hora} horas. Boa madrugada!!!`
        
    }else if(hora < 12 ){
        //bom dia
        foto.style.backgroundImage = "url(./Img/fundo-interativo/cafe.jpg)"
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!!!`
    }else if(hora < 13){
        //almoço
        foto.style.backgroundImage = 'url(./Img/fundo-interativo/almoco.jpg)'
        msg.innerHTML = `Agora são ${hora} horas. Bom almoço!!!`
    }else if(hora < 18){
        //tarde
        foto.style.backgroundImage = "url(./Img/fundo-interativo/tarde.jpg)"
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!!!`
    } else{
        //noite
        foto.style.backgroundImage = 'url(./Img/fundo-interativo/noite.jpg)'
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!!!`
    } 
}