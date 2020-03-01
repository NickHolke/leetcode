const numberOfSteps  = (num) => {
  if (num === 0) return 0;
  let count = 0;
  
  while (num !== 0) {
      if (num % 2 === 0) {
          num = num / 2;
      } else {
          num--;
      } 
    count++;
  }
  
  return count;
};