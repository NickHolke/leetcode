var findDiagonalOrder = function(matrix) {
  if (matrix.length < 1) {
      return [];
  }
   let count = 1;
  let diagonals = [];

  for (let i = 0; i < matrix.length; i++) {
      let diagonal = [], row = i, col = 0;  
      while (row >= 0 && col < matrix[0].length) {
          diagonal.push(matrix[row][col]);
          row--;
          col++;
      }
      if (count % 2 === 0) {
          diagonal.reverse();
      }
      diagonals = diagonals.concat(diagonal);
      count++;
  }

  for (let j = 1; j < matrix[0].length; j++) {
      let diagonal = [], row = matrix.length - 1, col = j;
      while (col < matrix[0].length && row >= 0) {
          diagonal.push(matrix[row][col]);
          row--;
          col++;
      }
      if (count % 2 === 0) {
          diagonal.reverse();
      }
      diagonals = diagonals.concat(diagonal);
      count++;
  }

  return diagonals;
  
//     let N = matrix.length;
//     let M = matrix[0].length;
//     let row = 0, col = 0, direction = 1;
//     while (diagonals.length < M * N) {
//         diagonals.push(matrix[row][col]);
      
//         row = row + (direction === 1 ? -1 : 1);
//         col = col + (direction === 1 ? 1 : -1);
      
//         if (row < 0 || row > N -1 || col < 0 || col > M - 1) {
//             if (direction === 1) {
//                 row += (col)
//             }
//         }
//     }
};