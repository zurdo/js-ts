// En este video te he preparado un par de ejercicios de lógica de programación en #JavaScript para que pongas en práctica tus conocimientos, los ejercicios a resolver son:

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// Exercise 1
const CountCharacters = (text: String) =>
  console.log(`the number of characters are ${text.length}`);

CountCharacters("Hola me llamo Lean");

// Exercise 2
const TrimText = (text: String, characters: number) =>
  console.log(text.slice(0, characters));

TrimText("Pollo al horno", 7);

// Exercise 3
const SeparateWords = (text: String) => console.log(text.split(" "));

SeparateWords("Hoy es un día con mucho viento");

// Exercise 4
const RepeatText = (text: String, quantity: number) =>
  console.log(text.repeat(quantity));

RepeatText("Soy Leandro.", 4);
