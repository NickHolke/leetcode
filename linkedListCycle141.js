var hasCycle = function(head) {
  let pointer1 = head, pointer2 = head;
  
  while (pointer1 !== null && pointer2 !== null && pointer2.next !== null) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next.next;
      if (pointer1 === pointer2) {
          return true;
      }
  }
  
  return false;
};