const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - 1; j++) {
          if (arr[j] > arr[j+1]) {
              swap(arr, j, j+1);
              swapped = true;
          }
      }
      if (!swapped) {
          return arr;
      }
  }
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}