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

const topKFrequent = (nums, k) => {
  let count = {}, buckets = [], result = [];
  nums.forEach((num) => {
      count[num] = count[num] + 1 || 1;
  })
  for (let num in count) {
      let idx = count[num];
      if (buckets[idx] === undefined) {
          buckets[idx] = [];
      }
      buckets[idx].push(num);
  }
  
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      if (buckets[i] === undefined) {
          continue;
      }
      result = result.concat(buckets[i]);
  }
  return result.slice(0,k);
}