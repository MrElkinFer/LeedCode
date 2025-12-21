function drawGift(size: number, symbol: string): string {
  if (size === 1) return "";
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i === 0 || i == size - 1) {
      result = result + symbol.repeat(size) + (i === 0 ? "\n" : "");
    } else {
      result = result + symbol + " ".repeat(size - 2) + symbol + "\n";
    }
  }
  return result;
}

console.log(drawGift(1, "+"));

///___________________ DESCRIPCIÓN _____________________
/*
En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

🧩 Ejemplos
const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###


const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--


const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
*/
