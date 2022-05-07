var agora = new Date()
var hora = agora.getHours()

var hr = 13
if (hora < 12 && hora >= 6) {
    console.log(`Agora são exatamente ${hora} horas da manhã!`)
    console.log('Bom dia!!!')
} else if (hora > 0 && hora < 6) {
    console.log(`Agora são exatamente ${hora} horas da madrugada!`)
    console.log('Boa Madrugada!!!')
} else if (hora > 18 && hora < 24) {
    console.log(`Agora são exatamente ${hora} horas da noite!`)
    console.log('Boa noite')
} else {
    console.log(`Agora são exatamente ${hora} horas da tarde!`)
    console.log('Boa tarde')
}
