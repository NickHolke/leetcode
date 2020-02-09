var openLock = function(deadends, target) {
  let deadSet = new Set(deadends), checked = new Set(), Q = [];
  checked.add('0000');
  Q.unshift('0000');
  let level = 0;
  
  while (Q.length > 0) {
      let size = Q.length;
      while (size > 0) {
          let curr = Q.pop();
          size--;
          
          if (curr === target) {
              return level;
          }
          
          if (deadSet.has(curr)) {
              continue;
          }
          
          for (let i = 0; i < 4; i++) {
              let char = curr[i];
              let str1 = curr.slice(0,i) + (char === '9' ? '0' : char - 0 + 1) + curr.slice(i+1);
              let str2 = curr.slice(0,i) + (char === '0' ? '9' : char - 0 - 1) + curr.slice(i+1);
              
              if (!deadSet.has(str1) && !checked.has(str1)) {
                  Q.unshift(str1);
                  checked.add(str1);
              }
              if (!deadSet.has(str2) && !checked.has(str2)) {
                  Q.unshift(str2);
                  checked.add(str2);
              }
          }   
      }
      level++;
  }
  return -1;  
};