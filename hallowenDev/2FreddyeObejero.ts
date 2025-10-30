function countSheep(letters: string): number {
  let sheeps: { [key: string]: number } = {
    s: 0,
    h: 0,
    e: 0,
    p: 0,
  };
  letters = letters.toLowerCase();

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in sheeps) {
      if (letters[i] !== "e") {
        sheeps[letters[i]] = sheeps[letters[i]] + 1;
      } else {
        sheeps[letters[i]] = sheeps[letters[i]] + 0.5;
      }
    }
  }

  if (sheeps.e % 1 === 0.5) {
    sheeps["e"] = sheeps["e"] - 0.5;
  }

  return Math.min(...Object.values(sheeps));
}

console.log(countSheep("sheepxsheeepy"));
