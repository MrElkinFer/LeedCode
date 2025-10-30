//Medium
function divide(dividend: number, divisor: number): number {
  //manejar negativos
  if (dividend === -2147483648 && divisor === 1) {
    return -2147483648;
  }
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 1 || divisor === -1) {
    if (dividend >= 2 ** 31) {
      dividend = 2 ** 31 - 1;
    }
    if (dividend <= -(2 ** 31)) {
      dividend = -(2 ** 31 - 1);
    }

    return divisor < 0 ? -dividend : dividend;
  }

  let ndivisor = 0;
  let ndividend = 0;
  let quotient = 0;
  let div = 0;
  let ciclo = true;
  let pow = 0;
  let cons = 0;

  dividend < 0 ? (ndividend = -dividend) : (ndividend = dividend);
  divisor < 0 ? (ndivisor = -divisor) : (ndivisor = divisor);

  for (let i = 0; quotient <= ndividend; i++) {
    div = ndivisor ** i;
    pow = ndivisor ** (i - 1);
    ciclo = true;
    if (quotient + ndivisor ** (i + 1) > ndividend) {
      if (div !== 1) {
        for (let j = 1; ciclo; j++) {
          /*if (quotient + div >= 2 ** 31 - 1) {
            //aquí
            console.log("revienta");
            return divisor < 0 ? -(2 ** 31 - 1) : 2 ** 31 - 1;
          }*/
          quotient = quotient + div;

          cons = cons + pow;
          console.log(cons);
          console.log("quotient " + quotient);

          //1073741823;
          if (quotient + div > ndividend) {
            ciclo = false;
            div = 0;
            i = 0;
            pow = 0;
          }
        }
      }
    }
  }
  dividend < 0 ? (cons = -cons) : cons;
  divisor < 0 ? (cons = -cons) : cons;
  return cons < 0 ? (cons = cons + 1) : (cons = cons - 1);
}

let dividend = 2147483647;
let divisor = 2;

console.log(divide(dividend, divisor));
//whiout / * %
