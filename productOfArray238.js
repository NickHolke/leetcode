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

const productExceptSelf = (nums) => {
  let result = [];
  let p = 1;
  
  for (let i = 0; i < nums.length; i++) {
      result[i] = p;
      p *= nums[i];
  }
  p = 1;
  
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = result[i] * p;
      p = nums[i] * p;
  }
  return result;
}