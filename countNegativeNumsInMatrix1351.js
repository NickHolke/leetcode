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


const countNegatives = (grid) => {
  let cLength = grid.length, rLength = grid[0].length, 
            c = cLength - 1, r = 0, negCount = 0;
  
  while (c >= 0 && r < rLength) {
      if (grid[c][r] < 0) {
          c--;
          negCount += rLength - r;
      } else {
          r++;
      }
  }
  
  return negCount;    
}