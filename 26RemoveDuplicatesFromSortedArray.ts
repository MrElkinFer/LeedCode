function removeDuplicates(nums: number[]): number {
  let count: number = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i];
      count += 1;
    }
  }

  return count;
}

let array = [1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8];
console.log(removeDuplicates(array));
