var maxProfit = function(prices) {
  let i = 0, buy = prices[0], sell, total = 0;
  
  while (i < prices.length - 1) {
      while (i < prices.length - 1 && prices[i+1] <= prices[i]) {
          i++;
          buy = prices[i];
      }
      
      while (i < prices.length - 1 && prices[i+1] > prices[i]) {
          i++;
          sell = prices[i];
      }
      
      if (sell) {
          total += sell - buy;
          sell = 0;  
      } else {
         return total;
      }
  }
  
  return total;
};