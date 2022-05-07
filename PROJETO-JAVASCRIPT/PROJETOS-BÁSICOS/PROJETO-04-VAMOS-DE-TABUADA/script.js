function gerador() {
    var n = document.getElementById('tabuada')
    var tab = document.getElementById('seltab')
        
    if (n.value.length == 0) {
        console.log(`[ERRO] - Por Favor, digite um nº`)
    } else {
        var num = Number(n.value)
        var c = 01
        tab.innerHTML = ''
        do {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        } while (c <= 10) 
    }  
}
