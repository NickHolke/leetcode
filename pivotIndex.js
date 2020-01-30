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
  
  if (nums.slice(1).reduce((a,b) => a+b) === 0) {
      return 0;
  }
  
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums.slice(0,i).reduce((a,b) => a + b) === nums.slice(i+1).reduce((a,b) => a+b)) {
      return i;
    }
  }
    
  if (nums.slice(0, nums.length - 1).reduce((a,b) => a+b) === 0) {
      return nums.length - 1;
  }
    
  return -1;
};