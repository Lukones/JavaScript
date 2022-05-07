function contador() {
    var ini = document.getElementById('Inicio')
    var fim = document.getElementById('Fim')
    var passo = document.getElementById('Passo')
    var resp = document.getElementById('ct')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
    } else {
        resp.innerHTML = 'Contando: '
        var i = Number(ini.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando o PASSO como 1')
            p = 1 
        }
        if (i < f ) {    
            for(var c = i; c <= f; c += p) {
                resp.innerHTML += `${ c + ' 👉 '}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                resp.innerHTML += `${ c + ' 👉 '}`
            }
        }
        resp.innerHTML += '🏁'
    } 

    
    
}