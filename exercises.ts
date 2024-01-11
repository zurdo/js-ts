// En este video te he preparado un par de ejercicios de lógica de programación en #JavaScript para que pongas en práctica tus conocimientos, los ejercicios a resolver son:

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// Exercise 1
const countCharacters = (text: string = "") =>
  !text
    ? console.warn("Please enter some text")
    : console.log(`The number of characters are ${text.length}`);

countCharacters();
countCharacters("Hello my name is Lean");

// Exercise 2
const trimText = (text: string = "", lenght: number) =>
  !text
    ? console.warn("Please enter some text")
    : lenght === undefined
      ? console.warn("Enter the trim lenght")
      : console.log(text.slice(0, lenght));

trimText("Fresh tomato", 7);
trimText("", 7);
// trimText("Fresh tomato");
// trimText();

// Exercise 3
const separateWords = (text: string = "", separator: string = "") =>
  !text
    ? console.warn("Please enter some text")
    : separator === undefined
      ? console.warn("You not type the separator character")
      : console.log(text.split(separator));

separateWords("Today is sunday and sunny", " ");
separateWords("", " ");
separateWords("Hello guys", "");

// Exercise 4
const repeatText = (text: string = "", quantity: number) => {
  if (!text) return console.warn("Please enter some text");
  if (quantity === undefined) return console.warn("Please enter the quantity");
  if (quantity <= 0) return console.error("You must enter a positive value");
  return console.log(text.repeat(quantity));
};

repeatText("", 4);
repeatText("Soy Leandro.", -34);
// repeatText("Soy Leandro.", undefined);
repeatText("Soy Leandro.", 4);
