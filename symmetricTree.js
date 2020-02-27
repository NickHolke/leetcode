var isSymmetric = function(root) {
  if (root === null) return true;
  let children = [root.left, root.right], child1, child2;
  
  while (children.length > 0) {
     child1 = children.pop();
     child2 = children.pop();
     if (child1 === null && child2 === null) {
         continue;
     }
     if (child1 === null || child2 === null) {
         return false;
     }
     if (child1.val !== child2.val) {
         return false;
     }
     children.push(child1.left);
     children.push(child2.right); 
     children.push(child1.right);
     children.push(child2.left); 
  }
  return true;
};

var isSymmetric = function(root) {
  if (root === null) return true;
  
  const innerRec = (left, right) => {
      if (left === null || right === null) {
          return left === right;
      }
      if (left.val !== right.val) {
          return false;
      }
      
      return innerRec(left.left, right.right) && innerRec(left.right, right.left);
  }
  
  return innerRec(root.left, root.right);
};