// 

var a = [
    9,
    8,
    10
]

console.log('Teste 01: ', a)
console.log('Teste 02: ', a[0])
console.log('Teste 03: ', a[1])
console.log('Teste 04: ', a[2])

a[3] = 6 

console.log('Teste 05: ', a)

a.push(7)

console.log('Teste 06: ', a)

console.log('Teste 07: ', `A array tem ${a.length} elementos!`)

a.sort()
console.log('Teste 08: ', a)

a.sort()
a.push(3)
console.log('Teste 09: ', a)


console.log(`Usando WHILE: (${a}) `)
var c = 0
while (c < a.length) {
    console.log(a[c])
    c++
}

console.log(`Usando FOR: (${a}) `)

for(var pos = 0; pos < a.length; pos++) {
    console.log(a[pos])
}

console.log(`Usando FOR IN: (${a}) `)
for(var pos in a) { /* Só funciona para ARRAYS*/
    console.log(`${a[pos]}`)
}

console.log('-----------------------------------------------------')

console.log(a.indexOf(2)) // Caso não existir o nº ele retorna -1
console.log('Está na posição: ', a.indexOf(7))
console.log(a[a.indexOf(7)]) 