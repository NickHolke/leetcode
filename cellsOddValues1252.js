var oddCells = function(n, m, indices) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
          row.push(0);
      }
      matrix.push(row);
  }
  
  indices.forEach((pair) => {
      let row = pair[0];
      let col = pair[1];
      
      for (let i = 0; i < m; i++) {
          matrix[row][i] = matrix[row][i] + 1;
      }
      
      for (let i = 0; i < n; i++) {
          matrix[i][col] = matrix[i][col] + 1;
      }
  })
  
  let count = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] % 2 !== 0) {
              count++;
          }
      }
  }
  
  return count;
};