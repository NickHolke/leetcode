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