// Exercise 18 - Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

let vocales = ["a", "e", "i", "o", "u"]

function contarVocales(word: string) {
  let voc = 0,
    con = 0
  word
    .trim()
    .split("")
    .forEach(letter => {
      if (vocales.includes(letter)) {
        voc++
      } else {
        con++
      }
    })
  return console.log(`En la palabra ${word} hay => Vocales: ${voc}, Consonantes: ${con}`)
}

contarVocales("hola mundo")
