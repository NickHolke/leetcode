var permute = function(nums) {
  if (nums.length === 1) {
      return [nums];
  }
  let permutations = [];
  
  const innerRec = (options, curr) => {
      if (curr.length === nums.length) {
          permutations.push(new Array(...curr));
          return;
      }
      for (let i = 0; i < options.length; i++) {
          curr.push(options[i]);
          let newOptions = options.slice(0, i).concat(options.slice(i + 1));
          innerRec(newOptions, curr)
          curr.pop();
      }
  }
  innerRec(nums, []);
  return permutations
};