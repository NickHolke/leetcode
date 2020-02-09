// Check if Linked list is a palindrome

const palindrome = (head) => {
  let p1Prev = null, p1 = head, p1Next;
  let p2 = head;

  while (p2.next !== null || p2 !== null) {
    p1Next = p1.next;
    p1.next = p1Prev;
    p1Prev = p1;
    p1 = p1Next;
    p2 = p2.next.next;
  }

  if (p2 === null) {
    p2 = p1.prev;
  } else {
    p1 = p1.prev;
  }

  while (p1 !== null) {
    if (p1.val !== p2.val) {
      return false
    }
    p1=p1.next;
    p2=p2.next;
  }
  return true;
}