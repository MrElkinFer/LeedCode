function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  let giftsArr: string[] = [];
  giftsToProduce.map((gift) => {
    for (let i = 0; i < gift.quantity; i++) {
      giftsArr.push(gift.toy);
    }
  });
  return giftsArr;
}

const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];

console.log(manufactureGifts(production1));
