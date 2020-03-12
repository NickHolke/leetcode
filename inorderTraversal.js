const inorderTraversal = (root) => {
  let result = [], stack = [], curr = root;
  
  while (stack.length || curr !== null) {
      while(curr !== null) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
  }
  
  return result;
}