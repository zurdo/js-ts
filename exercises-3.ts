// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const randomNumber = () =>
  console.log(Math.round(Math.random() * (600 - 501) + 501));

randomNumber();
randomNumber();

// Exercise 7
const isPalindromesNumber = (Number: number = 0) => {
  if (!Number) return console.warn("Please enter a number");
  if (typeof Number !== "number")
    return console.error(`${Number} is text, Please enter a number`);
  const textNumber = Number.toString();
  const reversedNumber = textNumber.split("").reverse().join("");
  textNumber === reversedNumber
    ? console.log(`The number ${Number} is Palindrome`)
    : console.log(`The number ${Number} is Not Palindrome`);
};

isPalindromesNumber(0);
isPalindromesNumber("llalalla");
isPalindromesNumber(5787);
isPalindromesNumber(343);
isPalindromesNumber(2000);

const factorial = (Number: number = 0) => {
  if (!Number) return console.error("Please enter a number");
  if (typeof Number !== "number")
    return console.error(`${Number} is text, Please enter a number`);
  if (Math.sign(Number) === -1)
    return console.error("Please enter a positive number");
  if (Number === 0) return console.error("The number cannot be negative");
  let result = 1;

  for (let i = Number; i > 1; i--) {
    result *= i;
    console.log(result);
  }
  console.log(result);
};

factorial();
factorial("5");
factorial(0);
factorial(-5);
factorial(5);
