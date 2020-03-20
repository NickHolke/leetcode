var subsets = function(nums) {
  let result = [];
  
  const innerRec = (current, options) => {
      result.push([...current])
      if (current.length === nums.length || options.length === 0) {
          return;
      }
      
      for (let i = 0; i < options.length; i++) {
          current.push(options[i]);
          innerRec(current,  options.slice(i+1));
          current.pop();
      }
  }
  
  innerRec([], nums);
  return result;
};