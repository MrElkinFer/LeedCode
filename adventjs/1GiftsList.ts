function filterGifts(gifts: string[]): string[] {
  return gifts.filter((gift) => !gift.includes("#"));
}

const regalos = ["Buenos consejos", "compu#tadora", "medias", "ca#sa"];
console.log(filterGifts(regalos));
