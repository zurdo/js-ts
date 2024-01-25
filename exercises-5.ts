// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const convertBinaryToDecimal = (number: number, base: number): void => {
  if (number === undefined) return console.warn("Enter a number");
  if (typeof number !== "number") return console.warn("Enter a number not a string");
  if (base === undefined) return console.warn("Enter a base number");
  if (typeof base !== "number") return console.warn("Enter a base number not a string");

  if (base === 2) {
    return console.log(`${number} base ${base} = ${parseInt(number.toString(), base)} base 10`);
  } else if (base === 10) {
    return console.log(`${number} base ${base} = ${number.toString(base)} base 2`);
  }
};

// convertBinaryToDecimal();
// convertBinaryToDecimal("2");
// convertBinaryToDecimal(100);
// convertBinaryToDecimal(100, "2");
// convertBinaryToDecimal(100, 2);
// convertBinaryToDecimal(101, 2);
// convertBinaryToDecimal(4, 10);
// convertBinaryToDecimal(114, 10);

const applyDiscount = (original: number, discount: number): void => {
  if (original === undefined) return console.warn("Enter a number");
  if (original === 0) return console.warn("Price cannot be 0");
  if (Math.sign(original) === -1) return console.warn("Enter a positive number");
  if (typeof original !== "number") return console.warn("Enter a number not a string");
  if (Math.sign(discount) === -1) return console.warn("Discount cannot be negative");

  console.log(`${original} - ${discount}% = ${original - (original * discount) / 100}`);
};

// applyDiscount();
// applyDiscount(0);
// applyDiscount(1000, "20");
// applyDiscount("1000", 20);
// applyDiscount(-1000, 20);
// applyDiscount(1000, -20);
// applyDiscount(1000, 20);

const howManyYears = (date: Date) => {
  const nowMinusDate = new Date().getTime() - date.getTime();
  const msYear = 1000 * 60 * 60 * 24 * 365;
  const humanYear = Math.floor(nowMinusDate / msYear);

  return Math.sign(humanYear) === -1
    ? console.log(`Remains ${Math.abs(humanYear)} years to ${date.getFullYear()}`)
    : console.log(`${humanYear} years have passed since ${date.getFullYear()}`);
};

// howManyYears(new Date(2034, 0, 8));
// howManyYears(new Date(2004, 5, 8));
