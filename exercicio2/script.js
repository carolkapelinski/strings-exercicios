const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.trim())

console.log("Quantidade de caracteres antes:" , minhaString.length)
console.log("Quantidade de caracteres depois:" , minhaString.trim().length)

const novaString = minhaString.replaceAll("________" , "sticioso")

console.log(novaString)

