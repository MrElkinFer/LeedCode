function surviveRoulette(n: number, k: number): number {
  if (n === 1) {
    return 0;
  }

  let circle = Array.from({ length: n }, (_, i) => i);
  let ref = 0;

  do {
    ref=circle[k]
    
    circle.splice(k - 1, 1);
  } while (circle.length !== 1);

  console.log(circle);
  return 0;
}

//surviveRoulette(7, 5);

let array1 = [1, 2, 3, 5];
let array2 = [1, 2, 3, 4];

console.log(array1.filter((e) => !array2.includes(e)));
