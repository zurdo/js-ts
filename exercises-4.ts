// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// Exercise 12
const esPrimo = (num: number | undefined) => {
  if (num === undefined) return console.error("Please enter a number");
  if (typeof num !== "number")
    return console.error(`${num} is text, Please enter a number`);
  if (Math.sign(num) === -1)
    return console.error("Please enter a positive number");
  if (num === 1) return console.error("Number cannot be 1");
  if (num === 0) return console.error("Number cannot be 0");

  let divisible = false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.info(`${num} is not a prime number`)
    : console.info(`${num} is a prime number`);
};

esPrimo(undefined);
esPrimo(0);
esPrimo(1);
esPrimo(-13);
esPrimo(83);
esPrimo(82);
esPrimo(7);

// Exercise 13
const isOddOrEven = (num: number | undefined) => {
  if (num === undefined) return console.error("Please enter a number");
  if (typeof num !== "number")
    return console.error(`Please enter a number (${num} is string)`);

  num % 2 === 0
    ? console.info(`${num} is an odd number`)
    : console.info(`${num} is an even number`);
};
isOddOrEven(3);
isOddOrEven(21);
isOddOrEven(0);
isOddOrEven(2);

// Exercise 14
const convertGrades = (
  num: number | undefined,
  unity: string | undefined
): void => {
  if (num === undefined) return console.error("Please enter a number");
  if (!unity) return console.error("Please enter the type of grades");
  if (typeof num !== "number")
    return console.error(`${num} is text, Please enter a number`);
  if (unity.length !== 1 || !/^[cfCF]$/.test(unity))
    return console.error("Unity not valid");
  unity.toLowerCase() === "c"
    ? console.info(
        `${num}° Celsius are ---> ${Math.round(num * 1.8 + 32)}° Fahrenheit`
      )
    : console.info(
        `${num}° Fahrenheit are ---> ${Math.round((num - 32) / 1.8)}° Celsius`
      );
};

convertGrades(0, "c");
convertGrades(32, "C");
convertGrades(100, "f");
