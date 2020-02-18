/*
You are given coins of different denominations and a total amount of money 
amount. Write a function to compute the fewest number of coins that you need 
to make up that amount. If that amount of money cannot be made up by any 
combination of the coins, return -1.
*/

var coinChange = function(coins, amount) {
  let hashTable = {};
  
  const innerRec = (coins, amount) => {
     if (amount === 0) {
          return 0;
      }
      if (hashTable[amount]) {
          return hashTable[amount];
      }
      let n = amount + 1;
      coins.forEach((coin) => {
      let curr = 0;
          if (amount >= coin) {
              let next = coinChange(coins, amount-coin);
              if (next >= 0) {
                  curr = next + 1;
              }
          }
          if (curr > 0) {
              n = Math.min(n, curr);
          }
      });
      let finalCount = (n===amount + 1) ? -1 : n;
      hashTable[amount] = finalCount;
      return finalCount; 
  }

  return innerRec(coins, amount); 
};

let coins = [5, 2, 1];
let amount = 100;