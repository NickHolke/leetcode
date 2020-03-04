var minTimeToVisitAllPoints = function(points) {
  let currX, currY, targetX, targetY, seconds = 0;
  
  for (let i = 0; i < points.length - 1; i++) {
      currX = points[i][0]; 
      currY = points[i][1];
      targetX = points[i + 1][0]; 
      targetY = points[i + 1][1];
      
      while (currX !== targetX || currY !== targetY) {
          if (currX < targetX) {
              currX++;
          }
          
          if (currX > targetX) {
              currX--;
          }
          
          if (currY < targetY) {
              currY++;
          }
          
          if (currY > targetY) {
              currY--;
          }
          
          seconds++;
      }
  }
  
  return seconds;   
};