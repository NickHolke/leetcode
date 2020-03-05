var replaceElements = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let max = Math.max(...arr.slice(i+1))
      arr[i] = max;
  }
  
  arr[arr.length - 1] = -1;
  return arr;
};