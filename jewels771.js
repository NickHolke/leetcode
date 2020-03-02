const numJewelsInStones = (J, S) => {
  let charCount = {}, result = 0;
  
  for (let i = 0; i < S.length; i++) {
    charCount[S[i]] = charCount[S[i]] + 1 || 1;  
  }
      
  
  for (let j = 0; j < J.length; j++) {
    result += charCount[J[j]] || 0;
  }
      
  return result;
};