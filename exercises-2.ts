// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// Exercise 5
const revertText = (text: string = "") =>
  !text
    ? console.warn("You must enter text")
    : console.log(text.split("").reverse().join(""));

revertText("");
revertText("Hello how are you?");

// Exercise 6
const countWords = (text: string, word: string) =>
  !text
    ? console.warn("Please enter the text")
    : !word
      ? console.warn("Please type the word to count")
      : console.log(text.split(" ").filter(words => words === word).length);

countWords("", "pollo");
countWords("Lorem ipsum lala", "");
countWords("pollo arbejas pollo pollo", "pollo");

// Exercise 7
const isPalindromes = (text: string = "") =>
  !text
    ? console.warn("You must enter text")
    : console.log(text == text.toLowerCase().split("").reverse().join(""));

isPalindromes("salas");
isPalindromes("dog");
isPalindromes("545");
isPalindromes("25464");

// now with input of type number
const isPalindromesNum = (numero: number) => {
  const text = numero.toString();
  !text
    ? console.warn("You must enter some number")
    : console.log(text == text.split("").reverse().join(""));
};

isPalindromesNum(234);
isPalindromesNum(404);

// Exercise 8
const deletePath = (text: string = "", path: string = "") =>
  !text
    ? console.warn("Enter some text")
    : !path
      ? console.warn("You must enter the path to delete")
      : console.log(text.replace(new RegExp(path, "ig"), ""));

deletePath();
deletePath("xyz1, xyz2, xyz3, xyz4 y xyz5", "");
deletePath("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
deletePath("monochromatic, monopolio, monopatin mono", "mono");
