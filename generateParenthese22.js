var generateParenthesis = function(n) {
  let results = [];
  const innerRec = (str, count) => {
      if (count < 0) return;
      if (str.length === n*2 && count > 0) return;
      if (str.length === n*2 && count === 0) {
          results.push(str);
          return;
      }
      
      innerRec(str + '(', count + 1);
      innerRec(str + ')', count - 1);
  }
  innerRec('', 0);
  return results;
};

const generateParenthesis = (n) => {
  let results = [];
  const innerRec = (str, left, right) => {
      if (str.length === n * 2) {
          results.push(str);
          return;
      }
      
      if (left < n) {
          innerRec(str + '(', left + 1, right);
      }
      
      if (right < left) {
          innerRec(str + ')', left, right + 1);
      }
  }
  
  innerRec('', 0, 0);
  return results;
}