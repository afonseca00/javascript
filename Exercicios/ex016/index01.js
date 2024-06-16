let num = [5, 8, 2, 9, 3]
num[3] = 9
num.push(1) //automaticamente mete um numero no final
i = 0

console.log(num)
console.log(`O nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`) //tamanho
console.log(num.sort()) //ordena

let pos = num.indexOf(4)
if (pos > -1) {
    console.log(`O valor 8 esta na posição ${pos}`)
} else {
    console.log(`Esse valor não existe`)
}

