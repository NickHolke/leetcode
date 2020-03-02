var decompressRLElist = function(nums) {
  let result = [], count, num;
  
  for (let i = 0; i < nums.length - 1; i+=2) {
      count = nums[i];
      num = nums[i+1];
      
      while (count > 0) {
          result.push(num);
          count--;
      }
  }
  
  return result;
};