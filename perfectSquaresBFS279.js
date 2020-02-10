const numSquares = (n) => {
  const visited = new Set();
  const q = [[n,1]];
  
  while (q.length) {
      const [currNum, total] = q.shift();
      const currSqrRoot = Math.floor(Math.sqrt(currNum));
      
      if (currNum === currSqrRoot * currSqrRoot) {
          return total;
      }
      
      for (let i = currSqrRoot; i > 0; i--) {
          const remainder = currNum - i * i;
          if (!visited.has(remainder)) {
              q.push([remainder, total + 1]);
              visited.add(remainder);
          }
      }
  }
};