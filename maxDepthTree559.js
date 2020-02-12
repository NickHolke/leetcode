var maxDepth = function(root) {
  if (root === null) return 0;
  let Q = [], depth = 0;
  Q.unshift(root);
  while (Q.length) {
      let size = Q.length;
      for (let i = 0; i < size; i++) {
          let current = Q.pop();
          for (let j = 0; j < current.children.length; j++) {
              Q.unshift(current.children[j]);
          }
      }
      depth++;
  }
  return depth;
};