

function confirmar() {
    var name1 = document.getElementById('country').value
    var res = document.getElementById('res')

    res.innerHTML = `<p>Você vive em ${name1}</p><br>`

    if (name1 == 'BRL' || name1 == 'brl') {
        res.innerHTML += '<p>Você é Brasileiro</p>'
    } else {
        res.innerHTML += '<p>Você é Estrangeiro</p>'
    }

}
