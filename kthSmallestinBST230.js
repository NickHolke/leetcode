var kthSmallest = function(root, k) {
  let result = null, count = k;
  let innerRec = (node) => {
      if (result === null && node.left !== null) {
          innerRec(node.left, count);
      }
      count--;
      if (count === 0) {
          result = node.val;
          return;
      }
      if (result === null && node.right !== null) {
          innerRec(node.right, count);
      }
  }
  innerRec(root);
  return result;
  
};

const kthSmallest = (root, k) => {
  let stack = [];
  while (root !== null) {
      stack.push(root);
      root = root.left;
  }
  
  while (k !== 0) {
      let curr = stack.pop();
      k--;
      if (k === 0) {
          return curr.val;
      }
      
      let right = curr.right;
      while (right !== null) {
          stack.push(right);
          right = right.left;
      }
  }
}