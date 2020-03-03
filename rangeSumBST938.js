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

const rangeSumBST = (root, L, R) => {
  let total = 0;
  
  const innerRec = (curr, L, R) => {
      if (curr === null) {
          return;
      }
      
      if (curr.val >= L && curr.val <= R) {
          total += curr.val;
          innerRec(curr.left, L, R);
          innerRec(curr.right, L, R);
      }
      
      if (curr.val < L) {
          innerRec(curr.right, L, R);
      }
      
      if (curr.val > R) {
          innerRec(curr.left, L, R);
      }
  }
  
  innerRec(root, L, R);
  return total;
}

const rangeSumBST = (root, L, R) => {
  if (root === null) {
      return 0;
  }

  if (root.val >= L && root.val <= R) {
      return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }

  if (root.val < L) {
      return rangeSumBST(root.right, L, R);
  }

  if (root.val > R) {
      return rangeSumBST(root.left, L, R);
  }
}