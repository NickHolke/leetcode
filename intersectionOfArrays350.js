var intersect = function(nums1, nums2) {
  let count = {}, result = [];
  
  nums1.forEach((num) => count[num] = count[num] + 1 || 1);
  
  nums2.forEach((num) => {
      if (count[num] >= 1) {
          result.push(num);
          count[num]--;
      }
  })
  
  return result;
};