var addTwoNumbers = function(l1, l2, carry = 0) {
  if (!l1 && !l2 && !carry) {
      return null;
  }
  
  let value = carry;
  
  if (l1) {
      value += l1.val;
  }
  
  if (l2) {
      value += l2.val;
  }
  
  let newNode = new ListNode(value % 10);
  
  newNode.next = addTwoNumbers(l1 ? l1.next : l1, 
                               l2 ? l2.next : l2, 
                               value >= 10 ? 1 : 0) 
      
  return newNode;
};