/* Pergunta o nome:*/
var nome = window.prompt('Qual é seu nome?')
/* length() vai contar quantos caracteres tem:*/
document.write(`Olá, <strong>${nome}</strong> Seu nome tem ${nome.length} letras <br>`)
/* toLocaleUpperCase() vai deixar tudo em maiúscula:*/
document.write(`Seu nome em maiúsculo é ${nome.toLocaleUpperCase()} <br>`)
/* toLocaleLowerCase() vai deixar tudo em minúscula:*/
document.write(`Seu nome em minúscula é ${nome.toLocaleLowerCase()}`)
/* toFixed() vai acrescentar mais casas decimais depois do ponto*/
var number = Number.parseInt(window.prompt('Digite um número: '))
document.write(`(${number})Acrescentamos 2 casas decimais depois do ponto: ${number.toFixed(2)} <br>`)
/* toLocaleString vai converter o valor para o tipo de moeda que queira apresentar */
n1 = 2354.56
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
