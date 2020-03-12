var countPrimes = function(n) {
  let notPrimes = {}, count = 0;
  for (let i = 2; i < n; i++) {
      if (!notPrimes[i]) {
          count++;
          for (let j = 2; j * i < n; j++) {
              notPrimes[i * j] = true;
          }
      }
  }
  
  return count;
};