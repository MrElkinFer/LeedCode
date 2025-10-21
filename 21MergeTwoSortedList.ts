// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  //en caso que alguna o ambas listas sean indefinidas o sus valores fuera de parámetros en la primera iteración:

  if (list1?.val === undefined || -100 > list1.val || 100 < list1.val) {
    console.log("1 Aquí: lista 1");
    return list2;
  }
  if (list2?.val === undefined || -100 > list2.val || 100 < list2.val) {
    console.log("2 Aquí: lista 2");
    return list1;
  }

  let answer = new ListNode();
  let ansval = null;
  let ansnext = null;
  let standby: ListNode = new ListNode();

  // se entablecen condiciones iniciales para el primer ciclo:
  if (list1.val >= list2.val) {
    ansval = list1.val;
    ansnext = list1.next;
    standby = list2;
  } else {
    ansval = list2.val;
    ansnext = list2.next;
    standby = list1;
  }

  answer.val = ansval; // paso 0 --> answer(ansval | null)

  //TODO: mirar como definir cuando next sea null en la última lista encadenada
  for (let i = 0; i < 50 || standby.next === null; i++) {
    if (ansnext === null) {
      ansnext.val = 1000;
      answer.next = new ListNode(1000, null);
    }

    // Nucleo:
    if (ansnext.val <= standby.val) {
      answer.next = ansnext;

      //answer.val = ansval;
      //answer.next = ansnext; //2
    } else {
      answer.val = ansval;
      answer.next = standby; //2
      standby = ansnext; //3
    }
    ansval = answer.val;
    ansnext = answer.next;

    //console.log(ansnext);
    //console.log(answer);
  }

  console.log("aquí");
  return answer;
}

let lis14 = new ListNode(5, null);
let lis12 = new ListNode(3, lis14);

let lis24 = new ListNode(4, null);
let lis23 = new ListNode(2, lis24);

let list2 = new ListNode(1, lis23);
let list1 = new ListNode(1, lis12);
//let list1 = null;
//let list2 = null;
//let list2 = new ListNode(0, null);
/*
let ans0 = new ListNode(undefined, null); // valor inicializado
ans0 = (list1.val, list2); // i==0 el val es de list1, pero el next es list2
*/
//list1 = [], list2 = []
//list1 = [], list2 = [0]
console.log(mergeTwoLists(list1, list2));

/*
    // Garantíza que siempre que los valores de list1 o list2 crecientes:
    if (ansval >= ansnext?.val || standby.val > standby.next?.val) {
      console.log("3 Aquí.");
      return answer;
    }*/
