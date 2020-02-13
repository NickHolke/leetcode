const isEqual = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  
  if (root1.val !== root2.val) return false;
  
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}


var isSubtree = function(s, t) {
  if (s === null) return false;
  if (isEqual(s,t)) return true;
  
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};