/// Ayudado con Claude

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
    return list2;
  }
  if (list2?.val === undefined || -100 > list2.val || 100 < list2.val) {
    return list1;
  }

  const answer = new ListNode();
  let cola: ListNode = answer;

  while (list1 !== null && list2 !== null) {
    if (list2.val <= list1.val) {
      cola.next = list2;
      list2 = list2?.next;
    } else {
      cola.next = list1;
      list1 = list1?.next;
    }

    cola = cola.next;
  }
  cola.next = list1 !== null ? list1 : list2;

  return answer.next;
}

const anchor = new ListNode();
let tail = anchor;
while (list1 !== null && list2 !== null) {
  if (list1.val <= list2.val) {
    tail = list1;
    list1 = list1.next;
  } else {
    tail = list2;
    list2 = list2.next;
  }
  tail = tail.next;
}
tail.next = list1 !== null ? list1 : list2;
return anchor.next;

let lis14 = new ListNode(55, null);
let lis12 = new ListNode(23, lis14);

let lis24 = new ListNode(14, null);
let lis23 = new ListNode(8, lis24);

let list2 = new ListNode(3, lis23);
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
