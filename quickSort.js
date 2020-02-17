const quickSort = (arr, start = 0, end = arr.length - 1) => {
  //debugger;
 if (start >= end) return;
 let idx = pivot(arr, start, end);
 quickSort(arr, start, idx - 1);
 quickSort(arr, idx + 1, end);
 return arr;
}

function pivot(arr, start, end) {
  let idx = start;
  for (let i = start + 1; i <= end; i++) {
      if (arr[i] < arr[0]) {
          swap(arr, idx+1, i);
          idx++;
      }
  }

  swap(arr, start, idx);
  return idx;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}