var merge = function(nums1, m, nums2, n) {
  let insertIdx = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
      if (nums1[m] > nums2[n]) {
          nums1[insertIdx] = nums1[m];
          m--;
      } else {
          nums1[insertIdx] = nums2[n];
          n--;
      }
      insertIdx--;
  }
};