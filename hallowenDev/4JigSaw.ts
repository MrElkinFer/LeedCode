function changeLock(current: string, target: string): number {
  const wheel = (actual: number, required: number): number => {
    let a = actual > required ? actual : required;
    //(9999,0000)
    return Math.abs(actual - required) <= 5
      ? Math.abs(required - actual)
      : Math.abs(10 - Math.abs(required - actual));
  };
  let answer = 0;
  for (let i = 0; i < 4; i++) {
    answer = answer + wheel(parseInt(current[i]), parseInt(target[i]));
    console;
  }

  return answer;
}

console.log(changeLock("9999", "0000"));
