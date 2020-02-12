/*
  Given a binary tree, create a linked list of all nodes at each depth
  (if you have tree with depth D, you have D linked lists)
*/

const listOfDepths = (root) => {
  let Q = [];
  Q.unshift(root);
  while(Q.length) {
    let size = Q.length;
    for (let i = 0; i < size; i++) {
      let curr = Q.pop();
      if (curr.left !== null) {
        Q.unshift(curr.left);
      }
      if (curr.right !== null) {
        Q.unshift(curr.right);
      }
      if (i === size.length - 1) {
        curr.right = null;
        curr.left = null;
      } else {
        curr.right = Q[Q.length - 1];
        curr.left = null;
      }
    }
  }
}