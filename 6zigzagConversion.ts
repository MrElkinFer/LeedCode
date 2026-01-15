function convert(s: string, numRows: number): string {
  let len = s.length;
  let inter = numRows - 2;
  let lrow = 0;
  let result = "";
  let res = len % (numRows + inter);
  let colums = Math.floor(len / (numRows + inter));

  if (res > numRows) lrow = lrow + (res - numRows);
  lrow = lrow + colums + inter * colums;
  if (res > 0) {
    colums = colums + 1;
    lrow = lrow + 1;
  } // se incrementa en uno si hay residuo

  if (len <= numRows) {
    // caso en el que s.length es menor que numRows:
    for (let i = 0; i < len; i++) {
      i !== len - 1
        ? (result = result + s[i] + "\n")
        : (result = result + s[i]);
    }
  }
  console.log("Letras: " + len);
  console.log("Residuo: " + res);
  console.log("Columns: " + colums);
  console.log("Lrows: " + lrow);

  return result;
}

let s = "FernandoArismendy";
let numRows = 4;

console.log(convert(s, numRows));
