/*
  Given two singly linked lists, determine if they intersect. Return intersecting node.
*/

const getIntersection = (headA, headB) => {
  if (!headA || !headB) return null;
  let pA = headA, pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
}

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let length1 = 1, length2 = 1, difference;
  let tail1 = headA, tail2 = headB;
    
  while (tail1.next !== null) {
    tail1 = tail1.next;
    length1++;
  }

  while (tail2.next !== null) {
    tail2 = tail2.next;
    length2++;
  }

  if (tail1 !== tail2) {
    return null;
  }

  difference = Math.abs(length1 - length2);
  let p1 = headA, p2 = headB;

  if (length1 > length2) {
    while(difference > 0) {
      p1 = p1.next;
      difference--;
    }
  } else {
    while(difference > 0) {
      p2 = p2.next;
      difference--;
    }
  }
  while (p1 !== null) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  } 
};


// const intersection = (l1, l2) => {
//   let arr1 = [];
//   let current = l1;

//   while (current !== null) {
//     current.push(arr1);
//     current = current.next;
//   }

//   current = l2;
//   while (current !== null) {
//     if (arr1.indexOf(current) !== -1) {
//       return current;
//     }
//   }
//   return null;
// }