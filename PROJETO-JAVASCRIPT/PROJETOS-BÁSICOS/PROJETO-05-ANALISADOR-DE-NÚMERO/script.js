var number = document.getElementById('numero')
var caixaadd = document.getElementById('caixaadd')
var global = [] 

function duplicado(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function numcerto(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    
    if (!duplicado(number.value, global) && numcerto(number.value)) {
        global.push(Number(number.value))
        var caixa = document.createElement('option')
        caixa.text = `O valor ${number.value} foi adicionado`
        caixaadd.appendChild(caixa)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] - Valor inválido ou já na encontrado na lista')
    }


    number.value = ''
    number.focus()
    
    
}


function finalizar() {
    var res = document.getElementById('res')
    if (global == '') {
        window.alert('[ERRO] - Sem dados para poder finalizar!')
    } else {
        var total = global.length
        global.sort()
        var maior = global[total - 1]
        var menor = global[0]
        var soma = 0
        for(var c = 0; c < global.length; c++) {
            soma += global[c];
        }

        var media = soma / global.length

        res.innerHTML = `O total de números cadastrados foram de: ${total}<br>`
        res.innerHTML += `O maior valor informado foi: ${maior}<br>`
        res.innerHTML += `O menor valor informado foi: ${menor}<br>`
        res.innerHTML += `Somando todos os valores, temos: ${soma}<br>`
        res.innerHTML += `A media dos valores digitados é: ${media}<br>`
    }
}