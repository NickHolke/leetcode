var judgeCircle = function(moves) {
  let counts = {
      L: 0,
      R: 0,
      U: 0,
      D: 0
  }
  
  for (const move of moves) {
      counts[move]++;
  }
  
  if (counts['L'] !== counts['R'] || counts['D'] !== counts['U']) {
      return false;
  }
  
  return true;
};