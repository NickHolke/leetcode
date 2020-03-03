var rangeSumBST = function(root, L, R) {
  let sum = 0, children = [root], current;
  
  while (children.length) {
      current = children.pop();
      if (current === null) {
          continue;
      }
      
      if (current.val >= L && current.val <= R) {
          sum += current.val;
          children.unshift(current.left);
          children.unshift(current.right);
      }
      
      if (current.val < L) {
          children.unshift(current.right)
      }
      
      if (current.val > R) {
          children.unshift(current.left)
      }
  }
  
  return sum;
};