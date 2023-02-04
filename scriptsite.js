function carregar () {
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18

    if (hora >= 6 && hora < 12){
        document.body.style.background = '#c0ecfa'

    } else if( hora >= 12 && hora < 18){
        document.body.style.background = '#FBEEC9'
    }
    else{
        document.body.style.background = '#4B5B6B'
    }
}
