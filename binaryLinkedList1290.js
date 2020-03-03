var getDecimalValue = function(head) {
  let length = 0, current = head, total = 0;
  
  while (current !== null) {
      length++;
      current = current.next;
  }
  
  current = head;
  let power = length - 1;
  while (current !== null) {
      if (current.val === 1) {
          total += 2**power;
      }
      power--;
      current = current.next;
  }
  
  return total;
};