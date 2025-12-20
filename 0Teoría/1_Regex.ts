// para usar regex ejemplo:

// /^ : inicia la lectura de la expresión.
// $/ : fin de la expresión.
/*
const takeof = "2025*12*25@00|00|00 NP"; // Expresión a tratar

const regex1 = /^\d{4}\*\d{2}\*\d{2}\@\d{2}\|\d{2}\ NP$/; // regex para la expresión
*/

const texto = "--2025,12*31.00.00";

const regex = /^--(\d{4}),(\d{2})\*(\d{2})\.(\d{2})\.(\d{2})$/;

console.log(regex.test(texto)); // true
const match1 = texto.match(regex);

if (match1) {
  const [, year, month, day, hour, minute] = match1;
  console.log({ year, month, day, hour, minute });
}

const takeof = "2025*12*25@00|00|00 NP";
const regex1 = /^(\d{4})\*(\d{2})\*(\d{2})\@(\d{2})\|(\d{2})\|(\d{2})\ NP$/;

console.log(regex1.test(takeof));

const match = takeof.match(regex1);
if (match) {
  const [, year, month, day, hour, minute, second] = match;
  console.log({ year, month, day, hour, minute, second });
}
