var isPalindrome = function(head) {
  let p1 = head, p1Temp, p1Prev = null, p2=head;
  while (true) {
      if (p2 === null) {
          p2 = p1Prev;
          break;
      }
      if (p2.next === null) {
          p1 = p1.next;
          p2 = p1Prev;
          break;
      }
      if (p2 === null) {
          p2 = p1Prev;
          break;
      }
      p2 = p2.next.next;
      p1Temp = p1;
      p1 = p1.next;
      p1Temp.next = p1Prev;
      p1Prev = p1Temp;
  }
  while (p1 !== null || p2 !== null) {
      if (p1.val !== p2.val) {
          return false
      }
      
      p1 = p1.next;
      p2 = p2.next;
  }
  return true;
};