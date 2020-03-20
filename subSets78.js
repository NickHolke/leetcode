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

const subsets = (nums) => {
  let result = [];
  
  const innerRec = (current, index) => {
      result.push([...current]);
      
      for (let i = index; i < nums.length; i++) {
          current.push(nums[i]);
          innerRec(current, i + 1);
          current.pop();
      }
  }
  
  innerRec([], 0);
  return result;
}

const subsets = (nums) => {
  let result = [[]];
  nums.forEach((num) => {
      let size = result.length;
      for (let i = 0; i < size; i++) {
          result.push([...result[i]]);
          result[result.length - 1].push(num);
      }
  })
  return result;
}