/*
  Write code to partition a Linked List around a value x, such that all nodes 
  less come before and all nodes >= come after
*/

const partition = (list, val) => {
  let l1 = l2 = l1Tail = l2Tail = null;
  let current = list;

  while (current !== null) {
    if (current.val >= val) {
      if (l2 === null) {
        l2 = current;
        l2Tail = current;
      } else {
        l2Tail.next = current;
        l2Tail = current;
        l2Tail.next = null;
      }
    } else {
      if (l1 === null) {
        l1 = current;
        l1Tail = current;
      } else {
        l1Tail.next = current;
        l1Tail = current;
      }
    }
    current = current.next;
  }

  l1Tail.next = l2;
  return l1;
}