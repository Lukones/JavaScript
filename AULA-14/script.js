let amigo = {
    nome:'Lucas', 
    peso: 85, 
    sexo: 'M',
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)