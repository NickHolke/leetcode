const radixSort = (arr) => {
  //debugger;
  let buckets = [];
  for(let i = 0; i < 10; i++) {
      buckets.push([]);
  }
  let maxLength = maxNumLength(arr);

  for (let i = 0; i < maxLength; i++) {
      arr.forEach((num) => {
          let idx = getDigit(num, i);
          buckets[idx].push(num);
      })
      
      let count = 0;
      buckets.forEach((bucket) => {
          while (bucket.length > 0) {
              arr[count] = bucket.shift();
              count++;
          }
      });
  };
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

function numLength(num) {
  return num.toString().length
}

function maxNumLength(arr) {
  let max = 0;
  arr.forEach((num) => {
      if (numLength(num) > max) {
          max = numLength(num);
      }
  })
  return max;
}