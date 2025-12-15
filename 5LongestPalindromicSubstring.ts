import { subscribe } from "diagnostics_channel";

function longestPalindrome(s: string): string {
  let rango = 1;
  let lrang = 0;
  let subpal = "";
  for (let i = 1; i < s.length; i++) {
    if (
      s[i + rango] === s[i - rango] &&
      i + rango <= s.length - 1 &&
      i - rango >= 0
    ) {
      if (s.substring(i - rango, rango + 1 + i).length > subpal.length) {
        subpal = s.substring(i - rango, rango + i + 1);
      }
      i = i - 1;
      rango = rango + 1;
    }

    if (
      s[i - lrang] === s[i + lrang + 1] &&
      s[i - 1] !== s[i + 1] &&
      i - lrang >= 0 &&
      i + lrang + 1 !== s.length - 1
    ) {
      console.log(s.substring(i - lrang, i + lrang + 2));
      if (s.substring(i - lrang, i + lrang + 2).length > s.length) {
        subpal = s.substring(i - lrang, i + lrang + 2);
      }
      i = i - 1;
      lrang = lrang + 1;
    }
  }

  rango = 1;
  lrang = 0;

  if (subpal.length === s.length) return subpal.substring(1, subpal.length - 1);

  return subpal;
}

//let pal = "bnmabamnb";
//let pal = "123321";
let pal = "123443214";

console.log(longestPalindrome(pal));
