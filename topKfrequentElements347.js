var topKFrequent = function(nums, k) {
  let count = {};
  let results = [];
  
  nums.forEach((num) => {
      count[num] = count[num] + 1 || 1;
  })
  
  while (results.length < k) {
      let maxVal = -Infinity;
      let maxNum;
      for (let num in count) {
          if (count[num] > maxVal) {
              maxVal = count[num];
              maxNum = num;
          }
      }
      
      results.push(maxNum);
      maxVal = -Infinity;
      delete count[maxNum];
  }
  
  return results;
};