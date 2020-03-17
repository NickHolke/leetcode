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