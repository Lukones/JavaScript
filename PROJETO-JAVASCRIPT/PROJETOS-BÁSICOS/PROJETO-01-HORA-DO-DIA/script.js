function carregar() {
    var hrs = document.getElementById('hrs')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = new Date()
    var minutos = min.getMinutes()
    hrs.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 0 && hora <= 6) {
        img.src = "madrugada.png"
        document.body.style.background = '#19181D'
        msg.innerHTML = 'Boa Madrugada!'
    } else if (hora >= 7 && hora <= 12) {
        img.src = "dia.png"
        document.body.style.background = '#015790'
        msg.innerHTML = 'Bom dia!'
    } else if (hora >= 13 && hora <= 18) {
        img.src = "tarde.png"
        document.body.style.background = '#732C12'
        msg.innerHTML = 'Boa Tarde!'
    } else {
        img.src = "noite.png"
        document.body.style.background = '#082B31'
        msg.innerHTML = 'Boa noite!'
    }    

}

