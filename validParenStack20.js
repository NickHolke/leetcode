var isValid = function(s) {
  if (s === '') return true;
  if (s.length < 2) return false;
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      } else {
          if (stack.length < 1) return false;
          let paren = stack.pop() + s[i];
          if (!(paren === '()' || paren === '[]' || paren === '{}')) {
              return false;
          }
      }
  }
  
  return stack.length === 0;
};