var romanToInt = function(s) {
  let numerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  
  let converted = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (numerals[s[i]] < numerals[s[i+1]]) {
        converted -= numerals[s[i]];
    } else {
        converted += numerals[s[i]];
    }
  }
  return converted;
};