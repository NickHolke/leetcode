const smallerNumbersThanCurrent = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
          if (i === j ) {
              continue;
          }
          
          if (nums[j] < nums[i]) {
              count++;
          }
      }
      result.push(count);
  }
  
  return result;
};