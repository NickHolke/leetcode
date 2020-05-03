const isSelfDividingNum = (num) => {
  const digits = num.toString().split('');
  
  for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      
      if (digit === '0') return false;
      
      if (num % digit !== 0) return false;
  }
  
  return true;
}

var selfDividingNumbers = function(left, right) {
  let result = [];
  
  for (let i = left; i <= right; i++) {
      if (isSelfDividingNum(i)) {
          result.push(i);
      }
  }
  
  return result;
};