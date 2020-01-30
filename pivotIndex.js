/*
Given an array of integers nums, write a method that returns the 
"pivot" index of this array.

We define the pivot index as the index where the sum of the 
numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, 
you should return the left-most pivot index.
*/

var pivotIndex = function(nums) {
  if (nums.length <= 2) return -1;
  
  let sum = nums.reduce((a,b) => a +b);
  let leftSum = 0;
    
  for (let i = 0; i < nums.length; i++) {
      if (leftSum === sum - nums[i] - leftSum) {
          return i;
      } else {
          leftSum+=nums[i];
      }
  }
  return -1;
};