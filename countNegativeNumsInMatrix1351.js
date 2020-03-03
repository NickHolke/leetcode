var countNegatives = function(grid) {
  let positiveNums = 0, limit = grid[0].length;
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (j >= limit) {
              continue;
          }
          if (grid[i][j] < 0) {
              limit = j;
              continue;
          }
          
          positiveNums++;
      }
  }
  
  return (grid.length * grid[0].length) - positiveNums;
};