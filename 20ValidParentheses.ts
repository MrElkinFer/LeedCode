function isValid(s: string): boolean {
  const paires: { [key: string]: number } = {
    "(": 2,
    "{": 3,
    "[": 5,
    ")": -2,
    "}": -3,
    "]": -5,
  };
  // Ecxepciones rapidas
  if (s.length % 2 === 1 || paires[s[0]] < 0 || paires[s[s.length - 1]] > 0) {
    console.log("Aqui 1");
    return false;
  }

  let saved: string = "";
  let equalsaver = 0;
  //ciclo del string s:
  for (let i = 0; i < s.length; i++) {
    equalsaver = equalsaver + paires[s[i]];
    i == 0 ? (saved = s[i]) : saved;
    let valuei = paires[s[i]];
    let value1i = i === 0 ? 0 : paires[s[i - 1]];
    let valueoflastsaved = paires[saved[saved.length - 1]];
    if (i !== 0 && valueoflastsaved / valuei > 0) {
      saved = saved + s[i];
    }
    if (
      i !== 0 &&
      valueoflastsaved / valuei < 0 &&
      valueoflastsaved === -valuei
    ) {
      saved = saved.substring(0, saved.length - 1);
    }
    if (
      i !== 0 &&
      valueoflastsaved / valuei < 0 &&
      valueoflastsaved !== -valuei
    ) {
      console.log("Aqui 2");
      return false;
    }
  }
  if (equalsaver !== 0) {
    console.log("Aqui 3");
    return false;
  }
  console.log("Aqui 4");
  return true;
}
console.log(isValid("(())[]{}{{{}")); // false
console.log(isValid("(())]{}{}{{}")); // false/
console.log(isValid("(()[]{})")); // true
console.log(isValid("([)]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("())))")); // false
console.log(isValid("[([]])")); //false <-- AQUÍ
console.log(isValid("{}[()}(}[]")); // false
/*
function isValid(s: string): boolean {
  //Claves de valor numerico para operaciones aritméticas:
  const paires: { [key: string]: number } = {
    "(": -2,
    "{": -31,
    "[": -503,
    ")": 2,
    "}": 31,
    "]": 503,
  };
  // Retorna false si: 1° si el string es impar 2°arranca en un signo de cierre 3° si finaliza en uno de apertura
  if (s.length % 2 === 1 || paires[s[0]] > 0 || paires[s[s.length - 1]] < 0) {
    console.log("1 aquí");
    return false;
  }
  let comp: string = "";
  let equilibrium: number = 0;
  let keycomp: number = 0;

  // Recorriendo el string:

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (paires[s[i]] < 0 && paires[s[i + 1]] > 0) {
      if (paires[s[i]] !== -paires[s[i + 1]]) {
        console.log("2 aquí");
        return false;
      }
      keycomp = -paires[s[i]];
      comp === undefined
        ? (comp = "")
        : Object.keys(paires).find((key) => paires[key] === keycomp);
    }
    // si se abre y el siguiente también es abierto guarda
    if (paires[s[i]] + equilibrium > equilibrium + paires[s[i + 1]]) {
      keycomp = -paires[s[i + 1]];
      comp = Object.keys(paires).find((key) => paires[key] === keycomp) + comp;
      //comp = s[i + 1] + comp;
    } else {
      if (s.substring(i - comp.length - 1, i - 1) !== comp) {
        console.log("2.1 Aquí");
        return false;
      }
      comp = "";
    }

    equilibrium = equilibrium + paires[s[i]];
    if (equilibrium > 0) {
      return false;
    }
  }
  // Si las sumas y restas no dan cero no hay equilibrio y se retorna false
  if (equilibrium !== 0) {
    console.log("3 aquí");
    return false;
  }
  console.log("4 aquí true");
  return true;
}
/*


//si el valor de cambia a cerrado guardo en string "comp" hasta  que cambie a abierto o termine y combaro en simetría con el que debería ser el espejo, si es verdadero sigo si es falso paro:
// ej si false: [({}]) :--> en } cambia a cerrado --> hitero hasta que: "comp" = "}])" --> invierto --> "invcomp"=")]}" -->comparo "invcomp" con el substring desde donde cambio de abierto a  cerrado "invcomp"==="substring"? sigo: return false;

/*function isValid(s: string): boolean {
  const paires: { [key: string]: number } = {
    "(": -2,
    "{": -3,
    "[": -5,
    ")": 2,
    "}": 3,
    "]": 5,
  };
  if (s.length % 2 === 1 || paires[s[0]] > 0 || paires[s[s.length - 1]] < 0) {
    return false;
  }
  let openstring: number[] = [];
  let closestrings = [];

  for (let i = 0; i < s.length; i++) {
    if (paires[s[i]] < 0) {
      openstring.push(-paires[s[i]]);
    } else {
      if (paires[s[i]] === -paires[s[i - 1]]) {
        return false;
      }
      closestrings = openstring.reverse();

      let a = 0;
      console.log(closestrings);
      for (let j = 0; j < closestrings.length; j++) {
        if (
          i + closestrings.length > s.length ||
          paires[s[i + closestrings.length]] > 0
        ) {
          return false;
        }

        if (closestrings[a] !== paires[s[i + j]]) {
          return false;
        }
        a = a + 1;
      }
      openstring = [];

      i = i + closestrings.length - 1;
    }
  }

  return true;
}
*/
