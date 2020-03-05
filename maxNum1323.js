var maximum69Number  = function(num) {
  let digits = num.toString().split(''), changed = false;
  
  for (let i = 0; i < digits.length; i++) {
      if (changed) {
          break;
      }
      
      if (digits[i] === '6') {
          digits[i] = '9';
          changed = true;
      }
  }
  
  return Number(digits.join(''));
};