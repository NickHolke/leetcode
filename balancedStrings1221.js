const balancedStringSplit = (s) => {
  let count = 0, balanced = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'R') {
          balanced++;
      } else {
          balanced--;
      }
      
      if (balanced === 0) {
          count++;
      }
  }
  
  return count;
};