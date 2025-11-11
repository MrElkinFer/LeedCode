function searchInsert(nums: number[], target: number): number {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  }
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  let min: number = 0;
  let max: number = nums.length - 1;
  const range = (): number => max - min;
  while (max !== min) {
    if (target < nums[Math.floor(min + range() / 2)]) {
      max = Math.floor(min + range() / 2); //0+1.5--> 1
    } else {
      min = min + Math.floor(range() / 2) + 1;
    }
  }

  return min;
}

let nums = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let target = 3;

console.log(searchInsert(nums, target));
