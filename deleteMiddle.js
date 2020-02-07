/*
  Delete a node in the middle of a linkedList with only access to that node
*/

const deleteMiddle = (node) => {
  while (node !== null) {
    if (node.next === null) {
      node.data = null
    } else {
      node.data = node.next.data;
    }
    node = node.next;
  }
}