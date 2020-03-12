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

const inorderTraversal = (root) => {
  let result = [];

  const innerRec = (node) => {
    if (node === null) {
      return;
    }

    node.left();
    result.push(node.val)
    node.right();
  }

  innerRec(root);
  return result;
}