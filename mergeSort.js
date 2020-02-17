const mergeSort = (arr) => {
  if (arr.length <= 1) {
      return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(arr1, arr2) {
  let merged = [];
  while(arr1.length && arr2.length) {
      if (arr1[0] <= arr2[0]) {
          merged.push(arr1.shift());
      } else {
          merged.push(arr2.shift());
      }
  }

  return merged.concat(arr1).concat(arr2);  
}