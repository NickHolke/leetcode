var toLowerCase = function(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
          result += String.fromCharCode(32 + str[i].charCodeAt(0));
      } else {
          result += str[i];
      }
  }
  
  return result;
};