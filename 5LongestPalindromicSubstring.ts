function longestPalindrome(s: string): string {
  let len = s.length;
  if (len <= 2) {
    if (len === 2 && s[0] !== s[1]) {
      return s[0];
    } else {
      return s;
    }
  }
  let rango = 1;
  let lrang = 0;
  let indx = 1;
  let subpal = "";
  let result = "";
  let j = false;
  for (let i = 1; i < len; i++) {
    if (
      s[i + rango] === s[i - rango] &&
      i + rango <= len - 1 &&
      i - rango >= 0
    ) {
      if (indx !== i) {
        if (result.length < subpal.length) {
          result = subpal;
          subpal = "";
        }
      }
      if (s.substring(i - rango, rango + 1 + i).length > result.length) {
        subpal = s.substring(i - rango, rango + i + 1);
        result = subpal;
      }
      j = true;
      rango = rango + 1;
    }
    if (
      s[i - lrang - 1] === s[i + lrang] &&
      i - lrang - 1 >= 0 &&
      i + lrang < len
    ) {
      if (indx !== i) {
        if (result.length < subpal.length) {
          result = subpal;
          subpal = "";
        }
      }

      if (s.substring(i - lrang - 1, i + lrang + 1).length > result.length) {
        subpal = s.substring(i - lrang - 1, i + lrang + 1);
        result = subpal;
      }
      j = true;
      lrang = lrang + 1;
    }
    if (!j) {
      if (result.length < subpal.length) {
        result = subpal;
      }
      rango = 1;
      lrang = 0;
    }
    if (j) {
      i = i - 1;
      j = false;
    }
  }
  rango = 1;
  lrang = 0;
  if (result === "" && subpal === "") return s[0];
  return result;
}

//let pal = "bnmabamnb"; // Parcial, revisar límites en impares
let pal = "123321"; // Parcial, revisar límites en pares
//let pal = "aaa";

console.log(longestPalindrome(pal));
