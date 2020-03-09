var countAndSay = function(n) {
  let str = '1';
  
  for (let i = 1; i < n; i++) {
      let idx = 0;
      let lastChar = str[idx];
      let count = 0;
      let temp = '';
      
      while (idx < str.length) {
          if (lastChar !== str[idx]) {
              temp += count + lastChar;
              count = 0;
              lastChar = str[idx];
          }
          
          count++;
          idx++;
      }
      
      temp += count + lastChar;
      str = temp;
  }
  
  return str;
  
};