const isBinaryTree = (root) => {
  if (root.left === null && root.right === null) return true;

  if (root.left && root.left.val > root.val) {
    return false;
  }

  if (root.right && root.right.val < root.val) {
    return false;
  }

  let left = right = true;
  if (root.left) {
    left = isBinaryTree(root.left);
  }

  if (root.right) {
    right = isBinaryTree(root.right);
  }

  return left && right;
}