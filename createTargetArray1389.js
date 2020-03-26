var createTargetArray = function(nums, index) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i], idx = index[i];
      if (result[idx] === undefined) {
          result[idx] = num;
      } else {
          result.push(num);
          let swaps = result.length - 1 - idx;
          for (let i = result.length - 1; swaps > 0; swaps--,i--) {
              let temp = result[i];
              result[i] = result[i - 1];
              result[i - 1] = temp;
          }
      }
  }
  
  return result;
};