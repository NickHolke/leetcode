/*
Create a function that takes in:
an integer that represents a number of years,
a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, 
and 0s represent empty spaces. 
The function should simulate the growth of hedges over the given number of years, according to 
the following rules:
An empty square which is adjacent to a hedge (including diagonally) will be filled in the 
next year. A square which is filled with a hedge will be empty the following year if it 
is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. 
Note that hedges on the edge squares will always get enough sun.
Any other squares will be left intact.

The function should return the number of pairs of adjacent hedges (including diagonally) 
at the end of this process. We’d like you to focus on writing simple, well-structured code; 
you will not be graded on optimizing the performance of your solution.

*/

const isValidSquare = (row, col, matrix) => {
  if (row >= 0 && row < matrix.length && 
      col >= 0 && col < matrix[0].length) {
          return true;
      } else {
          return false;
      }
}

const removeHedge = (row, col, matrix) => {
  let spaces = [-1, 0, 1];
  for (let i = 0; i < spaces.length; i++) {
      for (let j = 0; j < spaces.length; j++) {
          let newRow = row + spaces[i];
          let newCol = col + spaces[j];
          if (spaces[i] === 0 && spaces[j] === 0) {
              continue;
          }
          if (matrix[newRow][newCol] !== 1) {
              return false;
          }
      }
  }
  return true;
}

const growHedge = (row, col, matrix) => {
  let spaces = [-1, 0, 1];
  for (let i = 0; i < spaces.length; i++) {
      for (let j = 0; j < spaces.length; j++) {
          let newRow = row + spaces[i];
          let newCol = col + spaces[j];
          if (spaces[i] === 0 && spaces[j] === 0) {
              continue;
          }
          if (isValidSquare(newRow, newCol, matrix)) {
              if (matrix[newRow][newCol] === 1) {
                  return true;
              }
          }   
      }
  }
  return false;
}

const updateMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 'H') {
              matrix[i][j] = 1;
          }
          if (matrix[i][j] === 'E') {
              matrix[i][j] = 0;
          }
      }
  }
}

const countPairs = (row, col, matrix) => {
  let count = 0;
  let spaces = [-1, 0, 1];
  for (let i = 0; i < spaces.length; i++) {
      for (let j = 0; j < spaces.length; j++) {
          let newRow = row + spaces[i];
          let newCol = col + spaces[j];
          if (spaces[i] === 0 && spaces[j] === 0) {
              continue;
          }
          if (isValidSquare(newRow, newCol, matrix)) {
              if (matrix[newRow][newCol] === 1) {
                  count++;
              }
          }   
      }
  }
  return count;
}

const hedges = (matrix, years) => {
  //debugger;
  let count = 0;
  while(years > 0 ){
      for(let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[0].length;j++) {
              if (matrix[i][j] === 0 && growHedge(i,j,matrix)) {
                  matrix[i][j] = 'H';
              }

              if (i > 0 && j > 0 && i < matrix.length - 1 && j < matrix[0].length - 1) {
                  if (matrix[i][j] === 1 && removeHedge(i,j,matrix)) {
                      matrix[i][j] = 'E'
                  }
              }

          }
      }
      updateMatrix(matrix);
      console.log(matrix);
      years--;
  }
  
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 1) {
              count += countPairs(i, j, matrix);
          }
      }
  }

  return count / 2;

}

let matrix = [[0, 0, 1],[0, 0, 0]]