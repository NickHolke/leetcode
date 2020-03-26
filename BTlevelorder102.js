var levelOrder = function(root) {
  if (!root) return [];
  let q = [root], result = [];
  while (q.length) {
      let level = [], size = q.length;
      for (let i = 0; i < size; i++) {
          let curr = q.pop();
          if (curr.left !== null) {
              q.unshift(curr.left);
          }
          if (curr.right !== null) {
              q.unshift(curr.right);
          }
          level.push(curr.val);
      }
      result.push(level);
  }
  return result;
};