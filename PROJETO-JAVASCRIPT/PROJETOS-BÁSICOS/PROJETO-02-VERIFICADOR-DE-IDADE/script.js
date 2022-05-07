function verificador() {
    var nascimento = document.getElementById('nasci').value
    var anot = new Date()
    var ano = anot.getFullYear()
    var resultado = ano - nascimento

    var genero = document.getElementsByName('genero')

    if (nascimento.length == 0 || nascimento > ano || resultado >= 120) {
        window.alert('[ERRO] - Verifique os dados e tente novamente')
    } else if (genero[0].checked) {

        txt.innerHTML = `Detectamos um Homem com ${resultado} anos`
        if (resultado <= 4 && resultado >= 0) {
            ft.src = '4-anos-m.png'
        } else if (resultado >= 5 &&  resultado <= 12) {
            ft.src = '12-anos-m.png'
        } else if (resultado >= 13 && resultado <= 18) {
            ft.src = '18-anos-m.png'
        } else if (resultado >= 19 && resultado <= 30) {
            ft.src = '30-anos-m.png'
        } else if (resultado >= 31 && resultado <= 45) {
            ft.src = '45-anos-m.png'
        } else if (resultado >= 46) {
            ft.src = '60-anos-m.png'
        }

    } else if (genero[1].checked) {
        txt.innerHTML = `Detectamos uma Mulher com ${resultado} anos`
        if (resultado <= 4 && resultado >= 0) {
            ft.src = '4-anos-f.png'
        } else if (resultado >= 5 &&  resultado <= 12) {
            ft.src = '12-anos-f.png'
        } else if (resultado >= 13 && resultado <= 18) {
            ft.src = '18-anos-f.png'
        } else if (resultado >= 19 && resultado <= 30) {
            ft.src = '30-anos-f.png'
        } else if (resultado >= 31 && resultado <= 45) {
            ft.src = '45-anos-f.png'
        } else if (resultado >= 46) {
            ft.src = '60-anos-f.png'
        }
    } 


    
    

    




}