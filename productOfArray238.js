var productExceptSelf = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
          if (j !== i) {
             product = product * nums[j];
          }
      }
      result.push(product);
      product = 1;
  }
  
  return result;
};