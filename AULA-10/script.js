/* Document Object Model */

function calcular() {
    var calc = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var ver = Number(calc.value)
    if (ver > 70) {
        res.innerHTML += `<p>Limite de velocidade: 70Km/h</p>`
        res.innerHTML += `<p>Você estava a ${ver}Km/h</p>`
        res.innerHTML += `<p>MULTADO!</p>`
    } else {
        res.innerHTML += `<p>Limite de velocidade: 70Km/h</p> ` 
        res.innerHTML += `<p>Você estava a ${ver}Km/h</p>`
        res.innerHTML += `<p>LIBERADO!</p>`
    }
}