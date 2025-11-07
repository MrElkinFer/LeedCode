/*
// Prueba sin el método date: resulta que no cumple con fechas anteriores a el 15 de octubre de 1582.
function myersCalendar(year: number): string[] {
  if (year % 1 !== 0 || year < 1582) {
    return [];
  }

  let juliandata = 814 + (year - 1585) * 365 + Math.floor((year - 1585) / 4);
  let startdayperyear = juliandata % 7;
  let daypermonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let accumulate = 0;
  let jasondays = [];
  year % 4 === 0 ? (daypermonth[2] = 29) : daypermonth;

  for (let i = 0; i < daypermonth.length; i++) {
    accumulate = accumulate + daypermonth[i];
    if ((startdayperyear + 13 + accumulate) % 7 === 2) {
      jasondays.push(`${year}-${(i + 1).toString().padStart(2, "0")}-13`);
    }
    if (i + 2 === 11) {
      jasondays.push(`${year}-10-31`);
    }
  }
  return jasondays;
}
*/

function myersCalendar(year: number): string[] {
  if (year % 1 !== 0 || year < 1582) {
    return [];
  }
  let result: string[] = [];
  for (let month = 0; month < 13; month++) {
    let friday = new Date(year, month, 13);
    if (friday.getDay() === 5) {
      const format = friday.toISOString().split("T")[0]; // Borrar: combierte de tipo date a string y elimina la T.
      result.push(format);
    }
    if (month === 9) {
      result.push(`${year}-10-31`);
    }
  }

  return result;
}
console.log(myersCalendar(2020));
