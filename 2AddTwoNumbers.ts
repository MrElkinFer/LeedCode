class ListNode {
  lista: number[];
  valor: number;

  constructor(valor?: number, lista?: number[]) {
    this.valor = valor === undefined ? 0 : valor;
    this.lista = lista === undefined ? [] : lista;
  }

  invarraytonumber(): number {
    let resultado: number = 0;
    this.lista.map((element, index) => {
      resultado = resultado + element * 10 ** (index + 1);
    });
    return resultado;
  }

  numbertoinvarray(): number[] {
    let arreglo: number[] = [];
    let count: number = 1;
    let saved: number = 0;
    for (let i = 1; this.valor !== saved; i++) {
      count = count * 10;
      arreglo.push((((this.valor % count) - saved) / count) * 10);
      saved = this.valor % count;
    }
    return arreglo;
  }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): number[] {
  let sum: number = l1.invarraytonumber() + l2.invarraytonumber();
  let l3 = new ListNode(sum);
  return l3.numbertoinvarray();
}
