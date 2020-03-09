const maxSubArray = (nums) => {
  let maxEndingHere = nums[0], resultMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
      resultMax = Math.max(maxEndingHere, resultMax);
  }
  
  return resultMax;
}