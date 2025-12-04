/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/
//Primera solución 408/988 test
/*
function lengthOfLongestSubstring(s: string): number {
  let result: number = 0;
  let subs: string = "";
  for (let i = 0; i < s.length; i++) {
    if (!subs.includes(s[i])) {
      subs = subs + s[i];
      result < subs.length ? (result = subs.length) : result;
    } else {
      subs = s[i];
    }
  }

  return result;
}

let s = "dvdf";
*/

function lengthOfLongestSubstring(s: string): number {
  let result: number = 0;
  let subs: string = "";
  for (let i = 0; i < s.length; i++) {
    if (!subs.includes(s[i])) {
      subs = subs + s[i];
      if (result < subs.length) result = subs.length;
    } else {
      subs =
        subs.length === 1 ? (subs = "") : subs.slice(subs.indexOf(s[i]) + 1);
      subs = subs + s[i];
    }
  }

  return result;
}
//let s = "dvdf";
//let s = "aabaa!bbb";
let s = "aab";
console.log(lengthOfLongestSubstring(s));

//console.log(s.length);
