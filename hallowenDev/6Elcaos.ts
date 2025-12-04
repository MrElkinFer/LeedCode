/**Art the Clown 🤡 ha capturado a unas víctimas y las ha sentado en círculo 🎪, numeradas del 0 a N-1, siendo N el número de victimas.

Art, siendo un payaso metódico en su locura, decide hacer un "juego". Empieza en la posición 0 y cuenta K víctimas en sentido horario

(incluyendo a la persona actual en la cuenta). La víctima donde termina la cuenta es eliminada del círculo.

Luego, Art continúa contando K posiciones desde la siguiente persona viva. El proceso se repite hasta que solo queda una persona.

En su retorcida mente, Art quiere saber: ¿Quién será el último sobreviviente?

Implementa la función surviveRoulette(victims, count) que devuelve la posición de la última víctima que sobrevive.

Los parámetros de entrada son:

victims: Número total de víctimas (sentadas en posiciones 0 a n-1)
count: Número a contar para eliminar a la siguiente víctima */

console.log(surviveRoulette(5, 3));

function surviveRoulette(n: number, k: number): number {
  const circle = Array.from({ length: n }, (_, i) => 0 + i);
  let ref = 0;
  while (circle.length !== 1) {
    let salto = k - 1 + ref;
    if (salto >= circle.length) {
      salto = salto % circle.length;
    }
    circle.splice(salto, 1);
    ref = salto;
  }

  return circle[0];
}
