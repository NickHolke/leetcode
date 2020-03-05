var replaceElements = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let max = Math.max(...arr.slice(i+1))
      arr[i] = max;
  }
  
  arr[arr.length - 1] = -1;
  return arr;
};

const replaceElements = (arr) => {
  let max = -1, curr;
  for (let i = arr.length - 1; i >= 0; i--) {
      curr = arr[i];
      arr[i] = max;
      max = Math.max(curr, max);
  }
  
  return arr;
}