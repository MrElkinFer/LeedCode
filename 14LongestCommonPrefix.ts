/*NOTAS:
La primera solución no funcionó: dio Time Limit Exceeded. Que en otras palabras habla de la ineficiencia en la optimización del código. */

/*
//Primera solución:
function longestCommonPrefix(strs: string[]): string {
  let splitworlds = [];
  let result: string[] = [];
  let o:string = ""
  for (let i in strs) {
    splitworlds.push(strs[i].split(""));
  }
  let letra: boolean = true;
  let count: number = 0;
  let inter: string[] = [];
  do {
    for (let i in splitworlds) {
      splitworlds[i][count] === splitworlds[splitworlds.length - 1][count]
        ? letra
        : (letra = false);
    }
    letra ? result.push(splitworlds[0][count]) : letra;

    count++;
  } while (letra == true);

  o = String(result.join(""));

  return o;
}
*/

/*
// Segunda solución: problemas de complejidad, no se ejecuta lo suficientemente rapido.
function longestCommonPrefix(strs: string[]): string {
  let result: string = "";
  let equal: boolean = true;
  //let count: number = 0;
  let array: number = 0;
  let letter: number = 0;

  /*

  for (let i in strs) {
    console.log(strs[i].split("")[count]);
    strs[i].split("")[count] === strs[strs.length - 1].split("")[count]
      ? equal
      : (equal = false);
    strs.length - 1 === Number(i) && equal
      ? result + strs[strs.length - 1].split("")[count]
      : false;
  }
    
  //console.log(    strs[array].split("")[letter] === strs[strs.length - 1].split("")[letter]  );

  do {
    strs[array].split("")[letter] === strs[strs.length - 1].split("")[letter]
      ? equal
      : (equal = false);
    console.log(
      `L58 : ${equal}  -> ${array} --> ${strs[array].split("")[letter]}`
    );
    equal && array === strs.length - 1
      ? (result = result + strs[strs.length - 1].split("")[letter])
      : equal;
    equal && array === strs.length - 1 ? letter++ : equal;
    array++;
  } while (equal);

  return result;
}
console.log(longestCommonPrefix(["sol", "descansar", "trabajo"])); //--> ""
//console.log(longestCommonPrefix(["decantado", "descansar", "trabajo"])); //--> ""
console.log(longestCommonPrefix(["decantado", "descansar", "detractor"])); //--> "de"

*/

function longestCommonPrefix(strs: string[]): string {
  let firstw: string[] = [];
  let result: string = "";
  //devolución directa
  if (strs[0] === "") {
    return result;
  }

  //En caso de que el arreglo solo tenga una palabra:
  if (strs.length === 1) {
    result = strs[0];
    return result;
  }

  // dividir la primera parte en letras como arreglo [¨decantado", ...] --> ["d","e",..,"o"]
  for (let i = 0; i < strs[0].length; i++) {
    firstw.push(strs[0][i]);
  }
  // ciclar comparando cada k-ésima letra de cada j-ésima palabra con la primera palabra (firstw) en su k-ésima letra
  for (let k = 0; k < firstw.length; k++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstw[k] !== strs[j][k]) {
        return result;
      }
    }
    // guardar si todo el ciclo coincide la misma letra o retornar hasta donde coinciden en un string,
    result = result + firstw[k];
  }
  return result;
}

console.log(longestCommonPrefix(["sol", "descansar", "trabajo"])); //--> ""
console.log(longestCommonPrefix(["decantado", "descansar", "trabajo"])); //--> ""
console.log(longestCommonPrefix(["decantado", "descansar", "detractor"])); //--> "de"

console.log(longestCommonPrefix(["a"])); //--> "de"
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); //--> "de"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); //--> "de"
