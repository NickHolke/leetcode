/*
You are given coins of different denominations and a total amount of money 
amount. Write a function to compute the fewest number of coins that you need 
to make up that amount. If that amount of money cannot be made up by any 
combination of the coins, return -1.
*/
var coinChange = function(coins, amount) {
  if (amount < 1) return 0;
  return helper(coins, amount, {});
};

function helper(coins, rem, count) {
  if (rem < 0) return -1;
  if (rem === 0) return 0;
  if (count[rem]) return count[rem];
  let min = Infinity;
  coins.forEach((coin) => {
      let res = helper(coins, rem-coin, count);
      if(res >= 0 && res < min) {
          min = res + 1;
      }
  })
  count[rem] = (min === Infinity) ? -1 : min;
  return count[rem];
}


// var coinChange = function(coins, amount) {
//   let hashTable = {};
  
//   const innerRec = (coins, amount) => {
//      if (amount === 0) {
//           return 0;
//       }
//       if (hashTable[amount]) {
//           return hashTable[amount];
//       }
//       let n = amount + 1;
//       coins.forEach((coin) => {
//       let curr = 0;
//           if (amount >= coin) {
//               let next = coinChange(coins, amount-coin);
//               if (next >= 0) {
//                   curr = next + 1;
//               }
//           }
//           if (curr > 0) {
//               n = Math.min(n, curr);
//           }
//       });
//       let finalCount = (n===amount + 1) ? -1 : n;
//       hashTable[amount] = finalCount;
//       return finalCount; 
//   }

//   return innerRec(coins, amount); 
// };

let coins = [5, 2, 1];
let amount = 100;