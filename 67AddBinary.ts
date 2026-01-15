function addBinary(a: string, b: string): string {
  let len: number = a.length >= b.length ? a.length : b.length;
  let result: string = "";
  let standby: string = "";

  if (a === "" && b === "") return "0";

  if (a.length < b.length) {
    a = "0".repeat(len - a.length) + a;
  }

  if (b.length < a.length) {
    b = "0".repeat(len - b.length) + b;
  }

  //console.log(a);
  //console.log(b);

  for (let i = len - 1; i >= 0; i--) {
    console.log(a[i]);
    console.log(b[i]);
    if (!((a[i] == "0" || a[i] == "1") && (b[i] == "0" || b[i] == "1")))
      return "";

    if (a[i] !== b[i]) {
      standby === "1" ? (result = "0" + result) : (result = "1" + result);
    } else {
      standby === "1" ? (result = "1" + result) : (result = "0" + result);
      a[i] === "1" ? (standby = "1") : (standby = "");
    }
  }

  standby === "1" ? (result = "1" + result) : result;

  return result;
}
console.log(addBinary("101", "100"));
