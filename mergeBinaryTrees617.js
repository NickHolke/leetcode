var mergeTrees = function(t1, t2) {
  if (t1 === null && t2 === null) return null;
  
  let val = (t1 === null ? 0 : t1.val) + (t2 === null ? 0 : t2.val);
  let newNode = new TreeNode(val);
  
  newNode.left = mergeTrees((t1 === null ? null : t1.left), (t2 === null ? null : t2.left));
  newNode.right = mergeTrees((t1 === null ? null : t1.right), (t2 === null ? null : t2.right));
  return newNode;
};