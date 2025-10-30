function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

let haystack = "sadbutsad";
let needle = "sad";
console.log(strStr(haystack, needle));
