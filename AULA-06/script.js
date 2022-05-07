/* DOM - Document Object Model */
/* 
O que é? Conjunto de objetos dentro do seu navegador, apenas dentro jo JS no navegador, 
abaixo segue uma arvaore DOM

*/
/* Árvore DOM 

                  window
                    ||
      location - document (parent) - history
                    ||
                   html (parent) - (child)
                    ||
            head     - body (child)
             ||         ||
         meta - title| h1 - p - p - div
                                ||
                              strong
*/

/* window.document.write('Olá, Mundo!') // Mostra na tela

window.document.write(window.document.characterSet) //Mostra o UTF de criptografia do cod

window.document.write(window.navigator.appName) // Mostra o nome do Navegador

window.document.write(window.document.URL) /// Mostra a URL que estou usando

window.document.write(window.document.URL) /// Mostra a URL que estou usando
 
/*
Para selecionar usamos o objetos usando: MARCA, ID, NOME, CLASSE, SELETOR

Marca - getElementsByTagName() - usando essa seleção você pode selecionar varias tag
Id -  getElementById
Nome - getElementsByName
Classe - getElementsByClassName
Seletor - querySelector() / querySelectorAll()

*/


// Usando o getElementsByTagName:
var corpo = document.body
var p1 = document.getElementsByTagName('p')[0]
document.body.style.color = 'white'
document.body.style.background = 'blue'
document.write('Está escrito: ' + p1.innerText) // innerText traz somente o texto - innerHTML traz texto e suas formatações

// Usando o getElementById

var p2 = document.getElementById('T1')
p2.style.background = 'green'

// Usando o querySelector() / querySelectorAll()

var p3 = document.querySelector('div#T1')
p3.style.color = 'black'
p3.style.background = 'white'
































