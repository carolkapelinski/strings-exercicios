//Crie a const para a frase aqui
//a
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)


//b
const novaFrase = frase.replaceAll("verde" , "rosa").replaceAll("azul" , "laranja")

console.log(novaFrase)


//c
console.log("A nova frase inclui \"verde\"?" , novaFrase.includes("verde") , "\nE \"laranja\"?" , novaFrase.includes("laranja"))


//extra
const primeiraParteFrase = "Jorge tem uma casa verde e com portão azul, com os dizeres:"
const segundaParteFrase = "\"BOAS VINDAS, mas não deixe o gato sair\""

console.log(primeiraParteFrase , segundaParteFrase.toUpperCase())