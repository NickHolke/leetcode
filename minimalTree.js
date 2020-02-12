/*
  Given a sorted(increasing order) array with unique integer elements, 
  create a binary search tree with minimal height.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const createMinTree = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) {
    return null;
  }

  let mid = Math.floor((end + start) / 2);
  let root = arr[mid];

  root.left = createMinTree(arr, start, mid - 1);
  root.right = createMinTree(arr, mid+1, end);

  return root;
}