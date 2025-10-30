function translatePossessed(message: string) {
  if (message.trim() === "") {
    return "";
  }
  let newmessage = "";
  let wrd = "";
  let word = new Intl.Segmenter(undefined, { granularity: "grapheme" });

  let segment = Array.from(word.segment(message), (s) => s.segment);

  for (let i = 0; i < segment.length; i++) {
    if (segment[i] !== " " || i === segment.length - 1) {
      wrd = segment[i] + wrd;
      if (i === segment.length - 1) {
        newmessage = newmessage + wrd;
      }
    } else {
      newmessage = newmessage + wrd + segment[i];
      wrd = "";
    }
  }
  return newmessage;
}

let msm = "          ";
console.log(translatePossessed(msm));

let segment = Intl.Segmenter;

// Esta siguiente versión falló invertir los emoji y 3 pruebas secretaas:

/*function translatePossessed(message: string): string {
  let newmessage: string = "";
  let word: string = "";
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === " " || i === message.length) {
      i === message.length
        ? (newmessage = newmessage + word)
        : (newmessage = newmessage + word + message[i]);
      word = "";
    } else {
      word = message[i] + word;
    }
  }

  return newmessage;
}

let msm = "i yojne gnihctaw uoy";
console.log(translatePossessed(msm));
*/
