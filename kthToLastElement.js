/*
Implement an algorithm to find the kth to last element of a singly
linked list
*/

const kthElement = (list, k) => {
  let p1 = p2 = list;
  for (let i = 0; i < k; i++) {
    if (p1 === null) {
      return null;
    }
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}


// const kthElement = (list, k) => {
//   let length = 0;
//   let current = list;
//   while (current !== null) {
//     length++;
//     current = current.next;
//   }

//   if (k > length || k < 0) {
//     return null;
//   }
//   let targetIdx = length - k;
//   let currIdx = 0;
//   current = list;

//   while (current !== null) {
//     if (currIdx === targetIdx) {
//       return current;
//     }
//     current = current.next;
//     currIdx++;
//   }
// }