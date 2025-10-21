function romanToInt(s: string): number {
  let roman: string[] = s.split("");
  let numero: number[] = [];
  let final: number[] = [];
  let resultado: number = 0;

  const referencias: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i in roman) {
    numero.push(referencias[roman[i]]);
  }

  numero.map((num, index) => {
    num >= numero[index === numero.length - 1 ? index : index + 1]
      ? final.push(num)
      : final.push(-num);
  });

  for (let o in final) {
    resultado = resultado + final[o];
  }

  return resultado;
}

console.log(romanToInt("MCMXCIX"));
console.log(romanToInt("MCDXCII"));
console.log(romanToInt("XLCDIID"));
