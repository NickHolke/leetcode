var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
      return [];
  }
  let spiraled = [], m = matrix.length, n = matrix[0].length;
  
  while (spiraled.length < m * n) {
      if (matrix.length === 1) {
          spiraled = spiraled.concat(matrix.pop());
      } else if (matrix.length === 2) {
          spiraled = spiraled.concat(matrix.shift());
          spiraled = spiraled.concat(matrix.pop().reverse());
      } else {
          spiraled = spiraled.concat(matrix.shift());
          let rightSide = [], leftSide = [];
          for (let i = 0; i < matrix.length - 1; i++) {
              rightSide.push(matrix[i].pop());
              if (matrix[i].length) {
                  leftSide.unshift(matrix[i].shift());
              }
          }
          spiraled = spiraled.concat(rightSide);
          spiraled = spiraled.concat(matrix.pop().reverse());
          spiraled = spiraled.concat(leftSide); 
      }  
  }
  return spiraled;
};