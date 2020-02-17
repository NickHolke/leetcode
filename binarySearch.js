// const binarySearch = (arr, target) => {
//     let mid = Math.floor(arr.length / 2);

//     if (arr[mid] === target) {
//         return 'found';
//     }

//     if (arr.length === 1) {
//         return 'not found'
//     }

//     if (arr[mid] < target) {
//         return binarySearch(arr.slice(mid+1), target);
//     } else {
//         return binarySearch(arr.slice(0, mid), target);
//     }
// }

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  let mid;
  while(start <= end) {
      mid = Math.floor((start + end) / 2);
      
      if (arr[mid] === target) {
          return mid;
      }

      if (arr[mid] < target) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }

  return -1;
}